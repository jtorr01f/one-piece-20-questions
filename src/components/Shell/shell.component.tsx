"use client";

import { useState, useEffect,  FC } from "react";

import NavMenu from "../NavMenu/navMenu.component";

import { ShellProps } from "@/src/types/components/shell";

const Shell: FC<ShellProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  return (
    <div className="app">
      <NavMenu />
      <main className={`content ${open ? "content-shift" : ""}`}>
        {children}
      </main>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </div>
  );
}

export default Shell;