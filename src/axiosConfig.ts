import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

const isAxiosError = (error: unknown): error is AxiosError => {
  return "isAxiosError" in (error as AxiosError);
};

export { api, isAxiosError };
