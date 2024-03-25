import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mt-8 ml-12 p-3 w-[150px] bg-teal-400 text-black font-bold text-center cursor-pointer">
        <Link href="/">+ Add Book</Link>
      </div>
    </>
  );
}
