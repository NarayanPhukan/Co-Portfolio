export const portfolioData = {
  name: 'Narayan Phukan',
  title: 'Full Stack MERN Developer',
  description:
    'Experienced Full Stack Developer specializing in building high-performance web applications with React, Node.js, Express, and MongoDB. Passionate about creating seamless user experiences and scalable backend solutions. With 4+ years of experience, I have successfully delivered 50+ projects for startups and enterprise clients.',
  email: 'narayanphukan3@gmail.com',
  phone: '+91-8822-3615-49',
  location: 'India',
  github: 'https://github.com/NarayanPhukan',
  linkedin: 'https://linkedin.com/in/NarayanPhukan',
  twitter: 'https://twitter.com/_NarayanPhukan',
  portfolio: 'https://narayanphukan.com',
};

export const skills = [
  {
    name: 'Frontend Development',
    icon: '⚛️',
    technologies: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Redux', 'React Router', 'Framer Motion'],
  },
  {
    name: 'Backend Development',
    icon: '🖥️',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Authentication', 'Microservices', 'WebSockets', 'Socket.io'],
  },
  {
    name: 'Database Management',
    icon: '🗄️',
    technologies: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'Mongoose', 'Sequelize', 'Database Optimization', 'Indexing'],
  },
  {
    name: 'DevOps & Deployment',
    icon: '🚀',
    technologies: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'Linux'],
  },
  {
    name: 'Tools & Technologies',
    icon: '🛠️',
    technologies: ['Git/GitHub', 'Postman', 'JWT', 'Jest Testing', 'Webpack', 'NPM/Yarn', 'VS Code', 'Figma Integration'],
  },
  {
    name: 'Cloud & APIs',
    icon: '☁️',
    technologies: ['AWS S3', 'Cloudinary', 'Firebase', 'Stripe API', 'OpenWeatherMap API', 'SendGrid', 'Twilio', 'Third-party integrations'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-featured e-commerce platform with JWT authentication, product catalog, shopping cart, order management, and Stripe payment integration. Features include admin dashboard, inventory management, and real-time order tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4ecb482c4?w=600&h=400&fit=crop',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Redux'],
    github: 'https://github.com/NarayanPhukan/E-Commerce',
    live: 'https://ecommerce-narayan.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Social Media Network',
    description:
      'Real-time social media application with user authentication, post creation, comments, likes, and follow functionality. Features include real-time notifications using Socket.io, image upload to Cloudinary, and user profiles.',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Cloudinary', 'JWT'],
    github: 'https://github.com/NarayanPhukan/social-media-app',
    live: 'https://social-media-narayan.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Project Management Dashboard',
    description:
      'Collaborative project management tool with real-time task updates, team collaboration, kanban board, user assignments, and project tracking. Includes role-based access control and activity logging.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'Docker'],
    github: 'https://github.com/NarayanPhukan/project-management',
    live: 'https://pm-dashboard-narayan.vercel.app',
    featured: true,
  },
  {
    id: 4,
    title: 'Business Analytics Dashboard',
    description:
      'Comprehensive analytics dashboard with real-time data visualization, multiple chart types (bar, line, pie), customizable reports, and PDF export functionality. Includes data filtering, date range selection, and performance metrics.',
    image: 'https://images.unsplash.com/photo-1596757228926-adc53f568880?w=600&h=400&fit=crop',
    tech: ['React.js', 'Chart.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/NarayanPhukan/analytics-dashboard',
    live: 'https://analytics-narayan.vercel.app',
    featured: false,
  },
  {
    id: 5,
    title: 'Real-Time Chat Application',
    description:
      'End-to-end encrypted chat application with group chats, file sharing, image uploads, typing indicators, and online status. Supports multiple conversations and message history with search functionality.',
    image: 'https://images.unsplash.com/photo-1611935473253-b5d49c4fee16?w=600&h=400&fit=crop',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Encryption.js', 'AWS S3'],
    github: 'https://github.com/NarayanPhukan/chat-app',
    live: 'https://chat-narayan.vercel.app',
    featured: false,
  },
  {
    id: 6,
    title: 'Weather Tracking App',
    description:
      'Real-time weather application with location-based weather updates, 7-day forecasts, weather alerts, and user preferences saving. Integrates with OpenWeatherMap API and includes weather history tracking.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tech: ['React.js', 'Node.js', 'OpenWeatherMap API', 'MongoDB', 'Axios'],
    github: 'https://github.com/NarayanPhukan/weather-app',
    live: 'https://weather-narayan.vercel.app',
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: 'TechVision Solutions',
    position: 'Senior Full Stack Developer',
    duration: '2023 - Present',
    description:
      'Led development of multiple MERN stack applications, mentored junior developers, and implemented CI/CD pipelines. Currently managing a team of 5 developers and overseeing architecture decisions for enterprise-level applications.',
    achievements: [
      'Increased application performance by 45% through optimization and code splitting',
      'Successfully managed and mentored a team of 5 junior developers',
      'Implemented microservices architecture reducing deployment time by 60%',
      'Designed and implemented automated testing suite with 85% code coverage',
    ],
  },
  {
    id: 2,
    company: 'Digital Innovations Ltd.',
    position: 'Full Stack MERN Developer',
    duration: '2021 - 2023',
    description: 'Developed and maintained multiple web applications for enterprise and startup clients. Responsible for full stack development, API design, and database optimization.',
    achievements: [
      'Built and deployed 15+ production-ready applications for diverse clients',
      'Reduced API response time by 60% through database indexing and query optimization',
      'Implemented real-time features using WebSockets and Socket.io',
      'Created comprehensive documentation for 20+ projects',
      'Established best practices for code quality and project management',
    ],
  },
  {
    id: 3,
    company: 'StartUp Hub',
    position: 'Junior Full Stack Developer',
    duration: '2019 - 2021',
    description:
      'Contributed to frontend development using React and backend development using Node.js. Learned best practices in MERN stack development and participated in agile development processes.',
    achievements: [
      'Developed responsive UI components following design specifications',
      'Fixed and resolved 100+ bugs in production applications',
      'Participated in code reviews and improved code quality standards',
      'Actively participated in sprint planning and agile ceremonies',
      'Built 5+ full-stack features independently',
    ],
  },
];

