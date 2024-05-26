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
          }

          .table-wrapper {
            overflow-x: auto;
          }

          .table {
            margin: 0;
            font-family: 'Arial', sans-serif;
            min-width: 600px; /* Ensures table maintains a minimum width */
          }

          .table th, .table td {
            border-top: 1px solid #dee2e6;
            border-bottom: none;
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
        `}
      </style>
      <div className="table-container">
        <div className="table-wrapper">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Hash</th>
                <th>Participant Wallet</th>
                <th>Value</th>
                <th>Receive SOL</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paytable.map((pay, index) => (
                <tr
                  key={pay.id}
                  className={index === 0 && highlight ? "highlight" : ""}
                >
                  <td>{pay.hash}</td>
                  <td>{pay.participantwallet}</td>
                  <td>{pay.valuesol}</td>
                  <td>{pay.receivesol}</td>
                  <td className="status" style={{ color: "green" }}>
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
