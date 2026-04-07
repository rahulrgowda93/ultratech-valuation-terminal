# ULTRACEMCO · Phase 2B FCFF Valuation

### A Bloomberg-Terminal-Inspired Equity Research Dashboard

> \\\*"Story Before Statistics"\\\* — A Valuation in the Damodaran Tradition

\---

## Overview

This repository contains an institutional-grade equity research dashboard built for the **Phase 2B FCFF Valuation of UltraTech Cement Limited (NSE: ULTRACEMCO)** — India's largest cement company and a flagship of the Aditya Birla Group.

**Submitted to:** Dr. Nandan Prabhu, Associate Professor  
**Author:** Rahul R Gowda, MBA (IPM) · T.A. Pai Management Institute, MAHE  
**Date:** March 2026

\---

## Live Demo

> 🔗 \\\*\\\*\\\[View Live Dashboard](https://yourusername.github.io/ultracemco-fcff-valuation)\\\*\\\*

\---

## What's Inside

|File|Description|
|-|-|
|`index.html`|Bloomberg-style landing page with KPI cards, valuation bridge, scenario analysis, WACC decomposition|
|`terminal.html`|Full interactive valuation terminal (FCFF model, sensitivity, Monte Carlo)|
|`report.pdf`|21-page equity research report in the Damodaran tradition|
|`styles.css`|Dark-theme design system (IBM Plex fonts, amber/green accents)|
|`script.js`|Minimal JS — scroll animations, entrance effects, keyboard shortcuts|
|`assumptions.md`|All modelling assumptions documented|
|`methodology.md`|FCFF/FCFE methodology and Damodaran reconciliation|

\---

## Key Findings

|Metric|Value|
|-|-|
|**FCFF Intrinsic Value**|₹11,842 / share|
|**Market Price (Mar 13, 2026)**|₹10,737|
|**Upside**|+10.3%|
|**FCFE Cross-Check**|Matches FCFF (difference <1%)|
|**Verdict**|**HOLD / ACCUMULATE ON DIPS**|
|WACC|11.74%|
|Terminal Growth Rate|5.5%|
|Terminal Value Weight|88.2%|
|ROIC – WACC Spread|+2.46%|
|Monte Carlo P(IV > Market)|54%|

✔ FCFF–FCFE reconciliation achieved (Damodaran identity, <1% difference)

\---

## The Central Thesis

UltraTech's explicit-period FCFFs (Years 1–3) are tiny — nearly all NOPAT is consumed by reinvestment at a 1.05× Sales-to-Capital ratio. The thesis lives in what happens in Year 4 onward: growth slows, reinvestment eases, and FCFF jumps from ₹3,826 Mn to ₹41,118 Mn in a single year.

**That inflection — and the long compounding beyond it — is 88.2% of enterprise value.**

Buying UltraTech at ₹10,737 is a bet on India's construction future, not a near-term trade.

\---

## Screenshots

> \\\*(Add screenshots here after deployment)\\\*

```
📸 screenshots/landing-page.png
📸 screenshots/valuation-terminal.png
📸 screenshots/sensitivity-matrix.png
```

\---

## Design Philosophy

* **Dark theme** — Bloomberg terminal aesthetic (`#080c14` deep navy background)
* **Monospace data** — IBM Plex Mono for all financial figures
* **Amber accent** — Primary action color (`#f59e0b`), reflecting analytical caution
* **Green/Red signals** — Value creation vs. destruction at a glance
* **Zero frameworks** — Pure HTML + CSS + JS, GitHub Pages ready

\---

## Keyboard Shortcuts

|Key|Action|
|-|-|
|`T`|Open Valuation Terminal|
|`R`|Open PDF Report (new tab)|

\---

## Methodology

See [`methodology.md`](methodology.md) for the full FCFF/FCFE framework, Damodaran reconciliation, and model audit checklist.

See [`assumptions.md`](assumptions.md) for all growth, margin, capital, and financing assumptions.

\---

## Disclaimer

*This project is an intellectual exercise in valuation methodology, submitted as part of MBA coursework. It does not constitute investment advice. The author held no position in ULTRACEMCO at the time of submission.*

\---

*Rahul R Gowda · TAPMI-MAHE · March 2026*

