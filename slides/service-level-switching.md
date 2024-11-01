---
layout: cover
---

# Service-Level Switching

<!-- 
Both of these solutions are similar to B/G
Single-Service, routing/addressing, switching between versions
 -->

---
layout: intro
---

# Lambda@Edge: Replatforming

- CloudFront + Named Origin
  - **Viewer Request**: Calls LaunchDarkly; Sets Cookie key `sg_edge_feature_flag`
  - **Oigin Request**: Route to named-origin (aka one of the frontend S3 Buckets) 
- The cookie ensures that subsequent requests are routed the same way

<!-- 
This is sorta "sticky"
Doesn't necessarily address forwarding
 -->

---
layout: intro
---

# ALB Rule: Rails Upgrade

- NestJS checks `ft-1779-gravy-target-cluster-routing` enum flag `"green" | "blue" | "off"`
- If it's not "off", it adds a header `x-sg-gravy-target-cluster-routing` with color value
- Then Gravy ALB rule checks header, and routes request to either "green" or "blue" gravy version
- If it finds no header then it follows the normal routing

<!-- 
This actually covers most of our apps/services
-->

---
layout: intro
---


# Considerations


- It's kinda like "B/G" 
- **Extra Footprint**
  - Both approaches required additional headers/cookies, in addition to the original flag.
  - Dont want to add infinity headers/cookies, ESPECIALLY if there's a chance we need to forward them to other services.
  - A limited number of permanent, "OPS" flags, for a dedicated purpose, makes sense.
- **Targeting**
  - Where possible, we can avoid by using establishing standard identifiers, and aligning under a shared project
- **Forwarding**
  - Right now these solutions 


<!--

Header vs ??

url param?  

user agent? 

Ad Hoc Forwarding?

 -->
