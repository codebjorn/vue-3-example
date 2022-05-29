<script lang="ts" setup>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { Avatar, Dropdown, Doption } from "@arco-design/web-vue";
import { RouterLink } from "vue-router";
import type { Menu } from "@/components/types";

type UserMenuProps = {
  menu: Menu;
};

const props = defineProps<UserMenuProps>();
</script>

<template>
  <Dropdown position="br">
    <Avatar :size="32">
      <IconUser />
    </Avatar>
    <template #content>
      <template
        v-for="({ title, link, icon }, index) in props.menu"
        :key="index"
      >
        <RouterLink :to="link">
          <Doption>
            <template #icon>
              <component :is="icon" />
            </template>
            <template #default>{{ title }}</template>
          </Doption>
        </RouterLink>
      </template>
    </template>
  </Dropdown>
</template>

<style scoped>
.arco-avatar {
  cursor: pointer;
}
</style>
