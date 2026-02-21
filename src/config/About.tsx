import AWS from '@/components/technologies/AWS';
import CloudflareIcon from '@/components/technologies/Cloudflare';
import Docker from '@/components/technologies/Docker';
import Grafana from '@/components/technologies/Grafana';
import JavaScript from '@/components/technologies/JavaScript';
import JenkinsLogo from '@/components/technologies/Jenkins';
import Kubernetes from '@/components/technologies/Kubernetes';
import LangGraphIcon from '@/components/technologies/LangGraph';
import Mem0Logo from '@/components/technologies/Mem0';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prometheus from '@/components/technologies/Prometheus';
import PythonLogo from '@/components/technologies/Python';
import QdrantLogo from '@/components/technologies/Qdrant';
import ReactIcon from '@/components/technologies/ReactIcon';
import RedisIcon from '@/components/technologies/Redis';
import TypeScript from '@/components/technologies/TypeScript';
import { OpenAiLogoIcon } from '@phosphor-icons/react/dist/ssr';

export const mySkills = [
  <ReactIcon key="react" />,
  <JavaScript key="javascript" />,
  <TypeScript key="typescript" />,
  <MongoDB key="mongodb" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <Docker key="docker" />,
  <PythonLogo key="python" />,
  <CloudflareIcon width={24} height={24} key="cloudflare" />,
  <JenkinsLogo key="jenkins" />,
  <LangGraphIcon key="langgraph" />,
  <OpenAiLogoIcon width={22} height={24} key="openai" />,
  <Mem0Logo key="mem0" />,
  <QdrantLogo key="qdrant" />,
  <RedisIcon height={28} width={22} key="redis" />,
  <Grafana key="grafana" />,
  <Prometheus key="prometheus" />,
  <AWS key="aws" />,
  <Kubernetes key="kubernetes" />,
];

export const about = {
  name: 'Viraj Patwardhan',
  description: `Three years in, I've gone from writing my first components to owning systems end-to-end in production. I'm drawn to hard problems — the kind that need clean architecture, not just clever code. When I'm not building, I'm probably strumming guitar, at the gym, planning my next trip, or on my third coffee of the day.`,
};
