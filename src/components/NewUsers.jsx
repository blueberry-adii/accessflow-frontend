export default function NewUsers() {
  const list = [
    { name: "User 1", dateOfJoin: "14 May 2025" },
    { name: "User 2", dateOfJoin: "14 May 2025" },
    { name: "User 3", dateOfJoin: "14 May 2025" },
    { name: "User 4", dateOfJoin: "14 May 2025" },
    { name: "User 5", dateOfJoin: "14 May 2025" },
  ];
  return (
    <div className="flex flex-col px-4 gap-2 max-[500px]:px-2">
      {list.map(({ name, dateOfJoin }) => (
        <div className="bg-[#f5f1ee] flex gap-4 items-center rounded-xl p-4 row-span-1 max-[450px]:p-2">
          <div className="min-h-8 min-w-8 bg-black/25 rounded-full max-[450px]:min-h-6 max-[450px]:min-w-6"></div>
          <span className="flex justify-between items-end w-full text-[16px] max-[450px]:text-[14px] max-[450px]:flex-col max-[450px]:items-start">
            {name}
            <span className="text-[10px] text-black/50">
              joined on {dateOfJoin}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
