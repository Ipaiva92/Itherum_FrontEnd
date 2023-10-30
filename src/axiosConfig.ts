import axios, { AxiosError } from "axios";

const baseURL = "http://localhost:3333";

const api = axios.create({
  baseURL: baseURL,
});

const isAxiosError = (error: unknown): error is AxiosError => {
  return "isAxiosError" in (error as AxiosError);
};

export { api, isAxiosError };
