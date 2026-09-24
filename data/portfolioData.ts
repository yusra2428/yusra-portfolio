import { Project, SkillCategory, TechTool, EducationItem, ExploringItem, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Yusra Khan',
  tagline: 'BS Computer Science Graduate',
  role: 'Creative Web Designer & Developer',
  location: 'Wah Cantt / Islamabad, Pakistan',
  email: 'yusra4980khan@gmail.com',
  profilePicture: '/profile-picture.jpg',
  githubUrl: 'https://github.com/yusra2428',
  githubPlaceholderText: 'github.com/yusra2428',
  linkedinUrl: 'https://www.linkedin.com/in/yusra-khan-27620037a/',
  linkedinPlaceholderText: 'linkedin.com/in/yusra-khan-27620037a',
  heroHeadingLine1: 'Creative',
  heroHeadingLine2: 'Web Designer',
  heroHeadingLine3: '& Developer.',
  heroSubtext: 'I create clean, responsive and user-friendly digital experiences with a focus on modern web design and development.',
  heroHandwrittenNote: 'Designing ideas into digital experiences.',
  availabilityStatus: 'Open to Opportunities (Internships & Entry-Level)',
};

export const ABOUT_DATA = {
  heading: 'About Me',
  paragraphs: [
    "I'm a Computer Science graduate passionate about building useful and visually engaging digital experiences. My academic background has given me experience with programming, databases, web development, and software engineering.",
    "I believe great software should not only execute reliably under the hood, but also feel intuitive, delightful, and thoughtful to the person using it. Whether crafting responsive user interfaces or architecting algorithmic solutions, I focus on clean code, accessible design, and continuous learning.",
    "I'm currently looking for opportunities where I can contribute to real-world projects, collaborate with passionate teams, and grow rapidly as a developer."
  ],
  quickStats: {
    education: 'BS Computer Science',
    focus: 'Web Development',
    interests: 'UI/UX • Software • Technology',
    availability: 'Open to Opportunities',
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    iconName: 'Layout',
    description: 'Building accessible, mobile-first, and aesthetically refined user interfaces.',
    skills: [
      { name: 'HTML5', highlight: true },
      { name: 'CSS3 / Modern CSS', highlight: true },
      { name: 'Bootstrap 5' },
      { name: 'Responsive Web Design', highlight: true },
      { name: 'UI / UX Prototyping' },
      { name: 'JavaScript Essentials' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    iconName: 'Code',
    description: 'Core logic, object-oriented concepts, and computational problem solving.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'C', highlight: false },
      { name: 'C++', highlight: true },
      { name: 'Java', highlight: true }
    ]
  },
  {
    id: 'cs-foundations',
    title: 'Computer Science Core',
    iconName: 'Binary',
    description: 'Rigorous academic foundations applied to scalable software engineering.',
    skills: [
      { name: 'OOP (Object Oriented)', highlight: true },
      { name: 'DBMS (Relational Databases)', highlight: true },
      { name: 'Data Structures & Algorithms', highlight: true },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'Software Engineering' }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & Platforms',
    iconName: 'Wrench',
    description: 'Version control, cloud backend utilities, and workflow tooling.',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'VS Code' },
      { name: 'Firebase', highlight: true },
      { name: 'Canva (Design & Brand)' }
    ]
  }
];

