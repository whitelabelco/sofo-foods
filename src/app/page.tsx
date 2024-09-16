"use client";

import Link from "./components/Link";

export default function Home() {
  return <div className="flex items-center justify-center">
    <Link onClick={() => console.log("clicked")} variant="sidebar">Link</Link>
  </div>;
}
