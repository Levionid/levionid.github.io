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
    href: '/important',
    text: 'Важное',
    activePath: '/important'
  },
  {
    href: '/season',
    text: 'О чем сезон?',
    activePath: '/season'
  }
];
