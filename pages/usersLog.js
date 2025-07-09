// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const UsersPage = () => {
//   const [users, setUsers] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch("/api/users/getAll");
//       const data = await res.json();
//       setUsers(data);
//     };

//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     const res = await fetch(`/api/users/delete?id=${id}`, {
//       method: "DELETE",
//     });

//     const data = await res.json();
//     if (res.status === 200) {
//       alert(data.message);
//       // Reload the page or refetch users after deletion
//       router.reload();
//     } else {
//       alert("Error deleting user");
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-semibold mb-4">Users</h1>
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Plate Number</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user._id}>
//                 <td className="py-2 px-4 border-b">{user.name}</td>
//                 <td className="py-2 px-4 border-b">{user.plateNumber}</td>
//                 <td className="py-2 px-4 border-b">
//                   <button
//                     onClick={() => handleDelete(user._id)}
//                     className="bg-red-500 text-white py-1 px-3 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="text-center py-4">
//                 No users found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UsersPage;
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Trash2, User, Car, AlertCircle, Loader2, Plus } from "lucide-react"

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users/getAll")
        const data = await res.json()
        setUsers(data)
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    setDeletingId(id)
    try {
      const res = await fetch(`/api/users/delete?id=${id}`, {
        method: "DELETE",
      })
      const data = await res.json()
      if (res.status === 200) {
        setUsers((prev) => prev.filter((user) => user._id !== id))
        // Show success message instead of alert
      } else {
        alert("Error deleting user")
      }
    } catch (error) {
      console.error("Error deleting user:", error)
      alert("Error deleting user")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          padding: "40px 20px",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#667eea",
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <Users size={48} />
              User Management
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto 30px auto",
              }}
            >
              Manage registered users and their vehicle information
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/create-user")}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 auto",
                boxShadow: "0 10px 25px rgba(102, 126, 234, 0.3)",
              }}
            >
              <Plus size={20} />
              Add New User
            </motion.button>
          </motion.div>

          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 20px",
              }}
            >
              <Loader2
                size={48}
                style={{ color: "#667eea", marginBottom: "20px", animation: "spin 1s linear infinite" }}
              />
              <p style={{ color: "#666", fontSize: "1.1rem" }}>Loading users...</p>
            </motion.div>
          ) : users.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "25px",
                padding: "60px 40px",
                textAlign: "center",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <AlertCircle size={64} style={{ color: "#6b7280", marginBottom: "20px" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                No Users Found
              </h3>
              <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
                Get started by adding your first user to the system.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/create-user")}
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  margin: "0 auto",
                }}
              >
                <Plus size={20} />
                Create First User
              </motion.button>
            </motion.div>
          ) : (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "15px",
                  padding: "20px 30px",
                  marginBottom: "30px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#667eea", fontWeight: "700", fontSize: "1.1rem" }}>
                  Total Users: {users.length}
                </span>
              </motion.div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "25px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                {/* Table Header */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    padding: "25px 30px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 150px",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <User size={18} />
                    Name
                  </h3>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Car size={18} />
                    License Plate
                  </h3>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Actions
                  </h3>
                </div>

                {/* Table Body */}
                <AnimatePresence>
                  {users.map((user, index) => (
                    <motion.div
                      key={user._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      style={{
                        padding: "25px 30px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 150px",
                        gap: "20px",
                        alignItems: "center",
                        borderBottom: index < users.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(102, 126, 234, 0.02)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <div
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "700",
                            fontSize: "1.2rem",
                          }}
                        >
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "1.1rem",
                              fontWeight: "700",
                              color: "#333",
                              margin: 0,
                            }}
                          >
                            {user.name}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            color: "#333",
                            margin: 0,
                            fontFamily: "monospace",
                            letterSpacing: "1px",
                            background: "rgba(102, 126, 234, 0.1)",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            display: "inline-block",
                          }}
                        >
                          {user.plateNumber}
                        </p>
                      </div>

                      <div style={{ textAlign: "center" }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDelete(user._id)}
                          disabled={deletingId === user._id}
                          style={{
                            background:
                              deletingId === user._id ? "#ccc" : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                            color: "white",
                            border: "none",
                            padding: "10px 16px",
                            borderRadius: "10px",
                            cursor: deletingId === user._id ? "not-allowed" : "pointer",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            margin: "0 auto",
                            boxShadow: "0 4px 15px rgba(239, 68, 68, 0.3)",
                          }}
                        >
                          {deletingId === user._id ? (
                            <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />
                          ) : (
                            <Trash2 size={14} />
                          )}
                          {deletingId === user._id ? "..." : "Delete"}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default UsersPage
