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
import { reactive, ref } from "vue";
import { Logo } from "@/components";
import { useLogin } from "@/composables";

type FormProps = {
  username: string;
  password: string;
  rememberMe: boolean;
};

enum ApiErrors {
  userNotFound = "user not found",
  missingUsername = "Missing email or username",
  missingPassword = "Missing password",
}

const { isLoading, setLogin } = useLogin();
const formRef = ref();
const form = reactive<FormProps>({
  username: "",
  password: "",
  rememberMe: false,
});

const submit = ({
  values,
  errors,
}: {
  values: Record<string, unknown>;
  errors: Record<string, ValidatedError> | undefined;
}) => {
  if (errors) {
    return;
  }

  const { username, password } = values as {
    username: string;
    password: string;
  };

  setLogin({
    username,
    password,
    redirectTo: "/",
    errorCallback: ({ username, error }) => {
      if (error === ApiErrors.userNotFound) {
        formRef.value.setFields({
          username: {
            value: username,
            status: "error",
            message: ApiErrors.userNotFound,
          },
        });
      }

      if (error === ApiErrors.missingUsername) {
        formRef.value.setFields({
          username: {
            value: username,
            status: "error",
            message: ApiErrors.missingUsername,
          },
        });
      }

      if (error === ApiErrors.missingPassword) {
        formRef.value.setFields({
          password: {
            value: password,
            status: "error",
            message: ApiErrors.missingPassword,
          },
        });
      }
    },
  });
};
</script>

<template>
  <CenteredPage title="Login">
    <Row>
      <Col :span="24">
        <Card>
          <Logo position="center" />
          <Form
            ref="formRef"
            :model="form"
            layout="vertical"
            auto-label-width
            @submit="submit"
          >
            <FormItem
              field="username"
              label="Username"
              hide-asterisk
              :rules="[
                {
                  type: 'string',
                  required: true,
                  message: 'Username is required',
                },
              ]"
              :validate-trigger="['input']"
            >
              <Input v-model="form.username" placeholder="Your username..." />
            </FormItem>
            <FormItem
              field="password"
              label="Password"
              hide-asterisk
              :rules="[{ required: true, message: 'Password is required' }]"
              :validate-trigger="['input']"
            >
              <InputPassword
                v-model="form.password"
                placeholder="Your password..."
              />
            </FormItem>
            <FormItem field="remember-me">
              <Checkbox v-model="form.rememberMe"> Remember Me </Checkbox>
            </FormItem>
            <FormItem>
              <Button html-type="submit" :loading="isLoading">Submit</Button>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  </CenteredPage>
</template>
