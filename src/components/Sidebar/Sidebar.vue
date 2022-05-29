<script lang="ts" setup>
import { Menu, MenuItem, SubMenu } from "@arco-design/web-vue";
import { ref } from "vue";
import { onBeforeRouteUpdate, RouterLink, useRoute } from "vue-router";
import type { Menu as MenuType } from "../types";

type SidebarProps = {
  menu: MenuType;
};

type KeysRef = {
  openKey: boolean | string;
  selectedKey: false | string;
};

const getSelectedKey = ({
  path,
  fullPath,
}: {
  path: string;
  fullPath: string;
}) => {
  const index = props.menu.findIndex((menuItem) => menuItem.link === path);
  const subIndex = props.menu[index]
    ? props.menu[index].subMenu?.findIndex(
        (subMenuItem) => subMenuItem.link === fullPath
      )
    : false;

  if (typeof subIndex === "undefined" || subIndex === -1) {
    return {
      openKey: false,
      selectedKey: index.toString(),
    };
  }

  return {
    openKey: index.toString(),
    selectedKey: `${index}_${subIndex}`,
  };
};

const { path, fullPath } = useRoute();
const props = defineProps<SidebarProps>();
const keys = ref<KeysRef>(getSelectedKey({ path, fullPath }));

onBeforeRouteUpdate(({ path, fullPath }) => {
  keys.value = getSelectedKey({ path, fullPath });
});
</script>

<template>
  <Menu
    class="dashboard-sidebar"
    :default-selected-keys="['0']"
    :opened-keys="[keys.openKey]"
    :selected-keys="[keys.selectedKey]"
  >
    <template
      v-for="({ icon, title, link, subMenu }, index) in props.menu"
      :key="index"
    >
      <RouterLink :to="link">
        <MenuItem v-if="!subMenu" :key="index.toString()">
          <template #icon><component :is="icon" /></template>
          {{ title }}
        </MenuItem>
      </RouterLink>
      <SubMenu v-if="subMenu" :key="index.toString()">
        <template #icon><component :is="icon" /></template>
        <template #title>{{ title }}</template>
        <template
          v-for="({ title, link }, subMenuIndex) in subMenu"
          :key="subMenuIndex"
        >
          <RouterLink :to="link"
            ><MenuItem :key="`${index}_${subMenuIndex}`">{{ title }}</MenuItem>
          </RouterLink>
        </template>
      </SubMenu>
    </template>
  </Menu>
</template>

<style lang="scss" scoped>
.dashboard-sidebar {
  width: 100%;
  height: 100%;
}
</style>
