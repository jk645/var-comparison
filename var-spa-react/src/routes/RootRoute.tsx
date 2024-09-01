import { Link, Outlet } from "react-router-dom";

export default function RootRoute() {
  return (
    <>
      <header>
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
