import { FC } from "react";
import { MenuIcon } from "lucide-react";

import Logo from "@/components/ui/Logo";

const Navbar: FC = ({}) => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <Logo />
      <MenuIcon className="lg:hidden" />
      <div className="hidden lg:block">Links</div>
    </div>
  );
};

export default Navbar;
