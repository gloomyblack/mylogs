module.exports = {
  base: '/mylogs/',
  title: 'Gloomy Black\'s logs',
  description: 'Just My Logs',
  themeConfig: {
    // logo: 'assets/img/logo.png',
    nav: [{
      text: 'dart',
      link: '/dart/'
    }],
    sidebar: [{
      title: 'Dart',
      path: '/dart/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/dart/'
      ]
    }]
  }
}
