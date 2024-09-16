"use client";

import Button from "./components/Button";

export default function Home() {
  return <div className="">
    <Button onClick={() => console.log("clicked")} variant="blue" size="sm" arrow>button text</Button>
  </div>;
}
