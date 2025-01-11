import Cart from "@/components/application/Cart";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const HeaderEnd = () => {
  const user = null;
  return (
    <>
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        {user ? null : (
          <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
            Sign in
          </Link>
        )}
        {user ? null : (
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        )}

        {user ? (
          <p></p>
        ) : (
          <Link
            href={"/register"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Signup
          </Link>
        )}
        {user ? (
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        ) : null}

        {user ? null : (
          <div className="flex lg:ml-6">
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          </div>
        )}
        <div className="ml-4 flow-root lg:ml-6">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default HeaderEnd;
