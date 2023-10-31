"use client";
import variables from "@/app/variables.module.scss";
import "./dashboard.scss";
import Image from "next/image";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

export default function Dashboard() {
  return (
    <div>
      {" "}
      <div
        className="topNavBar"
        style={{ backgroundColor: variables.secondaryColor }}
      >
        <button
          className="navBarMenuBtn"
          style={{ backgroundColor: variables.primaryColorVariant }}
          onClick={() => {}}
        >
          <AiOutlineMenu color="white" size="20" />
        </button>
        <Image
          className="logo"
          src="/images/Logo_Itherum_azul_pequena.svg"
          alt="Itherum_Logo"
          width={63}
          height={38.35}
        ></Image>
        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("userId");
          }}
        >
          <RiLogoutBoxRLine />
          Log out
        </button>
      </div>
      <div
        className="leftNavBar"
        style={{ backgroundColor: variables.primaryColorVariant }}
      >
        <a>Teste</a>
        <a>Teste</a>
        <a>Teste</a>
      </div>
    </div>
  );
}
