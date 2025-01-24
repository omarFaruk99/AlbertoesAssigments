import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Website Name */}
        <h1 className="text-2xl font-bold">Albertoes</h1>

        {/* Right Side: Navigation Links */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-gray-300">
                Profile
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Test
              </Link>
            </li>

            {/* Conditional Authentication Buttons */}
            {!user ? (
              <>
                <li>
                  <Link
                    href="/api/auth/login"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api/auth/register"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/api/auth/logout"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
