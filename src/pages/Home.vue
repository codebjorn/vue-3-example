<script setup lang="ts">
import { Row, Col, Card, Statistic } from "@arco-design/web-vue";
import { Dashboard } from "@/layouts";
</script>

<template>
  <Dashboard title="Dashboard">
    <Row :gutter="[12, 12]">
      <Col :md="8" :sm="24" :xs="24">
        <Card hoverable>
          <Statistic title="Posts" :value="325" show-group-separator />
        </Card>
      </Col>
      <Col :md="8" :sm="24" :xs="24">
        <Card hoverable>
          <Statistic title="Users" :value="12" show-group-separator />
        </Card>
      </Col>
      <Col :md="8" :sm="24" :xs="24">
        <Card hoverable>
          <Statistic title="Your Posts" :value="4" show-group-separator />
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card title="This is dashboard"
          ><p>
            In this dashboard we provide all info that you need to understand
            current situation with your data
          </p></Card
        >
      </Col>
    </Row>
  </Dashboard>
</template>
