# Styleguide

#### Avoid unnecessary function component closures

```
// BAD
const Label = ({ text }) => {
  return <label>{text}</label>
}

// GOOD
const Label = ({ text }) => (
  <label>
    {text}
  </label>
);
```

#### Destruct props in function args

e.g.

```
({ text, onClick }) => {
  ...
}
```
