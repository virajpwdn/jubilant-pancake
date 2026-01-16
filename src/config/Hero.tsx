/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import Docker from '@/components/technologies/Docker';
import Grafana from '@/components/technologies/Grafana';
import JavaScript from '@/components/technologies/JavaScript';
import Jenkins from '@/components/technologies/Jenkins';
import Kubernetes from '@/components/technologies/Kubernetes';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Prometheus from '@/components/technologies/Prometheus';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// import LangGraph from '@/components/technologies/LangGraph';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Docker: Docker,
  Kubernetes: Kubernetes,
  Grafana: Grafana,
  Prometheus: Prometheus,
  Jenkins: Jenkins,
  // LangGraph: LangGraph,
};

export const heroConfig = {
  // Personal Information
  name: 'Viraj',
  title: 'A Full Stack web developer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: '#',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: '#',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: '#',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: '#',
      component: 'NodeJs',
    },
    {
      name: 'Docker',
      href: '#',
      component: 'Docker',
    },
    {
      name: 'Kubernetes',
      href: '#',
      component: 'Kubernetes',
    },
    {
      name: 'Jenkins',
      href: '#',
      component: 'Jenkins',
    },
    {
      name: 'Prometheus',
      href: '#',
      component: 'Prometheus',
    },
    {
      name: 'Grafana',
      href: '#',
      component: 'Grafana',
    },
    // {
    //   name: 'LangGraph',
    //   href: '#',
    //   component: 'LangGraph',
    // },
  ],

  // Description Configuration
  description: {
    template:
      'I build interactive web apps with {skills:0}, {skills:1}, {skills:2}, and {skills:3}. I containerize application with {skills:4}, deploy via {skills:5}, {skills:6} CICD and add observability with {skills:7}, 🪵 Loki, and {skills:8} I also build RAGs and multi-node AI agents using LangGraph.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/ramxcodes',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramxcodes/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/ramxcodes',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:ramxcodes@gmail.com',
    icon: <Mail />,
  },
];
