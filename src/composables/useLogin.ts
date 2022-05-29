import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

type ErrorCallback = {
  username: string;
  error: string;
};

type SetLogin = {
  username: string;
  password: string;
  redirectTo: string;
  errorCallback?: ({ username, error }: ErrorCallback) => void;
};

const fetchToken = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const {
    data: { token },
  } = await axios.post<{ token: string }>("https://reqres.in/api/login", {
    username,
    password,
  });

  return token;
};

export const useLogin = () => {
  const { setToken } = useAuthStore();
  const router = useRouter();

  const isLoading = ref(false);

  const setLogin = async ({
    username,
    password,
    redirectTo,
    errorCallback,
  }: SetLogin) => {
    isLoading.value = true;
    try {
      const token = await fetchToken({ username, password });
      setToken(token);
      router.push(redirectTo);
    } catch (e: unknown) {
      const error = e as {
        response: { data: { error: string } };
      };
      const errorMessage = error.response.data.error;

      if (!errorCallback) {
        throw new Error(errorMessage);
      }

      errorCallback({ username, error: errorMessage });
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, setLogin };
};
