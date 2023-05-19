import { FC } from "react";
import { MenuIcon } from "lucide-react";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const navItems = ["Features", "Templates", "For Teams", "Resources", "Pricing"];

const Navbar: FC = ({}) => {
  return (
    <div className="flex items-center justify-between border-b p-4 lg:px-8 xl:px-16 lg:border-b-0">
      <Logo />
      <MenuIcon className="lg:hidden" />
      <div className="hidden lg:flex lg:items-center xl:gap-3">
        {navItems.map((item) => (
          <Button
            variant="ghost"
            key={item}
            className="xl:text-lg font-normal tracking-wide"
          >
            {item}
          </Button>
        ))}
        <div className="w-[1.5px] h-full bg-secondary">&nbsp;</div>
        <Button variant="ghost" className="xl:text-lg font-normal tracking-wide">
          Log in
        </Button>
        <Button className="xl:text-lg font-normal tracking-wide">
          Start for free
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
