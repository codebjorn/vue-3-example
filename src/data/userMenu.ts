import type { Menu } from "@/components/types";
import {
  IconLeftCircle,
  IconSettings,
  IconUser,
} from "@arco-design/web-vue/es/icon";

export const userMenu: Menu = [
  {
    icon: IconSettings,
    link: "/settings",
    title: "Settings",
  },
  {
    icon: IconUser,
    link: "/profile",
    title: "Profile",
  },
  {
    icon: IconLeftCircle,
    link: "logout",
    title: "Log out",
  },
];
