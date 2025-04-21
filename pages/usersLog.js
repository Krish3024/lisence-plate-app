import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users/getAll");
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/users/delete?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (res.status === 200) {
      alert(data.message);
      // Reload the page or refetch users after deletion
      router.reload();
    } else {
      alert("Error deleting user");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Users</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Plate Number</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.plateNumber}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
