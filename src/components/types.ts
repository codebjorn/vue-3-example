import type { Component } from "vue";

export type MenuItem = {
  icon: Component;
  title: string;
  link: string;
  subMenu?: { title: string; link: string }[];
};

export type Menu = MenuItem[];

export type HeaderItems = {
  title: string;
  subtitle?: string;
};
