import GridCard from "../components/GridCard";
import BulletPointTexts from "../components/BulletPointTexts";
import NewUsers from "../components/NewUsers";

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full max-w-[1280px] min-h-[800px] px-8 py-4 max-[850px]:grid-cols-3 max-[850px]:grid-rows-6 max-[850px]:max-h-[1400px] max-[650px]:grid-rows-7 max-[650px]:max-h-[1700px] max-[500px]:px-2">
      <GridCard
        customStyle={
          "flex flex-row px-8 items-center justify-between bg-[#cfc7b5] col-span-3 row-span-2 max-[850px]:row-span-2 max-[850px]:flex-col"
        }
        child={
          <>
            <div className="flex flex-col h-full py-4 justify-between max-[850px]:flex-row max-[850px]:w-full max-[850px]:items-stretch max-[850px]:h-fit max-[595px]:flex-col">
              <div className="text-[24px] max-[700px]:text-xl font-bold min-w-[150px] max-[500px]:text-lg">
                Current stats of AccessFlow
              </div>
              <BulletPointTexts />
            </div>
            <div className="h-full w-1/2 max-[850px]:w-full max-[850px]:h-fit max-[1024px]:w-full">
              <div className="h-32 scale-125 w-32 relative rounded-full opacity-75 bg-amber-600 shadow-md shadow-black/50 top-1/2 -translate-y-3/4 max-[850px]:top-0 max-[850px]:-translate-y-full max-[850px]:bottom-full max-[850px]:left-1/2 max-[850px]:-translate-x-3/4 max-[500px]:h-24 max-[500px]:w-24 before:content-[''] before:h-32 before:w-32 before:absolute before:rounded-full before:opacity-75 before:bg-cyan-600 before:shadow-md before:shadow-black/50 before:left-1/2 before:max-[500px]:h-24 before:max-[500px]:w-24 after:content-[''] after:h-32 after:w-32 after:absolute after:rounded-full after:opacity-75 after:bg-rose-600 after:shadow-md after:shadow-black/50 after:left-1/4 after:top-1/2 after:max-[500px]:h-24 after:max-[500px]:w-24"></div>
            </div>
          </>
        }
      />
      <GridCard
        customStyle={
          "flex items-center justify-center p-8 bg-[#22262b] col-span-2 row-span-2 max-[850px]:col-span-1 max-[850px]:row-span-1 max-[650px]:col-span-3"
        }
        child={
          <>
            <div className="text-4xl text-white font-bold wrap-anywhere text-center max-[850px]:text-2xl">
              "Let's be Productive, People!!"
            </div>
          </>
        }
      />
      <GridCard
        customStyle={
          "flex justify-center items-center text-4xl font-bold bg-white col-span-2 row-span-1 max-[650px]:col-span-3"
        }
        child={
          <>
            <div className="">Card 1</div>
          </>
        }
      />
      <GridCard
        customStyle={
          "flex flex-col gap-2 p-6 bg-white col-span-3 row-span-2 max-[500px]:p-4"
        }
        child={
          <>
            <div className="text-xl font-bold">New Users</div>
            <NewUsers />
          </>
        }
      />
      <GridCard
        customStyle={
          "flex justify-center items-center text-4xl font-bold bg-white col-span-2 row-span-1 max-[850px]:col-span-3"
        }
        child={
          <>
            <div className="">Card 2</div>
          </>
        }
      />
    </div>
  );
}
