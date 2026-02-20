export const experience = [
  {
    company: 'Teleserve Asia',
    location: 'Legazpi City',
    role: 'Software Developer',
    dates: 'Jul 2022 - Present',
    highlights: [
      'Maintained and optimized critical applications for reliability and performance.',
      'Designed scalable databases and deployed machine learning models with validated datasets.',
      'Collaborated cross-functionally to align development strategies with client requirements.'
    ]
  },
  {
    company: 'TMJP BPO Services Inc.',
    location: 'Taguig City',
    role: 'Vulnerability Assessment & Pen Testing',
    dates: 'Dec 2021 - Apr 2022',
    highlights: [
      'Conducted pentesting for infrastructure and applications, documenting vulnerabilities.',
      'Delivered reports with concrete remediation recommendations.'
    ]
  },
  {
    company: 'TMJP BPO Services Inc.',
    location: 'Taguig City',
    role: 'Full Stack Developer',
    dates: 'Aug 2020 - Jan 2021',
    highlights: [
      'Applied automated tests and code reviews to raise software quality and team velocity.',
      'Built bespoke solutions and integrated AWS services for scalability and performance.'
    ]
  },
  {
    company: 'Boomsourcing',
    location: 'Legazpi City',
    role: 'Front End Developer',
    dates: 'May 2019 - Mar 2020',
    highlights: [
      'Created and maintained a design system that kept UI/UX consistent across clients.',
      'Delivered client-side projects using modern frameworks and collaboration tools.'
    ]
  }
];

export const education = [
  {
    school: 'Boom.Camp',
    location: 'Legazpi City',
    dates: 'May 2019 - Sep 2019',
    details: 'Full-stack Web Development Program - UI/UX principles, AI integration, API development, RESTful services'
  },
  {
    school: 'Forbes College',
    location: 'Legazpi City',
    dates: 'Jun 2015 - Apr 2019',
    details: 'Bachelor of Science in Information Technology'
  }
];

export const skills = [
  {
    category: 'Frontend Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React/Redux', 'Vite', 'Tailwind']
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'PHP', 'Python', 'REST APIs', 'Express']
  },
  {
    category: 'Database Management',
    items: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    category: 'Testing',
    items: ['Selenium', 'Testing Library', 'Cypress', 'Postman']
  },
  {
    category: 'Design & Prototyping',
    items: ['Figma']
  },
  {
    category: 'Other',
    items: ['AWS Technologies', 'CI/CD', 'DevOps Collaboration', 'Security Reviews']
  }
];

export const projects = [
  {
    title: 'HelpSpeech Live',
    meta: 'Open source - 2026',
    copy:
      'A real-time speech intelligence project that combines low-latency transcription with live AI assistance. It captures audio, streams it through Whisper-based ASR backends, stabilizes transcript quality, detects question intent, and generates context-aware suggested responses through Ollama in a desktop operator interface.',
    cta: 'View repo',
    href: 'https://github.com/judah3/HelpSpeech-Live'
  },
  {
    title: 'AudioStreamingApp (WPF, .NET 8)',
    meta: 'Open source - 2025',
    copy:
      'A Windows 10+ WPF app that captures audio from a selected running application and streams PCM16 audio over WebSocket in real time.',
    cta: 'View repo',
    href: 'https://github.com/judah3'
  },
  {
    title: 'Vaani AI',
    meta: 'Omind - 2025',
    copy:
      'Vaani is a multi-tenant SaaS platform for creating AI voice agents that conduct real-time phone conversations. Your agents can answer inbound calls, make outbound calls, transfer to humans, query knowledge bases, and execute custom actions - all powered by configurable LLM, Speech-to-Text, and Text-to-Speech providers.',
    cta: 'Demo',
    href: 'https://mv.omind.ai/signin'
  },
  {
    title: 'PokeCatcher',
    meta: 'Personal Project - 2019',
    copy:
      'A small interactive web app that uses the PokeAPI to let users search for Pokemon, view their stats, and catch them in a virtual Pokedex.',
    cta: 'Demo',
    href: 'https://pokecatcherv1.netlify.app/'
  }
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const contactDetails = [
  { label: 'Phone', value: '+639273159678', href: 'tel:+639273159678', icon: 'phone' },
  {
    label: 'LinkedIn',
    value: 'jude-agagad-639787230',
    href: 'https://www.linkedin.com/in/jude-agagad-639787230/',
    icon: 'linkedin'
  },
  { label: 'GitHub', value: 'judah3', href: 'https://github.com/judah3', icon: 'github' },
  { label: 'Address', value: 'Metro Manila', icon: 'location' }
];