export const TECH_TOOLS: TechTool[] = [
  { name: 'HTML5', category: 'Frontend', iconName: 'Globe' },
  { name: 'CSS3', category: 'Styling', iconName: 'Palette' },
  { name: 'Bootstrap', category: 'Framework', iconName: 'Box' },
  { name: 'Python', category: 'Language', iconName: 'Terminal' },
  { name: 'Java', category: 'Language', iconName: 'Coffee' },
  { name: 'C++', category: 'Language', iconName: 'Cpu' },
  { name: 'Git', category: 'Version Control', iconName: 'GitBranch' },
  { name: 'GitHub', category: 'Platform', iconName: 'FolderGit2' },
  { name: 'Firebase', category: 'Cloud Backend', iconName: 'Flame' },
  { name: 'Canva', category: 'Design', iconName: 'Sparkles' }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'vertex-store',
    title: 'VertexStore E-Commerce',
    category: 'E-Commerce / Full-Stack',
    filterCategory: 'Web',
    shortDescription: 'Everything you need, in one place — a modern, responsive multi-category e-commerce storefront with live search, instant cart updates, and rich product catalogs.',
    fullDescription: 'VertexStore is a feature-packed e-commerce web platform designed around seamless shopping experiences. Built with a dark brand header, comprehensive product search, quick cart counters, and a vibrant hero showcase ("Everything You Need, In One Place"). Features multi-category product cards spanning footwear, home essentials, fitness gear, and consumer electronics with instant "Add to Cart" functionality.',
    problem: 'Online shoppers demand rapid, frictionless browsing across diverse product categories with instant visual feedback, clear pricing, and straightforward cart interactions.',
    solution: 'Architected a high-performance storefront with centralized search bar, categorical browsing (Footwear, Home, Sports, Electronics), direct-action product cards with immediate pricing and add-to-cart feedback, and a unified cart badge.',
    myRole: 'Frontend & E-Commerce Developer (Component architecture, catalog management, cart state management, responsive UI design, search integration).',
    technologies: ['React / JavaScript', 'HTML5', 'CSS3 / Tailwind', 'E-Commerce UI', 'State Management'],
    keyFeatures: [
      'Top navigation bar with VertexStore brand, full-width search bar, and live cart counter badge',
      'High-impact hero banner: "Everything You Need, In One Place" highlighting quality & honest prices',
      'Responsive product catalog grid showcasing Footwear, Home, Sports, and Electronics',
      'Individual product cards with high-res imagery, category tagging, clear currency pricing, and instant "Add" action',
      'Optimized layout ensuring 100% fluid responsiveness from mobile devices to desktop monitors'
    ],
    githubUrl: 'https://github.com/yusra2428/my-store',
    liveUrl: 'https://my-store-dun-six.vercel.app/',
    mockupType: 'ecommerce',
    mockupImage: '/vertexstore-exact.svg'
  },
  {
    id: 'nexatech-solutions',
    title: 'NexaTech Solutions',
    category: 'Web Design / Frontend',
    filterCategory: 'Web',
    shortDescription: 'Transforming ideas into powerful digital solutions — a modern software house website with responsive layouts and trusted digital service showcases.',
    fullDescription: 'NexaTech Solutions is a modern corporate software development website designed to help startups, businesses, and enterprises build modern websites, mobile applications, and digital solutions. Featuring a trusted software development agency hero banner, dual-tone typography, streamlined navigation, and high-impact collaborative photography.',
    problem: 'Software houses and tech service providers often struggle to present their capabilities with clarity, lacking modern visual hierarchy and trusted authority needed to convert enterprise visitors.',
    solution: 'Engineered a modern, conversion-focused software agency landing experience with a "Trusted Software Development Company" badge, dynamic dual-tone headline, intuitive multi-tier navigation, and responsive collaborative imagery.',
    myRole: 'Lead Frontend Designer & Developer (UI/UX design, component structuring, responsive layout optimization, cross-browser compatibility).',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive Design', 'JavaScript'],
    keyFeatures: [
      'Modern agency hero banner with "Trusted Software Development Company" badge',
      'High-contrast dual-tone typography: "Transforming Ideas Into Powerful Digital Solutions"',
      'Modern collaborative team photography with smooth rounded geometric frames',
      'Intuitive navigation bar featuring Home, About, Services, Projects, and Contact with primary CTA',
      'Mobile-first responsive architecture tested across mobile, tablet, and desktop viewports'
    ],
    githubUrl: 'https://github.com/yusra2428/Software-Company-Website',
    liveUrl: 'https://nexatech-solutions.vercel.app/',
    mockupType: 'web',
    mockupImage: '/nexatech-solutions-exact.svg'
  },
  {
    id: 'autonomous-drone-delivery',
    title: 'Autonomous Drone Delivery System',
    category: 'Final Year Project',
    filterCategory: 'Academic',
    shortDescription: 'A drone-based parcel delivery system designed around autonomous mission planning, communication, navigation and delivery workflows.',
    fullDescription: 'Developed as a comprehensive Capstone / Final Year Project in Computer Science. The system integrates hardware autopilot controllers with ground control mission planning and a real-time cloud dispatch pipeline to simulate last-mile autonomous cargo transit.',
    problem: 'Last-mile logistics in congested or remote locations suffers from high operational costs, unpredictable road delays, and carbon emissions.',
    solution: 'Designed an integrated autonomous pipeline combining waypoint trajectory calculation, telemetry streaming over MAVLink, safety fail-safes (geo-fencing and automatic return-to-launch), and real-time status dispatch via Firebase.',
    myRole: 'System Software Architecture, Mission Scripting (Python / DroneKit), Telemetry Integration & Cloud Database synchronization.',
    technologies: ['Python', 'Raspberry Pi', 'Pixhawk', 'ArduPilot', 'MAVLink', 'Firebase'],
    keyFeatures: [
      'Autonomous waypoint mission planning and payload drop altitude detection',
      'Real-time bi-directional telemetry broadcast via MAVLink protocol',
      'Safety emergency protocols (failsafe return-to-home, low-battery geofence)',
      'Firebase cloud backend logging coordinates, airspeed, battery, and delivery state'
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    mockupType: 'drone'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'BS Computer Science',
    institution: 'University of Wah',
    period: 'Completed',
    location: 'Wah Cantt, Pakistan',
    description: 'Comprehensive 4-year undergraduate degree covering fundamental computer science principles, software development methodologies, algorithmic problem solving, and modern computing paradigms.',
    highlights: [
      'Final Year Project: Autonomous Drone Delivery System (Hardware + Software)',
      'Key coursework: Data Structures, Algorithms, DBMS, OOP, Web Engineering, Software Engineering, Operating Systems'
    ]
  },
  {
    degree: 'Faculty of Science (FSc - Pre-Engineering / Computer)',
    institution: 'FG Postgraduate College for Women',
    period: 'Completed',
    location: 'Wah Cantt, Pakistan',
    description: 'Rigorous higher secondary education developing strong analytical foundations in Mathematics, Physics, and Analytical Logic.',
    highlights: [
      'Solid mathematical grounding enabling transition into Computer Science algorithms',
      'Active participation in science exhibitions and academic activities'
    ]
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'FGB College School No. 2 Girls',
    period: 'Completed',
    location: 'Wah Cantt, Pakistan',
    description: 'Secondary school education focusing on core science subjects and basic computer fundamentals.',
    highlights: [
      'High academic achievement in science and mathematics subjects',
      'First introduction to computer programming and digital literacy'
    ]
  }
];

