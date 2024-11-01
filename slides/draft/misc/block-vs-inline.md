---
layout: two-cols-title
---

::title::

# Block vs Inline Conditionals

::left::

```tsx
const styles = StyleSheet.create({
  .button {
    backgroundColor: event.state.isHovered ? orange : uprple,
    padding: 15,
    margin: 10,
    borderColor: event.state.isHovered ? uprple : orange,
    fontColor: event.state.isHovered ? uprple : orange,
    borderWidth: 2,
    fontSize: 16,
  }
})
```


::right::

```tsx

event.state.isHovered ? styles.buttonA : styles.buttonB

...

const styles = StyleSheet.create({
  .buttonA {
    backgroundColor: uprple,
    padding: 15,
    margin: 10,
    borderColor: orange,
    fontColor: orange,
    borderWidth: 2,
    fontSize: 16,
  },
  .buttonB {
    backgroundColor: orange
    padding: 15,
    margin: 10,
    borderColor: uprple
    fontColor: uprple
    borderWidth: 2,
    fontSize: 16,
  }
})

```


