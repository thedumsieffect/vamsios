# Coaching & Feedback Received

Patterns from managers and peers worth internalizing.

## From Kyra Richards

### Check what other teams already built before engineering a solution
- **Context (2026-03-25):** Vamsi redid glossary normalization that Builder team (Yann) had already solved. Kyra: *"you just redid work that Builder's already done."*
- **Pattern:** Before diving into a fix, ask: has Builder/Runneth/API migration touched this?

### Optimize for chat, not just code
- **Context (2026-03-25):** Alicia works in chat. Vamsi hadn't used chat in 3 months. Kyra: *"if Alicia hasn't moved over, we need to optimize for chat."*
- **Pattern:** Ask "would this work in chat?" as a litmus test for every MCP feature.
- **Apr 2026 update:** With the connector live and the first organic MCP signups happening, the chat-first audience is now real, not hypothetical. The skills-server-side move (Apr 24) was directly in service of this.

### Be concise in presentations
- **Context (2026-03-26):** After a team demo. Kyra: *"your slides were awesome, you got a little bit talking too much."*
- **Pattern:** Let slides do the work. Lead with visuals, minimize verbal elaboration.

### Refine narrative arc before sharing
- **Context (2026-03-26):** Kyra encouraged taking the meeting transcript and refining the story before presenting. *"Go res mode."*
- **Pattern:** Structure updates as: where we started → what changed → where we landed → what's next. Cut engineering details, lead with impact.

### Don't silo — cross-team collaboration > solo speed
- **Context (2026-03-25):** Kyra worried about Builder/MCP/API migration teams solving similar problems independently. *"We're not good at collaborating or knowing who's working on what."*
- **Pattern:** Before starting optimization work, check in with adjacent teams. Compound results > parallel tracks.

### Wire the feedback-to-fix loop into every endpoint from day one
- **Context (2026-04-28, #mcp-feedback):** Kyra public ask to Mike: *"set all the new API endpoints up with this flow in mind. Would love a world where runneth can also send us feedback and we can have codex etc put up an initial PR for any endpoint issues."*
- **Pattern:** When scoping new endpoints, ask "is the feedback-to-PR plumbing in place?" Treat it as table-stakes from now on. Don't ship endpoints without an autonomous feedback path.

### Volunteer RCAs when things break
- **Context (2026-04-23 PM sync):** Kyra retired the recurring root-cause meetings → async weekly roundup. But she wants the *discipline* preserved. Authored RCAs for recurring MCP incidents are now expected.
- **Pattern:** When something breaks, write the RCA before being asked. Async, structured, post in #project-cli or wherever the team can see it.

### Lead 1:1s with strategy + customer signal, not status
- **Context (Apr 22 1:1, ongoing pattern):** Kyra reframes rapidly when data lands. The proof-window pivot was driven by customer save stories + week-2 usage, not a planning doc.
- **Pattern:** For Kyra 1:1s, walk in with: a customer signal, a workstream update, an open question. Never just status.

## From Armin Karimi

### Energy pulse-checks are real signal
- **Context (2026-04-24 09:42 DM):** *"hey… how you doing?… wanted to make sure I am not losing the most energetic guy in the room."*
- **Pattern:** When Armin asks how you're doing, he's noticed something. Be direct about what's going on (Apr 24: Vamsi explained "I overslept and wasn't camera ready"). Don't wave it off.

## From Mike Choi

### Risk concerns flagged casually still carry weight
- **Context (2026-04-27, #project-cli):** Mike confirmed inspo rate-limiting exists but added *"maybe too generous."*
- **Pattern:** When Mike adds qualifiers like "maybe too generous" or "yeah the name gave me pause," treat as a real signal. Don't close the loop until you've put concrete numbers on it.

## From Maya Steffich

### Iteration is normal; don't pretend the first cut is good
- **Context (2026-04-27, permissions UI thread):** Maya: *"bruh what a wash this was i feel like nothing was good"* after several rounds.
- **Pattern:** When Maya vents, reframe (Vamsi did this well — *"error messages are hard… great problem to stew on"*) instead of problem-solving immediately. She'll keep going.

## Last Updated
2026-04-28 — added April patterns from Kyra, Armin, Mike, Maya.
