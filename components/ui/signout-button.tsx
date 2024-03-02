import signOutUser from "@/firebase/auth/signout";
import router, { useRouter } from "next/router";

const SignoutButton = () => {
  const handleSignOut = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signOutUser();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };

  return (
    <button onClick={handleSignOut} className="pl-2 text-zinc-400">
      Sign Out
    </button>
  );
};

export default SignoutButton;
