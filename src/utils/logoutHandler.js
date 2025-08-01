export const logoutHandler = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/v1/api/auth/logout`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (res.ok) {
      window.location.href = window.location.href;
    } else {
      const data = await res.json();
      alert(`Logout failed: ${data.message}`);
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong during logout!");
  }
};
