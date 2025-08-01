import { useEffect, useState } from "react";
import Loading from "../utils/Loading";
import formatDate from "../utils/formatDate";

export default function NewUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const newUsers = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/v1/api/user/new-users`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!res.ok) throw Error("Fetch failed");
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    newUsers();
  }, []);

  return (
    <div className="flex flex-col px-4 gap-2 h-full max-[500px]:px-2">
      {!isLoading ? (
        users.map(({ name, createdAt }) => (
          <div className="bg-[#f5f1ee] flex gap-4 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2">
            <div className="min-h-8 min-w-8 bg-black/15 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
            <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
              {name}
              <span className="text-[10px] text-black/50">
                joined on {formatDate(createdAt)}
              </span>
            </span>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
