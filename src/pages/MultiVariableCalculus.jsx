import React from "react";
import { Link } from "react-router-dom";
import "./GuidePart.css";

const topics = [
  {
    title: "Partial Derivatives",
    description: "Limits, continuity, gradients, tangent planes, differentials, and optimization for functions of several variables.",
    path: "/partial-derivatives/1",
    meta: "2 parts · MCQ practice",
    icon: "∂",
    color: "teal",
  },
  {
    title: "Vector Calculus",
    description: "Vector-valued functions, line integrals, conservative fields, Green's theorem, surfaces, and surface area.",
    path: "/vector-calculus/1",
    meta: "2 parts · MCQ practice",
    icon: "∇",
    color: "blue",
  },
  {
    title: "Limits & Continuity",
    description: "Multivariable limits, path-dependence, the squeeze theorem, and continuity for functions of two or more variables.",
    path: "/limits-continuity/1",
    meta: "2 parts · MCQ practice",
    icon: "lim",
    color: "purple",
  },
  {
    title: "Multiple Integrals",
    description: "Double and triple integrals, Fubini's theorem, changing order of integration, polar and cylindrical coordinates.",
    path: "/multiple-integrals/1",
    meta: "2 parts · MCQ practice",
    icon: "∬",
    color: "teal",
  },
  {
    title: "Taylor Series",
    description: "Local linear and higher-order approximations, Maclaurin catalogs, convergence, and error bounds.",
    path: "/taylor-series/1",
    meta: "2 parts · MCQ practice",
    icon: "Σ",
    color: "gold",
  },
  {
    title: "Lagrange Multipliers",
    description: "Constrained optimization via gradient alignment, dual constraints, and worked applications.",
    path: "/lagrange-multipliers/1",
    meta: "2 parts · MCQ practice",
    icon: "λ",
    color: "purple",
  },
  {
    title: "Divergence & Curl",
    description: "Vector field operators, identities, the divergence theorem, and Stokes connections.",
    path: "/divergence-curl/1",
    meta: "2 parts · MCQ practice",
    icon: "∇·",
    color: "blue",
  },
  {
    title: "Stokes' Theorem",
    description: "Circulation, oriented surfaces, and Stokes applications (linked with Divergence & Curl).",
    path: "/stokes-theorem/1",
    meta: "Study guide · Theorem applications",
    icon: "∮",
    color: "teal",
  },
];

export default function MultiVariableCalculus() {
  return (
    <div className="guide-page">
      <style>{`
        .guide-card::after,
        .guide-card::before,
        .guide-card *::after,
        .guide-card *::before {
          content: none !important;
          display: none !important;
        }
        .guide-card {
          border-left: 4px solid #a3925c !important; /* Warm gold left accent */
        }
        .clean-open-btn {
          display: inline-block !important;
          padding: 6px 16px !important;
          font-size: 0.85rem !important;
          font-weight: 600 !important;
          color: #81724a !important; /* Warm gold/brown text */
          background-color: #f2eee3 !important; /* Warm cream background */
          border-radius: 20px !important;
          border: 1px solid #e3dbc7 !important; /* Matching soft border */
          text-decoration: none !important;
          transition: all 0.2s ease !important;
        }
        .clean-open-btn:hover {
          background-color: #e8e1d3 !important;
          color: #6b5e3c !important;
        }
      `}</style>

      <div className="guide-hero">
        <p className="eyebrow">Course Path</p>
        <h1>Multi Variable Calculus</h1>
        <p>Explore partial derivatives, multiple integrals, vector fields, and key theorems.</p>
      </div>

      <div className="guide-grid">
        {topics.map((guide) => (
          <div key={guide.path} className={`guide-card guide-card--${guide.color}`}>
            <div className="guide-card-icon">{guide.icon}</div>
            <span className="guide-card-meta">{guide.meta}</span>
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", paddingTop: "12px" }}>
              <Link to={guide.path} className="clean-open-btn">
                Open →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}