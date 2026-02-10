# Pintarnya Design System

Design tokens for Pintarnya applications - colors, typography, spacing, and more. This package provides a consistent set of design tokens that can be used across React Native, Next.js, and native iOS/Android applications.

## Installation

```bash
# Using Yarn
yarn add pintarnya-design-system-v1

# Using npm
npm install pintarnya-design-system-v1
```

> **Note**: This package supports both CommonJS (`require`) and ES modules (`import`). It will automatically use the correct format based on your project configuration.

## Usage

### React Native

Import tokens directly as JavaScript constants:

```javascript
import {
  ColorBrandPrimaryBase,
  ColorBackgroundBase,
  ColorFontBase,
  SizeFontBase,
} from "pintarnya-design-system-v1";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorBackgroundBase,
    padding: 16,
  },
  text: {
    color: ColorFontBase,
    fontSize: parseInt(SizeFontBase),
  },
  button: {
    backgroundColor: ColorBrandPrimaryBase,
  },
});
```

### Next.js / React Web

#### Option 1: JavaScript Imports

```typescript
import {
  ColorBrandPrimaryBase,
  ColorBackgroundBase,
  ColorFontBase
} from 'pintarnya-design-system-v1';

export default function MyComponent() {
  return (
    <div style={{ backgroundColor: ColorBackgroundBase }}>
      <h1 style={{ color: ColorFontBase }}>Hello World</h1>
      <button style={{ backgroundColor: ColorBrandPrimaryBase }}>
        Click me
      </button>
    </div>
  );
}
```

#### Option 2: CSS Variables

Import the CSS file in your `_app.tsx` or layout:

```typescript
// pages/_app.tsx or app/layout.tsx
import "pintarnya-design-system-v1/dist/variables.css";
```

Then use CSS variables in your stylesheets:

```css
.container {
  background-color: var(--color-background-base);
  color: var(--color-font-base);
}

.button {
  background-color: var(--color-brand-primary-base);
  color: var(--color-font-button-primary);
}
```

### TypeScript Support

This package includes TypeScript definitions. All tokens are typed as `string`:

```typescript
import { ColorBrandPrimaryBase } from "pintarnya-design-system-v1";

const primaryColor: string = ColorBrandPrimaryBase; // ✅ Type-safe
```

## Available Tokens

The design system includes the following token categories:

- **Colors**: Base colors, brand colors, background colors, font colors, border colors
- **Sizes**: Font sizes, spacing, dimensions
- **Typography**: Font families and styles
- **Icons**: Material icon names
- **Time**: Animation durations

### Example Token Names

```javascript
// Brand Colors
ColorBrandPrimaryBase;
ColorBrandPrimaryLight;
ColorBrandPrimaryDark;

// Background Colors
ColorBackgroundBase;
ColorBackgroundAlt;
ColorBackgroundSuccess;
ColorBackgroundError;

// Font Colors
ColorFontBase;
ColorFontSecondary;
ColorFontLink;

// And many more...
```

## Development

### Building Tokens

To rebuild the design tokens after making changes to the source files in `tokens/`:

```bash
yarn build
```

This generates:

- `dist/tokens.js` - ES6 module exports
- `dist/tokens.d.ts` - TypeScript definitions
- `dist/variables.css` - CSS custom properties
- `dist/tokens.json` - Raw JSON format
- `ios/` - iOS native code (Objective-C)
- `android/` - Android native resources (XML)

### Modifying Tokens

Edit the JSON files in the `tokens/` directory:

```
tokens/
  ├── color/
  │   ├── base.json
  │   ├── font.json
  │   └── ...
  ├── size/
  └── font.json
```

After making changes, run `yarn build` to regenerate all platform outputs.

## License

Apache-2.0
