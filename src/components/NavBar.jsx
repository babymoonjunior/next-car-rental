import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 hover:text-white px-3 cursor-pointer p-2 rounded-full">Home</h2>
        <h2 className="hover:bg-blue-500 hover:text-white px-3 cursor-pointer p-2 rounded-full">History</h2>
        <h2 className="hover:bg-blue-500 hover:text-white px-3 cursor-pointer p-2 rounded-full">Contact Us</h2>
      </div>
      <UserButton />
    </div>
  );
}
