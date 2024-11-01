---
theme: neversink
layout: cover
color: amber
---

# `pnpm`

Oh that's cool



---
layout: intro
color: emerald
---

# Agenda

<br>

1. Migration in Review
1. Package Managers in Node
1. About `node_modules`
1. Phantom Deps
1. Fussy Bits + Future


---
layout: section
color: emerald-light
---

# Quick Recap

---
layout: two-cols-title
align: l-lm-cm
color: emerald-light
columns: is-5
---


:: left ::


> ## What? Why?

`pnpm` is a Node package manager.

It's the ==new industry standard== because it's ==faster and more secure==

(Also better stability + feature support)


:: right ::

<img src="https://i.imgur.com/1rO0OTi.png" class="flex-1 w-full object-cover" />

---
layout: default
color: emerald-light
---

<div class="flex h-full">
<div class="ns-c-center ns-c-middle">

# Lots of enterprise adoption

<img src="https://i.imgur.com/WQ4Dx84.png" class="flex-1 w-full object-cover p-t-10 p-l-20 p-r-20">

</div>
</div>


---
layout: section
color: pink
---

# Migration in Review

We did alright!!



---
layout: default
align: l-cm-cm
color: pink-light
---


# CI Workflows

<div class="flex h-full">
<div class="ns-c-center ns-c-middle p-10">
<img src="https://i.imgur.com/Xqmn8FX.png" class="flex-1 w-full object-cover p-b-50" />
</div>
</div>

---
layout: default
align: l-cm-cm
color: pink-light
---


# Expo Builds

<div class="flex h-full">
<div class="ns-c-center ns-c-middle">
<img src="https://i.imgur.com/Vugqra8.png" class="flex-1 w-full object-cover p-b-50" />
</div>
</div>


<SpeechBubble position="bl" shape="round"  color='emerald-light' v-drag="[445,258,274,57]">

Oh dannnng that's nice
</SpeechBubble>

<IceCream :size="150" mood="lovestruck" color="#FDA7DC" v-drag="[439,341,85,150]" />

---
layout: two-cols-title
align: l-cm-cm
color: pink-light
---

:: title ::

# Local 



:: left ::

<img src="https://i.imgur.com/PVAXSmL.png"  class="flex-1 w-full object-cover">


<StickyNote color="rose-light" textAlign="left" width="180px" v-drag="[200,293,180,180,-14]"  title="Before" >
~10min
</StickyNote>

:: right ::

  <img src="https://i.imgur.com/PXlrWq8.png" class="flex-1 w-full object-cover">




<StickyNote color="green-light" textAlign="left" width="180px"  v-drag="[620,333,180,180,-9]"  title="After">

~2min
</StickyNote>


---
layout: section
color: pink-light
---

## Considerations

<!-- 
Migration Docs
- first time install -> global cache

Why Now?
- we've wanted pnpm from the beginning
- yarn was recently being a butthead about an Nx upgrade

Disruption?
- I think most of the issues I troubleshot turned out not to be related to pnpm — but even so — it still felt disruptive — added complexity and confusion — and so therefore was. 
-->


---
layout: section
color: indigo
---

# Package Managers in Node



---
layout: section
align: l-lm-cm
color: indigo-light
---

# Eng Interview Question

> # How would you design a package manager?


---
layout: section
color: indigo-light
---

# Concepts


<v-clicks>

- #### Direct-Dependency vs Sub-Dependency
- #### `node_modules` - Flat vs Nested?

</v-clicks>

<!-- Implicit Dependencies aka Phantom Dependencies -->



---
layout: two-cols-title
align: l-lm-cm
color: indigo-light
---


:: title ::

# History


:: left ::

<v-clicks>

- 2009 - `Node.js` released with `npm`
- 2015* - `npm v3` released
- 2016 - `yarn` released
- 2016* - `pnpm` released
- 2021 - `bun` released
- 2021 - `sg-monorepo` begins
- 2024 - `sg-monorepo` adopts `pnpm` 🎉

</v-clicks>




:: right ::

<div v-click="[1, 8]" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
  :leave="{ x: 50 }"
>
<img src="https://preview.redd.it/tfugj4n3l6ez.png?auto=webp&s=b8163176d8482d5e78ac631e16b7973a52e3b188"  class="flex-1 w-130 object-cover" />
</div>

<!--
We wanted to do pnpm from the start
But we passed because of RN stuff

-->

---
layout: side-title
align: lm-lm
color: indigo-light
titlewidth: is-3
---


:: title ::


###### Example
## Different `node_modules` structures

:: content ::


