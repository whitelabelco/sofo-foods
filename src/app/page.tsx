"use client";

import FooterLink from "./components/FooterLink";

export default function Home() {
  return <div className="flex justify-center items-center py-20 bg-black">
    <FooterLink href="/" onClick={() => console.log("clicked")} arrow>Footer</FooterLink>
  </div>;
}
