import Mail from '@/components/svgs/Mail';
import AWS from '@/components/technologies/AWS';
import CSS from '@/components/technologies/CSS';
import CloudflareIcon from '@/components/technologies/Cloudflare';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPILogo from '@/components/technologies/FastApi';
import Grafana from '@/components/technologies/Grafana';
import GSAPIcon from '@/components/technologies/GsapIcon';
import HTMLLogo from '@/components/technologies/HtmlIcon';
import JavaScript from '@/components/technologies/JavaScript';
import KestraLogo from '@/components/technologies/Kestra';
import Kubernetes from '@/components/technologies/Kubernetes';
import LangGraphIcon from '@/components/technologies/LangGraph';
import MDXIcon from '@/components/technologies/MDXIcon';
import Mem0Logo from '@/components/technologies/Mem0';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prometheus from '@/components/technologies/Prometheus';
import PythonLogo from '@/components/technologies/Python';
import QdrantLogo from '@/components/technologies/Qdrant';
import RazorpayLogo from '@/components/technologies/RazorPay';
import ReactIcon from '@/components/technologies/ReactIcon';
import RedisIcon from '@/components/technologies/Redis';
import SCSSLogo from '@/components/technologies/SCSS';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';
import { GithubLogoIcon, OpenAiLogoIcon } from '@phosphor-icons/react/dist/ssr';