<div class="grid w-full grid-cols-2 gap-sm">

  <div class="grid-item grid-col-span-2">


  `package.json`
  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "dependencies": {
      "foo": "^1.1.3"
    }
  }
  ```

  </div>


  <div class="grid-item grid-col-span-1">

  ###### Nested

  <v-click>

  ```
  node_modules
  └─ foo
    ├─ index.js
    ├─ package.json
    └─ node_modules
        └─ bar
          ├─ index.js
          └─ package.json
  ```

  </v-click>

  <div v-click class="m-t-5">

  <AdmonitionType title="Good" type="tip" width="300px">
  `bar` is only accessble from `foo`
  </AdmonitionType>

  </div>
  </div>

  <div class="grid-item grid-col-span-1">

  ###### Flat


  <v-click>

  ```
  node_modules
  ├─ foo
  |  ├─ index.js
  |  └─ package.json
  |  
  └─ bar
    ├─ index.js
    └─ package.json
  ```

  </v-click>

  <div v-click class="m-t-5">

  <AdmonitionType title="Bad" type="caution" width="300px">
  `bar` is exposed to app code
  </AdmonitionType>

  </div>

  </div>

</div>

---
layout: top-title-two-cols
color: indigo-light
---


:: title ::

# About that "flat" structure...

:: left ::
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZW6XzuiXQViR2vthnfLl8g.png">


:: right ::
<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*a-vmOtoEa6LFNeWsFjKSzg.png">


---
layout: top-title-two-cols
color: indigo-light
---

:: title ::

# Summarizing

:: left ::

#### Problems with nested structure:
- packages were copy pasted several times when they were required in different dependencies — ==resulting in `node_modules` taking a huge amount of disk space==
- frequently packages were creating too deep dependency trees, which caused long directory paths issue on Windows


:: right ::

#### Problems with flat structure:

- ==modules can access packages they don’t depend on==
- the algorithm of flattening a dependency tree is pretty complex (buggy)
- some of the packages _still_ have to be copied inside one project’s node_modules folder






---
layout: section
color: indigo-light
---

# So what does `pnpm` do to solve this?


<v-click>

## Answer: ==Symlinks==


</v-click>

---
layout: section
color: indigo-light
---

# What's a symlink?

A symbolic link, also known as a symlink or soft link, is a ==file that points to another file or directory== in a file system.


---
layout: default
color: indigo-light
---

#### Global Store

==All packages are _actually_ installed to `pnpm`'s global store==


<div class="grid w-full grid-cols-2 gap-sm">
  <div class="grid-item grid-col-span-1">

  ###### Nested

  ```
  node_modules
  └─ foo
    ├─ index.js
    ├─ package.json
    └─ node_modules
        └─ bar
          ├─ index.js
          └─ package.json



  ```
  </div>

  <div class="grid-item grid-col-span-1">

  ###### Nested + Symlinked

  ```
  node_modules
  ├── foo -> ./.pnpm/foo@1.0.0/node_modules/foo
  └── .pnpm
      ├── bar@1.0.0
      │   └── node_modules
      │       └── bar -> <store>/bar
      └── foo@1.0.0
          └── node_modules
              ├── foo -> <store>/foo
              └── bar -> ../../bar@1.0.0/node_modules/bar
  ```

  </div>
</div>


(The representation of a given package in our repo's `node_modules` is just a symlink to its analogue in the global store)


---
layout: default
color: indigo-light
---


  ###### Nested + Symlinked

  ```
  node_modules
  ├── foo -> ./.pnpm/foo@1.0.0/node_modules/foo
  └── .pnpm
      ├── bar@1.0.0
      │   └── node_modules
      │       └── bar -> <store>/bar
      └── foo@1.0.0
          └── node_modules
              ├── foo -> <store>/foo
              └── bar -> ../../bar@1.0.0/node_modules/bar
  ```
<br>

> #### What's the deal with that `.pnpm` folder?

This is where the mapping between **direct-dependencies** and **sub-dependencies** is defined

==Only the **direct-dependencies** of the project are the root of the `node_modules` directory==


---
layout: side-title
side: r
color: blue
titlewidth: is-6
---


:: title ::

# "I have global cache, Greg. Can you pnpm me?"


:: content ::


<div class="ns-c-center ns-c-middle">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUplrzYM9wlwNW6T_SGKuxcFbXU41VU44yrMs9pZXRWMRa56wtKldK-8-hR4ke7wTKOxQ&usqp=CAU" class="m-auto" >

## `yarn`

</div>

<Cat :size="150" mood="excited"  v-drag="[439,341,85,150]" />




<!--
yarn still has it's flat modules issues 

(also peer dependencies, version stacking, etc)

But install times aren't too far off in theory...

It will never be as fast as symlinks

Especially since flat modules still has nested duplication

But the other main thing is concurrency
-->




---
layout: two-cols-title
align: l-lm-cm
color: blue-light
---

:: title ::

# Install Steps + Concurrency 



:: left ::

`pnpm` perfoms installation in three stages:

1. **Dependency resolution.** All required dependencies are identified and fetched to the store.
2. **Directory structure calculation.** The node_modules directory structure is calculated based on the dependencies.
3. **Linking dependencies.** All remaining dependencies are fetched and hard linked from the store to node_modules.

[Benchmarks!](https://github.com/pnpm/benchmarks-of-javascript-package-managers)

:: right ::

<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bD0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHZpZXdCb3g9IjEzNS4wOTUwNSAxNDA3IDU3NC4zNDg3IDMxNC4zOTYiIHdpZHRoPSI1NzQuMzQ4NyIgaGVpZ2h0PSIzMTQuMzk2Ij4KICA8ZGVmcz4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHZpZXdCb3g9Ii0xIC00IDEwIDgiIG1hcmtlcldpZHRoPSIxMCIgbWFya2VySGVpZ2h0PSI4IiBjb2xvcj0iYmxhY2siPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNIDggMCBMIDAgLTMgTCAwIDMgWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvbWFya2VyPgogIDwvZGVmcz4KICA8ZyBpZD0iQ2FudmFzXzEiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1kYXNoYXJyYXk9Im5vbmUiIHN0cm9rZT0ibm9uZSI+CiAgICA8dGl0bGU+Q2FudmFzIDE8L3RpdGxlPgogICAgPHJlY3QgZmlsbD0id2hpdGUiIHg9IjEzNS4wOTUwNSIgeT0iMTQwNyIgd2lkdGg9IjU3NC4zNDg3IiBoZWlnaHQ9IjMxNC4zOTYiLz4KICAgIDxnIGlkPSJDYW52YXNfMV9MYXllcl8xIj4KICAgICAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNDgiPgogICAgICAgIDxyZWN0IHg9IjE0MS41OTUwNSIgeT0iMTQ0NS40NDgiIHdpZHRoPSI4Mi4xMjU5MiIgaGVpZ2h0PSIyMiIgZmlsbD0iIzYwZDkzNiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE0NyI+CiAgICAgICAgPHJlY3QgeD0iMjIzLjcyMDk3IiB5PSIxNDQ1LjQ0OCIgd2lkdGg9IjEwMC41NjIzNSIgaGVpZ2h0PSIyMiIgZmlsbD0iIzAwYTJmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE0NiI+CiAgICAgICAgPHJlY3QgeD0iNTA3LjM5MDYiIHk9IjE0NDUuNDQ4IiB3aWR0aD0iNDguNjA1MTM0IiBoZWlnaHQ9IjIyIiBmaWxsPSIjZmVhZTAwIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTQ1Ij4KICAgICAgICA8cmVjdCB4PSIxNDEuNTk1MDUiIHk9IjE0NzIuNDQ4IiB3aWR0aD0iNDEuMDYyOTYiIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNDQiPgogICAgICAgIDxyZWN0IHg9IjE4Mi42NTgiIHk9IjE0NzIuNDQ4IiB3aWR0aD0iNjguMjU1MDIiIGhlaWdodD0iMjIiIGZpbGw9IiMwMGEyZmYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNDMiPgogICAgICAgIDxyZWN0IHg9IjIyMy43MjA5NyIgeT0iMTQ5OS40NDgiIHdpZHRoPSI0OC42MDUxMzQiIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNDIiPgogICAgICAgIDxyZWN0IHg9IjIyMy43MjA5NyIgeT0iMTUyNi40NDgiIHdpZHRoPSI4Mi4xMjU5MiIgaGVpZ2h0PSIyMiIgZmlsbD0iIzYwZDkzNiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE0MSI+CiAgICAgICAgPHJlY3QgeD0iMjcyLjMyNjEiIHk9IjE1NTMuNDQ4IiB3aWR0aD0iNTguNjYxMzciIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNDAiPgogICAgICAgIDxyZWN0IHg9IjMwNy41MjI5MiIgeT0iMTU4MC40NDgiIHdpZHRoPSI4Mi4xMjU5MiIgaGVpZ2h0PSIyMiIgZmlsbD0iIzYwZDkzNiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzEzOSI+CiAgICAgICAgPHJlY3QgeD0iMzMwLjk4NzQ3IiB5PSIxNjA3LjQ0OCIgd2lkdGg9IjQxLjA2Mjk2IiBoZWlnaHQ9IjIyIiBmaWxsPSIjNjBkOTM2Ii8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTM4Ij4KICAgICAgICA8cmVjdCB4PSIzMzAuOTg3NDciIHk9IjE2MzQuNDQ4IiB3aWR0aD0iODkuNSIgaGVpZ2h0PSIyMiIgZmlsbD0iIzYwZDkzNiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzEzNyI+CiAgICAgICAgPHJlY3QgeD0iMjcyLjMyNjEiIHk9IjE0OTkuNDQ4IiB3aWR0aD0iMTkwLjIzMDQ0IiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDBhMmZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTM2Ij4KICAgICAgICA8cmVjdCB4PSIzMDUuODQ2OSIgeT0iMTUyNi40NDgiIHdpZHRoPSIyOTYuNjU4OTIiIGhlaWdodD0iMjIiIGZpbGw9IiMwMGEyZmYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xMzUiPgogICAgICAgIDxyZWN0IHg9IjMzMC45ODc0NyIgeT0iMTU1My40NDgiIHdpZHRoPSIxNTguMzg1NyIgaGVpZ2h0PSIyMiIgZmlsbD0iIzAwYTJmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzEzNCI+CiAgICAgICAgPHJlY3QgeD0iMzg5LjY0ODg0IiB5PSIxNTgwLjQ0OCIgd2lkdGg9IjE1MC4wMDU1IiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDBhMmZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTMzIj4KICAgICAgICA8cmVjdCB4PSIzNzIuMDUwNDMiIHk9IjE2MDcuNDQ4IiB3aWR0aD0iMjQ5LjcyOTgzIiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDBhMmZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTMyIj4KICAgICAgICA8cmVjdCB4PSI0MjAuNDkzNiIgeT0iMTYzNC40NDgiIHdpZHRoPSIxNTEuMDA1NSIgaGVpZ2h0PSIyMiIgZmlsbD0iIzAwYTJmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzEzMCI+CiAgICAgICAgPHJlY3QgeD0iNTA3LjM5MDYiIHk9IjE0NzIuNDQ4IiB3aWR0aD0iMzIuMjYzNzUzIiBoZWlnaHQ9IjIyIiBmaWxsPSIjZmVhZTAwIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTI5Ij4KICAgICAgICA8cmVjdCB4PSI1MDcuMzkwNiIgeT0iMTQ5OS40NDgiIHdpZHRoPSI2OC4yNTUwMiIgaGVpZ2h0PSIyMiIgZmlsbD0iI2ZlYWUwMCIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzEyOCI+CiAgICAgICAgPHJlY3QgeD0iNjAyLjUwNTgiIHk9IjE1MjYuNDQ4IiB3aWR0aD0iMTAwLjU2MjM1IiBoZWlnaHQ9IjIyIiBmaWxsPSIjZmVhZTAwIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTI3Ij4KICAgICAgICA8cmVjdCB4PSI1MDcuMzkwNiIgeT0iMTU1My40NDgiIHdpZHRoPSI0Ny43NjcxMTUiIGhlaWdodD0iMjIiIGZpbGw9IiNmZWFlMDAiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xMjYiPgogICAgICAgIDxyZWN0IHg9IjUzOS42NTQzNCIgeT0iMTU4MC40NDgiIHdpZHRoPSIxMDAuNTYyMzUiIGhlaWdodD0iMjIiIGZpbGw9IiNmZWFlMDAiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xMjUiPgogICAgICAgIDxyZWN0IHg9IjYyMS43ODAyNiIgeT0iMTYwNy40NDgiIHdpZHRoPSI1OC42NjEzNyIgaGVpZ2h0PSIyMiIgZmlsbD0iI2ZlYWUwMCIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzEyNCI+CiAgICAgICAgPHJlY3QgeD0iNTcxLjQ5OTEiIHk9IjE2MzQuNDQ4IiB3aWR0aD0iNTguNjYxMzciIGhlaWdodD0iMjIiIGZpbGw9IiNmZWFlMDAiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8xMjMiPgogICAgICAgIDxwYXRoIGQ9Ik0gNTA3LjM5MDYgMTQzMS40NDggTCA1MDcuNTE1IDE0NzEuNDkxNSBMIDUwNy4zOTA2IDE1NDEuMjM3MyBMIDUwNi41MTUgMTY2Ni43NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI0LjAsNC4wIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8xMjIiPgogICAgICAgIDxwYXRoIGQ9Ik0gMTQxLjQ3MDY2IDE0MzEuNDQ4IEwgMTQxLjU5NTA1IDE0NzEuOTIxIEwgMTQxLjQ3MDY2IDE1NDIuNDE0NiBMIDE0MC41OTUwNSAxNjY2Ljc1IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjQuMCw0LjAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzEyMSI+CiAgICAgICAgPHBhdGggZD0iTSA3MDIuOTQzOCAxNDMxLjQ0OCBMIDcwMy4wNjgxNSAxNDcxLjA3IEwgNzAyLjk0MzggMTU0MC4wODE3IEwgNzAzLjA2ODE1IDE2NjcuMjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNC4wLDQuMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTE2Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzcuMDk2MyAxNDE3KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjMxOTc0NDIzZS0yMCIgeT0iMTUiPjE8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8xMTUiPgogICAgICAgIDxsaW5lIHgxPSIxNDEuNDk0NTMiIHkxPSIxNDM5LjIxNDUiIHgyPSI0MTEuNDk0OTgiIHkyPSIxNDM5LjcyNDYiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8xMTQiPgogICAgICAgIDxsaW5lIHgxPSI0MjMuNTg4NjMiIHkxPSIxNDM5LjQ0OCIgeDI9IjQ5Ny41MTYyNiIgeTI9IjE0MzkuNjY4MiIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXIpIiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzExMyI+CiAgICAgICAgPGxpbmUgeDE9IjUwNy40MTQ3IiB5MT0iMTQzOS4yMTc2IiB4Mj0iNjkzLjA2ODIiIHkyPSIxNDM5LjIyNjgiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xMTIiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2MC4yMDM2IDE0MTcpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iMzE5NzQ0MjNlLTIwIiB5PSIxNSI+MjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzExMSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTk5LjgyMzk2IDE0MTcpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iNi42ODM4NzciIHk9IjE1Ij4zPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTg2Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDYuNTk1MDUgMTY3MC45NDgpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iODUyNjUxM2UtMTkiIHk9IjE1Ij5QYWNrYWdlIGluc3RhbGxhdGlvbiBwcm9ncmVzczo8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xODUiPgogICAgICAgIDxyZWN0IHg9IjE0MS41OTUwNSIgeT0iMTY5NC4zOTYiIHdpZHRoPSI4OS41IiBoZWlnaHQ9IjIyIiBmaWxsPSIjNjBkOTM2Ii8+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ2LjU5NTA1IDE2OTYuMTcyKSIgZmlsbD0id2hpdGUiPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHg9IjQuNzkiIHk9IjE1Ij5SZXNvbHZpbmc8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xODQiPgogICAgICAgIDxyZWN0IHg9IjIzMS4wOTUwNSIgeT0iMTY5NC4zOTYiIHdpZHRoPSI4OS41IiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDBhMmZmIi8+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM2LjA5NTA1IDE2OTYuMTcyKSIgZmlsbD0id2hpdGUiPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHg9IjguNzgyIiB5PSIxNSI+RmV0Y2hpbmc8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xODMiPgogICAgICAgIDxyZWN0IHg9IjMyMC41OTUwNSIgeT0iMTY5NC4zOTYiIHdpZHRoPSI4OS41IiBoZWlnaHQ9IjIyIiBmaWxsPSIjZmVhZTAwIi8+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzI1LjU5NTA1IDE2OTYuMTcyKSIgZmlsbD0id2hpdGUiPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHg9IjE0LjExIiB5PSIxNSI+TGlua2luZzwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzE4OCI+CiAgICAgICAgPHBhdGggZD0iTSA0MjEuMzY5MiAxNDMxLjQ0OCBMIDQyMS40OTM2IDE0NzEuNDkxNSBMIDQyMS4zNjkyIDE1NDEuMjM3MyBMIDQyMC40OTM2IDE2NjYuNzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNC4wLDQuMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=">

<br>

  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM6eGw9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE2Ny41OTUwNSAxNzc3IDY5MC4xMTk4IDMxNC4zOTYiIHdpZHRoPSI2OTAuMTE5OCIgaGVpZ2h0PSIzMTQuMzk2Ij4KICA8ZGVmcz4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHZpZXdCb3g9Ii0xIC00IDEwIDgiIG1hcmtlcldpZHRoPSIxMCIgbWFya2VySGVpZ2h0PSI4IiBjb2xvcj0iYmxhY2siPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNIDggMCBMIDAgLTMgTCAwIDMgWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvbWFya2VyPgogIDwvZGVmcz4KICA8ZyBpZD0iQ2FudmFzXzEiIHN0cm9rZS1kYXNoYXJyYXk9Im5vbmUiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSI+CiAgICA8dGl0bGU+Q2FudmFzIDE8L3RpdGxlPgogICAgPHJlY3QgZmlsbD0id2hpdGUiIHg9IjE2Ny41OTUwNSIgeT0iMTc3NyIgd2lkdGg9IjY5MC4xMTk4IiBoZWlnaHQ9IjMxNC4zOTYiLz4KICAgIDxnIGlkPSJDYW52YXNfMV9MYXllcl8xIj4KICAgICAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogICAgICA8ZyBpZD0iR3JhcGhpY18xMjAiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OS4wOTUwNSAyMDQwLjk0OCkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI4NTI2NTEzZS0xOSIgeT0iMTUiPlBhY2thZ2UgaW5zdGFsbGF0aW9uIHByb2dyZXNzOjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzExOSI+CiAgICAgICAgPHJlY3QgeD0iMTc0LjA5NTA1IiB5PSIyMDY0LjM5NiIgd2lkdGg9Ijg5LjUiIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzkuMDk1MDUgMjA2Ni4xNzIpIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgeD0iNC43OSIgeT0iMTUiPlJlc29sdmluZzwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzExOCI+CiAgICAgICAgPHJlY3QgeD0iMjYzLjU5NTA1IiB5PSIyMDY0LjM5NiIgd2lkdGg9Ijg5LjUiIGhlaWdodD0iMjIiIGZpbGw9IiMwMGEyZmYiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjguNTk1MDUgMjA2Ni4xNzIpIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgeD0iOC43ODIiIHk9IjE1Ij5GZXRjaGluZzwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzExNyI+CiAgICAgICAgPHJlY3QgeD0iMzUzLjA5NTA1IiB5PSIyMDY0LjM5NiIgd2lkdGg9Ijg5LjUiIGhlaWdodD0iMjIiIGZpbGw9IiNmZWFlMDAiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTguMDk1MDUgMjA2Ni4xNzIpIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgeD0iMTQuMTEiIHk9IjE1Ij5MaW5raW5nPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTgyIj4KICAgICAgICA8cmVjdCB4PSIxNzQuMDk1MDUiIHk9IjE4MTUuNDQ4IiB3aWR0aD0iODIuMTI1OTIiIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xODEiPgogICAgICAgIDxyZWN0IHg9IjQ1My45OTM2IiB5PSIxODE1LjQ0OCIgd2lkdGg9IjEwMC41NjIzNSIgaGVpZ2h0PSIyMiIgZmlsbD0iIzAwYTJmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE4MCI+CiAgICAgICAgPHJlY3QgeD0iNzUwLjY1MjUiIHk9IjE4MTUuNDQ4IiB3aWR0aD0iNDguNjA1MTM0IiBoZWlnaHQ9IjIyIiBmaWxsPSIjZmVhZTAwIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTc5Ij4KICAgICAgICA8cmVjdCB4PSIxNzQuMDk1MDUiIHk9IjE4NDIuNDQ4IiB3aWR0aD0iNDEuMDYyOTYiIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNzgiPgogICAgICAgIDxyZWN0IHg9IjQ1My45OTM2IiB5PSIxODQyLjQ0OCIgd2lkdGg9IjY4LjI1NTAyIiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDBhMmZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTc3Ij4KICAgICAgICA8cmVjdCB4PSIyNTYuMjIwOTciIHk9IjE4NjkuNDQ4IiB3aWR0aD0iNDguNjA1MTM0IiBoZWlnaHQ9IjIyIiBmaWxsPSIjNjBkOTM2Ii8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTc2Ij4KICAgICAgICA8cmVjdCB4PSIyNTYuMjIwOTciIHk9IjE4OTYuNDQ4IiB3aWR0aD0iODIuMTI1OTIiIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNzUiPgogICAgICAgIDxyZWN0IHg9IjMwNC44MjYxIiB5PSIxOTIzLjQ0OCIgd2lkdGg9IjU4LjY2MTM3IiBoZWlnaHQ9IjIyIiBmaWxsPSIjNjBkOTM2Ii8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTc0Ij4KICAgICAgICA8cmVjdCB4PSIzNDAuMDIyOTIiIHk9IjE5NTAuNDQ4IiB3aWR0aD0iODIuMTI1OTIiIGhlaWdodD0iMjIiIGZpbGw9IiM2MGQ5MzYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNzMiPgogICAgICAgIDxyZWN0IHg9IjM2My40ODc0NyIgeT0iMTk3Ny40NDgiIHdpZHRoPSI0MS4wNjI5NiIgaGVpZ2h0PSIyMiIgZmlsbD0iIzYwZDkzNiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE3MiI+CiAgICAgICAgPHJlY3QgeD0iMzYzLjQ4NzQ3IiB5PSIyMDA0LjQ0OCIgd2lkdGg9IjkwLjUwNjExIiBoZWlnaHQ9IjIyIiBmaWxsPSIjNjBkOTM2Ii8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTcxIj4KICAgICAgICA8cmVjdCB4PSI0NTMuOTkzNiIgeT0iMTg2OS40NDgiIHdpZHRoPSIxOTAuMjMwNDQiIGhlaWdodD0iMjIiIGZpbGw9IiMwMGEyZmYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNzAiPgogICAgICAgIDxyZWN0IHg9IjQ1My45OTM2IiB5PSIxODk2LjQ0OCIgd2lkdGg9IjI5Ni42NTg5MiIgaGVpZ2h0PSIyMiIgZmlsbD0iIzAwYTJmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE2OSI+CiAgICAgICAgPHJlY3QgeD0iNDUzLjk5MzYiIHk9IjE5MjMuMzMzNiIgd2lkdGg9IjE1OC4zODU3IiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDBhMmZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTY4Ij4KICAgICAgICA8cmVjdCB4PSI0NTMuOTkzNiIgeT0iMTk1MC4yMTkyIiB3aWR0aD0iMTUwLjAwNTUiIGhlaWdodD0iMjIiIGZpbGw9IiMwMGEyZmYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNjciPgogICAgICAgIDxyZWN0IHg9IjQ1My45OTM2IiB5PSIxOTc3LjMzMzYiIHdpZHRoPSIyNDkuNzI5ODMiIGhlaWdodD0iMjIiIGZpbGw9IiMwMGEyZmYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNjYiPgogICAgICAgIDxyZWN0IHg9IjQ1My45OTM2IiB5PSIyMDA0LjQ0OCIgd2lkdGg9IjE1MC4wMDU1IiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDBhMmZmIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMTY1Ij4KICAgICAgICA8cGF0aCBkPSJNIDQ1My45OTM2IDE4MDEuNDQ4IEwgNDU0LjExOCAxODQxLjIzNzUgTCA0NTMuOTkzNiAxOTEwLjU0MSBMIDQ1NC4xMTggMjAzNS43NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI0LjAsNC4wIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNjQiPgogICAgICAgIDxyZWN0IHg9Ijc1MC42NTI1IiB5PSIxODQyLjQ0OCIgd2lkdGg9IjMyLjI2Mzc1MyIgaGVpZ2h0PSIyMiIgZmlsbD0iI2ZlYWUwMCIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE2MyI+CiAgICAgICAgPHJlY3QgeD0iNzUwLjY1MjUiIHk9IjE4NjkuNDQ4IiB3aWR0aD0iNjguMjU1MDIiIGhlaWdodD0iMjIiIGZpbGw9IiNmZWFlMDAiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNjIiPgogICAgICAgIDxyZWN0IHg9Ijc1MC42NTI1IiB5PSIxODk2LjQ0OCIgd2lkdGg9IjEwMC41NjIzNSIgaGVpZ2h0PSIyMiIgZmlsbD0iI2ZlYWUwMCIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE2MSI+CiAgICAgICAgPHJlY3QgeD0iNzUwLjY1MjUiIHk9IjE5MjIuOTkwNCIgd2lkdGg9IjQ3Ljc2NzExNSIgaGVpZ2h0PSIyMiIgZmlsbD0iI2ZlYWUwMCIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE2MCI+CiAgICAgICAgPHJlY3QgeD0iNzUwLjY1MjUiIHk9IjE5NTAuMjE5MiIgd2lkdGg9IjEwMC41NjIzNSIgaGVpZ2h0PSIyMiIgZmlsbD0iI2ZlYWUwMCIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE1OSI+CiAgICAgICAgPHJlY3QgeD0iNzUwLjY1MjUiIHk9IjE5NzcuNDQ4IiB3aWR0aD0iNTguNjYxMzciIGhlaWdodD0iMjIiIGZpbGw9IiNmZWFlMDAiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNTgiPgogICAgICAgIDxyZWN0IHg9Ijc1MC42NTI1IiB5PSIyMDAzLjk5MDQiIHdpZHRoPSI1OC42NjEzNyIgaGVpZ2h0PSIyMiIgZmlsbD0iI2ZlYWUwMCIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzE1NyI+CiAgICAgICAgPHBhdGggZD0iTSA3NTAuNjUyNSAxODAxLjQ0OCBMIDc1MC43NzY5IDE4NDEuNDkxNSBMIDc1MC42NTI1IDE5MTEuMjM3MyBMIDc1MC43NzY5IDIwMzYuNzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNC4wLDQuMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMTU2Ij4KICAgICAgICA8cGF0aCBkPSJNIDE3My45NzA2NiAxODAxLjQ0OCBMIDE3NC4wOTUwNSAxODQxLjU3NyBMIDE3My45NzA2NiAxOTExLjQ3MTQgTCAxNzMuMDk1MDUgMjAzOC4yNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI0LjAsNC4wIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8xNTUiPgogICAgICAgIDxwYXRoIGQ9Ik0gODUxLjIxNDkgMTgwMS40NDggTCA4NTEuMzM5MiAxODQxLjA3IEwgODUxLjIxNDkgMTkxMC4wODE3IEwgODUyLjIxNDkgMjAzNiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI0LjAsNC4wIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xNTQiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwOS41OTYzIDE3ODcpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iMzE5NzQ0MjNlLTIwIiB5PSIxNSI+MTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzE1MyI+CiAgICAgICAgPGxpbmUgeDE9IjE3My45OTQ4OCIgeTE9IjE4MDkuMjY0IiB4Mj0iNDQ0LjExNzgiIHkyPSIxODA5LjE5MjUiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8xNTIiPgogICAgICAgIDxsaW5lIHgxPSI0NTYuMDg4NjMiIHkxPSIxODA5LjQ0OCIgeDI9Ijc0MC43NzgxIiB5Mj0iMTgwOS42ODkyIiBtYXJrZXItZW5kPSJ1cmwoI0ZpbGxlZEFycm93X01hcmtlcikiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMTUxIj4KICAgICAgICA8bGluZSB4MT0iNzUwLjY3NjYiIHkxPSIxODA5LjIxNzUiIHgyPSI4NDEuMzM5MSIgeTI9IjE4MDkuMTg5MyIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXIpIiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE1MCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjA5LjEwMTE1IDE3ODcpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iMzE5NzQ0MjNlLTIwIiB5PSIxNSI+MjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE0OSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzkzLjczODggMTc4NykiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI2LjY4Mzg3NyIgeT0iMTUiPjM8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" >


---
layout: cover
color: sky-light
---


# Fussy Bits + Future

This is just the first phase

---
layout: default
align: lm
color: sky-light
---


## Let's look at the current `.npmrc`

```
prefer-frozen-lockfile=true

