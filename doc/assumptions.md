# Modelling Assumptions · UltraTech Cement Phase 2B FCFF Valuation

> All assumptions are documented here for transparency and reproducibility.  
> Base year: **FY2024-25** (post India Cements acquisition consolidation)

---

## 1. Base Year

| Item | Value | Notes |
|------|-------|-------|
| Revenue | ₹7,59,550 Mn | FY25 actual; post India Cements consolidation |
| EBIT Margin | 16.5% | Integration-depressed; not steady-state |
| Effective Tax Rate | 25.17% | FY25 actual statutory rate; FY24's 16% had one-time DTA benefit |
| Net Debt | ₹1,72,951 Mn | Post-acquisition elevated; aggressive deleveraging projected |
| Book Value Equity | ₹7,19,049 Mn | Retained earnings + India Cements equity absorbed |
| NOPAT | ₹93,500 Mn | EBIT × (1 − 0.2517) |
| Installed Capacity | ~175 MTPA | Post India Cements (~30 MTPA added) |

---

## 2. Revenue Growth Assumptions

| Period | Growth Rate | Rationale |
|--------|------------|-----------|
| Years 1–3 (FY26–FY28) | 13.0% p.a. | India Cements utilisation ramp (60% → 80%); organic volume +15% confirmed Q3 FY26; Bloomberg consensus ₹8.4–8.7T FY26E |
| Years 4–5 (FY29–FY30) | 9.0% p.a. | Integration largely absorbed; growth converges toward fundamental rate |
| Terminal (FY31+) | 5.5% p.a. | India nominal GDP anchor (~10–12%); conservative at ~half GDP; assumes zero perpetual market share gain |

**Key test:** Fundamental Growth Rate = ROIC × Reinvestment Rate = 14.2% × 56% ≈ 8%. The 13% near-term rate is justified by utilisation ramp (not proportionate new capex), confirmed by Q3 FY26 organic volume data.

---

## 3. Margin Assumptions

| Item | FY25 Base | Y1–Y3 | Y4–Y5 | Rationale |
|------|-----------|-------|-------|-----------|
| EBIT Margin | 16.5% | 16.5% | 17.5% | Conservative hold at FY25 until synergies confirmed; recovery as South India utilisation rises |
| D&A / Revenue | ~7.5% | 7.5% | 7.0% | India Cements heavy asset base; gradual taper as revenue grows into fixed base |
| Tax Rate | 25.17% | 25.17% | 25.0% | Normalised statutory rate; critical correction from Phase 1's 16% |
| EBITDA / Tonne (indicative) | ₹1,051 (Q3 annl.) | ₹1,100–₹1,200 | ₹1,250+ | Q3 FY26 already showed ₹140 YoY improvement/tonne |

**What I am NOT projecting:** A return to FY24's 27.4% EBIT margin. That was a high-watermark driven by exceptionally favourable petcoke costs and pre-acquisition margins. The base case is disciplined recovery, not mean reversion to a one-time peak.

---

## 4. Capital & Reinvestment Assumptions

| Item | Value | Method |
|------|-------|--------|
| Sales-to-Capital Ratio | 1.05× | First-principles derivation from Phase 1 Appendix C; ΔCapital / ΔRevenue |
| Reinvestment Rate (Y1–Y3) | ~97% | g / ROIC = 13% / 14.2% = 91.5%; model is slightly conservative at 96.9% |
| Reinvestment Rate (Y4–Y5) | ~60% | Growth taper to 9%; NOPAT compounding on existing base |
| Reinvestment Rate (Terminal) | 39.4% | g / ROIC = 5.5% / 14.0% |

**The inflection:** FCFF jumps from ₹3,826 Mn (Year 3) to ₹41,118 Mn (Year 4) when growth slows from 13% to 9%. This is not a model quirk — it is the economics of capital-intensive growth accurately represented.

---

## 5. Financing Assumptions

| Item | Value | Notes |
|------|-------|-------|
| Net Debt (FY25) | ₹1,72,951 Mn | Acquisition-elevated; IND AAA rated |
| Net Debt / EBITDA | 1.08× | Pre-acquisition norm was ~0.3×; guided <0.7× by FY27 |
| Interest Expense Approach | Beginning-of-period convention | Eliminates model circularity |
| Blended Cost of Debt | 8.92% | IND AAA spread ~2.24% over r_f |
| After-Tax Cost of Debt | 5.93% | 8.92% × (1 − 0.2517) |
| Deleveraging Path | 1.08× → 0.7× (FY27) → <0.3× (FY28+) | FCF math confirms achievable without heroic assumptions |

---

## 6. WACC Assumptions

| Component | Value | Source |
|-----------|-------|--------|
| Risk-Free Rate | 6.68% | RBI 10-Year G-Sec yield, March 13, 2026 |
| Unlevered Beta | 0.82 | Damodaran Jan 2026; India Cement & Building Materials sector |
| D/E at Market | 0.24× | Net Debt ₹1,72,951 Mn / MCap ₹3,16,437 Cr |
| Levered Beta | 0.93 | Hamada: 0.82 × [1 + (1−0.2517) × 0.24] |
| India ERP | 4.23% | Damodaran Jan 2026 implied ERP |
| Country Risk Premium | 1.55% | India Moody's Baa3 default spread × equity-bond volatility ratio |
| Cost of Equity | 13.20% | 6.68% + (0.93 × 4.23%) + 1.55% |
| WACC | **11.74%** | (0.806 × 13.20%) + (0.194 × 5.93%) |

**Stress-tested:** WACC range 10.0% to 13.5% in sensitivity analysis. Verdict does not change materially within ±1.5% of base case.

---

## 7. Terminal Value Assumptions

| Item | Value | Notes |
|------|-------|-------|
| Terminal Growth Rate | 5.5% | India nominal GDP ~10–12%; conservative at ~half; assumes zero perpetual market share gain |
| Terminal FCFF (Year 6) | ₹47,284 Mn | ₹44,819 × 1.055 |
| Terminal Value (undiscounted) | ₹7,57,440 Mn | ₹47,284 / (11.74% − 5.5%) |
| PV of Terminal Value | ₹4,29,456 Mn | ₹7,57,440 / 1.1174⁵ |
| TV Weight | **88.2%** | Normal for Mature Growth; demands honest interrogation |

**The honest risk:** 88.2% in terminal value means the valuation is highly sensitive to long-run assumptions. The bear case (WACC 13.5%, g 4%) yields ₹7,200. The scarcity case (WACC 10%, g 7%) yields ₹42,800. The market is sitting almost exactly at the base case intersection.

---

## 8. Monte Carlo Parameters

| Input | Distribution | μ | σ | Practical Range |
|-------|-------------|---|---|-----------------|
| Revenue Growth Y1–Y3 | Normal | 13.0% | ±3.0% | ~5% to ~22% |
| EBIT Margin | Normal | 16.5% | ±2.5% | ~10% to ~24% |
| WACC | Normal | 11.74% | ±1.0% | ~9.5% to ~14.5% |
| Terminal Growth | Normal | 5.5% | ±0.6% | ~3.5% to ~7.5% |
| Tax Rate | Normal | 25.17% | ±1.0% | ~23% to ~28% |

**Result (5,000 trials):** Median ₹11,680 vs deterministic base ₹11,842 — within 1.4%, confirming assumptions sit at centre of distribution. P(IV > ₹10,737) = 54%. Marginal buy signal.

---

*Rahul R Gowda · TAPMI-MAHE · March 2026*
