import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Link from "next/link";
import { icons } from "../../common/icons";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 inset-x-0 h-16 bg-white relative">
      <MaxWidthWrapper>
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* TODO: mobile nav */}
            <div className="flex ml-4 lg:ml-0">
              <Link href="/">
                <icons.logo className="w-10 h-10" />
              </Link>
            </div>
            <div className="hidden lg:block z-50 lg:self-stretch lg:ml-8">
              <NavItems />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
