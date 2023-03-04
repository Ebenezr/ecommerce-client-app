import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Image from "next/image";
import Dashboard from "./Dashboard/page";

export default function Home() {
  return (
    <main className=" w-full h-full flex flex-col">
      <Header />
      <section className="flex w-full border-t-[1px] border-t-gray-300 h-full lg:grid lg:grid-cols-6">
        <Aside />
        <Dashboard />
      </section>
    </main>
  );
}
