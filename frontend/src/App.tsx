import { Activity, ArrowRight, CheckCircle2, CircleDot, Database, GitBranch, ShieldCheck } from 'lucide-react'

const stages = [
  ['01', 'Check inputs', 'Confirm both protein files and protected sites are usable.'],
  ['02', 'Measure joining points', 'Describe the shape and surroundings of each possible connection.'],
  ['03', 'Recommend a linker', 'Rank connection direction, linker type, and length.'],
  ['04', 'Predict and compare', 'Predict the combined shape and compare it with the originals.'],
]

const runs = [
  { id: 'PL-0007', pair: 'Example A + Example B', method: 'P-Linker', status: 'Example result', score: '84%' },
  { id: 'PL-0006', pair: 'Example C + Example D', method: 'Fixed linker', status: 'Example result', score: '61%' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Project P-Linker home">
          <span className="brand-mark">P</span>
          <span>Project P-Linker</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#workflow">Workflow</a>
          <a href="#runs">Example runs</a>
          <a href="#provenance">Provenance</a>
        </nav>
        <span className="release">Research prototype · v0.1</span>
      </header>

      <main id="top">
        <section className="hero">
          <div className="eyebrow"><CircleDot size={14} /> Computational research workspace</div>
          <h1>Design protein connections that can be inspected, repeated, and challenged.</h1>
          <p className="hero-copy">P-Linker recommends how two existing protein domains might be connected, predicts the resulting structure, and records the evidence behind every result.</p>
          <div className="hero-actions">
            <button type="button" disabled title="Enabled when the scientific service is connected">Start a design <ArrowRight size={17} /></button>
            <a href="#workflow">See how it works</a>
          </div>
          <p className="notice"><ShieldCheck size={17} /> Demonstration only. The current site uses labelled example results and makes no claim of biological function.</p>
        </section>

        <section className="metrics" aria-label="Project status">
          <article><span>System state</span><strong>Frontend ready</strong><small>Scientific service not connected</small></article>
          <article><span>Primary measure</span><strong>Valid fusion rate</strong><small>Predicted structural plausibility</small></article>
          <article><span>Compared methods</span><strong>4</strong><small>Random, fixed, geometry, P-Linker</small></article>
          <article><span>Traceability</span><strong>Required</strong><small>Inputs, code, model and settings</small></article>
        </section>

        <section className="section" id="workflow">
          <div className="section-heading"><span>01 / Workflow</span><h2>One traceable path from input to result</h2></div>
          <div className="stage-grid">
            {stages.map(([number, title, body]) => <article className="stage" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className="section split" id="runs">
          <div>
            <div className="section-heading"><span>02 / Shared work</span><h2>Results visible to the whole team</h2></div>
            <p>Every calculation receives a permanent identifier. Failed calculations remain visible so that the final paper does not hide inconvenient results.</p>
          </div>
          <div className="run-table" role="table" aria-label="Example runs">
            <div className="run-row header" role="row"><span>Run</span><span>Protein pair</span><span>Method</span><span>Score</span></div>
            {runs.map((run) => <div className="run-row" role="row" key={run.id}><strong>{run.id}</strong><span>{run.pair}</span><span>{run.method}</span><span className="score">{run.score}</span></div>)}
          </div>
        </section>

        <section className="section provenance" id="provenance">
          <div className="section-heading"><span>03 / Provenance</span><h2>Every answer carries its history</h2></div>
          <div className="provenance-grid">
            <article><GitBranch /><div><strong>Code version</strong><p>Exact source-code revision and working configuration.</p></div></article>
            <article><Database /><div><strong>Input identity</strong><p>File fingerprints, data source, cleaning record, and warnings.</p></div></article>
            <article><Activity /><div><strong>Calculation record</strong><p>Model, predictor, settings, random seed, hardware, and failures.</p></div></article>
            <article><CheckCircle2 /><div><strong>Decision record</strong><p>Every passed rule, failed rule, score, and stated limitation.</p></div></article>
          </div>
        </section>
      </main>

      <footer><strong>Project P-Linker</strong><span>Encoding-guided design of structurally plausible fusion proteins</span><span>Computational predictions require future experimental validation.</span></footer>
    </div>
  )
}

export default App

