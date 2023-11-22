import { useEffect, useRef } from "react";
import { account } from "./config/AppwriteConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseData } from "./data/Store";

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
          toast.error( " You are not Login ! Please Login", {
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
      <h1 className="text-center font-bold ">This is a Home Page </h1>
    </div>
  );
};

export default App;
