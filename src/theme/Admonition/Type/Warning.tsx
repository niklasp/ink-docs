import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/Admonition/Type/Warning'
import AdmonitionLayout from '@theme/Admonition/Layout'
import { WarningOctagon } from '@phosphor-icons/react'

const infimaClassName = 'alert alert--warning'

const defaultProps = {
  icon: <WarningOctagon weight="bold" />,
  title: (
    <Translate
      id="theme.admonition.warning"
      description="The default label used for the Warning admonition (:::warning)"
    >
      warning
    </Translate>
  ),
}

export default function AdmonitionTypeWarning(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
