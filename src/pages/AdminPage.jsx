import formatDate from "../utils/formatDate";
import Button from "../components/Button";
import { useUser } from "../UserContext";
import toTitle from "../utils/toTitle";
import { useEffect, useState } from "react";
import Loading from "../utils/Loading";

export default function AdminPage() {
  const currentUser = useUser();
  const [allUsers, setAllUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function makeAdmin(username) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://accessflow-backend.onrender.com/v1/api/user/admin/make-admin/${encodeURIComponent(
          username
        )}`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error("Promote failed");

      setAllUsers((prevUsers) =>
        prevUsers.map((user) => (user.username === username ? data.data : user))
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function removeAdmin(username) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://accessflow-backend.onrender.com/v1/api/user/admin/remove-admin/${encodeURIComponent(
          username
        )}`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error("Demote failed");

      setAllUsers((prevUsers) =>
        prevUsers.map((user) => (user.username === username ? data.data : user))
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function kick(username) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://accessflow-backend.onrender.com/v1/api/user/admin/kick/${encodeURIComponent(
          username
        )}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) throw new Error("Kick failed");

      setAllUsers((prevUsers) =>
        prevUsers.filter((user) => user.username !== username)
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const allUsers = async () => {
      try {
        const res = await fetch(
          "https://accessflow-backend.onrender.com/v1/api/user/admin/all-users",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(res);
        const data = await res.json();
        // const filteredData = data.data.filter((user) => user.username !== currentUser.username && )
        setAllUsers(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    allUsers();
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1280px] min-h-[700px] px-8 py-4 max-[850px]:max-h-[1400px] max-[650px]:max-h-[1700px] max-[500px]:px-2">
      <div className="text-[32px] relative w-max font-bold px-4 max-[500px]:text-2xl before:content-[''] before:h-1 before:w-full before:absolute before:top-0 before:bg-amber-800/25">
        Admin Panel
      </div>
      <div className="bg-white/25 backdrop-blur-2xl rounded-4xl shadow-2xl shadow-black/25 p-8 grow">
        {!isLoading ? (
          allUsers ? (
            <>
              <div className="text-[24px] font-semibold max-[500px]:text-lg">
                Users
              </div>
              <div className="flex flex-col px-4 gap-2 max-[500px]:px-2 max-h-[725px] overflow-y-scroll relative">
                {currentUser.role === "owner" ? (
                  <div className="bg-purple-200 border-[1px] border-black/10 flex flex-col gap-4 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2 max-[450px]:gap-2">
                    <div className="flex gap-4 w-full items-center">
                      <div className="min-h-8 min-w-8 bg-black/15 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
                      <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
                        {currentUser.name} (You)
                        <span className="text-[10px] text-black/50">
                          joined on {formatDate(currentUser.createdAt)}
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between w-full items-center">
                      <span className="text-[14px] text-black/50 max-[450px]:text-[12px]">
                        Role: {toTitle(currentUser.role)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="bg-red-200 border-[1px] border-black/10 flex flex-col gap-4 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2 max-[450px]:gap-2">
                      <div className="flex gap-4 w-full items-center">
                        <div className="min-h-8 min-w-8 bg-black/15 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
                        <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
                          Aditya
                          <span className="text-[10px] text-black/50">
                            joined on 23 July 2025
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-between w-full items-center">
                        <span className="text-[14px] text-black/50 max-[450px]:text-[12px]">
                          Role: Owner
                        </span>
                      </div>
                    </div>
                    <div className="bg-green-200 sticky top-0 right-0 left-0 border-[1px] border-black/10 flex flex-col gap-4 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2 max-[450px]:gap-2">
                      <div className="flex gap-4 w-full items-center">
                        <div className="min-h-8 min-w-8 bg-black/15 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
                        <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
                          {currentUser.name} (You)
                          <span className="text-[10px] text-black/50">
                            joined on {formatDate(currentUser.createdAt)}
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-between w-full items-center">
                        <span className="text-[14px] text-black/50 max-[450px]:text-[12px]">
                          Role: {toTitle(currentUser.role)}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {allUsers.map(({ name, role, createdAt, username }) => {
                  if (role !== "owner" && username !== currentUser.username) {
                    return (
                      <div className="bg-white/25 border-[1px] border-black/10 flex flex-col gap-8 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2 max-[450px]:gap-2">
                        <div className="flex gap-4 w-full items-center">
                          <div className="min-h-8 min-w-8 bg-black/15 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
                          <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
                            {name}
                            <span className="text-[10px] text-black/50">
                              joined on {formatDate(createdAt)}
                            </span>
                          </span>
                        </div>
                        <div className="flex justify-between w-full items-center max-[450px]:flex-col max-[450px]:items-start max-[450px]:gap-2 max-[450px]:px-2">
                          <span className="text-[14px] text-black/50 max-[450px]:text-[12px]">
                            Role: {toTitle(role)}
                          </span>
                          <div className="flex gap-8 max-[450px]:text-[12px] max-[450px]:gap-2 max-[310px]:flex-col">
                            {role == "admin" ? (
                              <Button
                                child={"Demote"}
                                onClick={() => removeAdmin(username)}
                                style={
                                  "px-4 py-2 rounded-xl max-[450px]:rounded-lg max-[560px]:px-2.5 max-[560px]:py-1.5 max-[450px]:px-2 max-[450px]:py-1"
                                }
                              ></Button>
                            ) : (
                              <Button
                                child={"Promote"}
                                onClick={() => makeAdmin(username)}
                                style={
                                  "px-4 py-2 rounded-xl max-[450px]:rounded-lg max-[560px]:px-2.5 max-[560px]:py-1.5 max-[450px]:px-2 max-[450px]:py-1"
                                }
                              ></Button>
                            )}
                            <Button
                              child={"Kick"}
                              onClick={() => kick(username)}
                              style={
                                "px-4 py-2 rounded-xl max-[450px]:rounded-lg max-[560px]:px-2.5 max-[560px]:py-1.5 max-[450px]:px-2 max-[450px]:py-1"
                              }
                            ></Button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </>
          ) : (
            <div className="h-full w-full text-2xl pt-12 font-semibold text-center">
              You are not allowed to access Admin Panel
            </div>
          )
        ) : (
          <Loading text={"Loading..."} />
        )}
      </div>
    </div>
  );
}
