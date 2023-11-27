import { useEffect, useRef, useState } from "react";
import { communitiesStore } from "../data/CommunityStore";
import {
  communityCallectionId,
  database,
  databaseId,
} from "../config/AppwriteConfig";
import { Query } from "appwrite";
import Loading from "./Loading";
import CreateCommunity from "./CreateCommunity";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const CommunityList = () => {
  const [loading, setLoading] = useState(false);
  const isFetch = useRef(false)

  const communityStoreData = communitiesStore();

  useEffect(() => {
    setLoading(true);
    if (!isFetch.current) {
      database
        .listDocuments(databaseId, communityCallectionId, [
          Query.select(["$id", "Name"]),
        ])
        .then((res) => {
          communityStoreData.AddCommunities(res.documents);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }

       isFetch.current = true

  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" mx-5 my-auto sm:m-0 sm:w-full lg:w-full h- max-w-sm p-4 bg-white border border-gray-400 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mb-3 ml-4 text-base font-bold  text-blue-700 md:text-xl dark:text-white">
            Communities
          </h2>
          <p className=" sm:hidden md:inline-block  p-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            Connect with one of our available Community providers or create a
            new one.
          </p>

          <ul className=" overflow-hidden   my-4 space-y-3">
            {
              communityStoreData.communities.length <= 0 ? (<li className=" font-bold">No Communities are here Please Create and invite your friends <br /> <Button className=" hover:bg-blue-800 hover:text-white text-center rounded p-2 my-2"> <CreateCommunity /></Button> </li>) : ''
            }
            {communityStoreData.communities.length > 0 &&
              communityStoreData.communities.map((item) => {
                return (
                   <Link
                   to={`/chat/${item.$id}`}
                   >
                    <li key={item.$id}>
                    <a
                      href="#"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        {item.Name}
                      </span>
                    </a>
                  </li>
                   </Link>
                );
              })}
          </ul>
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                className="w-3 h-3 me-2"
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
                  d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Your Privacy Our Responsibility !
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityList;
