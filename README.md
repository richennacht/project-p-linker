# Project P-Linker

Project P-Linker is a computational research prototype for recommending and evaluating structurally plausible connections between two existing protein domains.

The first release is a React demonstration interface. Scientific calculations are represented by clearly labelled example data until the Python pipeline and college cloud runner are connected.

## Start locally

```bash
cd frontend
npm ci
npm run dev
```

## Deployment

- GitHub Actions checks every task branch, `integration`, and `main`.
- Vercel preview deployments are created for pull requests after the repository is connected.
- Vercel production deploys from `main`.
- Protein prediction and other long-running calculations remain on the college cloud, not Vercel.

## Branches

- `main`: reviewed, publishable version
- `integration`: combined work for team testing
- `work/build-port-records`: validate protein inputs and produce connection-point measurements
- `work/train-linker-ranker`: train the model that ranks connections and recommends linker type and length
- `work/predict-and-score-fusions`: build fusion sequences, run cloud structure prediction and calculate pass/fail results
- `work/build-results-interface`: build the React input, run-status, results and provenance screens

These names describe work, not people. Any team member may contribute to any work branch. All work enters `integration` through a pull request. A reviewed release pull request moves `integration` into `main`.

Each work branch has one fixed output:

| Work branch | Required output |
| --- | --- |
| `work/build-port-records` | A versioned table of measured connection points |
| `work/train-linker-ranker` | A versioned recommendation file for each connection |
| `work/predict-and-score-fusions` | A versioned final result file containing structure checks |
| `work/build-results-interface` | A tested interface that reads and displays the shared result format |

## Scientific boundary

The software reports predicted structural plausibility. It does not establish biological activity, expression, stability, safety or experimental success.
