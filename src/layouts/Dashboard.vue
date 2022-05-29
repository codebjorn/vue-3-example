<script lang="ts" setup>
import {
  Layout,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
} from "@arco-design/web-vue";
import { Sidebar, Header, Logo, Footer } from "@/components";
import { menu, userMenu } from "@/data";
import type { HeaderItems } from "@/components/types";

type DashboardProps = {
  title: string;
  header?: HeaderItems;
};

const props = defineProps<DashboardProps>();
</script>
<template>
  <Teleport to="head">
    <title>{{ props.title }}</title>
  </Teleport>
  <Layout class="dashboard">
    <LayoutSider
      class="dashboard-side"
      collapsible
      :width="230"
      :collapsed-width="72"
    >
      <slot name="sider">
        <Logo />
        <Sidebar :menu="menu" />
      </slot>
    </LayoutSider>
    <Layout class="dashboard-content">
      <LayoutHeader>
        <slot name="header">
          <Header
            :title="props.header?.title ?? title"
            :subtitle="props.header?.subtitle"
            :user-menu="userMenu"
        /></slot>
      </LayoutHeader>
      <LayoutContent><slot>Add content here...</slot></LayoutContent>
      <LayoutFooter>
        <slot name="footer"><Footer /></slot>
      </LayoutFooter>
    </Layout>
  </Layout>
</template>

<style lang="scss">
.dashboard {
  height: 100%;
  padding: var(--space-2);

  &-side {
    padding: var(--space-1);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-small);
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  &-content {
    & > * {
      margin: var(--space-1) 0;

      &:first-child {
        margin-top: 0;
      }
    }

    & .arco-layout-content {
      & > * {
        margin: var(--space-2) 0;
      }
    }

    @media (min-width: 768px) {
      padding-left: var(--space-2);
    }
  }
}
</style>
