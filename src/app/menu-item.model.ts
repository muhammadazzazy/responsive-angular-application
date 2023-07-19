export interface MenuItem {
    title: string;
    path: string;
}

export const MenuItems: MenuItem[] = [
    {
        title: 'Home',
        path: '/main'
    },
    {
        title: 'Books',
        path: '/books'
    },
]