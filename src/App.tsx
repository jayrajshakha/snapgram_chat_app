import { useEffect, useRef } from "react";
import { account } from "./config/AppwriteConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseData } from "./data/UserStore";
import AppNavbar from "./components/AppNavbar";

const App = () => {
  const isLogedin = useRef<boolean>(false);
  const navigate = useNavigate();
  const userData = UseData();

  useEffect(() => {
    if (!isLogedin.current) {
      account
        .get()
        .then((res) => {
          userData.updateData(res);
        })
        .catch((err) => {
          navigate("/login");
          toast.error(" You are not Login ! Please Login", {
            theme: "colored",
          });
          console.log(err);
          userData.userReset();
        });
    }
    isLogedin.current = true;
  }, []);

  return (
    <div>
      <AppNavbar />
      <div className="flex sidebar">
        <div className="flex w-[25%]  sm:w-[16%] bgs justify-start items-center flex-col"></div>
      </div>
    </div>
  );
};

export default App;
