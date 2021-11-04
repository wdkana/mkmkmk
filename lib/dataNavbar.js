import {
  FaBars,
  FaWallet,
  FaServer,
  FaTools,
  FaHome,
  FaWpexplorer,
  FaProjectDiagram,
  FaChartLine,
  FaBook,
  FaLink,
  FaThumbtack,
} from "react-icons/fa";

const dataNav = [
  {
    id: 1,
    value: "dashboard",
    title: "Dashboard",
    url: "/",
    icon: FaHome,
  },
  {
    id: 2,
    value: "explore",
    title: "Explore",
    url: "explore",
    icon: FaWpexplorer,
  },
  {
    id: 3,
    value: "pinned",
    title: "Pinned",
    url: "pinned",
    icon: FaThumbtack,
  },
];

const dataSubNav = [
  {
    id: 3,
    value: "project",
    title: "Project",
    url: "project",
    icon: FaProjectDiagram,
  },
  { id: 2, value: "link", title: "Link", url: "link", icon: FaLink },
  { id: 3, value: "wallet", title: "Wallet", url: "wallet", icon: FaWallet },
  {
    id: 4,
    value: "pengaturan",
    title: "Pengaturan",
    url: "pengaturan",
    icon: FaTools,
  },
];

export {dataNav,dataSubNav }