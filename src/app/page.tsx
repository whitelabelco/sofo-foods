"use client";

import Input from "./components/Input";

export default function Home() {
  return <div className="flex justify-center items-center py-20">
    <Input variant="emailList" placeholder="Enter your email" onChange={(e) => console.log(e.target.value)} value="" />
  </div>;
}
