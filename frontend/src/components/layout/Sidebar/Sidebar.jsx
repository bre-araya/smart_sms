"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

import styles from "./Sidebar.module.css";
import menuData from "./menuData";

export default function Sidebar({ isVisible = true }) {

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const activeParent = menuData.find((menu) =>
      menu.children?.some((subMenu) => subMenu.link === pathname)
    );

    setOpenMenu(activeParent?.title ?? null);
  }, [pathname]);

  const toggleMenu = (title) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  return (
    <aside className={`${styles.sidebar} ${isVisible ? "" : styles.sidebarCollapsed}`}>

      {/* Logo */}

      <div className={styles.logo}>

        <div className={styles.logoIcon}>
          🎓
        </div>

        <div>

          <h2>Smart SMS</h2>

          <span>School System</span>

        </div>

      </div>

      {/* Menu */}

      <nav className={styles.navMenu}>

        {menuData.map((menu) => {

          const Icon = menu.icon;

          const hasChildren = menu.children;

          if (!hasChildren) {

            return (

              <Link
                key={menu.title}
                href={menu.link}
                className={`${styles.menuItem}
                ${pathname === menu.link ? styles.active : ""}`}
              >

                <Icon className={styles.icon} />

                <span>{menu.title}</span>

              </Link>

            );

          }

          const isOpen = openMenu === menu.title;

          return (

            <div key={menu.title} className={styles.menuGroup}>

              <button
                type="button"
                className={`${styles.menuButton} ${isOpen ? styles.menuButtonActive : ""}`}
                onClick={() => toggleMenu(menu.title)}
                aria-expanded={isOpen}
              >

                <div className={styles.menuLeft}>

                  <Icon className={styles.icon} />

                  <span>{menu.title}</span>

                </div>

                <span className={styles.chevronIcon}>
                  {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>

              </button>

              <div className={`${styles.subMenu} ${isOpen ? styles.show : ""}`}>

                {menu.children.map((sub) => {

                  const SubIcon = sub.icon;

                  return (

                    <Link
                      key={sub.title}
                      href={sub.link}
                      className={`${styles.subMenuItem}
                      ${pathname === sub.link ? styles.active : ""}`}
                    >

                      <SubIcon className={styles.subIcon} />

                      <span>{sub.title}</span>

                    </Link>

                  );

                })}

              </div>

            </div>

          );

        })}

      </nav>

    </aside>
  );

}