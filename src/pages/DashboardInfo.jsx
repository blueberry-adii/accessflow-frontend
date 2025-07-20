export default function DashboardInfo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1280px] min-h-[700px] px-8 py-4 max-[850px]:max-h-[1400px] max-[650px]:max-h-[1700px] max-[500px]:px-2">
      <div className="text-[32px] font-bold px-4 max-[500px]:text-2xl">
        About this Project
      </div>
      <div className="bg-orange-400/10 backdrop-blur-2xl rounded-4xl shadow-2xl shadow-black/25 p-8 grow">
        <div className="text-[24px] font-semibold max-[500px]:text-lg">
          Project Summary
        </div>
        <div className="text-[18px] my-2 max-[500px]:text-[14px]">
          AccessFlow is a full-stack authentication system designed to handle
          secure user, registration, login, token management, protected routes,
          and admin-level access controls. It's built with a focus on clean code
          structure, scalable backend, and real-world auth practices. It's not a
          full product - it's a foundation to build secure apps.
        </div>
        <div className="text-[24px] font-semibold mt-8 max-[500px]:text-lg">
          Tech Stack 🛠️
        </div>
        <div className="text-[18px] my-2 max-[500px]:text-[14px]">
          <div>
            <b>Frontend:</b> React.js + TailwindCSS
          </div>
          <div>
            <b>Routing:</b> React Router
          </div>
          <div>
            <b>Authentication:</b> JWT based
          </div>
          <div>
            <b>Backend:</b> Node.js + Express
          </div>
          <div>
            <b>Database:</b> MongoDB
          </div>
          <div>
            <b>Security:</b> Bcrypt, Token Expiry, Role-Based Access
          </div>
        </div>
        <div className="text-[24px] font-semibold mt-8 max-[500px]:text-lg">
          Features Implemented
        </div>
        <div className="text-[18px] my-2 max-[500px]:text-[14px]">
          <div>Role-based routing (Admin and User)</div>
          <div>Protected routes using JWT</div>
          <div>Reusable Auth Components (Login, Register)</div>
          <div>Access Tokens + Refresh Tokens</div>
          <div>Admin Panel</div>
          <div>Logout + auto expiry logic</div>
        </div>
      </div>
    </div>
  );
}
