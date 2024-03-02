import signIn from "@/firebase/auth/signin";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="self-center py-8">
        <Image src="/images/pisces.png" height={100} width={100} alt="logo" />
      </div>
      <h2 className="font-semibold">Welcome! Please sign in</h2>
      <div className="self-center py-8">
        <div className="wrapper bg-neutral-50 rounded-lg shadow dark:border">
          <div className="form-wrapper p-6">
            <form onSubmit={handleForm} className="form px-2">
              <label htmlFor="email">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5"
                />
              </label>
              <label htmlFor="password">
                <p className="mt-4">Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5"
                />
              </label>
              <button
                type="submit"
                className="hover:text-pink-300 w-full text-white bg-pink-300 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="self-center">
        <p>
          Don&apos;t have an account yet? Please
          <Link href={"/signup"} className="hover:text-pink-400">
            {" "}
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
