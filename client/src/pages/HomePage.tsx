import { FC } from "react";
import { StarIcon, ArrowRightIcon } from "lucide-react";

import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import CompanyGrid from "@/assets/CompanyGrid";

import heroImg from "/hero.avif";
import dividerImg from "/divider.webp";
import getMoreDoneImg from "/get-more-done.webp";
import clearYourMindImg from "/clear-your-mind.webp";
import withYouEverywhereImg from "/with-you-everywhere.webp";
import templateForThatImg from "/template-for-that.webp";
import makeTodoistYoursImg from "/make-todoist-yours.webp";
import connectOtherToolsImg from "/connect-other-tools.webp";
import productivityImg from "/productivity.webp";

const HomePage: FC = ({}) => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* Hero section  */}
      <div className="mx-auto flex flex-col items-center gap-4 pt-36 text-center sm:pt-44 lg:pt-52 xl:max-w-7xl">
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

      {/* Used by section */}
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

      {/* Links section intro */}
      <div className="mx-auto p-10 text-center sm:px-28 sm:tracking-wide lg:max-w-5xl lg:text-left xl:max-w-7xl">
        <div className="text-2xl font-semibold sm:text-3xl">
          Delightfully simple and deceptively powerful task management
        </div>
        <div className="py-2 text-lg font-normal text-muted sm:text-xl lg:max-w-2xl">
          30 million+ people organize billions of tasks in Todoist for their
          work, education and personal life.
        </div>
      </div>

      {/* Links grid  */}
      <div className="mx-auto grid grid-cols-1 gap-y-8 px-10 sm:grid-cols-2 sm:gap-x-8 sm:px-16 lg:px-28 xl:max-w-7xl">
        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={withYouEverywhereImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">With you everywhere</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Use Todoist’s apps, extensions and widgets on any device or
            platform.{" "}
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Download apps
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={templateForThatImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">There’s a template for that</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Project templates are available to get you started with whatever’s
            on your plate.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Start with templates
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={makeTodoistYoursImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">Make Todoist yours</div>
          <div className="font-light tracking-wide text-muted sm:text-lg lg:items-start">
            Customize your to-do list with filters, labels, priorities, and
            more.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            See all features
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={connectOtherToolsImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">Connect with your other tools</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Link Todoist with your calendar, voice assistant, and 70+ other
            tools.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Install integrations
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={productivityImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">Productivity Methods</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Personal productivity recommendations based on your unique traits
            and strengths.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Take the quiz
          </Button>
        </div>
      </div>

      <div className="pb-40"></div>
    </main>
  );
};

export default HomePage;
