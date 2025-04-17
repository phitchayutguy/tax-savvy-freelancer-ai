
import { BellIcon, MenuIcon, UserCircleIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <MenuIcon className="h-6 w-6 mr-4 cursor-pointer" />
        <h1 className="text-2xl font-semibold text-primary">Tax Savvy</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <BellIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <UserCircleIcon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
