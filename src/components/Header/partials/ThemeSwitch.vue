<script lang="ts" setup>
import { IconSunFill, IconMoonFill } from "@arco-design/web-vue/es/icon";
import { Switch } from "@arco-design/web-vue";
import { useThemeStore } from "@/stores/theme";
import { onUpdated, ref } from "vue";

const { setThemeDark, setThemeLight, isDarkTheme } = useThemeStore();

const checked = ref(isDarkTheme);
const changeCheck = (value: string | number | boolean) =>
  (checked.value = !!value);

onUpdated(() => {
  if (checked.value) {
    setThemeDark();
    return false;
  }

  if (!checked.value) {
    setThemeLight();
  }
});
</script>
<template>
  <Switch size="small" @change="changeCheck" :default-checked="checked">
    <template #checked-icon>
      <IconMoonFill />
    </template>
    <template #unchecked-icon>
      <IconSunFill />
    </template>
  </Switch>
</template>
