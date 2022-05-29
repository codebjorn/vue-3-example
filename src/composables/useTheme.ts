import { useThemeStore } from "@/stores/theme";
import { onMounted } from "vue";

export const useTheme = () => {
  const { isDarkTheme, setDOMDarkTheme, setDOMLightTheme } = useThemeStore();

  onMounted(() => {
    if (isDarkTheme) {
      setDOMDarkTheme();
      return;
    }

    setDOMLightTheme();
  });
};
