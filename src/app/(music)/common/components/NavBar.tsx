"use client";
import { useMemo, useState } from "react";
import { cls } from "../helpers/cls";
import UserWidget from "./UserWidget";
import Link from "next/link";
import { checkLogin } from "../api/Auth";
// import { login } from "../api/Auth";

const login = async () => {
  const res = await fetch("/api/token");
  const data = await res.json();
  sessionStorage.setItem("token", data.access_token);
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useMemo(() => checkLogin(), []);
  
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm bg-body-tertiary mb-3  bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className={"navbar-brand"} href="/">
            MusicApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={cls(" navbar-collapse", isOpen && "show")}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/playlists">
                  Playlists
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/music/search">
                  Search
                </Link>
              </li>
            </ul>
            <div className="ms-auto">
              <button className="btn btn-default float-end" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
