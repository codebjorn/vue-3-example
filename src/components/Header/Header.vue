<script lang="ts" setup>
import { ref } from "vue";
import { PageHeader } from "@arco-design/web-vue";
import { IconMenu } from "@arco-design/web-vue/es/icon";
import type { Menu } from "../types";
import ThemeSwitch from "./partials/ThemeSwitch.vue";
import UserMenu from "./partials/UserMenu.vue";
import Drawer from "./partials/Drawer.vue";

type HeaderProps = {
  title: string;
  subtitle?: string;
  userMenu: Menu;
};

const props = defineProps<HeaderProps>();
const drawerVisible = ref(false);
const setDrawerVisible = () => (drawerVisible.value = !drawerVisible.value);
</script>
<template>
  <PageHeader
    class="dashboard-header"
    :subtitle="props.subtitle"
    :show-back="false"
  >
    <template #title>
      <span
        class="dashboard-header-menu arco-icon-hover arco-page-header-icon-hover arco-page-header-back-btn"
        @click="setDrawerVisible"
        ><IconMenu
      /></span>
      <span class="arco-page-header-title">{{ props.title }} </span>
    </template>
    <template #extra>
      <ThemeSwitch />
      <UserMenu :menu="props.userMenu" />
    </template>
  </PageHeader>
  <Drawer :visible="drawerVisible" :set-visible="setDrawerVisible" />
</template>

<style lang="scss">
.dashboard-header {
  padding: var(--space-1);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);
  background-color: var(--color-menu-light-bg);

  & .arco-page-header-wrapper {
    padding: 0;
  }

  & .arco-icon-hover {
    padding: 10px;
  }

  & .arco-page-header-extra {
    & > * {
      margin: 0 calc(var(--space-1) / 2);

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &-menu {
    display: inline-block;

    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
