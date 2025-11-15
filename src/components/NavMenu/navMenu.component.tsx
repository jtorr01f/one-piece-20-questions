'use client';

import { FC, useState } from "react";
import Link from "next/link";
import { IconArrowLeft, IconMenu2 } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

import { Button } from "../Button/button.component";

import { useClickOutside } from "../../hooks/useClickOutside";

import { navLinks } from "@/src/constants/navMenu.constants";

import './navMenu.styles.css';

const NavMenu: FC = () => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useClickOutside(() => {
    setOpen(false);
  });

  const onSignOut = async () => {
    try {
      await fetch('api/auth/guestSignIn', { method: 'DELETE' })
      await signOut({ callbackUrl: "/login" });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <IconMenu2 className="navMenuIcon" onClick={() => setOpen(true)}/>
      <aside ref={dropdownRef} className={`nav-menu ${open && 'open'}`} role="navigation" aria-label="nav-menu">
        <div className="navHeader">
          <IconArrowLeft className="navMenuIcon" onClick={() => setOpen(false)} />
          <Button label="Sign Out" buttonType="secondary" onClick={onSignOut} />
        </div>
        <nav>
          {open && (
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </aside>
    </div>
  );
}

export default NavMenu;