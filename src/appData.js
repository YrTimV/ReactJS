const appData = {
  headerCaption: 'Welcome to my ReactBloG',
  navBarItems: [
    { id: 'blog', link: '/blog', title: 'Blog' },
    { id: 'about', link: '/about', title: 'About' },
    { id: 'contacts', link: '/contacts', title: 'Contacts' },
    { id: 'users', link: '/users', title: 'Users' },
  ],
  pageMeta: {
    about: {
      type: 'about',
      pageHeader: 'About us',
      descText: 'Learn about our mission',
    },
    blog: {
      type: 'blog',
      pageHeader: 'Blog',
      descText: 'List of all posts',
    },
    contacts: {
      type: 'contacts',
      pageHeader: 'Our contacts',
      descText: 'How to contact us',
    },
  },
  aboutText: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem dui, condimentum vel elementum condimentum, cursus a lectus. Donec eu commodo ipsum. Maecenas ut nulla a diam imperdiet fermentum eu laoreet magna. Nunc non ornare lectus. Suspendisse potenti. Vestibulum elementum eget felis eget vestibulum. Nullam commodo tempor egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum fermentum risus id suscipit fermentum. Fusce elementum erat velit, nec volutpat quam dictum in. Ut vestibulum finibus arcu, eu tempus tellus vulputate vitae.',
    'Aliquam dictum turpis nec pulvinar dapibus. Mauris tempus nisi sed nunc dictum tristique. Pellentesque vulputate neque nisl, mollis laoreet orci volutpat vel. Praesent faucibus eleifend purus, ut pharetra magna efficitur eu. Nam consectetur vel massa consequat mollis. Morbi fringilla pellentesque sollicitudin. Duis nec dolor tincidunt, feugiat risus eu, congue magna. Aliquam erat volutpat. Maecenas commodo sollicitudin rhoncus. Duis ex lorem, iaculis sit amet nibh non, mollis euismod ligula.',
    'Fusce et dolor posuere purus tempor tincidunt sit amet sit amet neque. Curabitur cursus ante tincidunt urna rhoncus, non porttitor lectus congue. Nulla accumsan tortor ex, id varius nibh efficitur nec. Cras id elit at tellus auctor lacinia nec in sem. Maecenas vehicula, sem id finibus sodales, ligula augue auctor augue, eget condimentum neque diam ac eros. Proin sit amet libero at urna interdum condimentum. Vestibulum tempor, nibh ac interdum pulvinar, ante lacus sodales magna, quis convallis urna est sit amet nunc. Mauris at finibus nisl. Donec vitae arcu vitae dui tristique pulvinar. Donec mollis libero quis auctor porttitor. Duis non lobortis massa. Donec et dui in enim rhoncus lacinia vel aliquet ligula. Etiam ut odio dictum, pulvinar ligula sit amet, tincidunt nisi. Cras et leo finibus, cursus urna ac, aliquam leo. Quisque ornare volutpat leo, eu lobortis nisl rutrum at.',
  ],
  contacts: {
    email: 'myblog@example.com',
    skype: 'myblog_skype@example.com',
    address: 'Moscow, Kremlin',
    mapUrl: 'https://yandex.ru/map-widget/v1/-/CBqXIRwEHB',
  },
  posts: [
    {
      logo: '750x300',
      title: 'Post Title 1',
      link: 'post1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
      published: new Date('2018-01-01T10:00:00'),
      author: 'Admin',
      comments: [
        {
          published: new Date('2018-05-30T10:00:00'),
          author: 'Guest',
          text: 'Hello there. Nice blog!',
        },
      ],
    },
    {
      logo: '600x250',
      title: 'Post Title 2',
      link: 'post2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
      published: new Date('2018-01-07T10:00:00'),
      author: 'Admin',
      comments: [],
    },
    {
      logo: '800x350',
      title: 'Post Title 3',
      link: 'post3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
      published: new Date('2018-05-01T20:00:00'),
      author: 'Admin',
      comments: [],
    },
  ],
};

export default appData;
