import { useEffect, useRef } from "react";
import { account } from "./config/AppwriteConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseData } from "./data/UserStore";
import AppNavbar from "./components/AppNavbar";
import CommunityList from "./components/CommunityList";

// import CommunityList from "./components/CommunityList";

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
        .catch(() => {
          navigate("/register");
          toast.error("You are not register please Register", {
            theme: "colored",
          });
          userData.userReset();
        });
    }
    isLogedin.current = true;
  }, []);

  return (
    <div className="custom-scrollbar bg-black w-screen h-screen">
      <AppNavbar />
      <div className="flex bgpc custom-height justify-center items-center flex-col">
        <CommunityList />
      </div>
    </div>
  );
};

export default App;
