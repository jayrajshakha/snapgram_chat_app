import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ID, account } from "../../config/AppwriteConfig";
import { toast } from "react-toastify";

const Login = () => {
  const [auth, setAuth] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const promise = account.create(
      ID.unique(),

      auth.email,
      auth.password,
      auth.name
    );

    promise
      .then((res) => {
        setLoading(false);
        toast.success("Account created successfully!  please login now", {
          theme: "colored",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err, { theme: "colored" });
        console.log(err);
      });
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-[31rem] p-2 rounded-md shadow">
        <h1 className="text-center m-2 text-3xl font-bold text-[#65b9f5]">
          {" "}
          snapgram
        </h1>
        <h1 className="text-center m-1 text-2xl font-bold ">Register</h1>
        <p className="text-center text-gray-400 p-2"> welcome to snapgram</p>
        <form onSubmit={submitHandler} action="">
          <div className="m-5">
            <Input
              onChange={(e) => setAuth({ ...auth, name: e.target.value })}
              label={"Name"}
              type="text"
            />
          </div>
          <div className="m-5">
            <Input
              onChange={(e) => setAuth({ ...auth, email: e.target.value })}
              label={"Email"}
              type="Email"
            />
          </div>
          <div className="m-5">
            <Input
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              label={"Password"}
              type="Password"
            />
          </div>
          <div className="m-5">
            <Button
              disabled={loading}
              className="bg-[#65b9f5] text-black w-full"
              type="submit"
            >
              {loading ? "Processing..." : "Submit"}
            </Button>
          </div>
          <div className="w-full m-5"></div>
        </form>
        <div className="flex justify-center items-center m-5">
          <Link to={"/login"}>
            <h1 className="font-semibold">Already have an account ? </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
