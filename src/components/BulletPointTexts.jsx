export default function BulletPointTexts() {
  const items = [
    {
      color1: "bg-yellow-500",
      color2: "before:bg-yellow-900/40",
      text: "Total Users: 100",
    },
    {
      color1: "bg-red-500",
      color2: "before:bg-red-900/40",
      text: "Admins: 10",
    },
    {
      color1: "bg-slate-500",
      color2: "before:bg-slate-900/40",
      text: "Your Role: User",
    },
  ];

  return (
    <div className="flex flex-col">
      {items.map(({ color1, color2, text }) => (
        <div className="flex flex-row items-center gap-4">
          <div
            className={`w-8 h-2 relative overflow-hidden ${color1} rounded-full before:content-[''] before:w-full before:h-1/2 ${color2} before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 max-[500px]:h-1.5 max-[500px]:w-6`}
          ></div>
          <div className="max-[700px]:text-[12px]">{text}</div>
        </div>
      ))}
    </div>
  );
}
