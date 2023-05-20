import { FC } from "react";

import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

import heroImg from "/hero.avif";

const HomePage: FC = ({}) => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* Hero section  */}
      <div className="flex flex-col items-center gap-4 pt-36 text-center sm:pt-44 lg:pt-52">
        <h1 className="max-w-xs px-4 text-4xl font-semibold sm:max-w-lg sm:px-0 sm:text-5xl sm:font-bold sm:leading-tight sm:tracking-wide lg:text-6xl lg:max-w-xl lg:leading-tight ">
          Organize your work and life, finally.
        </h1>
        <div className="text-lg px-6 sm:max-w-lg sm:text-2xl tracking-wide sm:leading-normal ">
          Become focused, organized, and calm with Todoist. The world's #1 task
          manager and to-do list app.
        </div>
        <Button className="mt-2 mb-2 sm:mb-0 sm:mt-4 sm:h-12">Start for free</Button>
        <img src={heroImg} alt="hero image" className="lg:max-w-5xl" />
      </div>
    </main>
  );
};

export default HomePage;
