// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '阴茎锻炼手册',
  tagline: '男人的性福宝典',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://jiba.plus',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jiba.plus', // Usually your GitHub org/user name.
  projectName: '阴茎锻炼手册', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  scripts: [
    {
      src: 'https://fang.ke/sb',
      defer: true,
      "data-website-id": "275914be-8206-4332-b6da-3f1f9a25ce36",
    },
    {
      src: 'https://api.pirsch.io/pa.js',
      defer: true,
      id: "pianjs",
      "data-code": "vXIQP3Hg1NTBAFn93qoNcIpooDqQCTXb",
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: '阴茎锻炼手册',
        logo: {
          alt: '阴茎锻炼手册',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '手册',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://t.me/+q8AlqFpmuQU2NTNh',
            label: '💬 交流电报',
            position: 'right',
          },
          {
            href: 'https://self.giving',
            label: '💋 捐助本站',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `©${new Date().getFullYear()} JIBA.PLUS(Since 2009), Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '本站备用镜像：<a target="_blank" href="https://yinjing.net" style="color:#c00;font-weight:bold;">yinjing.net</a>，<a target="_blank" href="https://jiba.ing" style="color:#c00;font-weight:bold;">jiba.ing(硬)</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

module.exports = config;
