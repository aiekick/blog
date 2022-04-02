// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FunParadigm',
  tagline: 'Fascinated by programming and art under all theirs forms',
  url: 'https://aiekick.github.io/',
  baseUrl: '/blog_funparadigm/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FunParadigm', // Usually your GitHub org/user name.
  projectName: 'FunParadigm', // Usually your repo name.

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://blog.funparadigm.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://blog.funparadigm.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'android/android',
            position: 'left',
            label: 'Android',
          },
          {
            type: 'doc',
            docId: 'softwares/softwares',
            position: 'left',
            label: 'Softwares',
          },
          {
            type: 'doc',
            docId: 'libraries/libraries',
            position: 'left',
            label: 'Libraries',
          },
          {
            type: 'doc',
            docId: 'various/various',
            position: 'left',
            label: 'Various',
          },
          {
            type: 'doc',
            docId: 'about/about',
            position: 'right',
            label: 'About',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Infos',
            items: [
              {
                label: 'Contact',
                to: '/docs/about/contact',
              },
              {
                label: 'Curiculum Vitae',
                to: '/docs/about/cv',
              },
            ],
          },
          {
            title: 'Social Networks',
            items: [
              {
                label: 'Github',
				href: 'https://github.com/aiekick',
              },
              {
                label: 'Twitter',
				href: 'https://twitter.com/aiekick',
              },
              {
                label: 'OpenSea',
                href: 'https://opensea.io/accounts/Aiekick',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/aiekick/',
              },
            ],
          },
          {
            title: 'Creative Networks',
            items: [
              {
                label: 'ShaderToy',
                href: 'https://www.shadertoy.com/user/aiekick',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/aiekick',
              },
              {
                label: 'ArtStation',
                href: 'https://www.artstation.com/aiekick',
              },
              {
                label: 'Sketchfab',
                href: 'https://sketchfab.com/Aiekick/models',
              },
              {
                label: 'Vimeo',
                href: 'https://vimeo.com/aielevel',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FunParadigm`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
