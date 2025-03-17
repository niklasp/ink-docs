import React from 'react'
import {
  ChatCircleDots,
  Code,
  CoinVertical,
  FileText,
  Hammer,
  Images,
  Info,
  Lego,
  Link,
  Question,
  Target,
  YoutubeLogo,
} from '@phosphor-icons/react'

export const navLinks = [
  {
    title: 'Build',
    links: [
      {
        label: 'Docs',
        href: '/docs',
        icon: <FileText size={20} weight="fill" />,
      },
      {
        label: 'Tutorials',
        href: '/tutorials',
        icon: <Lego size={20} weight="fill" />,
      },
      {
        label: 'Tooling',
        href: '/tooling',
        icon: <Hammer size={20} weight="fill" />,
      },
      {
        label: 'Chains',
        href: '/chains',
        icon: <Link size={20} />,
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'About',
        href: '/about',
        icon: <Info size={20} weight="fill" />,
      },
      {
        label: 'Bounties',
        href: '/bounties',
        icon: <Target size={20} weight="fill" />,
      },
      {
        label: 'Support',
        href: '/support',
        icon: <ChatCircleDots size={20} weight="fill" />,
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@ink_lang',
        icon: <YoutubeLogo size={20} weight="fill" />,
      },
    ],
  },
  {
    title: 'ink!ubator',
    href: '/inkubator',
  },
]

export const footerLinks = [
  {
    title: 'Build with ink!',
    links: [
      {
        label: 'Docs',
        href: '/docs',
        icon: <FileText size={20} weight="fill" />,
      },
      {
        label: 'Tutorials',
        href: 'https://github.com/use-ink/ink',
        icon: <Lego size={20} weight="fill" />,
      },
      {
        label: 'Tooling',
        href: 'https://github.com/use-ink/ink',
        icon: <Hammer size={20} weight="fill" />,
      },
      {
        label: 'Chains',
        href: 'https://github.com/use-ink/ink',
        icon: <Link size={20} />,
      },
    ],
  },
  {
    title: 'Join our community',
    links: [
      {
        label: 'About',
        href: 'https://discord.gg/ink',
        icon: <Info size={20} weight="fill" />,
      },
      {
        label: 'Bounties',
        href: 'https://twitter.com/ink_lang',
        icon: <Target size={20} weight="fill" />,
      },
      // {
      //   label: 'Hackathons',
      //   href: 'https://discord.gg/ink',
      //   icon: <Info size={20} />,
      // },
      // {
      //   label: 'Stories',
      //   href: 'https://discord.gg/ink',
      //   icon: <Info size={20} />,
      // },
      {
        label: 'Support',
        href: 'https://discord.gg/ink',
        icon: <ChatCircleDots size={20} weight="fill" />,
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@ink_lang',
        icon: <YoutubeLogo size={20} weight="fill" />,
      },
    ],
  },
  {
    title: 'Helpful Links',
    links: [
      // {
      //   label: 'ink!ubator',
      //   href: 'https://discord.gg/ink',
      //   icon: <Info size={20} />,
      // },
      {
        label: 'ink! examples',
        href: 'https://github.com/use-ink/ink-examples',
        icon: <Code size={20} weight="fill" />,
      },
      {
        label: 'Funding Program',
        href: 'https://use.ink/inkubator',
        icon: <CoinVertical size={20} weight="fill" />,
      },
      {
        label: 'Brand Assets',
        href: 'https://github.com/use-ink/ink-docs',
        icon: <Images size={20} weight="fill" />,
      },
      {
        label: 'FAQ',
        href: 'https://github.com/use-ink/ink-docs',
        icon: <Question size={20} weight="fill" />,
      },
    ],
  },
]
