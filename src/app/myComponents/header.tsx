import { AlignJustify, Linkedin, Twitter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <header className=" flex justify-between wrapper py-9 items-end">
      <h1 className="text-white text-2xl md:text-3xl">M.S. portfolio</h1>

      <nav>
        <ul className=" hidden   md:flex justify-between items-center gap-x-16 text-slate-300 text-base">
          <li className="hover:border-b-2 hover:border-blue-500 hover:text-white">
            <a href="">Projects</a>
          </li>
          <li className="hover:border-b-2 hover:border-blue-500 hover:text-white">
            <a href="">Technology</a>
          </li>
          <li className="hover:border-b-2 hover:border-gradient-to-r from-[#31CBE5] to-[#B27BF4] hover:text-white">
            <a href="">About me</a>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger className="text-white md:hidden">
            <AlignJustify size={25} />
          </SheetTrigger>
          <SheetContent className="text-white md:hidden">
            <ul>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Technology</a>
              </li>
              <li>
                <a href="">About me</a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>

      <div className="icons flex gap-x-4  ">
          <Linkedin className="hover:textgradient hover:text-red hover:from-cyan hover:to-blue hover:via-purple  text-white" />

        <Twitter className="hover:textgradient hover:text-red hover:from-cyan hover:to-blue hover:via-purple  text-white" />
      </div>
    </header>
  );
}

export default Header;
