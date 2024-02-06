"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function Nav({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [prevScrollPos, setprevScrollPos] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;

      if (navRef.current) {
        if (prevScrollPos > currentScrollPos) {
          navRef.current.style.top = "0";
        } else {
          navRef.current.style.top = "-70px"; // Adjust this value based on your navbar height
        }
      }

      setprevScrollPos(currentScrollPos);
    };

    return () => {
      window.onscroll = null;
    };
  });

  return (
    <nav className={className} ref={navRef}>
      {children}
    </nav>
  );
}
