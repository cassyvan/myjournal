"use client";
import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import RoundedPinkButton from "@/components/ui/rounded-pink-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/hello");
  };
  return (
    <div className="form-wrapper">
      <h3 className="mt-24 mb-30">Create an account</h3>
      <div className="self-center py-8">
        <div className="wrapper bg-neutral-50 rounded-lg shadow dark:border">
          <div className="form-wrapper px-6 py-8">
            <form
              onSubmit={handleForm}
              className="form px-2 w-96 text-gray-900"
            >
              <label htmlFor="email">
                <p>Email</p>
                <FontAwesomeIcon
                  icon={faAt}
                  className="text-gray-400 absolute ml-4 mt-4"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 rounded-full block w-full p-2.5 pl-9"
                />
              </label>
              <label htmlFor="password">
                <p className="mt-4">Password</p>
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-gray-400 absolute ml-4 mt-4"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 rounded-full block w-full p-2.5 pl-9"
                />
              </label>
              <div className="text-center mt-6">
                <RoundedPinkButton title="Create Account" />
              </div>
            </form>
          </div>
        </div>
        <div className="text-center pt-8">
          <p>
            Have an account already?{" "}
            <Link href={"/"} className="text-pink-600 hover:text-gray-900">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
