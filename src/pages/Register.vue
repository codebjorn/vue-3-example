<script setup lang="ts">
import {
  Row,
  Col,
  Card,
  Form,
  FormItem,
  Input,
  InputPassword,
  Checkbox,
  Button,
  type ValidatedError,
} from "@arco-design/web-vue";
import { CenteredPage } from "@/layouts";
import { reactive } from "vue";
import { Logo } from "@/components";

const form = reactive({
  username: "",
  email: "",
  password: "",
  agree: false,
});

const submit = ({
  values,
}: {
  values: Record<string, unknown>;
  errors: Record<string, ValidatedError> | undefined;
}) => {
  console.log(values);
};
</script>

<template>
  <CenteredPage title="Register">
    <Row>
      <Col :span="24">
        <Card>
          <Logo position="center" />
          <Form
            :model="form"
            layout="vertical"
            auto-label-width
            @submit="submit"
          >
            <FormItem field="username" label="Username">
              <Input v-model="form.username" placeholder="Your username..." />
            </FormItem>
            <FormItem field="email" label="Email">
              <Input v-model="form.username" placeholder="Your email..." />
            </FormItem>
            <FormItem field="password" label="Password">
              <InputPassword
                v-model="form.password"
                placeholder="Your password..."
              />
            </FormItem>
            <FormItem field="agree">
              <Checkbox v-model="form.agree">
                I agree with company policy
              </Checkbox>
            </FormItem>
            <FormItem>
              <Button html-type="submit">Submit</Button>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  </CenteredPage>
</template>
