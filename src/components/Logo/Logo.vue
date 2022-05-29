<script lang="ts" setup>
type LogoProps = {
  position?: "flex-start" | "center" | "flex-end";
};
const props = defineProps<LogoProps>();
</script>
<template>
  <div
    class="logo"
    :style="`justify-content: ${props.position ?? 'flex-start'}`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 261.76 226.69"
      xmlns:v="https://vecta.io/nano"
    >
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
        fill="#41b883"
      />
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
        fill="#34495e"
      />
    </svg>
  </div>
</template>

<style lang="scss">
.logo {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--space-1);

  & > svg {
    max-width: 35px;
  }
}
</style>
