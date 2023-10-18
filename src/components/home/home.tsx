"use client";
import variables from "@/app/variables.module.scss";
import Image from "next/image";
import "./home.scss";
import loginRoute from "@/routes/post";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

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
            onClick={() => {
              loginRoute(mailValue, passwordValue);
            }}
          >
            Entrar
          </button>
          <button disabled>Conecte-se</button>
        </div>
      </div>
    </div>
  );
}
