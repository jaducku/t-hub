import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/login-background.jpg";
import HomeButton from "../components/HomeButton";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <div className="absolute left-4 top-4 md:left-10 md:top-6 text-4xl font-extrabold text-white/60 tracking-tight lg:text-5xl">
        <HomeButton />
      </div>
      {children}
    </div>
  );
}
