---
title: Debugging
slug: /basics/contract-debugging
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Contract Debugging

This page lays out different options for debugging your contract.

## Emit debugging events

When building a contract via `cargo contract build` (notice the missing `--release`!),
the feature `ink/ink-debug` is enabled.
In your contract you can emit debugging events based on this:

```rust
#[cfg(feature = "ink-debug")]
self.env().emit(…);
```

## Return an error message
Return a specific error message via `ink::return_value(REVERT, err);` 
and do a dry-run of the contract call. The result of the dry-run will 
then present this data.

## Tracing APIs
The `pallet-revive` has implemented a tracing API. 
This is what the Ethereum-debugging tools use when interacting with `pallet-revive`.

## Sandbox API
Use the sandbox API #[ink_e2e::test(backend(runtime_only))]. Debugging here could be done via DRink!.

There are three ways to debug your ink! contract currently:

* You can write tests using one of the mechanisms described on the
  [Contract Testing](./overview.md) page.
* You can interact with your contract via a UI or command-line. This is
  described on the [Call Your Contract](../getting-started/calling.md) page.
* You can print debug statements in your contract. Those will appear
  on the Polkadot SDK node's `stdout`. This is described on this page.

## How do I print to the terminal console from ink!?

You can use those two macros:

* [`ink::env::debug_println!`](https://docs.rs/ink_env/6.0.0/ink_env/macro.debug_println.html)
* [`ink::env::debug_print!`](https://docs.rs/ink_env/6.0.0/ink_env/macro.debug_print.html)

There are things you could do to enable debug messages on the client console:

1. __Enable the feature `ink-debug` for the `ink_env` crate.__<br/>
   `cargo-contract` does this automatically for you (for versions `>= 0.13.0`), except if
   you compile a contract in `--release` mode.

### Example

The following code depicts how to print debug statements
from a message or constructor.

```rust
#[ink(constructor)]
fn new() -> Self {
    ink::env::debug_println!("created new instance at {}", Self::env().block_number());
    Self { }
}

#[ink(message)]
fn print(&self) {
   let caller = self.env().caller();
   let message = ink_prelude::format!("got a call from {:?}", caller);
   ink::env::debug_println!(&message);
}
```

:::note
Debug output is not printed for transactions!

It is only printed for RPC calls or off-chain tests.
:::

## Pre-compile
- Implement a pre-compile that can be called from a contract to output log info (they said Hardhat does something like this).

## Decode Data Payload

You can use a block explorer or an app like PolkadotJs to retrieve the data payload of a contract transaction, and then use [cargo-contract](https://github.com/use-ink/cargo-contract) to decode it.

```bash
# From your contract directory
$ cargo contract decode message -d fe5bd8ea01000000
```

This command will output the method name and parameters encoded in the data payload:

```
Decoded data: inc_by { n: 1 }
```

If the contract was called through a cross-contract interaction, the payload will not be available in the transaction. In such cases, you can use the approach described in the next section to access it.

## Replay and Debug a Block

:::caution
This section has not yet been updated to ink! v6.

TODO Verify if this still works.
:::

To replay a transaction, you can use [Chopstick](https://github.com/AcalaNetwork/chopsticks) to create a local fork of the chain and replay the block with trace-level logging.

Assuming you have a node that you can connect to at `$ENDPOINT` and the transaction you want to replay is in block `$BLOCK_HASH`, you can use the following command:

```bash
$ npx @acala-network/chopsticks@latest run-block \
    --endpoint $ENDPOINT \
    --block $BLOCK_HASH \
    --runtime-log-level 5 \
    | grep runtime::contracts
```

This command replays the block with trace-level logging enabled. By filtering the output with `runtime::contracts`, you can view all the contract calls in the block:

```
runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [246, 118, 44, 201]
runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 1, 0, 0, 0]
runtime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }
runtime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }
```

From here, you can identify the call you are interested in and decode the data payload:

```bash
$ echo 254, 91, 216, 234, 1, 0, 0, 0 \
    | tr ',' ' ' \
    | xargs printf '%02x' \
    | xargs cargo contract decode message -d
```

This command will output the following:

```
Decoded data: inc_by { n: 1 }
```

## Fork Node and Replay Transactions

:::caution
This section has not yet been updated to ink! v6.

TODO Verify if this still works.
:::

You can also use [Chopstick](https://github.com/AcalaNetwork/chopsticks) to start a local fork of your chain.

This command starts a fork beginning at block `$BLOCK_HASH`. You can connect to this fork using `ws://localhost:8000` to submit extrinsics via PolkadotJs or `cargo contract`:

```bash
$ npx @acala-network/chopsticks@latest \
    --endpoint $ENDPOINT \
    --block $BLOCK_HASH \
    --runtime-log-level 5
```

Here, for example, you can re-run the transaction that we decoded in the previous section:

```bash
$ cargo contract call \
    --contract $CONTRACT_ADDR \
    --message inc_by --args 1 \
    --suri //Alice \
    --url ws://localhost:8000
```

Since trace-level logging is used, you will receive detailed information about all the host functions called during the execution of the contract:

```
runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 2, 0, 0, 0]
runtime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }
runtime::contracts           DEBUG: Execution finished with debug buffer: seal0::value_transferred(out_ptr: 65488, out_len_ptr: 65516) = Ok(())
seal0::input(out_ptr: 65536, out_len_ptr: 65524) = Ok(())
seal1::get_storage(key_ptr: 65536, key_len: 4, out_ptr: 65540, out_len_ptr: 65524) = Ok(Success)
seal2::set_storage(key_ptr: 65536, key_len: 4, value_ptr: 65540, value_len: 4) = Ok(4)
seal0::seal_return(flags: 0, data_ptr: 65536, data_len: 1) = Err(TrapReason::Return(ReturnData { flags: 0, data: [0] }))
```
