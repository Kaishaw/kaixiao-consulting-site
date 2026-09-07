---
title: "Career Prep Platform"
summary: "A public AI demo that turns a job description, resume, and target role into a guided interview-prep workflow."
published: true
date: 2026-06-15
tags: ["AI", "Workflow design", "Cloudflare"]
type: "ai"
label: "Live demo"
clientType: "Applied AI workflow"
sector: "Career technology"
scale: "Public self-serve demo · structured input · multi-step AI workflow"
businessContext: "People often have information spread across a job description, resume, company research, and personal notes, but lack a repeatable way to turn it into preparation."
executiveSummary: "A product-style experiment in turning unstructured information into a bounded, useful AI workflow."
rolePerspective: "Product framing, prompt structure, user flow, usage limits, deployment, and iterative refinement based on the experience of using the demo."
outcome: "A public example of prompt design, user flow, limits, deployment, and iteration."
storyHook: "The demo started with a simple question: how can an AI workflow turn scattered career information into preparation that feels structured, useful, and still owned by the person using it?"
storySetting: "A job seeker may have a job description, resume, target company, role context, and personal notes spread across different places. The challenge was not generating more text; it was creating a guided path from raw material to something a person could actually practice."
storyTrigger: "I wanted a public, self-serve project that showed how an AI capability could be shaped into a bounded product experience rather than presented as an open-ended chatbot."
storyTension: "The workflow had to be useful without pretending to know more than the input supported. It also had to be simple enough to try, controlled enough to operate publicly, and clear enough that a user could see where AI helped and where human judgment remained necessary."
storyPeople:
  - role: "The person preparing"
    need: "A clear path from a job description and personal experience to focused practice, not a large block of generic advice."
  - role: "The product experience"
    need: "A sequence of steps, prompts, and outputs that makes the AI's role understandable and keeps the user moving."
  - role: "The system owner"
    need: "Reasonable usage boundaries, reliable deployment, and enough structure to improve the workflow based on real use."
storyJourney:
  - title: "Start with the user's material"
    body: "The workflow accepts the job description, target role, company context, and resume information that a person already has, then organizes it around the preparation goal."
  - title: "Make the transformation visible"
    body: "Instead of hiding the prompt work behind one button, the experience gives the user a sequence: understand the target, identify likely themes, generate practice, and review the result."
  - title: "Bound the useful answer"
    body: "The output is shaped around interview preparation rather than unlimited content generation, which makes it easier to review, refine, and compare with the source material."
  - title: "Ship, observe, and iterate"
    body: "Public deployment, usage limits, user flow, and future provider integration are treated as part of the project—not as details that begin after the demo is finished."
storyDecisions:
  - title: "Build a workflow, not a chatbot"
    body: "The product value comes from the sequence of tasks and decisions around the model, not only from the model's ability to produce fluent text."
  - title: "Keep the user in the loop"
    body: "The user remains responsible for choosing what is accurate, relevant, and worth practicing. AI helps organize and expand the material; it does not silently become the user's history."
  - title: "Treat operations as product design"
    body: "Deployment, usage limits, provider choices, and a clear public entry point determine whether a useful idea can actually be tried by another person."
storyEvidence:
  - label: "User journey"
    body: "Structured input becomes a multi-step interview-preparation experience rather than an unbounded prompt box."
  - label: "Product evidence"
    body: "The project makes prompt framing, user flow, output boundaries, deployment, and iteration visible enough to discuss."
  - label: "Business outcome"
    body: "A public demonstration of how applied AI can turn unstructured information into a focused, useful workflow."
storyLenses:
  - label: "Product lens"
    title: "Reduce the distance between information and action"
    body: "The experience is designed around the user's next useful step: understand, practice, review, and improve."
  - label: "Delivery lens"
    title: "Make the idea easy to try"
    body: "A usable demo needs a clear entry point, bounded interaction, visible output, and an iteration path—not only a technically interesting model call."
  - label: "Systems lens"
    title: "Keep AI inside a defined boundary"
    body: "Inputs, prompts, outputs, limits, deployment, and future provider integration form a small but understandable operating model for the experiment."
storyReflection: "A convincing AI demo is not the one that says the most. It is the one that helps someone take a better next step and understand why the result is useful."
externalUrl: "https://ai.kaixiao.ca/career-prep/"
demoType: "Interactive web demo"
---

I built it as a product-style experiment: define the user journey, turn scattered information into a structured preparation flow, set sensible boundaries for usage, and make the result easy to try in public.

The workflow is available at [ai.kaixiao.ca/career-prep/workflow](https://ai.kaixiao.ca/career-prep/workflow).
