<script lang="ts" setup>
import { Layout, LayoutContent, LayoutFooter } from "@arco-design/web-vue";
import { Footer } from "@/components";

type CenteredPageProps = {
  title: string;
};

const props = defineProps<CenteredPageProps>();
</script>
<template>
  <Teleport to="head">
    <title>{{ props.title }}</title>
  </Teleport>
  <Layout class="centered-page">
    <LayoutContent class="centered-page-content"
      ><slot>Add content here...</slot></LayoutContent
    >
    <LayoutFooter>
      <slot name="footer"><Footer /></slot>
    </LayoutFooter>
  </Layout>
</template>

<style lang="scss">
.centered-page {
  height: 100%;
  align-items: center;
  justify-content: center;

  & > * {
    min-width: 25vw;
    margin: var(--space-1) 0;

    &:first-child {
      margin-top: 0;
    }
  }

  &-content {
    flex: 0;
  }
}
</style>
