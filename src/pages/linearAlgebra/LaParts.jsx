import LaTopicPart from "./LaTopicPart";
import VectorsGuide from "./VectorsGuide";
import MatricesGuide from "./MatricesGuide";
import SystemsGuide from "./SystemsGuide";
import EigenGuide from "./EigenGuide";

export function VectorsPart1() {
  return (
    <LaTopicPart
      sectionId="la-vectors-1"
      title="Vectors & Vector Spaces — Part 1"
      path="/linear-algebra/vectors/1"
      Guide={VectorsGuide}
      part={1}
      nextPath="/linear-algebra/vectors/2"
      nextLabel="Next: Part 2 — Span and basis"
    />
  );
}

export function VectorsPart2() {
  return (
    <LaTopicPart
      sectionId="la-vectors-2"
      title="Vectors & Vector Spaces — Part 2"
      path="/linear-algebra/vectors/2"
      Guide={VectorsGuide}
      part={2}
      nextPath="/linear-algebra/matrices/1"
      nextLabel="Next: Matrices and Determinants"
    />
  );
}

export function MatricesPart1() {
  return (
    <LaTopicPart
      sectionId="la-matrices-1"
      title="Matrices & Determinants — Part 1"
      path="/linear-algebra/matrices/1"
      Guide={MatricesGuide}
      part={1}
      nextPath="/linear-algebra/matrices/2"
      nextLabel="Next: Part 2 — Determinants and inverses"
    />
  );
}

export function MatricesPart2() {
  return (
    <LaTopicPart
      sectionId="la-matrices-2"
      title="Matrices & Determinants — Part 2"
      path="/linear-algebra/matrices/2"
      Guide={MatricesGuide}
      part={2}
      nextPath="/linear-algebra/systems/1"
      nextLabel="Next: Systems of Linear Equations"
    />
  );
}

export function SystemsPart1() {
  return (
    <LaTopicPart
      sectionId="la-systems-1"
      title="Systems of Linear Equations — Part 1"
      path="/linear-algebra/systems/1"
      Guide={SystemsGuide}
      part={1}
      nextPath="/linear-algebra/systems/2"
      nextLabel="Next: Part 2 — Rank and geometry"
    />
  );
}

export function SystemsPart2() {
  return (
    <LaTopicPart
      sectionId="la-systems-2"
      title="Systems of Linear Equations — Part 2"
      path="/linear-algebra/systems/2"
      Guide={SystemsGuide}
      part={2}
      nextPath="/linear-algebra/eigen/1"
      nextLabel="Next: Eigenvalues and Eigenvectors"
    />
  );
}

export function EigenPart1() {
  return (
    <LaTopicPart
      sectionId="la-eigen-1"
      title="Eigenvalues & Eigenvectors — Part 1"
      path="/linear-algebra/eigen/1"
      Guide={EigenGuide}
      part={1}
      nextPath="/linear-algebra/eigen/2"
      nextLabel="Next: Part 2 — Diagonalization"
    />
  );
}

export function EigenPart2() {
  return (
    <LaTopicPart
      sectionId="la-eigen-2"
      title="Eigenvalues & Eigenvectors — Part 2"
      path="/linear-algebra/eigen/2"
      Guide={EigenGuide}
      part={2}
      courseId="linear-algebra"
      nextPath="/courses/linear-algebra"
      nextLabel="Back to Linear Algebra course hub"
    />
  );
}
