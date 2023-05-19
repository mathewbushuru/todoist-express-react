import { FC } from "react";
import { MenuIcon } from "lucide-react";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const Navbar: FC = ({}) => {
  return (
    <div className="flex items-center justify-between border-b p-4 lg:px-16 lg:border-b-0">
      <Logo />
      <MenuIcon className="lg:hidden" />
      <div className="hidden lg:flex gap-8">
        <Button>Default</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="secondary">Secondary</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
};

export default Navbar;
