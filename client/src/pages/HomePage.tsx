import { FC } from "react";
import { StarIcon } from "lucide-react";

import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import CompanyGrid from "@/components/CompanyGrid";

import heroImg from "/hero.avif";
import dividerImg from "/divider.webp";

const HomePage: FC = ({}) => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* Hero section  */}
      <div className="flex flex-col items-center gap-4 pt-36 text-center sm:pt-44 lg:pt-52">
        <h1 className="max-w-xs px-4 text-4xl font-semibold sm:max-w-lg sm:px-0 sm:text-5xl sm:font-bold sm:leading-tight sm:tracking-wide lg:max-w-xl lg:text-6xl lg:leading-tight ">
          Organize your work and life, finally.
        </h1>
        <div className="px-6 text-lg tracking-wide sm:max-w-lg sm:text-2xl sm:leading-normal ">
          Become focused, organized, and calm with Todoist. The world's #1 task
          manager and to-do list app.
        </div>
        <Button className="mb-2 mt-2 sm:mb-0 sm:mt-4 sm:h-12">
          Start for free
        </Button>
        <img src={heroImg} alt="hero image" className="lg:max-w-5xl" />
      </div>

      {/* Used by  */}
      <div>
        <img src={dividerImg} alt="#"  />
        <div className="flex flex-col items-center gap-12 bg-[url('/bg-bottom.webp')] bg-cover bg-center bg-no-repeat py-8 pb-24 sm:flex-row sm:justify-center sm:gap-28">
          <div className="flex flex-col items-center gap-4 sm:items-start sm:gap-6">
            <div className="text-sm uppercase sm:text-base">
              300,000+ reviews
            </div>
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  return <StarIcon key={index} className="h-4 w-4" />;
                })}
            </div>
            <div className="text-lg font-medium sm:text-lg">
              App Store and Google Play
            </div>
          </div>

          <div >
            <div className="text-sm uppercase text-center sm:text-base">
              Used by individuals and teams at
            </div>
            <CompanyGrid />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
