"use client";
import Link from "next/link";

const NavBar = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience", mobileLabel: "Exp." },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-0 right-0 z-50 mx-auto grid w-[calc(100vw-1.5rem)] max-w-[500px] grid-cols-5 items-center rounded-xl border border-white/10 bg-[#07070a]/90 p-1 text-[#e4ded7] shadow-2xl backdrop-blur-md sm:bottom-8 sm:p-2"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          data-blobity-magnetic="false"
          aria-label={`Scroll to ${item.label} section`}
          className="flex min-h-[44px] items-center justify-center rounded-lg px-1 text-center text-[11px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ded7] hover:bg-white/10 sm:px-2 sm:text-[13px]"
        >
          {item.mobileLabel ? (
            <>
              <span className="sm:hidden">{item.mobileLabel}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </>
          ) : (
            item.label
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
