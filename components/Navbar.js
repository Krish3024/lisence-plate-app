import Link from "next/link";

const Navbar = () => {
  return (
    <header style={{ padding: "10px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link href="/" passHref>
          <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
            Home
          </div>
        </Link>
        <Link href="/live" passHref>
          <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
            Live
          </div>
        </Link>
        <Link href="/logs" passHref>
          <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
            Entry Logs
          </div>
        </Link>
        <Link href="/create-user" passHref>
          <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
            Create User
          </div>
        </Link>
        <Link href="/usersLog" passHref>
          <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
            User Logs
          </div>
        </Link>
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
