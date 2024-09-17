"use client";

import FormField from "./components/FormField";


export default function Home() {
  return <div className="flex justify-center items-center py-20">
    <FormField placeholder="Form Field" onChange={(e) => console.log(e.target.value)} value="" />
  </div>;
}
