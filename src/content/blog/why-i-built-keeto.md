---
title: "Why I built keeto — AI observability shouldn't be hard"
date: 2026-08-10
description: "Every LLM app I built had the same blind spot: I had no idea what was happening inside. Here's why I built a tool to fix that."
---

Every LLM app I built had the same problem. I'd ship something, users would hit it, and I'd have no idea what was actually happening inside. Which prompts were failing? Which models were slow? What did the token usage look like over time?

The existing tools were either too heavy, too opinionated, or required you to rewrite your entire stack around them. I didn't want that. I wanted something I could drop into any Python project in one line.

That's keeto.

## What it does

Keeto wraps your LLM calls and logs everything — latency, token counts, model used, prompt, response — without you having to change how you write code. Zero config. Just install and import.

```python
import keeto

# That's it. Your LLM calls are now observed.
```

Under the hood it uses monkey-patching to intercept calls to OpenAI, Anthropic, and other providers. The data goes to a local SQLite database by default, or you can point it at any backend.

## The design principle

The thing I kept coming back to while building this: observability tooling has a nasty habit of becoming the thing you have to maintain instead of the thing that helps you. I wanted keeto to stay invisible until you needed it.

So there are no dashboards to set up, no agents to run, no config files to write. You get a simple CLI to query what happened, and a Python API if you want to build something on top.

## What I learned

Building this taught me more about how Python's import system works than I expected. Monkey-patching at the right layer without breaking the original API surface is genuinely tricky — especially when providers update their SDKs.

If you're building LLM apps and you're flying blind, give keeto a try. It's on PyPI.

```bash
pip install keeto
```
