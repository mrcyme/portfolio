// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Siméon Michel',
  tagline: 'My awesome portfolio!',
  favicon: 'img/favicon.ico',


  url: 'https://simeonmichel.netlify.app', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: 'mrcyme.github.io',
  organizationName: 'mrcyme',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mrcyme',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Siméon Michel',
        logo: {
          alt: 'My Site Logo',
          src: 'img/me.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Robotics',
            position: 'left',
            label: 'Robotics',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Prototyping',
            position: 'left',
            label: 'Prototyping',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Art',
            position: 'left',
            label: 'Art',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Workshops',
            position: 'left',
            label: 'Workshops',
          },
          {
            href: 'https://github.com/mrcyme',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Robotics',
                to: '/docs/robotics/swarm',
              },
              {
                label: 'Prototyping',
                to: '/docs/prototyping/crane',
              },
              {
                label: 'Art',
                to: '/docs/art/stylegantattoos',
              },
              {
                label: 'Workshops',
                to: '/docs/workshops/generativeaiworkshops.md',
              },
            ],
          
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/simeon-michel-469333134/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mrcyme',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
