---
layout: statement
---


<br>

> ### **Feature flags** are dynamic configuration switches that enabled the **release** of features, **without deploying new code.**

---
layout: statement
---

### ( **flags** and **testing** are like #twinsies )

---
layout: statement
---

## Separating Deploy from Release 

<br>

> #### `Integration` => `Deploy` => `Release`

<!-- > “Deployed”: A technical concern that applies in the domain of the team and means the functionality is introduced in Production.

<br>

> “Released”: A business term that defines functionality being available to an end-user. -->

<!-- “Continuous Integration”: A technical practice where every product change should trigger an event where you automatically rebuild, integrate and test your whole product.

“Continuous Deployment”: Additionally to “Continuous Integration, every product change gets automatically deployed to Production.

“Continuous Delivery”: Keeping a system “Production Ready” for release at all times during development. This does not involve stopping and making a special effort to create a releasable product. -->




<!-- (Also separating Integration from Deploy) -->
<!-- (Aslo the deploy release happens for every pipeline stage (aka environment)) -->



---
layout: statement
---

## Release Channels

**Deploy**: Single Channel

vs

**Release**: Many Channels

<!-- Client Side Bundler: -->
<!-- Micro-Frontend / Module Federation -->

---
layout: fact
---

# Feature Flags = Many Channels = Fewer Bottlenecks

<!-- monorepo -->


---


TODO:


---
layout: cover
---

# Current Gaps & Frustrations
---

Yeee

---
layout: cover
---

# Launch Darkly Stuff
---

Yeee


<!--
#ShortTerm 

* We're gonna be talking about "future state" — lofty objectives

* But I wanted to make sure I said up-front: this is not meant to be the herald of some imminent "file your taxes" style obligations

Not "Continuous Delivery tomorrow"
Not "Use feature flags for every little change"
-->


---

## Deployment Strategies

<!-- Deployment Automation Patterns -->

- Blue/Green
- Ring Deploys
- Canary Deploys
- Rolling Deploys
- Incremental / Phased / Gradual / Percentage Deploys


---
layout: statement
---

#### Deployment Strategies...

They're kind of like a feature flag 🤔

<!-- SIDE NOTE: Blue = New. Green = Clean -->

---
layout: cover
background: https://res.cloudinary.com/sweetgreen/image/upload/v1700100946/miscellaneous/DALL_E_2023-11-15_18.09.09_-_An_abstract_digital_art_concept_representing_feature_flags_in_software_development._Visualize_a_split_screen_with_one_side_showing_a_basic_monochr.png
---

# But nothing is more feature flag, than feature flag

---
layout: cover
background: https://res.cloudinary.com/sweetgreen/image/upload/v1700100942/miscellaneous/DALL_E_2023-11-15_18.09.28_-_An_abstract_digital_art_concept_representing_feature_flags_in_software_development._Visualize_a_split_screen_with_one_side_showing_a_basic_monochr.png
---

# But nothing is more feature flag, than feature flag

---
layout: cover
background: https://res.cloudinary.com/sweetgreen/image/upload/v1700100942/miscellaneous/DALL_E_2023-11-15_18.10.43_-_A_creative_and_symbolic_representation_of_feature_flags_in_software_development._Depict_a_complex_software_system_represented_by_an_intricate_netwo.png
---

# But nothing is more feature flag, than feature flag

---

## Basic Workflow

* Local Development + Integration
* Engineer Validation
* Product Validation
* Product Release


<!-- I tend to agree with the idea that "Big Bang Releases" will usually have more bugs sneak through overall.
I know we're still kind of getting into the rhythm — but the idea is we have two people manually validating + signing off on every feature change:

Engineers manually validate features in prod, by turning on flags for just themselves
Engineer signs off and passes ticket to the feature owner (eg product) who validates the same way and is in charge or releasing the feature -->

---

## Goals

* Product Drives Releases
* Progressive Delivery


---

> ## He hates the cello now, but he'll thank me when he's older


<img
  src="https://res.cloudinary.com/sweetgreen/image/upload/v1700102282/miscellaneous/1173176_232119916962965_62563063_n.jpg"
/>

<!-- 
Was this ill advised?

You tell me in the survey after the talk

 -->