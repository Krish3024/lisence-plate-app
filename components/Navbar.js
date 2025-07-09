// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <header style={{ padding: "10px", textAlign: "center" }}>
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <Link href="/" passHref>
//           <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
//             Home
//           </div>
//         </Link>
//         <Link href="/live" passHref>
//           <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
//             Live
//           </div>
//         </Link>
//         <Link href="/logs" passHref>
//           <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
//             Entry Logs
//           </div>
//         </Link>
//         <Link href="/create-user" passHref>
//           <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
//             Create User
//           </div>
//         </Link>
//         <Link href="/usersLog" passHref>
//           <div style={{ margin: "0 20px", fontSize: "18px", color: "black", fontWeight: "bold" }}>
//             User Logs
//           </div>
//         </Link>
//       </div>
//       <hr />
//     </header>
//   );
// };

// export default Navbar;

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/live", label: "Live" },
    { href: "/logs", label: "Entry Logs" },
    { href: "/create-user", label: "Create User" },
    { href: "/usersLog", label: "User Logs" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px 0",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          padding: "0 20px",
        }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.href} style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "600",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.25)"
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.15)"
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "none"
                }}
              >
                {item.label}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.header>
  )
}

export default Navbar
