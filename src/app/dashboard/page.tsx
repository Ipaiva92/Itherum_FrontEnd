"use client";
import variables from "@/app/variables.module.scss";
import "./dashboard.scss";
import Image from "next/image";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

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
                    localStorage.removeItem("userId");
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

      <div style={{backgroundColor: variables.primaryColorVariant}} className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <a href="#home" className="active">
          <i className="fa fa-home"></i> <span>Home</span>
        </a>
        <a href="#about">
          <i className="fa fa-info-circle"></i> <span>About</span>
        </a>
        <a href="#services">
          <i className="fa fa-cogs"></i> <span>Services</span>
        </a>
        <a href="#contact">
          <i className="fa fa-envelope"></i> <span>Contact</span>
        </a>
      </div>
    </div>
  );
}
