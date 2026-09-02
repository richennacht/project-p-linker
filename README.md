# Project P-Linker

Project P-Linker is a computational research prototype for recommending and evaluating structurally plausible connections between two existing protein domains.

The first release is a React demonstration interface. Scientific calculations are represented by clearly labelled example data until the Python pipeline and college cloud runner are connected.

## Start locally

```bash
cd frontend
npm ci
npm run dev
```

## Branches

- `main`: reviewed, publishable version
- `integration`: combined work for team testing
- `work/protein-data`: protein inputs and measurements
- `work/recommendation-model`: recommendation model
- `work/cloud-pipeline`: construction, prediction and evaluation
- `work/frontend-reporting`: interface and result reporting

All work enters `integration` through a pull request. A reviewed release pull request moves `integration` into `main`.

## Scientific boundary

The software reports predicted structural plausibility. It does not establish biological activity, expression, stability, safety or experimental success.

