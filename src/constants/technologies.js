// techStackData.js
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript, SiPython, SiC, SiCplusplus,
  SiVuedotjs, SiTailwindcss, SiFlutter,
  SiDjango, SiExpress, SiMongodb, SiRedis, SiPostgresql, SiMysql,
  SiFirebase, SiDocker, SiKubernetes, SiAmazonaws,
  SiStripe, SiPaypal,
  SiN8n, SiFigma, SiLinux, SiHtml5, SiCss3,
  SiJenkins, SiGithubactions
} from "react-icons/si";
import { FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiJest, SiPostman } from "react-icons/si";

export const TECH_STACK = [
  {
    group: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "JavaScript", icon: SiTypescript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "C", icon: SiC, color: "text-blue-600" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
    ]
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
      { name: "Next.js", icon: TbBrandNextjs, color: "text-neutral-100" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ]
  },
  {
    group: "Mobile",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
    ]
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "Django", icon: SiDjango, color: "text-green-700" },
      { name: "REST APIs", icon: SiPostman, color: "text-orange-500" },
    ]
  },
  {
    group: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
    ]
  },
  {
    group: "AI/ML",
    items: [
      { name: "NLP", icon: SiPython, color: "text-green-500" },
      { name: "Collaborative Filtering", icon: SiPython, color: "text-purple-400" },
      { name: "Content-Based Filtering", icon: SiPython, color: "text-indigo-400" },
    ]
  },
  {
    group: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws, color: "text-amber-600" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-300" },
      { name: "Jenkins", icon: SiJenkins, color: "text-red-500" },
    ]
  },
  {
    group: "Automation",
    items: [
      { name: "n8n", icon: SiN8n, color: "text-red-500" },
      { name: "Webhooks", icon: SiN8n, color: "text-purple-400" },
      { name: "API Integration", icon: SiPostman, color: "text-orange-400" },
    ]
  },
  {
    group: "Payment",
    items: [
      { name: "Stripe", icon: SiStripe, color: "text-blue-400" },
      { name: "PayPal", icon: SiPaypal, color: "text-blue-600" },
    ]
  },
  {
    group: "Analytics",
    items: [
      { name: "Firebase Analytics", icon: SiFirebase, color: "text-yellow-500" },
      { name: "UXCam", icon: SiFigma, color: "text-purple-400" },
    ]
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: SiGithubactions, color: "text-orange-500" },
      { name: "Figma", icon: SiFigma, color: "text-purple-400" },
      { name: "VS Code", icon: SiLinux, color: "text-blue-500" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-400" },
    ]
  },
];
