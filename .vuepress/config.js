module.exports = {
    title: 'First Vuepress Project',
    description: 'Learning the basics of Vuepress',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Info', link: '/info/'},
            { text: 'Github', link: 'https://github.com/abuthegr8'},
            { text: 'Vuepress', link: 'https://vuepress.vuejs.org/'},
        ],
        sidebar: {
            '/info/': [
                '',
                'basicinfo',
                'advinfo'
            ]
        },
        smoothScroll: true
    }
}