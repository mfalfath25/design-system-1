# Pintarnya Design System

A lightweight design token package for Pintarnya applications. Contains design tokens (colors, typography, spacing) and SVG logo assets.

**Bundle size**: 276KB

## Installation

```bash
yarn add pintarnya-design-system-v1
# or
npm install pintarnya-design-system-v1
```

## Quick Start

### React Native

```typescript
import {
  ColorBrandPrimaryBase,
  ColorBackgroundBase,
  SizeFontBase,
  AssetFontPoppinsName,
} from "pintarnya-design-system-v1";

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorBackgroundBase,
  },
  text: {
    fontFamily: AssetFontPoppinsName, // "Poppins"
    fontSize: parseInt(SizeFontBase),
    color: ColorBrandPrimaryBase,
  },
});
```

### Next.js

```typescript
import {
  ColorBrandPrimaryBase,
  AssetImageLogoHorizontal,
  AssetFontPoppinsName,
} from 'pintarnya-design-system-v1';

// Use with next/font
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: ['400', '500', '600', '700'] });

export default function App() {
  return (
    <div style={{ backgroundColor: ColorBackgroundBase }}>
      <img src={AssetImageLogoHorizontal} alt="Logo" />
      <h1 className={poppins.className}>Hello World</h1>
    </div>
  );
}
```

### CSS Variables

```typescript
// Import in _app.tsx or layout.tsx
import "pintarnya-design-system-v1/dist/variables.css";
```

```css
.button {
  background-color: var(--color-brand-primary-base);
  color: var(--color-font-button-primary);
}
```

## What's Included

### Design Tokens

- **Colors**: Brand, background, font, border colors
- **Typography**: Font family names (Poppins, Roboto, Open Sans)
- **Spacing**: Consistent spacing values
- **Sizes**: Font sizes, dimensions
- **Time**: Animation durations

### SVG Logo Assets

All logos are exported as SVG file paths (ready to use):

```typescript
import {
  AssetImageLogoHorizontal,        // Full horizontal logo
  AssetImageLogoHorizontalInverted, // Horizontal (inverted)
  AssetImageLogoVertical,           // Vertical stacked
  AssetImageLogoVerticalInverted,   // Vertical (inverted)
  AssetImageLogoIcon,               // Icon only
  AssetImageLogoIconInverted,       // Icon (inverted)
} from 'pintarnya-design-system-v1';

// Use directly in img tags
<img src={AssetImageLogoHorizontal} alt="Pintarnya" />
```

### Font Names

Font family names are exported as tokens. **Font files are NOT included** - load fonts separately in your project:

```typescript
// Font name tokens
AssetFontPoppinsName  // "Poppins"
AssetFontRobotoName   // "Roboto"
AssetFontOpensansName // "Open Sans"

// Next.js: Use with next/font
import { Poppins } from 'next/font/google';

// React Native: Link fonts in your project, then use:
<Text style={{ fontFamily: AssetFontPoppinsName }}>
```

## Example Tokens

```javascript
// Brand Colors
ColorBrandPrimaryBase; // "#2a83fd"
ColorBrandPrimaryLight; // "#5ca0ff"
ColorBrandPrimaryDark; // "#1a5fcc"

// Background Colors
ColorBackgroundBase; // "#ffffff"
ColorBackgroundPrimary; // "#2a83fd"
ColorBackgroundSuccess; // "#36bc4c"

// Font Colors
ColorFontBase; // "#001833"
ColorFontSecondary; // "#64748b"

// Spacing
SizeSpacingXs; // "4px"
SizeSpacingMd; // "16px"
SizeSpacingXl; // "32px"
```

## TypeScript Support

Full TypeScript support included:

```typescript
import { ColorBrandPrimaryBase } from "pintarnya-design-system-v1";

const color: string = ColorBrandPrimaryBase; // ✅ Type-safe
```

## Platform Support

- ✅ **React Native** - JavaScript tokens
- ✅ **Next.js / React Web** - JavaScript tokens + CSS variables
- ✅ **iOS** - Native Objective-C files in `ios/`
- ✅ **Android** - Native XML resources in `android/`

## Development

### Build Tokens

```bash
yarn build
```

Generates:

- `dist/tokens.js` - ES6 module
- `dist/tokens.cjs` - CommonJS module
- `dist/tokens.d.ts` - TypeScript definitions
- `dist/variables.css` - CSS custom properties
- `dist/tokens.json` - Raw JSON
- `ios/` - iOS native code
- `android/` - Android native resources

### Modify Tokens

Edit JSON files in `tokens/` directory, then run `yarn build`.

## License

Apache-2.0
