import React from "react";
import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};
