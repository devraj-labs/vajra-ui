# Vajra UI

**Vajra UI - A minimal zero dependency React Native styling and theming library**

Vajra UI is a lightweight styling and theming system designed for **React Native** applications.
It provides a small set of **layout primitives, theme tokens, and styling utilities** to help you build consistent interfaces without the complexity of large UI frameworks.

The philosophy behind Vajra UI is simple:

> Minimal primitives. Zero dependencies. Maximum flexibility.

Instead of shipping hundreds of prebuilt components, Vajra UI focuses on **foundational styling primitives** that allow developers to build their own components with a clean and predictable API.

---

# ✨ Features

* ⚡ **Zero dependencies**
* 📦 **Tiny bundle size**
* 🎨 **Theme-driven design**
* 🧱 **Minimal styling primitives**
* 🧩 **Variant-based styling**
* 📱 **React Native first**
* 🔍 **Predictable `$` prop based styling API**

---

# Philosophy

Vajra UI follows three core principles.

## 1. Minimalism

Most UI frameworks grow large over time and introduce unnecessary abstractions.

Vajra UI focuses on **only the essentials**:

* Layout primitives
* Styling props
* Theme tokens

Everything else can be built on top.

---

## 2. Zero Dependencies

External dependencies increase:

* bundle size
* maintenance burden
* version conflicts

Vajra UI avoids this by being **completely dependency-free**.

---

## 3. Explicit Over Magic

No hidden styling layers or complex runtime transformations.

Vajra UI prioritizes **clarity and predictability**.

---

# Installation

```bash
npm install vajra-ui
```

or

```bash
yarn add vajra-ui
```

---

# Project Structure

The repository is structured as a monorepo with the core library and an example app for development and testing.

```
vajra-ui/
│
├─ examples/
│   └─ app/                 # Example React Native app
│       ├─ app.tsx
│       ├─ screens/
│       └─ components/
│
├─ src/
│   │
│   ├─ core/                # Core primitives and layout components
│   │   ├─ box.tsx
│   │   ├─ stack.tsx
│   │   ├─ row.tsx
│   │   ├─ text.tsx
│   │   └─ index.ts
│   │
│   ├─ theme/               # Theme system
│   │   ├─ createTheme.ts
│   │   ├─ tokens.ts
│   │   ├─ provider.tsx
│   │   └─ index.ts
│   │
│   └─ index.ts             # Public exports
│
├─ package.json
├─ tsconfig.json
├─ README.md
└─ LICENSE
```

---

# Roadmap

Planned improvements for Vajra UI:

* Core styling primitives
* Token-based theme system
* Variants support
* Devtools for inspecting tokens
* Optional component layer
* Potential web support

---

# Contributing

Contributions are welcome.

Steps to contribute:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

# License

MIT License.

---

# Inspiration

Vajra UI is inspired by ideas from several modern UI systems while maintaining a strong focus on **minimalism and performance**.

---

# Author

Created with ⚡ to make React Native styling simpler.
