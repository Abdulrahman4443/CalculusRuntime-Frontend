import {
  TheoryBox,
  PracticalTheory,
  RealLifeUse,
} from "./CalcBlocks";
import { EightExamples } from "../../data/calcAgLengthyExamples";
import {
  LIMITS_P1_EXAMPLES,
  LIMITS_P2_EXAMPLES,
  TAYLOR_P1_EXAMPLES,
  TAYLOR_P2_EXAMPLES,
} from "../../data/limitsTaylorCertExamples";

/** Extra certificate-depth block for Limits & Continuity guides. */
export function LimitsCertificateBoost({ part = 1 }) {
  if (part === 2) {
    return (
      <section className="section" id="lc-cert-p2">
        <div className="sec-badge">Certificate depth - Part 2</div>
        <h2 className="sec-title">Continuity - eight detailed examples</h2>
        <TheoryBox title="Three-part definition">
          <p>
            {`$f$ is continuous at $a$ if and only if three facts hold together: (1) $f(a)$ is defined as a real number; (2) $\\lim_{x\\to a}f(x)$ exists; (3) that limit equals $f(a)$. Missing any one of these produces a discontinuity. On a closed bounded interval, a continuous function is bounded and attains its absolute maximum and minimum (Extreme Value Theorem), which is why continuity hypotheses appear in optimization and in the Intermediate Value Theorem used for existence proofs.`}
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            {`Classify breaks carefully. A removable discontinuity has a limit but the wrong (or missing) function value - redefine $f(a)$ to repair it. A jump discontinuity has unequal one-sided limits. An infinite discontinuity has a vertical asymptote. Certificate writing names the type and cites which of the three continuity conditions failed.`}
          </p>
        </TheoryBox>
        <PracticalTheory title="How to test continuity quickly">
          <p>
            {`Polynomials and rational functions are continuous on their natural domains (everywhere the denominator is nonzero). For piecewise definitions, check the break points with left and right limits. For compositions, continuous outer functions preserve limits of inner functions. When a problem asks only "is it continuous at $c$?", compute the three checklist items in order and stop at the first failure - that is the shortest rigorous answer.`}
          </p>
        </PracticalTheory>

        <EightExamples items={LIMITS_P2_EXAMPLES} />

        <RealLifeUse>
          Continuity is why a dam spillway model can trust that discharge varies smoothly with gate
          height, and why a removable hole in a formula is an artifact of algebra - not a physical
          jump. In process control, a discontinuous sensor map creates false alarms; classifying the
          break (removable, jump, infinite) tells the engineer whether to redefine a single point,
          redesign the ramp, or add a safety interlock. Certificate-level continuity means you can
          classify discontinuities, repair removable ones, and invoke IVT for existence proofs the way
          HSSC and HEC papers expect.
        </RealLifeUse>
      </section>
    );
  }

  return (
    <section className="section" id="lc-cert-p1">
      <div className="sec-badge">Certificate depth - Part 1</div>
      <h2 className="sec-title">Limits - eight detailed examples</h2>
      <TheoryBox title="Formal limit (1D) and multivariable idea">
        <p>
          {`In one variable, $\\lim_{x\\to a}f(x)=L$ means: for every tolerance $\\varepsilon>0$ there is a window $\\delta>0$ so that $0<|x-a|<\\delta$ forces $|f(x)-L|<\\varepsilon$. Intuitively, $f(x)$ can be forced arbitrarily close to $L$ by taking $x$ close enough to $a$, ignoring the single point $x=a$ itself. That is why a function can have a limit at a hole.`}
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          {`In two variables the same idea becomes stricter: $\\lim_{(x,y)\\to(a,b)}f(x,y)=L$ requires that every approach path - lines, parabolas, spirals - produces the same $L$. If two paths disagree, the limit does not exist (DNE). Certificate work therefore separates three skills: (1) evaluate ordinary 1D limits with algebra and standard forms; (2) run a two-path (or polar) test to prove DNE or to support existence; (3) never claim a multivariable limit exists from a single convenient path.`}
        </p>
      </TheoryBox>
      <PracticalTheory title="Strategy ladder">
        <p>
          {`Work in this order unless a problem forces otherwise. Direct substitution when $f$ is continuous at the point. If you get $0/0$ or $\\infty/\\infty$, algebra first: factor and cancel, multiply by a conjugate, or clear a complex fraction. Then reach for standard limits ($\\sin x/x$, $(1+u)^{1/u}$, etc.) or the squeeze theorem when oscillation is bounded by something going to zero. For $(x,y)\\to(a,b)$, try easy paths ($y=a$, $x=b$, $y-b=m(x-a)$); if they disagree you are done (DNE). If they agree, switch to polar or a squeeze bound before declaring existence. Write the reason for each move - markers award method as much as the final number.`}
        </p>
      </PracticalTheory>
      <RealLifeUse>
        Limit language is how control systems talk about sensors approaching a set-point and how
        traffic models take shrinking-window averages - the same difference-quotient idea behind
        derivatives.
      </RealLifeUse>

      <EightExamples items={LIMITS_P1_EXAMPLES} />

      <RealLifeUse>
        Limits are the language of "what happens in the approach," which is exactly how engineers talk
        about sensors, tolerances, and steady regimes. Certificate-level limit fluency means
        you can spot an illegal substitution, repair a $0/0$, and prove DNE with two clean paths -
        the same checklist HSSC and HEC markers use.
      </RealLifeUse>
    </section>
  );
}

