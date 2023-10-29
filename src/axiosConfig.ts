import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

const isAxiosError = (error: unknown): error is AxiosError => {
  return "isAxiosError" in (error as AxiosError);
};

export { api, isAxiosError };
