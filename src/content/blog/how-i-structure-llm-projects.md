---
title: "How I structure every LLM project before writing a line of code"
date: 2026-06-15
description: "After building a handful of LLM apps, I have a mental checklist I run through before starting. It saves a lot of refactoring later."
---

LLM projects have a particular failure mode: you build fast, ship something, and then realize the architecture doesn't support what you actually need. Streaming, caching, fallbacks, observability — all the things you didn't think about because the demo worked fine.

Here's the checklist I run through now before writing any code.

## 1. Define the latency budget

Is this user-facing and real-time, or async and batch? The answer changes everything. Real-time means you need streaming and probably a smaller/faster model. Batch means you can use the most capable model and parallelize.

Get this wrong and you'll rewrite the whole thing.

## 2. Map the prompt surface

How many distinct prompts does the system have? Write them out. Even rough drafts. This tells you how complex the system is and where the variability lives. One prompt = simple. Ten prompts with shared context = you need a prompt management layer.

## 3. Decide on context strategy upfront

Where does context come from? User history, a vector DB, a tool call, a fixed system prompt? This affects your data model more than anything else. I've seen projects where the context strategy changed mid-build and it required rewriting the whole retrieval layer.

## 4. Plan for failure

What happens when the model returns garbage? What happens when it hallucates a function call that doesn't exist? LLMs are probabilistic — plan for the 5% case from the start, not as an afterthought.

I now always write a `validate_output` function before I write the main generation call.

## 5. Add observability before you need it

This is why I built keeto. By the time you realize you need observability, you've already shipped and you're debugging in production. Add it at the start. Log prompts, responses, latencies, token counts. Future you will be grateful.

---

None of this is revolutionary. It's just the stuff I kept skipping because I was excited to build, and kept regretting later. The checklist exists so I stop making the same mistakes.
