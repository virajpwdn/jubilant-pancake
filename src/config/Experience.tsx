import Github from '@/components/svgs/Github';
import AWS from '@/components/technologies/AWS';
import CSS from '@/components/technologies/CSS';
import ClickFunnelsIcon from '@/components/technologies/ClickFunnels';
import CloudflareIcon from '@/components/technologies/Cloudflare';
import Docker from '@/components/technologies/Docker';
import ElementorIcon from '@/components/technologies/Elementor';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Hostinger from '@/components/technologies/Hostinger';
import JavaScript from '@/components/technologies/JavaScript';
import Kubernetes from '@/components/technologies/Kubernetes';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import React from '@/components/technologies/ReactIcon';
import RedisIcon from '@/components/technologies/Redis';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import WooCommerceIcon from '@/components/technologies/WooComm';
import YoastIcon from '@/components/technologies/Yoast';
import { OpenAiLogoIcon } from '@phosphor-icons/react/dist/ssr';

import WordPressIcon from '../components/technologies/WordPress';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: 'Lucres AI',
    position: 'Full-Stack Developer',
    location: 'Banglore (Remote)',
    image: '/company/lucresl.png',
    description: [
      'Designed and implemented a <b>scalable multi-tenant architecture</b>, leading backend system design and delivering <b>ahead of schedule</b>.',
      'Reduced average production API response time by <b>~50%</b> through <b>Redis-based FIFO caching</b> and request-layer optimizations.',
      'Resolved a <b>critical production outage impacting 80% of APIs</b>, coordinating cross-team debugging and restoring full functionality within <b>one week</b>.',
      'Led development of an <b>autonomous multi-agent workflow</b> using <b>LangGraph</b> and <b>LangChain</b>, integrating AI-driven automation into core product features.',
      'Architected and deployed an <b>Elasticsearch-powered search system</b>, significantly reducing query latency.',
      'Managed production deployments using <b>Docker</b>, <b>Nginx</b>, and <b>Kubernetes</b>, ensuring reliable release cycles and system stability.',
      'Led a <b>platform-wide refactor</b>, improving code maintainability, scalability, and overall development velocity.',
    ],
    startDate: 'June 2025',
    endDate: 'Nov 2025',
    technologies: [
      {
        name: 'Next.js',
        // href: 'https://nextjs.org/',
        href: '#',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        // href: 'https://tailwindcss.com/',
        href: '#',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        // href: 'https://typescriptlang.org/',
        href: '#',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        // href: 'https://react.dev/',
        href: '#',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        // href: 'https://figma.com/',
        href: '#',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        // href: 'https://vercel.com/',
        href: '#',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        // href: 'https://aws.amazon.com/',
        href: '#',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        // href: 'https://www.postman.com/',
        href: '#',
        icon: <Postman />,
      },
      {
        name: 'Docker',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <Docker />,
      },
      {
        name: 'Kubernetes',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <Kubernetes />,
      },
      {
        name: 'MongoDB',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <MongoDB />,
      },
      {
        name: 'GitHub',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <Github />,
      },
      {
        name: 'OpenAI',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <OpenAiLogoIcon />,
      },
      {
        name: 'Node Js',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <NodeJs />,
      },
      {
        name: 'Cloudflare',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <CloudflareIcon />,
      },
      {
        name: 'Redis',
        // href: 'https://www.docker.com/',
        href: '#',
        icon: <RedisIcon />,
      },
    ],
    // website: '#',
    // github: '#',
    // x: '#',
  },
  {
    isCurrent: false,
    company: 'Quetraware Technologies',
    position: 'Co-founder, Full-Stack Developer',
    location: 'Navi-Mumbai, India (Remote)',
    image: '/company/qt.jpeg',
    description: [
      'Delivered <b>end-to-end features</b> across <b>frontend and backend</b> — translating Figma designs into <b>accessible, production-ready UI</b> and implementing <b>scalable backend services</b>.',
      'Implemented <b>secure JWT-based authentication</b> with <b>Redis-backed token blacklisting</b> to strengthen access control.',
      'Designed a <b>maintainable backend architecture</b> and folder structure to support <b>long-term scalability</b> and feature expansion.',
      'Built and optimized <b>RESTful APIs</b> with structured validation, error handling, and efficient <b>database schema design</b> to ensure <b>data integrity</b> and performant querying.',
      'Contributed to <b>SEO initiatives</b> and executed <b>end-to-end video campaigns</b>, generating <b>500K+ impressions</b> and increasing product visibility and sales.',
    ],
    startDate: 'May 2023',
    endDate: 'Nov 2024',
    technologies: [
      {
        name: 'React',
        // href: 'https://nestjs.com/',
        href: '#',
        icon: <ReactIcon />,
      },
      {
        name: 'Node JS',
        // href: 'https://expressjs.com/',
        href: '#',
        icon: <NodeJs />,
      },
      {
        name: 'TypeScript',
        // href: 'https://www.typescriptlang.org/',
        href: '#',
        icon: <TypeScript />,
      },
      {
        name: 'Postman',
        // href: 'https://www.postman.com/',
        href: '#',
        icon: <Postman />,
      },
      {
        name: 'Express',
        // href: 'https://expressjs.com/',
        href: '#',
        icon: <ExpressJs />,
      },
      {
        name: 'MongoDB',
        // href: 'https://expressjs.com/',
        href: '#',
        icon: <MongoDB />,
      },
      {
        name: ' CSS',
        // href: 'https://expressjs.com/'
        href: '#',
        icon: <CSS />,
      },
      {
        name: ' Redis',
        // href: 'https://expressjs.com/'
        href: '#',
        icon: <RedisIcon />,
      },
      {
        name: ' Cloudflare',
        // href: 'https://expressjs.com/'
        href: '#',
        icon: <CloudflareIcon />,
      },
      {
        name: ' Cloudflare',
        // href: 'https://expressjs.com/'
        href: '#',
        icon: <CloudflareIcon />,
      },
    ],
    // website: 'https://bhindi.io',
    // github: 'https://github.com/upsurgeio',
    // x: 'https://x.com/upsurgelabs',
    // linkedin: 'https://www.linkedin.com/company/upsurge-labs-pte-ltd',
  },
  {
    isCurrent: false,
    company: 'Orlando',
    position: 'Web Developer',
    location: 'Freelance',
    image: '/company/orlando.png',
    description: [
      'Delivered 5 client websites end-to-end using WordPress, WooCommerce, and Elementor, handling development, deployment, SEO optimization, and performance tuning, resulting in ~40% improvement in search rankings.',
      'Managed domains, hosting (Hostinger), DNS configuration, and SSL certificates to ensure secure, reliable production environments.',
      'Designed user interfaces in Figma that clients loved, helping align design vision and accelerate delivery.',
      'Later transitioned to MERN stack development, building custom full-stack applications with well-structured REST APIs.',
    ],
    startDate: 'Jan 2021',
    endDate: 'Dec 2021',
    technologies: [
      {
        name: 'WordPress',
        // href: 'https://nextjs.org/',
        href: '#',
        icon: <WordPressIcon />,
      },
      {
        name: 'Cloudflare',
        // href: 'https://expressjs.com/',
        href: '#',
        icon: <CloudflareIcon />,
      },
      {
        name: 'Javascript',
        // href: 'https://www.typescriptlang.org/',
        href: '#',
        icon: <JavaScript />,
      },
      {
        name: 'Figma',
        // href: 'https://react.dev/',
        href: '#',
        icon: <Figma />,
      },
      {
        name: 'WooCommerce',
        // href: 'https://www.prisma.io/',
        href: '#',
        icon: <WooCommerceIcon />,
      },
      {
        name: 'Elementor',
        // href: 'https://www.postgresql.org/',
        href: '#',
        icon: <ElementorIcon />,
      },
      {
        name: 'Hostinger',
        // href: 'https://vercel.com/',
        href: '#',
        icon: <Hostinger />,
      },
      {
        name: 'ClickFunnels',
        // href: 'https://aws.amazon.com/',
        href: '#',
        icon: <ClickFunnelsIcon />,
      },
      {
        name: 'Yoast',
        // href: 'https://www.postman.com/',
        href: '#',
        icon: <YoastIcon />,
      },
    ],
    // website: 'https://prepeasy.ai',
    // github: 'https://github.com/prepeasy',
  },
  {
    isCurrent: false,
    company: 'Xiaomi India',
    position: 'Quality Control (QC) Intern',
    location: 'Thane, India',
    image: '/company/mi.jpeg',
    description: [
      'Conducted functionality and performance testing of repaired mobile devices to ensure all features were fully operational.',
      'Collaborated with engineers to identify, document, and report issues in repaired devices.',
      'Verified critical mobile functions, including touchscreen response, network connectivity, camera, audio, and sensors.',
      'Assisted in optimizing the quality control workflow, reducing the return rate of faulty devices.',
    ],
    startDate: 'May 2019',
    endDate: 'Jun 2019',
    technologies: [],
  },
  // {
  //   isCurrent: false,
  //   company: 'Flameloop',
  //   position: 'Junior Frontend Developer',
  //   location: 'Indore, India (offline)',
  //   image: '/company/loop.png',
  //   description: [
  //     'Developed and maintained web applications using HTML, CSS, and JavaScript.',
  //     'Collaborated with cross-functional teams to deliver high-quality software on time.',
  //     'Design & Developed multiple websites for clients.',
  //   ],
  //   startDate: 'June 2023',
  //   endDate: 'July 2023',
  //   website: 'https://flameloop.com',
  //   technologies: [
  //     {
  //       name: 'HTML',
  //       href: 'https://html.com/',
  //       icon: <Html />,
  //     },
  //     {
  //       name: 'CSS',
  //       href: 'https://css.com/',
  //       icon: <CSS />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://javascript.com/',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'Figma',
  //       href: 'https://figma.com/',
  //       icon: <Figma />,
  //     },
  //     {
  //       name: 'BootStrap',
  //       href: 'https://getbootstrap.com/',
  //       icon: <BootStrap />,
  //     },
  //   ],
  //   x: 'https://x.com/Flameloop149578',
  //   linkedin: 'https://www.linkedin.com/company/flameloop',
  // },
];
