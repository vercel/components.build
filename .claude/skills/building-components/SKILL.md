---
name: building-components
description: Build composable, accessible UI components following modern React patterns. Use when creating new components, refactoring existing components to be more composable, implementing accessibility, or following shadcn/ui-style patterns.
---

# Building Components

Guide for creating composable, accessible React components following the components.build protocol.

## Core Principles

1. **Composability over inheritance** - Break components into smaller, focused pieces
2. **Accessible by default** - Keyboard, screen reader, and assistive tech support
3. **Customizable & themeable** - `className` prop, data attributes, CSS variables
4. **Lightweight & performant** - Minimal deps, tree-shakeable
5. **Transparent & ownable** - Users can inspect and modify source
6. **Well-documented** - Clear API, TypeScript types, examples

## Component Taxonomy

| Type | Description | Example |
|------|-------------|---------|
| Primitive | Single HTML element wrapper | `<Box>`, `<Text>` |
| Component | Composable UI building block | `<Button>`, `<Input>` |
| Pattern | Multiple components together | `<Dialog>`, `<Tabs>` |
| Block | Feature-complete section | `<LoginForm>` |
| Page | Full page layout | `<DashboardPage>` |
| Template | Reusable page structure | `<MarketingTemplate>` |

## Composition Pattern

Break complex components into cooperating pieces:

```tsx
// Not this:
<Accordion data={items} />

// This:
<Accordion.Root>
  <Accordion.Item>
    <Accordion.Trigger>Title</Accordion.Trigger>
    <Accordion.Content>Content</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

### Standard Part Names

| Part | Purpose |
|------|---------|
| `Root` | Container, manages state via Context |
| `Item` | Wrapper for repeated elements |
| `Trigger` | Initiates action |
| `Content` | Main content (shown/hidden) |
| `Header` / `Body` / `Footer` | Structural sections |
| `Title` / `Description` | Informational text |
| `Close` | Dismissal control |

Full details: [references/composition.mdx](references/composition.mdx)

## Key Patterns

### asChild Pattern

Merge behavior onto custom child element using `@radix-ui/react-slot`:

```tsx
<Dialog.Trigger asChild>
  <Button>Open</Button>
</Dialog.Trigger>
```

Full details: [references/as-child.mdx](references/as-child.mdx)

### Polymorphism

Change rendered element type with `as` prop:

```tsx
<Button as="a" href="/home">Link</Button>
<Text as="h1">Heading</Text>
```

Full details: [references/polymorphism.mdx](references/polymorphism.mdx)

### Data Attributes

Use `data-state` for state-based styling:

```tsx
<div data-state={isOpen ? 'open' : 'closed'} />
// Style: data-[state=open]:opacity-100
```

Use `data-slot` for component targeting:

```tsx
<div data-slot="card-header" />
// Parent: [&_[data-slot=card-header]]:mb-4
```

Full details: [references/data-attributes.mdx](references/data-attributes.mdx)

### State Management

Support controlled and uncontrolled modes:

```tsx
import { useControllableState } from '@radix-ui/react-use-controllable-state';

const [value, setValue] = useControllableState({
  prop: controlledValue,
  defaultProp: defaultValue,
  onChange: onValueChange,
});
```

Full details: [references/state.mdx](references/state.mdx)

### Styling

Use `cn()` for class merging, CVA for variants:

```tsx
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => twMerge(clsx(inputs));
```

Full details: [references/styling.mdx](references/styling.mdx)

### Props & Types

Extend native HTML attributes, export types:

```tsx
export type CardProps = React.ComponentProps<'div'> & {
  variant?: 'default' | 'outlined';
};

export const Card = ({ variant, className, ...props }: CardProps) => (
  <div
    data-slot="card"
    className={cn(cardVariants({ variant }), className)}
    {...props}
  />
);
```

Full details: [references/types.mdx](references/types.mdx)

## Accessibility

All components must be accessible:

1. **Semantic HTML** - Use `button`, `nav`, `dialog`, etc.
2. **Keyboard navigation** - All interactions keyboard-only
3. **ARIA attributes** - Proper roles, states, properties
4. **Focus management** - Visible indicators, trapping where needed
5. **Color contrast** - 4.5:1 text, 3:1 large text/graphics

Full details: [references/accessibility.mdx](references/accessibility.mdx)

## Quick Checklist

- [ ] Wraps single HTML element
- [ ] Extends `React.ComponentProps<'element'>`
- [ ] Exports prop types
- [ ] Has `data-slot` attribute
- [ ] Uses `data-state` for visual states
- [ ] Supports `className` customization
- [ ] Keyboard accessible
- [ ] Proper ARIA attributes