strict-peer-dependencies=false
auto-install-peers=true

node-linker=hoisted # This is temporary

# TODO: disable "hoisted", and specify exception cases like this
# public-hoist-pattern[]=*expo*
# public-hoist-pattern[]=*@react-native-community/*
# etc

# TODO: test auto merge lockfiles
# https://pnpm.io/git_branch_lockfiles#merge-git-branch-lockfiles
# merge-git-branch-lockfiles-branch-pattern[]=main

```

---
layout: side-title
align: lm-lm
color: sky-light
---


:: title ::


# Why do `node_modules` + `pnpm-lock.yaml` sometimes get out of sync?


:: content ::


Because we started on "easy mode" with hoisting and peer dependencies, `node_modules` can sometimes end up in a goofy state, and end up failing silently. 

In these situations, it's usually easiest to just run:

 `rm -rf node_modules`

But this is a temporary situation :)

<hr>

**Note:** `patch-package` may also be contributing to this, since it's mutating dependencies. pnpm has it's own patch feature, so this is also temporary

---
layout: side-title
align: cm-lm
color: sky-light
---


:: title ::

# npx? 



:: content ::


`pnpm` divides the features of `npx` between 2 commands:

- `pnpm exec` - searches for the binary locally in `node_modules/.bin` and runs it. (The command will fail if the binary is not found locally.)
- `pnpm dlx` - downloads the package remotely from the registry and runs its binary. (The package is not added as a new dependency.)

https://stackoverflow.com/a/78722494

<br>

<AdmonitionType type="info" width="300px">
But feel free to continue using `npx`!
</AdmonitionType>


---
layout: section
align: middle
color: sky-light
---

# Bonus Security Feature?

<Mug :size="140" mood="excited" color="#FDA7DC" v-drag="[39,341,85,150]"  />

<!-- https://github.com/sweetgreen/sg-monorepo/pull/9392/files -->

---
layout: section
align: middle
color: amber-light
---

# Questions?

---
layout: end
---

Thanks!!