export const education = [
  {
    school: 'Delhi Institute of Technology',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    year: '2019',
    description: 'CGPA: 8.2/10. Completed comprehensive coursework in data structures, algorithms, databases, software engineering, and web technologies. Active participant in coding competitions and hackathons.',
  },
  {
    school: 'Various Online Platforms',
    degree: 'Certifications',
    field: 'Full Stack Web Development',
    year: '2018-2020',
    description: 'Completed specializations in MERN Stack Development, Advanced JavaScript, React Mastery, and Node.js from platforms like Udemy and Coursera.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'CEO, TechVision Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Narayan is an exceptional developer with deep expertise in MERN stack. His attention to detail, problem-solving skills, and ability to deliver high-quality code consistently have made him invaluable to our team. His leadership qualities have also helped mentor junior developers effectively.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Product Manager, Digital Innovations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'Working with Narayan has been a pleasure. He delivered quality code on time, actively participated in discussions, and was always eager to help the team. His technical expertise helped us solve complex architecture challenges seamlessly.',
  },
  {
    id: 3,
    name: 'Amit Singh',
    position: 'Founder & CTO, StartUp Hub',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    text: 'Narayan has demonstrated tremendous growth as a developer. His passion for learning new technologies, commitment to excellence, and growth mindset are commendable. He transformed from a junior developer into a capable full-stack engineer in just two years.',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    position: 'Senior Developer, Tech Innovations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'Narayan is one of the best developers I have worked with. His code reviews are thorough, his suggestions are valuable, and he maintains high standards of code quality. He is also a great team player and collaborator.',
  },
];

export const stats = [
  {
    label: 'Projects Completed',
    value: '50+',
  },
  {
    label: 'Happy Clients',
    value: '35+',
  },
  {
    label: 'Years Experience',
    value: '4+',
  },
  {
    label: 'Code Commits',
    value: '5000+',
  },
];
