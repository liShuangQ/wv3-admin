export interface PagesMenu {
    path: string, //菜单就随便写，路由就对应路由地址
    title: string,
    faPath: string[]
    icon?: string, //element的icon
    children?: PagesMenu[]
}

export default [
    {
        path: '/pages/home',
        faPath: [],
        title: '主页',
        icon: 'HomeFilled',
    },
    {
        path: '1',
        faPath: [],
        title: '演示',
        icon: 'Menu',
        children: [
            {
                title: '试例',
                path: '/pages/demo',
                faPath: ['1']
            }
        ]
    },
    {
        path: '2',
        faPath: [],
        title: '一级菜单',
        icon: 'Menu',
        children: [
            {
                title: '测试1.1',
                path: '/pages/test',
                faPath: ['2']
            },
            {
                path: '3',
                faPath: ['2'],
                title: '二级菜单',
                children: [
                    {
                        path: '/pages/test/two1',
                        faPath: ['2', '3'],
                        title: '测试2.1',
                    },
                    {
                        path: '/pages/test/two2',
                        faPath: ['2', '3'],
                        title: '测试2.2',
                    },
                ]
            }
        ]
    },
    {
        path: '/404',
        faPath: [],
        title: '自定义路由',
        icon: 'Menu',
    },
] as PagesMenu[]

