export interface NavigationLink {
  href: string;
  text: string;
  activePath: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    href: '/',
    text: 'Главная',
    activePath: '/'
  },
  {
    href: '/season',
    text: 'О чем сезон?',
    activePath: '/season'
  },
  {
    href: '/important',
    text: 'Важное',
    activePath: '/important'
  }
];
