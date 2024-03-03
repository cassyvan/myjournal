"use client";
import React, { ReactNode, useEffect, useState } from "react";
import MainNavigation from "./main-nav";
import { Quicksand } from "next/font/google";
import Modal from "../ui/modal";

type childrenProps = {
  children: ReactNode;
};

const font = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }: childrenProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={font.className}>
      <div className="overflow-y-auto h-screen">
        <MainNavigation />
        <main className="flex flex-col items-center justify-center flex-1">
          <Modal />
          <div className="max-h-screen py-16">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
