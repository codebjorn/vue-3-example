<script setup lang="ts">
import { Row, Col, Card } from "@arco-design/web-vue";
import { Dashboard } from "@/layouts";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref } from "vue";

type PostsRouteParams = {
  show: "all" | "published" | "deleted";
};

const route = useRoute();
const { show: showParam } = route.query as PostsRouteParams;
const show = ref(showParam);

onBeforeRouteUpdate(({ query }) => {
  show.value = (query as PostsRouteParams).show;
});
</script>

<template>
  <Dashboard title="Posts">
    <Row>
      <Col>
        <Card title="This is posts"
          ><p>In this posts you can see {{ show }}</p></Card
        >
      </Col>
    </Row>
  </Dashboard>
</template>
