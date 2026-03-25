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
      'I build systems that machines understand. An engineer at heart, constantly learning, exploring across domains, and thinking beyond boundaries. polymath!',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    // {
    //   variant: 'default',
    //   text: 'Get in touch',
    //   href: '/contact',
    //   icon: 'Chat',
    // },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/viraj-patwardhan/',
    icon: <LinkedIn />,
  },
  {
    name: 'X',
    href: 'https://x.com/async_awaait',
    icon: <X />,
  },
  {
    name: 'Github',
    href: 'https://github.com/virajpwdn',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:virajpatwardhan6@gmail.com',
    icon: <Mail />,
  },
];

// Shipping <b>production-grade web systems end-to-end</b> — <b>React/Next.js</b> frontends, <b>Node.js</b> backend, <b>containerized deployments</b>, and <b>instrumented infrastructure</b>. I own systems from <b>architecture through CI/CD and monitoring</b>, and build AI features including <b>RAG pipelines</b> and <b>multi-agent workflows</b>. Recently cut <b>search latency by 50%</b> using <b>Elasticsearch</b> and <b>Redis caching</b>.
