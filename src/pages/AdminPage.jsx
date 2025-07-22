import Button from "../components/Button";

export default function AdminPage() {
  const list = [
    { name: "User 1", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 2", role: "Admin", dateOfJoin: "14 May 2025" },
    { name: "User 3", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 4", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 5", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 1", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 2", role: "Admin", dateOfJoin: "14 May 2025" },
    { name: "User 3", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 4", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 5", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 1", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 2", role: "Admin", dateOfJoin: "14 May 2025" },
    { name: "User 3", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 4", role: "User", dateOfJoin: "14 May 2025" },
    { name: "User 5", role: "User", dateOfJoin: "14 May 2025" },
  ];
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1280px] min-h-[700px] px-8 py-4 max-[850px]:max-h-[1400px] max-[650px]:max-h-[1700px] max-[500px]:px-2">
      <div className="text-[32px] relative w-max font-bold px-4 max-[500px]:text-2xl before:content-[''] before:h-1 before:w-full before:absolute before:top-0 before:bg-amber-800/25">
        Admin Panel
      </div>
      <div className="bg-white/25 backdrop-blur-2xl rounded-4xl shadow-2xl shadow-black/25 p-8 grow">
        <div className="text-[24px] font-semibold max-[500px]:text-lg">
          Users
        </div>
        <div className="flex flex-col px-4 gap-2 max-[500px]:px-2 max-h-[725px] overflow-y-scroll relative">
          <div className="bg-red-200 border-[1px] border-black/10 flex flex-col gap-4 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2 max-[450px]:gap-2">
            <div className="flex gap-4 w-full items-center">
              <div className="min-h-8 min-w-8 bg-black/25 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
              <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
                Aditya Prasad
                <span className="text-[10px] text-black/50">
                  joined on xx/xx/xx
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
              <div className="min-h-8 min-w-8 bg-black/25 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
              <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
                You
                <span className="text-[10px] text-black/50">
                  joined on xx/xx/xx
                </span>
              </span>
            </div>
            <div className="flex justify-between w-full items-center">
              <span className="text-[14px] text-black/50 max-[450px]:text-[12px]">
                Role: Admin
              </span>
            </div>
          </div>

          {list.map(({ name, role, dateOfJoin }) => (
            <div className="bg-white/25 border-[1px] border-black/10 flex flex-col gap-8 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2 max-[450px]:gap-2">
              <div className="flex gap-4 w-full items-center">
                <div className="min-h-8 min-w-8 bg-black/25 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
                <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
                  {name}
                  <span className="text-[10px] text-black/50">
                    joined on {dateOfJoin}
                  </span>
                </span>
              </div>
              <div className="flex justify-between w-full items-center max-[450px]:flex-col max-[450px]:items-start max-[450px]:gap-2 max-[450px]:px-2">
                <span className="text-[14px] text-black/50 max-[450px]:text-[12px]">
                  Role: {role}
                </span>
                <div className="flex gap-8 max-[450px]:text-[12px] max-[450px]:gap-2 max-[310px]:flex-col">
                  <Button
                    child={role == "Admin" ? "Demote" : "Promote"}
                    style={
                      "px-4 py-2 rounded-xl max-[450px]:rounded-lg max-[560px]:px-2.5 max-[560px]:py-1.5 max-[450px]:px-2 max-[450px]:py-1"
                    }
                  ></Button>
                  <Button
                    child={"Kick"}
                    style={
                      "px-4 py-2 rounded-xl max-[450px]:rounded-lg max-[560px]:px-2.5 max-[560px]:py-1.5 max-[450px]:px-2 max-[450px]:py-1"
                    }
                  ></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
