"use client";
import variables from "@/app/variables.module.scss";
import "./dashboard.scss";
import Image from "next/image";
import { RiLogoutBoxRLine, RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { SetStateAction, useState } from "react";
import { BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const router = useRouter();

  const handleItemClick = (item: SetStateAction<string>) => {
    setActiveItem(item);
  };

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <header style={{ backgroundColor: variables.secondaryColor }}>
        <nav className="navbar">
          <button
            className={`navBarMenuBtn  main-content ${
              collapsed ? "collapsed" : ""
            }`}
            style={{ backgroundColor: variables.primaryColorVariant }}
            onClick={toggleMenu}
          >
            <AiOutlineMenu color="white" size="20" />
          </button>
          <div className="logo">
            <Image
              src="/images/Logo_Itherum_azul_pequena.svg"
              alt="Itherum_Logo"
              width={63}
              height={38.35}
            ></Image>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#contact">
                <button
                  className="logout"
                  onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/")
                  }}
                >
                  <RiLogoutBoxRLine />
                  Log out
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        style={{ backgroundColor: variables.primaryColorVariant }}
        className={`sidebar ${collapsed ? "collapsed" : ""}`}
      >
        <a
          href="#home"
          className={activeItem === "home" ? "active" : ""}
          onClick={() => handleItemClick("home")}
        >
          <i className="fa fa-home"></i> <BsHouseFill size={30} />
        </a>
        <a
          href="#services"
          className={activeItem === "services" ? "active" : ""}
          onClick={() => handleItemClick("services")}
        >
          <i className="fa fa-cogs"></i> <FaUser size={30} />
        </a>
        <a
          href="#contact"
          className={activeItem === "contact" ? "active" : ""}
          onClick={() => handleItemClick("contact")}
        >
          <i className="fa fa-envelope"></i>
          <RiMoneyDollarCircleFill size={30} />
        </a>
      </div>
    </div>
  );
}
