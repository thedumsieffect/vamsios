# Inspo MCP Testing Pack — Bootcamp Homework

Exercises for strategists to run with Claude + the Motion MCP server connected. Each is a prompt you can paste directly into Claude.

---

## How It Works

The MCP gives Claude access to Inspo's brand research and creative library tools. Students ask questions in plain English, and Claude chains the right tools together automatically.

**Important framing:** Inspo shows what competitors are *running and betting on*, not what's *winning*. There are no spend or performance metrics. The smart signals are:
- **Longevity (14+ days active)** — ads live for more than 14 days have survived initial testing and are likely being kept on intentionally
- **Convergence** — when multiple brands lean into the same format, the industry is moving there
- **Freshness** — high active/inactive ratio = a brand with conviction in their creative strategy

---

## Quick Wins (5-10 min each)

### 1. Brand Lookup & First Impressions
> "Look up [brand] and give me a quick overview — what's their brand positioning, voice, and how many active ads are they running? What formats are they leaning into?"

Try with: Nike, Glossier, Athletic Greens, Hims, Liquid Death

### 2. "What's [brand] doing?"
> "Pull active ads for [brand]. What are they running right now — how many ads, what formats, what's the messaging?"

The simplest possible prompt. See how fast you get a full competitive snapshot vs. manually browsing Ad Library.

### 3. Domain-Based Research
> "I just saw an ad from a brand at [domain.com]. Who are they? What's their brand strategy and what other ads are they running?"

Real-world workflow — you spot an ad in the wild, now reverse-engineer the entire brand.

---

## Core Exercises (15-30 min)

### 4. Competitor Creative Audit
> "Pull active ads for [brand A] and [brand B]. Compare their creative strategies — who's heavier on video vs. static? Who's launching more new creatives? What visual formats is each brand betting on?"

Pick two brands in the same vertical for the most interesting comparison.

### 5. Find What's Sticking
> "Show me [brand]'s active ads that have been live for more than 14 days. What do they have in common — format, messaging, CTA? What's being kept on vs. what's new and still being tested?"

Ads that survive past the initial 14-day testing window are being kept on intentionally — that's your signal. Compare these against their newest launches to see what a brand is *proven on* vs. *experimenting with*.

### 6. Script Teardown
> "Pull [brand]'s active video ads and get me the transcripts. What hook patterns are they using in the first 3 seconds? Are there common messaging themes across their scripts?"

The first 1-3 seconds of a video ad is the hook — the most critical element. This exercise teaches you to read hook patterns from real scripts.

### 7. New Launch Radar
> "What has [brand] launched in the last 7 days? Compare that to what they launched in the last 30 days. Are they testing new formats or doubling down on what's been running?"

Creative velocity tells you how aggressively a brand is testing. High launch rate = active experimentation.

### 8. Messaging Theme Extraction
> "Get transcripts for the 5 longest-running video ads from [brand]. Extract: the hook (first 3 sec), the core claim, and the CTA. Present it as a messaging framework I can adapt."

Turns competitor scripts into a reusable messaging playbook you can hand to a copywriter.

---

## Deep Dives (30-60 min)

### 9. Cross-Industry Format Mining
> "I work in [industry A]. Pull active creatives from 5 top brands in [industry B] and [industry C] — industries adjacent to mine but not direct competitors. What formats and creative approaches are working there that haven't hit [industry A] yet? Give me 3 concepts I could adapt."

The best whitespace isn't what your direct competitors are missing — it's what *other industries* have figured out that hasn't crossed over yet. Looking outside your vertical is where the non-obvious creative angles live.

### 10. Competitive Brief
> "I work for [brand A]. Pull our brand context and our top competitor [brand B]'s active creatives. Based on what they're testing that we're not, write me a creative brief for a net-new concept."

The full strategist workflow — own brand context + competitor research = actionable brief.

### 11. Full Competitive Teardown (Boss Level)
> "I'm pitching [prospect brand] tomorrow. Research them and their top 3 competitors. For each brand: brand positioning, active ad count, format mix, ads live 14+ days, and any video hook patterns. Then give me 3 creative recommendations for the pitch based on gaps you found."

Everything chained together. This is the real agency use case — prep a pitch in 15 minutes instead of 3 hours.

---

## Automation: Weekly Competitor Scan

This is the power move. Instead of manually checking competitors every week, set up Claude to do it for you and post a summary to Slack.

### 12. Set Up a Weekly Competitor Scan
> "I want to run a weekly competitor scan. Here are the brands I want to track: [brand A, brand B, brand C, brand D, brand E]. For each brand, check:
>
> 1. **New launches** — what did they launch in the last 7 days?
> 2. **What's sticking** — which ads crossed the 14-day mark this week? (newly proven)
> 3. **Gone dark** — any previously active ads that are now inactive? (they killed it)
> 4. **Format shifts** — is anyone changing their video/static/carousel mix?
> 5. **New hooks** — pull transcripts for any new video ads and extract the hook (first 3 sec)
>
> Summarize it as a competitive intel brief I can share with my team."

This gives you a living competitive radar. Run it every Monday morning, paste the output into a Slack channel, and your entire team stays current without anyone manually browsing Ad Library.

**How to make it a habit:**
- Pick 3-5 brands that matter most to your client
- Run this prompt every Monday (or set a calendar reminder)
- Save the output to a running doc or Slack canvas so you can spot trends week over week
- When a competitor makes a big move (new format, kills a long-runner, floods with new launches), that's your signal to brief the creative team

**Bonus — turn it into a client deliverable:**
> "Take this week's competitor scan and write a 3-paragraph executive summary I can send to my client. Lead with the biggest move, highlight any format shifts, and end with one recommendation for what we should test next week based on what competitors are doing."

Agencies charge for this. With the MCP, it takes 5 minutes.

---

## Tips for Best Results

- **Be specific with brand names** — "Nike" works better than "that shoe company"
- **Ask follow-up questions** — Claude remembers context. After pulling ads, ask "now compare the hooks" or "write me a brief based on this"
- **Try your own clients** — the exercises above use placeholder brands, but the real value is running these against brands you're actively working on
- **Chain exercises together** — do a brand lookup (#1), then a script teardown (#6), then a competitive brief (#10) for the same brand. That's a complete research workflow.
