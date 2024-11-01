---
layout: cover
---

# What are feature flags?

> ### **Feature flags** are dynamic configuration switches that enabled the **release** of features, **without deploying new code.**

---

# Why Feature Flags?

- Data-Driven Decisions
- Product-Driven Releases
- Blast Radius
- Continuous Integration
- etc.

<!-- 
NOTES:

just a few reasons - many more

POINT OUT:
Standard Practice: DORA, etc

(Google, Netflix, etc + also TS, VSCode, etc)

-->

# Partial Features?

---
layout: statement
---

# Deploy vs Release





<!-- 
Bottlenecks Queues 

Deploys are single-stream

if there's an error in the deploy stream, then it's bad.

Deploys should essentially never be the point of failure, unless it's critical like "cant's start up"


(TODO: Rework this - In a weird way, we actually want to validate after deployment. Any bugs that aren't caught by unit tests, we want to save for post-deploy (could be development)  — just isolated by feature flag)

 Dont ship bugs
- Test. Flag. Take Responsibility
- Take responsibility

-->


---

# Targeting



> ### What makes something like LauchDarkly different than a key value store like SSM?

<!-- - simple key value store
- targeting -->
<!-- 
setup => init => ????

user/context

-->

---

# Context