export const CURRENTLY_EXPLORING: ExploringItem[] = [
  {
    title: 'AI & Creative Design',
    badge: 'Active Focus',
    description: 'Exploring generative AI tools, prompt engineering, and creative UI/UX design workflows in Canva and digital design tools to build engaging, modern digital experiences.',
    idealFor: 'Creative digital products, modern web interfaces, and AI-assisted design workflows.'
  },
  {
    title: 'Internships',
    badge: 'High Priority',
    description: 'Seeking hands-on software engineering or web development internships to work alongside experienced mentors on production codebases.',
    idealFor: 'Software houses, tech startups, and established engineering teams.'
  },
  {
    title: 'Entry-Level Roles',
    badge: 'Immediate',
    description: 'Ready to contribute as a Junior Frontend Developer, Associate Software Engineer, or QA/Web Specialist with a strong appetite to learn.',
    idealFor: 'Companies looking for dedicated, quick-learning CS graduates.'
  },
  {
    title: 'Freelance Projects',
    badge: 'Available',
    description: 'Designing and coding clean, responsive websites for small businesses, personal portfolios, landing pages, and academic showcases.',
    idealFor: 'Solopreneurs, small businesses, and individuals needing a modern web presence.'
  },
  {
    title: 'Collaborations',
    badge: 'Open',
    description: 'Open to collaborating on open-source repositories, developer community projects, hackathons, and creative technical experiments.',
    idealFor: 'Fellow developers, designers, and tech community builders.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'Responsive Web Design',
    iconName: 'Smartphone',
    description: 'Clean, pixel-perfect, and mobile-first website designs that deliver a delightful browsing experience across desktop, tablet, and mobile devices.',
    deliverables: ['Mobile-first layout', 'Cross-browser testing', 'Optimized assets', 'Touch-friendly UI']
  },
  {
    title: 'Frontend Development',
    iconName: 'CodeXml',
    description: 'Transforming design concepts into semantic, accessible, and high-performance web pages utilizing modern HTML5, CSS3, and JavaScript.',
    deliverables: ['Semantic HTML5 structure', 'Modular CSS styling', 'Clean component hierarchy', 'Accessible UI standards']
  },
  {
    title: 'Portfolio & Landing Pages',
    iconName: 'Sparkles',
    description: 'Tailored personal portfolio websites and product landing pages designed to clearly communicate personal branding or value propositions.',
    deliverables: ['Custom visual identity', 'Editorial layout', 'Centralized data structure', 'Smooth animations']
  },
  {
    title: 'Basic UI & Prototype Implementation',
    iconName: 'LayoutGrid',
    description: 'Translating wireframes and Canva mockups into functional web interfaces with responsive grids, modals, and interaction states.',
    deliverables: ['Design fidelity translation', 'Interactive micro-interactions', 'Fast load times', 'Clean documentation']
  }
];
