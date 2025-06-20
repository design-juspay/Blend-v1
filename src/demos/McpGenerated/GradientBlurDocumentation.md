# GradientBlur Component Documentation

## Description
A decorative component that renders a set of animated, blurred gradient circles.
This is typically used as a background effect. It does not accept any props.
The appearance and animation are controlled by the associated `GradientBlur.css` file.

## Features
- Renders multiple animated gradient circles.
- Creates a dynamic, blurred background effect.

## Props

No props defined for this component.

## Usage Examples

### ```tsx
```tsx
import GradientBlur from "./components/GradientBlur"; // Assuming path

// To use it, simply include it in your component's render method:
<div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
  <GradientBlur />
  <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
    Content Over Gradient
  </h1>
</div>
