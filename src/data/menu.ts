import {
  IconApps,
  IconImage,
  IconPenFill,
  IconUser,
} from "@arco-design/web-vue/es/icon";

export const menu = [
  {
    icon: IconApps,
    title: "Dashboard",
    link: "/",
  },
  {
    icon: IconImage,
    title: "Media",
    link: "/media",
    subMenu: [
      {
        title: "All",
        link: "/media?show=all",
      },
      {
        title: "Used",
        link: "/media?show=used",
      },
      {
        title: "Unused",
        link: "/media?show=unused",
      },
    ],
  },
  {
    icon: IconPenFill,
    title: "Posts",
    link: "/posts",
    subMenu: [
      {
        title: "All",
        link: "/posts?show=all",
      },
      {
        title: "Published",
        link: "/posts?show=published",
      },
      {
        title: "Deleted",
        link: "/posts?show=deleted",
      },
    ],
  },
  {
    icon: IconUser,
    title: "Profile",
    link: "/profile",
  },
];
