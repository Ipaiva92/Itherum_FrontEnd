"use client";
import variables from "@/app/variables.module.scss";
import Image from "next/image";
import "./home.scss";
import loginRoute from "@/routes/post";
import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const router = useRouter();

  const notify = () =>
    toast.error("Failed to login!", {
      position: "top-right",
      autoClose: 4998,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleUserChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMailValue(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div>
      <div
        className="container"
        style={{ backgroundColor: variables.backgroundColorWhite }}
      >
        <Image
          src="/images/Logo_Itherum_azul.svg"
          alt="Itherum_Logo"
          width={406}
          height={344.72}
        ></Image>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: variables.backgroundColor,
          color: variables.whiteColor,
        }}
      >
        <div className="container-input">
          <p>Logar</p>
          <input
            type="text"
            id="inputElement"
            value={mailValue}
            onChange={handleUserChange}
          ></input>
          <input
            type="text"
            id="inputElement"
            value={passwordValue}
            onChange={handlePasswordChange}
          ></input>
          <button
            style={{ backgroundColor: variables.primaryBtnColor }}
            onClick={async () => {
              (await loginRoute(mailValue, passwordValue))
                ? router.push("/dashboard")
                : notify();
            }}
          >
            Entrar
          </button>
          <button disabled>Conecte-se</button>
        </div>
        <ToastContainer limit={1} style={{ width: "50%", height: "10%" }} />
      </div>
    </div>
  );
}
