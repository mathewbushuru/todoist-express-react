import { FC } from "react";
import { MenuIcon } from "lucide-react";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const navItems = ["Features", "Templates", "For Teams", "Resources", "Pricing"];

const Navbar: FC = ({}) => {
  return (
    <div className="fixed left-0 right-0 top-0 flex items-center justify-between border-b bg-background p-4 lg:border-b-0 lg:px-8  xl:px-16">
      <Logo />
      <MenuIcon className="lg:hidden" />
      <div className="hidden lg:flex lg:items-center xl:gap-3">
        {navItems.map((item) => (
          <Button
            variant="ghost"
            key={item}
            className="font-normal tracking-wide "
          >
            {item}
          </Button>
        ))}
        <div className="h-full w-[1.5px] bg-secondary">&nbsp;</div>
        <Button
          variant="ghost"
          className="font-normal tracking-wide  "
        >
          Log in
        </Button>
        <Button className="font-normal tracking-wide ">
          Start for free
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
