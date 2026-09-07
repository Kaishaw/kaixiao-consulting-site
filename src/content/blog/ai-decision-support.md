---
title: "Decision support needs a data hub and an escalation path"
summary: "The water-management case shows how multiple data sources, domain knowledge, specialist agents, and human review can work together without hiding responsibility."
published: true
date: 2026-08-31
category: "AI practice"
contentType: "case-note"
insightTopic: "AI + decision support"
insightSummary: "As AI becomes more autonomous, routing, provenance, data quality, and escalation become more important - not less."
coverImage: "/assets/ai-decision-support-diagram.png"
tags: ["AI", "Decision support", "Data architecture", "Governance"]
---

High-stakes decision support is where the phrase "human in the loop" needs to become a real operating design.

A water-management workflow is useful because it shows both sides of the problem. The team wanted faster reporting and analysis across weather, water, geographic, and infrastructure data. At the same time, warnings and public-safety decisions could not be delegated to an unverified output.

![Decision support workflow from live data through a data hub, specialist models, scenarios, expert escalation, and decision](/assets/ai-decision-support-diagram.png)

## Build the data hub first

The team connected multiple data sources through a consistent interface, then created a domain knowledge base from historical reports, rules, standards, and expert experience.

That sequence matters. A multi-agent layer without reliable data and domain context simply creates more ways to produce an uncertain answer.

## Break the work into specialist capabilities

Instead of asking one agent to understand every question, the workflow separates tasks such as retrieving current data, checking thresholds, searching historical records, and running a forecast. A routing layer decides which capability should handle which part of the question.

This makes the system easier to reason about. Each tool has a job, and the team can test whether the right data, calculation, and evidence were used.

## Make escalation explicit

Routine reporting and early analysis can be accelerated. A public warning, a major dispatch decision, or an uncertain result should move to a human expert with the relevant evidence visible.

The system can draft, compare, summarize, and surface risk. The accountable team still decides what action to take.

## What this means for enterprise architecture

The architecture is not only a model call. It is a set of boundaries:

- which data sources are authoritative;
- which knowledge can be retrieved;
- which calculations must be deterministic;
- which agent owns each task;
- what evidence is shown with the result; and
- which outcomes require human approval.

That is the foundation for trustworthy autonomy. The more a system can do by itself, the more important its routing, provenance, monitoring, and escalation rules become.
