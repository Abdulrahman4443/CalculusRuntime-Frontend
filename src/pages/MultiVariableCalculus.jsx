import React from "react";
import { Link } from "react-router-dom";

// Developer 2 ke 5 main topics
const topics = [
  {
    id: "partials",
    title: "Partial Derivatives",
    description: "Learn and calculate partial derivatives of multivariable functions.",
    mainRoute: "/partial-derivatives/1",
    subTools: [
      { name: "Extrema Calculator", route: "/extreme" }
    ]
  },
  {
    id: "vectors",
    title: "Vector Calculus",
    description: "Explore vector fields, line integrals, and surface integrals.",
    mainRoute: "/vector-calculus/1",
    subTools: [
      // Agar Vector Field Visualizer ka alag route hai toh wo likhein, warna main link kafi hai
      { name: "Vector Field Visualizer", route: "/vector-calculus/1" } 
    ]
  },
  {
    id: "integrals",
    title: "Multiple Integrals",
    description: "Double and triple integrals for area, volume, and mass calculations.",
    mainRoute: "/multiple-integrals/1",
    subTools: [
      { name: "Volume Calculator", route: "/volumecalculator" }
    ]
  },
  {
    id: "lagrange",
    title: "Lagrange Multipliers",
    description: "Optimize functions subject to equality constraints.",
    mainRoute: "/lagrange-multipliers/1",
    subTools: []
  },
  {
    id: "divergence-stokes",
    title: "Divergence, Curl & Stokes' Theorem",
    description: "Understand flux, circulation, Divergence Theorem, and Stokes' Theorem.",
    mainRoute: "/divergence-curl/1",
    subTools: [
      { name: "Stokes' Theorem", route: "/stokes-theorem/1" }
    ]
  }
];

export default function MultiVariableCalculus() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1>Multi Variable Calculus</h1>
        <p>Explore partial derivatives, multiple integrals, vector fields, and key theorems.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {topics.map((topic) => (
          <div 
            key={topic.id} 
            style={{
              border: "1px solid var(--border-color, #ccc)",
              borderRadius: "8px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justify: "space-between",
              background: "var(--card-bg, rgba(255, 255, 255, 0.05))"
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{topic.title}</h2>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "1rem" }}>{topic.description}</p>
            </div>

            <div>
              <Link 
                to={topic.mainRoute} 
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginBottom: topic.subTools.length > 0 ? "0.75rem" : "0"
                }}
              >
                Open Topic →
              </Link>

              {topic.subTools.length > 0 && (
                <div style={{ marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px dashed #555" }}>
                  <small style={{ display: "block", marginBottom: "0.25rem", opacity: 0.7 }}>Embedded Tools:</small>
                  {topic.subTools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.route}
                      style={{
                        display: "inline-block",
                        marginRight: "0.5rem",
                        fontSize: "0.8rem",
                        color: "#38bdf8",
                        textDecoration: "underline"
                      }}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}