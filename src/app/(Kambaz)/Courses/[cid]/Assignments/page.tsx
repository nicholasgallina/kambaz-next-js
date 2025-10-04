"use client";

import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { JSX } from "react";

export default function Assignments(): JSX.Element {
  return (
    <div
      className="container mt-4"
      id="wd-assignments"
      style={{ maxWidth: "800px" }}
    >
      {/* Top search + buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          placeholder="Search for Assignments"
          className="form-control w-50"
          id="wd-search-assignment"
          style={{ color: "#333" }}
        />
        <div className="ms-3">
          <button className="btn btn-outline-secondary me-2">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>

      {/* Assignments card */}
      <div className="card shadow-sm mb-3 border-0">
        <div
          className="card-header bg-light d-flex justify-content-between align-items-center"
          style={{ borderBottom: "2px solid #e5e5e5" }}
        >
          <h5 className="mb-0 fw-semibold">
            ASSIGNMENTS{" "}
            <span className="text-secondary fw-normal">40% of Total</span>
          </h5>
          <button className="btn btn-sm btn-outline-secondary">+</button>
        </div>

        <ul className="list-group list-group-flush">
          {[
            {
              id: 123,
              title: "A1 – ENV + HTML",
              due: "May 13 at 11:59pm",
            },
            {
              id: 124,
              title: "A2 – CSS + BOOTSTRAP",
              due: "May 20 at 11:59pm",
            },
            {
              id: 125,
              title: "A3 – JAVASCRIPT + REACT",
              due: "May 27 at 11:59pm",
            },
          ].map((a) => (
            <li
              key={a.id}
              className="list-group-item"
              style={{
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f9fafc")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Link
                href={`/Courses/1234/Assignments/${a.id}`}
                className="fw-semibold d-block"
                style={{
                  color: "#0056b3",
                  textDecoration: "none",
                  marginBottom: "4px",
                }}
              >
                {a.title}
              </Link>
              <p className="small text-muted mb-0">
                Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
                Due {a.due} | 100pts
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
