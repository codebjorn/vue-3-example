<script lang="ts" setup>
import { Drawer } from "@arco-design/web-vue";
import { Sidebar } from "@/components";
import { menu } from "@/data";

type DrawerProps = {
  visible: boolean;
  setVisible(): void;
};
const props = defineProps<DrawerProps>();

const handleOk = () => {
  props.setVisible();
};
const handleCancel = () => {
  props.setVisible();
};
</script>
<template>
  <Drawer
    :visible="props.visible"
    placement="left"
    @ok="handleOk"
    @cancel="handleCancel"
    unmountOnClose
    esc-to-close
    :footer="false"
  >
    <Sidebar :menu="menu" />
  </Drawer>
</template>

<style lang="scss">
.arco-drawer {
  background-color: var(--color-bg-2);

  &-header {
    border-bottom: 0;
  }

  &-body {
    padding: 0;
  }
}
</style>
