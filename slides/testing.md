---
layout: cover
---

# Feature Flags + Testing 

---
layout: statement
---

# Do I need to test flags?

---
layout: statement
---

# Yep

---
layout: statement
---

# Unit Tests

both the enabled + disabled states, fsho

---
layout: statement
---

# Integration Tests

mock or stub feature states; focus on critical paths

<!--
We have a test utility to handles mocking feature flags
-->

---
layout: statement
---

# E2E Tests

focus on important variations

---
layout: statement
---

# E2E | How do we ensure a given flag state?

<!--
This is an interesting design question
- no implementation details
- code mod for tests
- yada yada

Options
- Special "Test" User?
- Test Cookies
- Test Query Params*

Our LD supports URL query param overrides
-->

---
layout: intro
---

# Feature Flags + E2E Test Errors

- Cross-Project Issues
- Out-of-Date Flag Defaults / Overrides / Mocks

<!--
If we need to test a feature, which includes code changes to both the frontend and a backend service — with each having a feature flag...

...how do we test?

ACTION: Review Forwarding (Cookies? User/Context?)

My understanding of the "defaults" issue is that sometimes we're not updating the default values
so if we enable a flag, the default needs to be updated + validated — or we need to just be more explicit about overrides for both cases.

ACTION: Add script to generate defaults

We're going to be reviewing this in more detail, but there are some defin
-->
