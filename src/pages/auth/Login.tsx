import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { account } from "../../config/AppwriteConfig";
import { UseData } from "../../data/UserStore";

const Login = () => {
  const naviagte = useNavigate();
  const userData = UseData();

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const promise = account.createEmailSession(auth.email, auth.password);

    promise
      .then((res) => {
        setLoading(false);
        toast.success("Loagin succesfuly ", { theme: "colored" });
        naviagte("/");
        userData.UpdateUserSession(res);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message, { theme: "colored" });
      });
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-[31rem] p-2 rounded-md shadow">
        <h1 className="text-center m-2 text-3xl font-bold text-[#65b9f5]">
          {" "}
          snapgram
        </h1>
        <h1 className="text-center m-1 text-2xl font-bold ">Login</h1>
        <p className="text-center text-gray-400 p-2">
          {" "}
          welcome back to snapgram
        </p>
        <form onSubmit={submitHandler} action="">
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
              className={`${
                loading ? "bg-green-500" : "bg-[#65b9f5]"
              } text-black w-full`}
              type="submit"
            >
              {loading ? "Processing..." : "Submit"}
            </Button>
          </div>
          <div className="w-full m-5"></div>
        </form>
        <div className="flex justify-center items-center m-5">
          <h1 className="font-semibold">
            Sign up for{" "}
            <Link to={"/register"}>
              <span className="text-[#65b9f5]"> Snapgram</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
