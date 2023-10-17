import variables from "@/app/variables.module.scss";
import Image from "next/image";
import "./home.scss";
import loginRoute from "@/app/routes/post";

export default function Home() {
  loginRoute("igao@teste.com", "blimbimds");
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
          <input></input>
          <input></input>
          <button>Entrar</button>
          <button>Conecte-se</button>
        </div>
      </div>
    </div>
  );
}
