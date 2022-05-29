<script setup lang="ts">
import { Row, Col, Card } from "@arco-design/web-vue";
import { Dashboard } from "@/layouts";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref } from "vue";

type MediaRouteParams = {
  show: "all" | "used" | "unused";
};

const route = useRoute();
const { show: showParam } = route.query as MediaRouteParams;
const show = ref(showParam);

onBeforeRouteUpdate(({ query }) => {
  show.value = (query as MediaRouteParams).show;
});
</script>

<template>
  <Dashboard title="Media">
    <Row>
      <Col>
        <Card title="This is media"
          ><p>In this media you can see {{ show }}</p></Card
        >
      </Col>
    </Row>
  </Dashboard>
</template>
