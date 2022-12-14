const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        color: "Red",
        model: "Toyota",
        students: [
          {
            id: 1,
            name: "Cathy",
            grade: "Eight"
          },
          {
            id: 2,
            name: "Max",
            grade: "Five"
          }
        ]
      },
      {
        id: 2,
        color: "Blue",
        model: "Toyota",
        student: [
          {
            id: 3,
            name: "Carl",
            grade: "Eight"
          }
        ]
      },
      {
        id: 3,
        color: "Green",
        model: "Honda",
        student: [
          {
            id: 4,
            name: "Matt",
            grade: "Three"
          }
        ]
      },
      {
        id: 4,
        color: "Black",
        model: "Tesla",
        student: [
          {
            id: 5,
            name: "Jason",
            grade: "Nine"
          }
        ]
      },
      {
        id: 5,
        color: "Yello",
        model: "Toyota",
        students: [
          {
            id: 6,
            name: "Tommy",
            grade: "Seven"
          },
          {
            id: 7,
            name: "Zordy",
            grade: "Nine"
          }
        ]
      },
      {
        id: 5,
        color: "Pink",
        model: "Volswagen",
        student: [
          {
            id: 8,
            name: "Jill",
            grade: "Eight"
          }
        ]
      },
      {
        id: 6,
        color: "Purple",
        model: "Lamoborgini",
        students: [
          {
            id: 9,
            name: "Cathy",
            grade: "Eight"
          }
        ]
      }
    ]
  });
});

app.listen(5001, () => console.log("Server on port 5001"));
