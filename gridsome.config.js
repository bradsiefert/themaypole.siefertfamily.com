// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'The Maypole',
  siteDescription: "The Maypole, a family newsletter from The Sieferts.",
  siteUrl: 'https://themaypole.siefertfamily.com',
  titleTemplate: `The Maypole | %s`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    }
  ]
}
