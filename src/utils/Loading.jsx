export default function Loading({ text }) {
  return (
    <>
      <main className="h-full w-full fixed inset-0 flex flex-col gap-3 items-center justify-center">
        {/* <div className="h-10 w-10 relative animate-spin bg-white before:content-[''] before:bg-black before:h-10 before:absolute before:w-10 before:rotate-90 before:animate-spin"></div> */}
        <div className="w-12 h-12 border-4 border-blue-400/75 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-lg">{text}</div>
      </main>
    </>
  );
}