/** Extra certificate-depth block for Taylor Series guides. */
export function TaylorCertificateBoost({ part = 1 }) {
  if (part === 2) {
    return (
      <section className="section" id="taylor-cert-p2">
        <div className="sec-badge">Certificate depth - Part 2</div>
        <h2 className="sec-title">Series &amp; error - eight detailed examples</h2>
        <TheoryBox title="Remainder and convergence">
          <p>
            {"Lagrange remainder: $R_n(x)=\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for some $c$ between $a$ and $x$. Absolute convergence tests (ratio, alternating series) decide when the infinite Taylor series equals $f$."}
          </p>
        </TheoryBox>
        <PracticalTheory title="Using TaylorX and hand estimates together">
          <p>
            {"Raise degree $n$ near the expansion point to see the polynomial hug $f$. Hand estimates with $|R_n|$ tell you how many terms you need for a given accuracy - calculators and GPS firmware do the same tradeoff."}
          </p>
        </PracticalTheory>

        <EightExamples items={TAYLOR_P2_EXAMPLES} />

        <RealLifeUse>
          Sequences and series power calculators, GPS trig approximations, and signal processing -
          firmware keeps enough terms for a target error, then stops. Certificate-level Taylor means
          you can expand, estimate remainder, and know when the series actually represents the
          function, not just write the first three terms.
        </RealLifeUse>
      </section>
    );
  }

  return (
    <section className="section" id="taylor-cert-p1">
      <div className="sec-badge">Certificate depth - Part 1</div>
      <h2 className="sec-title">Taylor polynomials - eight detailed examples</h2>
      <TheoryBox title="Taylor polynomial">
        <p>
          {"$P_n(x)=\\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x-a)^k$ matches $f$ and its first $n$ derivatives at $a$. Maclaurin means $a=0$."}
        </p>
      </TheoryBox>
      <PracticalTheory title="Build $P_n$ without fear">
        <p>
          {"Make a derivative table at $a$, plug into the formula, stop at degree $n$. Use known series (exp, sin, cos, $1/(1-x)$) when you recognize them - faster and less error-prone than raw differentiation."}
        </p>
      </PracticalTheory>

      <EightExamples items={TAYLOR_P1_EXAMPLES} />

      <RealLifeUse>
        Taylor polynomials are how devices approximate sin, exp, and logs in real time - keep more
        terms for accuracy, fewer for speed. Part 1 builds the polynomial; Part 2 bounds the error so
        your approximation is certificate-defensible, not just "looks close on a graph."
      </RealLifeUse>
    </section>
  );
}
