interface dataInterface {
  main: string;
  subItems: string[]
}

const data: dataInterface[] = [
  { main: 'Product', subItems: ['Download', 'Nitro', 'Status'] },
  { main: 'Company', subItems: ['About', 'Jobs', 'Branding', 'Newsroom'] },
  {
    main: 'Resources',
    subItems: [
      'College',
      'Support',
      'Safety',
      'Blog',
      'Feedback',
      'Developers',
      'StreamKit',
    ],
  },
  {
    main: 'Policies',
    subItems: [
      'Terms',
      'Privacy',
      'Cookie Settings',
      'Guidelines',
      'Acknowledgements',
      'Licenses',
      'Moderation',
    ],
  },
];

export default data;