export const projects: Project[] = [
  {
    title: 'StackWave',
    description:
      'A real-time collaborative platform for developers to ask questions, share knowledge, and refactor code with AI assistance.',
    image: '/project/best/stackwave.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196207/stackwave_ssgyqi.mp4',
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
      { name: 'Github', icon: <GithubLogoIcon size={22} key="github" /> },

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
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196195/devtinder-app_yigjq2.mp4',
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
      { name: 'Github', icon: <GithubLogoIcon key="github" size={22} /> },
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
    title: 'NutriGuard AI - Multi-Agentic Workflow',
    description: 'AI that reads your food labels and helps you eat smarter.',
    image: '/project/best/nutri.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196203/ng_ozz8kx.mp4',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongo" /> },
      { name: 'Node Js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      {
        name: 'LangGraph & LangChain',
        icon: <LangGraphIcon key="langgraph" />,
      },
      { name: 'Kestra', icon: <KestraLogo key="kestra" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      // { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'Kubernetes', icon: <Kubernetes key="kubernetes" /> },
      { name: 'Mem0', icon: <Mem0Logo key="memory" /> },
    ],
    // live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/nutri-guard-ai',
    isWorking: false, // Currently in development
  },
  {
    title: 'CodeForge AI',
    description:
      'Transform your ideas into beautiful web applications instantly. Generate Code, deploy automatically and push directly to github all with single prompt',
    image: '/project/best/cursor-app.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196208/cursor-app_fexht1.mp4',
    link: '#',
    github: 'https://github.com/virajpwdn/GENAI',
    technologies: [
      { name: 'Python', icon: <PythonLogo key="pythonlogo" /> },
      {
        name: 'LangGraph & LangChain',
        icon: <LangGraphIcon key="langgraph" />,
      },
      { name: 'Mem0', icon: <Mem0Logo key="memory" /> },
      { name: 'FastApi', icon: <FastAPILogo key="fastapi" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongo" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      // { name: 'Kubernetes', icon: <Kubernetes key="kubernetes" /> },
    ],
    // live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/code-forge',
    isWorking: false, // Currently in development
  },
  {
    title: 'PersonaAI',
    description:
      'PersonaAI is an AI-driven platform that allows users to interact with the personas of highly successful individuals to seek guidance, insights, and advice on their goals and plans.',
    image: '/project/best/persona.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196201/persona-app_vutoal.mp4',
    link: '#',
    github: 'https://github.com/virajpwdn/PersonaAI',
    technologies: [
      { name: 'Python', icon: <PythonLogo key="python" /> },
      { name: 'Postgres', icon: <PostgreSQL key="postgres" /> },
      {
        name: 'LangGraph & LangChain',
        icon: <LangGraphIcon key="langgraph" />,
      },
      { name: 'Qdrant DB', icon: <QdrantLogo key="qdant" /> },
      { name: 'Mem0', icon: <Mem0Logo key="memory" /> },
      { name: 'NextJs', icon: <NextJs key="nextjs" /> },
      {
        name: 'OpenAI',
        icon: <OpenAiLogoIcon key="openai" width={22} height={24} />,
      },
      { name: 'FastAPI', icon: <FastAPILogo key="mongo" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'MDX', icon: <MDXIcon key="postman" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Kubernetes', icon: <Kubernetes key="kubernetes" /> },
    ],
    // live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/persona',
    isWorking: false, // Currently in development
  },
  {
    title: 'Ragify',
    description:
      'Upload PDFs and get intelligent, accurate answers powered by advanced Al. No more manual searching through pages of documents.',
    image: '/project/best/pdf-chat.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196189/pdfchat-app_vtie0v.mp4',
    link: '#',
    github: 'https://github.com/virajpwdn/GENAI/tree/main/rag',
    technologies: [
      { name: 'Python', icon: <PythonLogo key="python" /> },
      {
        name: 'LangChain',
        icon: <LangGraphIcon key="langgraph" />,
      },
      { name: 'Qdrant DB', icon: <QdrantLogo key="qdant" /> },
      { name: 'Mem0', icon: <Mem0Logo key="memory" /> },
      {
        name: 'OpenAI',
        icon: <OpenAiLogoIcon key="openai" width={22} height={24} />,
      },
      { name: 'FastAPI', icon: <FastAPILogo key="mongo" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      // { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      // { name: 'Kubernetes', icon: <Kubernetes key="kubernetes" /> },
    ],
    // live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/rag',
    isWorking: false, // Currently in development
  },
  {
    title: 'Instagram - Backend',
    description:
      'A backend-focused project built to understand how modern social platforms are designed, scaled, and extended with real-time and AI-powered features.',
    image: '/project/best/instagram.png',
    // video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: '#',
    github: 'https://github.com/virajpwdn/Instagram/tree/main/Backend',
    technologies: [
      { name: 'Node Js', icon: <NodeJs key="nodejs" /> },
      {
        name: 'Open AI',
        icon: <OpenAiLogoIcon key="openai" height={24} width={24} />,
      },
      { name: 'Javascript', icon: <JavaScript key="javascript" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'React', icon: <ReactIcon key="reactjs" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Redis', icon: <RedisIcon key="redis" width={22} height={28} /> },
      { name: 'Socket IO', icon: <SocketIo key="socketio" /> },
    ],
    // live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/instagram',
    isWorking: true, // Currently in development
  },
  {
    title: 'Apple',
    description:
      "Apple-style MacBook Pro landing page with buttery-smooth 3D animations and interactive Three.js modeling—pixel-perfect recreation of Apple's showcase experience.",
    image: '/project/best/apple.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196189/pdfchat-app_vtie0v.mp4',
    link: 'https://apple.virajpatwardhan.in/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Three Js', icon: <ThreeJs key="three" /> },
      { name: 'GSAP', icon: <GSAPIcon key="gsap" /> },
    ],
    github: 'https://github.com/virajpwdn/apple',
    live: 'https://apple.virajpatwardhan.in/',
    details: true,
    projectDetailsPageSlug: '/projects/apple',
    isWorking: true,
  },
  {
    title: 'Zentry Games',
    description:
      'Gaming website with immersive 3D animations, agent showcases, and performance-optimized experience',
    image: '/project/best/game.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196206/zentry-app_jw1jmx.mp4',
    link: 'https://zentry.virajpatwardhan.in/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'GSAP', icon: <GSAPIcon key="gsap" /> },
    ],
    github: 'https://github.com/virajpwdn/Zentry',
    live: 'https://zentry.virajpatwardhan.in/',
    details: true,
    projectDetailsPageSlug: '/projects/zentry',
    isWorking: true,
  },
  {
    title: 'TransferX',
    description:
      'A platform to store and manage your data with TransferX – The all-in-one platform offering scalable, secure, and efficient storage for all your needs.',
    image: '/project/best/transferx.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196178/transferx_uf7zsj.mp4',
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
    title: 'Virtual R',
    description:
      'Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!',
    image: '/project/best/virtual.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196171/virtual_huwehe.mp4',
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
    title: 'Base Habitation',
    description: 'An awwwards winning website, site of the month',
    image: '/project/best/base.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196193/basehabitation_dke47t.mp4',
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
    title: 'Flutter',
    description:
      'Flutter compiles down to native machine code for fast apps and beautiful animations.',
    image: '/project/best/flutter.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196205/expo_ib3uva.mp4',
    link: 'https://expo.virajpatwardhan.in',
    technologies: [
      { name: 'Scss', icon: <SCSSLogo key="scss" /> },
      { name: 'HTML', icon: <HTMLLogo key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Javascript', icon: <JavaScript key="javascript" /> },
      { name: 'Vecel', icon: <Vercel key="vercel" /> },
    ],
    // github: 'https://expo.virajpatwardhan.in',
    live: 'https://expo.virajpatwardhan.in',
    details: true,
    projectDetailsPageSlug: '/projects/expo',
    isWorking: true,
  },
  {
    title: 'SunDown Studios',
    description:
      'Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments',
    image: '/project/best/sundown.png',
    video:
      'https://res.cloudinary.com/dqka1mg1a/video/upload/v1769196184/sundown_szuugo.mp4',
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
];
