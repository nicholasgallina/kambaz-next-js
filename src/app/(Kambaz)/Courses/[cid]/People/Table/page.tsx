"use client";

import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { JSX } from "react";

export default function PeopleTable(): JSX.Element {
  const people = [
    {
      first: "Tony",
      last: "Stark",
      login: "001234561S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32",
    },
    {
      first: "Bruce",
      last: "Wayne",
      login: "001234562B",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-02",
      totalActivity: "08:45:18",
    },
    {
      first: "Steve",
      last: "Rogers",
      login: "001234563C",
      section: "S102",
      role: "STUDENT",
      lastActivity: "2020-10-03",
      totalActivity: "12:10:54",
    },
    {
      first: "Natasha",
      last: "Romanoff",
      login: "001234564N",
      section: "S102",
      role: "STUDENT",
      lastActivity: "2020-10-03",
      totalActivity: "09:56:22",
    },
  ];

  return (
    <div
      id="wd-people-table"
      className="container mt-4"
      style={{ maxWidth: "900px" }}
    >
      <h4 className="fw-semibold mb-3">People</h4>

      <Table
        striped
        hover
        responsive
        bordered
        className="align-middle shadow-sm"
      >
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.login}>
              <td className="text-nowrap">
                <FaUserCircle className="me-2 fs-3 text-secondary" />
                <span className="fw-semibold">{person.first}</span>{" "}
                <span>{person.last}</span>
              </td>
              <td>{person.login}</td>
              <td>{person.section}</td>
              <td>{person.role}</td>
              <td>{person.lastActivity}</td>
              <td>{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
