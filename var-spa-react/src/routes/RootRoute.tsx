import { Link, Outlet, useNavigation } from "react-router-dom";

export default function RootRoute() {
  const navigation = useNavigation();

  return (
    <>
      <header>
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
      </header>
      <main
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
        {navigation.state === "loading" && <div className="loading-indicator">Loading...</div>}
      </main>
    </>
  );
}
