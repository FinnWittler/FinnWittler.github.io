// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'FinnWittler', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Capstone Project',
          description:
            'Integrated system for managing project information for real estate properties, streamlining data organization and retrieval.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Digital Nudging Website',
          description:
            'A website with different landing pages to demonstrate the concept of digital nudging.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Finn Wittler', description: '', imageURL: '' },
  social: {
    linkedin: 'Finn Wittler',
    researchGate: 'Finn Wittler',
    facebook: 'Finn Wittler',
    website: 'https://finnwittler.github.io/',
    phone: '123-456-7890',
    email: 'finn.wittler@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'University of Cologne',
      position: 'Student Research Assistant',
      from: 'April 2024',
      to: 'August 2025',
      companyLink: 'https://ciis.uni-koeln.de/en/',
    },
    {
      company: 'Lernigo',
      position: 'Tutor',
      from: 'November 2023',
      to: 'Oktober 2024',
      companyLink: 'https://lernigo.de/',
    },
  ],
  certifications: [
    {
      name: 'Excel',
      body: 'Lorem ipsum dolor sit amet',
      year: '2024',
      link: 'https://example.com',
    },
        {
      name: 'Python',
      body: 'Lorem ipsum dolor sit amet',
      year: '2024',
      link: 'https://example.com',
    },
        {
      name: 'R',
      body: 'Lorem ipsum dolor sit amet',
      year: '2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'Data Science',
      from: '2025',
      to: '2025',
    },
    {
      institution: 'University of Cologne',
      degree: 'Information Systems Management',
      from: '2023',
      to: '2026',
    },
        {
      institution: 'Evangelisches Gymnasium Werther',
      degree: 'Highschool',
      from: '2015',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Bachelor Seminar thesis',
      conferenceName: '',
      authors: 'Finn Wittler',
      link: 'https://example.com',
      description:
        'Zero Trust in hybrid cloud environments: challenges, best practices in the migration process and design of a zero trust architecture',
    },
    {
      title: 'Bachelor thesis',
      journalName: '',
      authors: 'Finn Wittler',
      link: 'https://example.com',
      description:
        'The Impact of Information Security Culture on Cybersecurity Behaviour: Designing an Iterative Culture-Sensitive Framework for Effective SETA Programs',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Randomize theme on each page load
    randomizeThemeOnLoad: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
