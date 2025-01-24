import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Website Name */}
        <h1 className="text-2xl font-bold">Albertoes</h1>

        {/* Right Side: Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/profile" className="hover:text-gray-300">
            Profile
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Test
          </Link>

          {/* Conditional Authentication Buttons */}
          {!user ? (
            <>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                <Link href="/api/auth/login">Login</Link>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                <Link href="/api/auth/register">Register</Link>
              </button>
            </>
          ) : (
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              <Link href="/api/auth/logout">Logout</Link>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
