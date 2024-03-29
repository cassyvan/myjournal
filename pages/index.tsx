import RoundedPinkButton from "@/components/ui/rounded-pink-button";
import { useAuthContext } from "@/context/AuthContext";
import signIn from "@/firebase/auth/signin";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidAuthMsg, setInvalidAuthMsg] = useState(false);
  const router = useRouter();
  const context = useAuthContext();

  useEffect(() => {
    if (context.user) {
      router.push("/hello");
    }
  });

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setInvalidAuthMsg(true);
      return console.log(error);
    }
    console.log(result);
    return router.push("/hello");
  };

  return (
    <div className="flex flex-col justify-center ">
      {invalidAuthMsg && (
        <div className="bg-red-400 text-center rounded-full font-medium">
          Invalid username or password. Try again.
        </div>
      )}
      <div className="self-center py-8">
        <Image src="/images/pisces.png" height={100} width={100} alt="logo" />
      </div>
      <h2 className="font-semibold">Welcome! Please sign in</h2>
      <div className="self-center py-8">
        <div className="wrapper bg-neutral-50 rounded-lg shadow dark:border">
          <div className="form-wrapper p-6">
            <form
              onSubmit={handleForm}
              className="form px-2 w-96 text-gray-900"
            >
              <label htmlFor="email">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-pink-600 focus:border-pink-600 block w-full px-4 py-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-pink-600 focus:border-pink-600 block w-full px-4 py-2.5"
                />
              </label>
              <div className="text-center pt-6">
                <RoundedPinkButton
                  title="Sign In"
                  type="submit"
                  onClick={handleForm}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="self-center">
        <p>
          Don&apos;t have an account yet? Please
          <Link href={"/signup"} className="text-pink-600 hover:text-gray-900">
            {" "}
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
