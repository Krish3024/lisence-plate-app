import { useEffect, useState } from "react";

export default function LogsPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    const res = await fetch("/api/logs/getAll");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  const deleteLog = async (id) => {
    const res = await fetch(`/api/logs/delete?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setLogs((prev) => prev.filter((log) => log._id !== id));
    } else {
      alert("Failed to delete log");
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const pageStyles = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
  };

  const containerStyles = {
    maxWidth: "800px",
    width: "100%",
  };

  const headingStyles = {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
    color: "#1f2937",
  };

  const cardStyles = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const textStyles = {
    margin: "4px 0",
    color: "#374151",
    fontSize: "16px",
  };

  const dateStyles = {
    fontSize: "14px",
    color: "#6b7280",
  };

  const buttonStyles = {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.2s",
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={headingStyles}>📋 Entry Logs</h1>

        {loading ? (
          <p style={{ textAlign: "center", color: "#6b7280" }}>Loading logs...</p>
        ) : logs.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280" }}>No logs found.</p>
        ) : (
          logs.map((log) => (
            <div key={log._id} style={cardStyles}>
              <div>
                <p style={textStyles}><strong>👤 Name:</strong> {log.name}</p>
                <p style={textStyles}><strong>🚗 Plate:</strong> {log.plateNumber}</p>
                <p style={dateStyles}>
                  <strong>🕒 Created at:</strong>{" "}
                  {log.entryTime
                    ? new Date(log.entryTime).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "N/A"}, {log.entryTime.substring(11,19)}
                </p>
              </div>
              <button
                onClick={() => deleteLog(log._id)}
                style={buttonStyles}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#dc2626")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
