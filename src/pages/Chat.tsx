import { useParams } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import { useState } from "react";

const Chat = () => {
  const p = useParams();
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [message , setMessage] = useState('')

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      
       setMessage('')
       
  }

  return (
    <div className="bg-black  h-screen w-screen">
      <AppNavbar />
      <div className="flex flex-col w-screen custom-height gap-2 ">
        {/* this div for display message */}
        <div className="flex flex-col mx-2 sm:mx-10 overflow-scroll custom-height-2 ">
          {a.map((item) => {
            return item % 2 === 0 ? (
              <div key={item} className=" sm:mx-7 flex justify-end">
                <p className=" mr-1 my-2 text-base relative max-w-[75%] sm:max-w-[60%] rounded-xl  p-3  bg-purple-400">
                  <span className="font-bold text-sm absolute pb-0.5   top-0 ">
                    {p.id}
                  </span>{" "}
                  hey Lorem Lorem ipsum dolor sit amet,r. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Maiores, commodi non.
                </p>
                {/* <div className="flex my-2 flex-col justify-end">
                  <h1 className="text-xs h-6 bg-white rounded-full w-6 pt-1 text-center ">
                    D
                  </h1>
                </div> */}
              </div>
            ) : (
              <div className="flex sm:mx-7 justify-start" key={item}>
                {/* <div className="flex my-2 flex-col justify-end">
                  <h1 className="text-xs h-6 bg-green-400 rounded-full w-6 pt-1 text-center ">
                    D
                  </h1>
                </div> */}
                <p
                  className="ml-1 my-2 relative max-w-[75%] sm:max-w-[60%]  
                           rounded-xl p-3  bg-green-400"
                >
                  {" "}
                  <span className="font-bold text-sm absolute pb-0.5  top-0 ">
                    {p.id}
                  </span>
                  good morning and you say Lorem ipsum o Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. At dolorem aliquid quod,
                  praesentium in, optio et, ducimus fugiat voluptate officia ab
                  magni!{" "}
                </p>
              </div>
            );
          })}
        </div>

        {/* this div for input */}
        <div className="bg-black ">
          <form 
          onSubmit={handlerSubmit}
          className=" fixed bottom-1">
            <label htmlFor="chat" className="sr-only">
              Your message
            </label>
            <div className="flex w-screen items-center px-3 py-2 rounded-lg bg-black dark:bg-gray-700">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    fill="currentColor"
                    d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                  />
                </svg>
                <span className="sr-only">Upload image</span>
              </button>
              <button
                type="button"
                className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                  />
                </svg>
                <span className="sr-only">Add emoji</span>
              </button>
              <input
                onChange={e => setMessage(e.target.value)}
                id="chat"
                type="text"
                className="block sm:mx-4 outline-none p-2.5 w-full text-sm text-gray-300 bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
                value={message}
              />
              <button
                type="submit"
                className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5 rotate-90 rtl:-rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
