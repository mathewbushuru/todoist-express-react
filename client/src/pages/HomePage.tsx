import { FC } from "react";
import { StarIcon } from "lucide-react";

import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import CompanyGrid from "@/assets/CompanyGrid";

import heroImg from "/hero.avif";
import dividerImg from "/divider.webp";
import getMoreDoneImg from "/get-more-done.webp";
import clearYourMindImg from "/clear-your-mind.webp";

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
        <Button className="mb-2 mt-2 font-normal tracking-wide sm:mb-0 sm:mt-4 sm:h-12 ">
          Start for free
        </Button>
        <img src={heroImg} alt="hero image" className="lg:max-w-5xl" />
      </div>

      {/* Used by  */}
      <div>
        <img src={dividerImg} alt="#" />
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

          <div>
            <div className="text-center text-sm uppercase sm:text-base">
              Used by individuals and teams at
            </div>
            <CompanyGrid />
          </div>
        </div>
      </div>

      {/* 1st Features section  */}
      <div className="flex flex-col items-center gap-12 p-8 sm:flex-row sm:justify-center lg:gap-24">
        <div className="text-center sm:max-w-sm sm:text-left lg:max-w-md lg:p-12">
          <div className="my-1 text-sm sm:text-base">Get more done</div>
          {[
            "Add your tasks.",
            "Organize your life.",
            "Achieve more every day.",
          ].map((value, index) => {
            return (
              <div key={index} className="text-2xl font-semibold sm:text-3xl">
                {value}
              </div>
            );
          })}
          <div className="py-4 font-light tracking-wide text-muted sm:text-lg">
            Add tasks like “Read work emails every day at 10am” to fill your
            to-do list in seconds using Todoist’s powerful natural language
            recognition and recurring dates.
          </div>
        </div>
        <img src={getMoreDoneImg} alt="#" className="max-w-xs lg:max-w-xl" />
      </div>

      {/* 2nd Features section  */}
      <div className="flex flex-col items-center gap-12 p-8 sm:flex-row-reverse sm:justify-center lg:gap-24">
        <div className="text-center sm:max-w-sm sm:text-left lg:max-w-md">
          <div className="my-1 text-sm sm:text-base">Clear your mind</div>
          <div className="text-2xl font-semibold sm:text-3xl">
            Reach the mental clarity you've been longing for.
          </div>
          <div className="py-4 font-light tracking-wide text-muted sm:text-lg">
            Your to-do lists are automatically sorted into Today, Upcoming and
            custom Filter views to help you focus on your most important things.
          </div>
        </div>
        <img src={clearYourMindImg} alt="#" className="max-w-xs lg:max-w-xl" />
      </div>
    </main>
  );
};

export default HomePage;
