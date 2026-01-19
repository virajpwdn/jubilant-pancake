import Mail from '@/components/svgs/Mail';
import AWS from '@/components/technologies/AWS';
import CSS from '@/components/technologies/CSS';
import CloudflareIcon from '@/components/technologies/Cloudflare';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import Grafana from '@/components/technologies/Grafana';
import GSAPIcon from '@/components/technologies/GsapIcon';
import HTMLLogo from '@/components/technologies/HtmlIcon';
import JavaScript from '@/components/technologies/JavaScript';
import Kubernetes from '@/components/technologies/Kubernetes';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import Prometheus from '@/components/technologies/Prometheus';
import RazorpayLogo from '@/components/technologies/RazorPay';
import ReactIcon from '@/components/technologies/ReactIcon';
import RedisIcon from '@/components/technologies/Redis';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';
import { OpenAiLogoIcon } from '@phosphor-icons/react/dist/ssr';

export const projects: Project[] = [
  {
    title: 'StackWave',
    description:
      'A real-time collaborative platform for developers to ask questions, share knowledge, and refactor code with AI assistance.',
    image: '/project/best/stackwave.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://stackwave.virajpatwardhan.in',
    technologies: [
      { name: 'React', icon: <ReactIcon key="reactjs" /> },
      { name: 'Node Js', icon: <NodeJs key="nodejs" /> },
      {
        name: 'Open AI',
        icon: <OpenAiLogoIcon key="openai" height={24} width={24} />,
      },
      { name: 'Javascript', icon: <JavaScript key="javascript" /> },
      // { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Redis', icon: <RedisIcon key="redis" width={22} height={28} /> },
      { name: 'Socket IO', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/virajpwdn/stackwave',
    live: 'https://stackwave.virajpatwardhan.in',
    details: true,
    projectDetailsPageSlug: '/projects/stackwave',
    isWorking: true,
  },
  {
    title: 'DevTinder',
    description:
      'A platform where developers connect, collaborate, and build together',
    image: '/project/best/devtinder.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://devtinder.virajpatwardhan.in',
    technologies: [
      { name: 'NodeJS', icon: <NodeJs key="node" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Javascript', icon: <JavaScript key="javascript" /> },
      { name: 'AWS SNS', icon: <Mail key="express" /> },
      { name: 'Daisy UI', icon: <Shadcn key="daisy" /> },
      { name: 'Tailwind', icon: <TailwindCss key="tailwind" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'SocketIO', icon: <SocketIo key="socket" /> },
      { name: 'Grafana', icon: <Grafana key="grafana" /> },
      { name: 'Prometheus', icon: <Prometheus key="promethus" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Kubernetes', icon: <Kubernetes key="k8s" /> },
      {
        name: 'Cloudflare',
        icon: <CloudflareIcon key="cloudflare" width={24} height={24} />,
      },
      { name: 'RazorPay sdk', icon: <RazorpayLogo key="razorpay" /> },
      // { name: 'Nginx', icon: <Nginx key="express" /> },
    ],
    github: 'https://github.com/virajpwdn/devTinder',
    live: 'https://devtinder.virajpatwardhan.in',
    details: true,
    projectDetailsPageSlug: '/projects/devtinder',
    isWorking: true,
  },
  {
    title: 'TransferX',
    description:
      'A platform to store and manage your data with TransferX – The all-in-one platform offering scalable, secure, and efficient storage for all your needs.',
    image: '/project/best/transferx.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: 'https://trasnferx.virajpatwardhan.in/',
    technologies: [
      { name: 'NextJs', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Typescript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/virajpwdn/TransferX',
    live: 'https://trasnferx.virajpatwardhan.in/',
    details: true,
    projectDetailsPageSlug: '/projects/transfer-x',
    isWorking: true,
  },
  {
    title: 'Pasandida Aurat',
    description:
      'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    image: '/project/pasandida.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://www.pasandidaurat.com/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/pasandida-aurat',
    isWorking: false, // Currently in development
  },
  {
    title: 'Apple',
    description:
      "Apple-style MacBook Pro landing page with buttery-smooth 3D animations and interactive Three.js modeling—pixel-perfect recreation of Apple's showcase experience.",
    image: '/project/best/apple.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
    link: 'https://quest.ramx.in/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Three Js', icon: <ThreeJs key="three" /> },
      { name: 'GSAP', icon: <GSAPIcon key="gsap" /> },
    ],
    github: 'https://github.com/ramxcodes/the-quest',
    live: 'https://quest.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/apple',
    isWorking: true,
  },
  {
    title: 'Zentry Games',
    description:
      'Gaming website with immersive 3D animations, agent showcases, and performance-optimized experience',
    image: '/project/best/game.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
    link: 'https://fest-x.ramx.in/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'GSAP', icon: <GSAPIcon key="gsap" /> },
    ],
    github: 'https://github.com/virajpwdn/Zentry',
    live: 'https://fest-x.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/zentry',
    isWorking: true,
  },
  {
    title: 'Base Habitation',
    description: 'An awwwards winning website, site of the month',
    image: '/project/best/base.png',
    link: 'https://basehabitation.virajpatwardhan.in/',
    technologies: [
      { name: 'Javascript', icon: <JavaScript key="js" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'HTML', icon: <HTMLLogo key="html" /> },
      { name: 'Vercel', icon: <Vercel key="netlify" /> },
    ],
    // github: 'https://github.com/ramxcodes/chill-guy',
    live: 'https://basehabitation.virajpatwardhan.in/',
    details: true,
    projectDetailsPageSlug: '/projects/base-habitation',
    isWorking: true,
  },
  {
    title: 'SunDown Studios',
    description:
      'Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments',
    image: '/project/best/sundown.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
    link: 'https://sundownstudio.virajpatwardhan.in/',
    technologies: [
      { name: 'Javascript', icon: <JavaScript key="js" /> },
      { name: 'Vanila CSS', icon: <CSS key="css" /> },
      { name: 'HTML', icon: <HTMLLogo key="html" /> },
      { name: 'Vercel', icon: <Vercel key="netlify" /> },
    ],
    live: 'https://sundownstudio.virajpatwardhan.in/',
    details: true,
    projectDetailsPageSlug: '/projects/sundown-studio',
    isWorking: true,
  },
  {
    title: 'Virtual R',
    description:
      'Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!',
    image: '/project/best/virtual.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
    link: 'https://virtual.virajpatwardhan.in/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Javascript', icon: <JavaScript key="javascript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/ramxcodes/intent-js',
    live: 'https://virtual.virajpatwardhan.in/',
    details: true,
    projectDetailsPageSlug: '/projects/virtual-r',
    isWorking: true,
  },
  {
    title: 'Moonstone 2K25',
    description:
      "Official website for Medicaps University's premier annual college festival with event management and registration",
    image: '/project/moonstone.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
    link: 'https://moonstone.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/moonstone-fest',
    live: 'https://moonstone.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/moonstone-fest',
    isWorking: true,
  },
  {
    title: 'Valorant Remastered',
    description:
      'Gaming website with immersive 3D animations, agent showcases, and performance-optimized Valorant experience',
    image: '/project/valorant.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/valorant.mp4',
    link: 'https://valorant.ramx.in',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/ramxcodes/valorant-remastered',
    live: 'https://valorant.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/valorant-remastered',
    isWorking: true,
  },
  {
    title: 'That Startup',
    description:
      'Startup listing and pitching platform where entrepreneurs can submit ideas, vote on concepts, and connect with founders',
    image: '/project/that-startup.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/that-startup.mp4',
    link: 'https://that-startup.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Sanity', icon: <Sanity key="sanity" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/ramxcodes/that-startup',
    live: 'https://that-startup.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/that-startup',
    isWorking: true,
  },
];
