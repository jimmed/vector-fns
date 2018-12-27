# vector-fns

Utilities for working immutably with vectors

## Concept

Inspired by the fantastic [date-fns](https://date-fns.org/) library, I wanted a simple library that could let me work with _n_-dimensional vectors in an immutable fashion.

## Installation

```
yarn add vector-fns
```

or

```
npm install vector-fns
```

## Usage

You can import the entire library and destructure what you need, like so:

```js
import { add, lessThan } from "vector-fns";
```

or you can pick what you want:

```js
import add from "vector-fns/dist/add";
import lessThan from "vector-fns/dist/lessThan";
```
