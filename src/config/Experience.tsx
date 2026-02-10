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
    image: '/company/lucres.png',
    description: [
      'Led development of an autonomous multi-agentic workflow for a feature using LangGraph, LangChain, and LangFuse.',
      'Led end-to-end development of a multi-tenant architecture, prioritizing system design and backend implementation, delivering the project ahead of schedule.',
      ' Resolved a critical production outage affecting <b>80%</b> of APIs through strategic planning and coordinated troubleshooting,restoring full functionality within one week',
      'Improved overall platform performance by approximately 50% through implementation of FIFO caching techniques.',
      'Architected and deployed an Elasticsearch-based search optimization solution, significantly reducing query latency and enhancing user experience.',
      'Shipped and managed production deployments using Docker, Nginx, and Kubernetes.',
      'Developed fully branded tenant career pages, which are fully customizable per tenant',
      'Created a global OTP solution using Twilio and AWS SNS',
      'Led a platform-wide refactoring effort, significantly improving code maintainability, scalability, and development velocity.',
      'Migrated Frontend from React to Next JS for SSR',
      'Built responsive UI components for a consistent experience across devices.',
      'Collaborated with the team to move environment secrets from local configurations to Doppler, improving centralized secret management and security.',
      
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
      'Built responsive, user-friendly features by translating Figma designs into production-ready UI, ensuring accessibility, performance, and cross-device compatibility.',
      'Collaborated closely with designers and product stakeholders to deliver high-quality, visually consistent interfaces aligned with design systems and user expectations.',
      'Maintained high code quality through thorough testing, self-reviews, and timely bug fixes, ensuring stable releases and a smooth user experience.',
      'Designed and implemented a scalable backend folder structure to support maintainability and future growth.',
      'Set up database connections and designed schemas to ensure data integrity and efficient querying.',
      'Implemented secure JWT-based authentication for user authorization and access control.',
      'Built RESTful APIs to handle full CRUD operations, following best practices for validation and error handling.',
      'Implemented Redis caching and a middleware layer to detect and block blacklisted JWT tokens, strengthening authentication security.',
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
    endDate: 'Dec 2022',
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
  // {
  //   isCurrent: false,
  //   company: 'Expelee',
  //   position: 'SDE-1 (Full Stack) Intern',
  //   location: 'Dubai, UAE (Remote)',
  //   image: '/company/expelee.png',
  //   description: [
  //     '*Riskmitra (riskmitra.com)*: Built full-stack product with Next.js, Tailwind CSS, Framer Motion, shadcn, wallet integration, and GitBook integration.',
  //     '*Core AI (core-ai.me)*: Designed and developed with Next.js, Tailwind CSS, Framer Motion, shadcn, focusing on scalability and modular UI design.',
  //     '*GPU AI (gpuai.me)*: Integrated Three.js for interactive 3D elements alongside full-stack features from Core AI setup.',
  //     '*Altranium (gaming.altranium.com)*: Developed immersive gaming platform using Three.js, MERN, Tailwind, and Framer Motion.',
  //     '*Pars Network (parsnetwork.me)*: Engineered landing experience with MERN, Tailwind CSS, and GSAP for advanced animations and transitions.',
  //     '*TEQ Network (teq-network.vercel.app)*: Designed and developed landing page using MERN, Tailwind CSS, and Web3 wallet integration.',
  //   ],
  //   startDate: 'Aug 2023',
  //   endDate: 'April 2025',
  //   technologies: [
  //     {
  //       name: 'Bun',
  //       href: 'https://bun.sh/',
  //       icon: <Bun />,
  //     },
  //     {
  //       name: 'Express',
  //       href: 'https://expressjs.com/',
  //       icon: <ExpressJs />,
  //     },
  //     {
  //       name: 'Figma',
  //       href: 'https://figma.com/',
  //       icon: <Figma />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://javascript.com/',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'MongoDB',
  //       href: 'https://mongodb.com/',
  //       icon: <MongoDB />,
  //     },
  //     {
  //       name: 'Next.js',
  //       href: 'https://nextjs.org/',
  //       icon: <NextJs />,
  //     },
  //     {
  //       name: 'Node.js',
  //       href: 'https://nodejs.org/',
  //       icon: <NodeJs />,
  //     },
  //     {
  //       name: 'PostgreSQL',
  //       href: 'https://postgresql.org/',
  //       icon: <PostgreSQL />,
  //     },
  //     {
  //       name: 'Prisma',
  //       href: 'https://prisma.io/',
  //       icon: <Prisma />,
  //     },
  //     {
  //       name: 'React',
  //       href: 'https://react.dev/',
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       name: 'TypeScript',
  //       href: 'https://typescriptlang.org/',
  //       icon: <TypeScript />,
  //     },
  //     {
  //       name: 'Postman',
  //       href: 'https://postman.com/',
  //       icon: <Postman />,
  //     },
  //     {
  //       name: 'Vercel',
  //       href: 'https://vercel.com/',
  //       icon: <Vercel />,
  //     },
  //     {
  //       name: 'AWS',
  //       href: 'https://aws.amazon.com/',
  //       icon: <AWS />,
  //     },
  //   ],
  //   website: 'https://expelee.com',
  //   x: 'https://x.com/0xExpelee',
  //   linkedin: 'https://www.linkedin.com/company/expelee',
  //   github: 'https://github.com/expeleeOfficial',
  // },
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
