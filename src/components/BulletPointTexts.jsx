import { useEffect, useState } from "react";
import Loading from "../utils/Loading";

export default function BulletPointTexts() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([
    {
      color1: "bg-yellow-500",
      color2: "before:bg-yellow-900/40",
    },
    {
      color1: "bg-red-500",
      color2: "before:bg-red-900/40",
    },
    {
      color1: "bg-slate-500",
      color2: "before:bg-slate-900/40",
    },
  ]);

  const text = (index) => {
    if (index == 0) {
      return "Total Users";
    } else if (index == 1) {
      return "Admins";
    } else if (index == 2) {
      return "Your Role";
    }
  };

  useEffect(() => {
    const stats = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/v1/api/user/stats`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!res.ok) throw Error("Could not get stats");
        const data = await res.json();
        setItems((prevItems) =>
          prevItems.map((item, index) => {
            return { ...item, text: `${text(index)}: ${data.data[index]}` };
          })
        );
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    stats();
  }, []);

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <Loading />
      ) : (
        items.map(({ color1, color2, text }) => (
          <div className="flex flex-row items-center gap-4">
            <div
              className={`w-8 h-2 relative overflow-hidden ${color1} rounded-full before:content-[''] before:w-full before:h-1/2 ${color2} before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 max-[500px]:h-1.5 max-[500px]:w-6`}
            ></div>
            <div className="max-[700px]:text-[12px]">{text}</div>
          </div>
        ))
      )}
    </div>
  );
}
