import { api, isAxiosError } from "@/axiosConfig";

const loginRoute = async (email: string, password: string) => {
  try {
    const response = await api.post("/User/Login", { email, password });
    console.log(response?.data)
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err.response?.data);
    }
  }
};

export default loginRoute;
