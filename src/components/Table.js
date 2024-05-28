import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const generateRandomHash = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 22; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result + "...";
};

const generateRandomSOL = () => {
  return (Math.random() * (9000 - 11) + 11).toFixed(2) + " SOL";
};

const generatePayTable = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    hash: generateRandomHash(),
    participantwallet: generateRandomHash(),
    valuesol: generateRandomSOL(),
    receivesol: generateRandomSOL(),
    Status: "Completed",
  }));
};

const Table = () => {
  const [paytable, setPaytable] = useState(generatePayTable());
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaytable((prevTable) => {
        const newEntry = {
          id: prevTable.length + 1,
          hash: generateRandomHash(),
          participantwallet: generateRandomHash(),
          valuesol: generateRandomSOL(),
          receivesol: generateRandomSOL(),
          Status: "Completed",
        };
        const updatedTable = [newEntry, ...prevTable.slice(0, 9)];
        return updatedTable;
      });
      setHighlight(true);
      setTimeout(() => setHighlight(false), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <style>
        {`
          .table-container {
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
          }

          .table-wrapper {
            overflow-x: auto;
          }

          .table {
            margin: 0;
            font-family: 'Arial', sans-serif;
            width: 100%; /* Make table full width */
            min-width: 600px; /* Ensures table maintains a minimum width */
          }

          .table th, .table td {
            border-top: 1px solid #dee2e6;
            border-bottom: none;
            word-wrap: break-word; /* Allows long text to break and wrap */
          }

          .highlight {
            animation: highlight-animation 1s;
          }

          @keyframes highlight-animation {
            from {
              background-color: lightgreen;
            }
            to {
              background-color: white;
            }
          }

          .status {
            color: green;
            font-weight: bold;
          }

          .table thead th {
            border-top: none;
          }

          @media (max-width: 600px) {
            .table-wrapper {
              padding: 0;
              margin: 0;
            }

            .table {
              width: 100%; /* Ensure the table spans the full width of the container */
              min-width: unset; /* Remove the minimum width on small screens */
            }

            .table-container {
              border: none; /* Optional: remove border for a cleaner look on small screens */
            }
          }
        `}
      </style>
      <div className="table-container">
        <div className="table-wrapper">
          <table style={{ color: "gray" }} className="table table-striped">
            <thead>
              <tr>
                <th style={{ color: "gray" }}>Hash</th>
                <th style={{ color: "gray" }}>Participant Wallet</th>
                <th style={{ color: "gray" }}>Value</th>
                <th style={{ color: "gray" }}>Receive SOL</th>
                <th style={{ color: "gray" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {paytable.map((pay, index) => (
                <tr
                  key={pay.id}
                  className={index === 0 && highlight ? "highlight" : ""}
                >
                  <td style={{ color: "gray" }}>{pay.hash}</td>
                  <td style={{ color: "gray" }}>{pay.participantwallet}</td>
                  <td style={{ color: "gray" }}>{pay.valuesol}</td>
                  <td style={{ color: "gray" }}>{pay.receivesol}</td>
                  <td className="status" style={{ color: "#059652" }}>
                    {pay.Status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
