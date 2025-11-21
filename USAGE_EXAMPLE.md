# Personal Policy Sales Calculator - Usage Example

## Basic Usage

To use the `PersonalPolicySalesCalculator` component in your Next.js app, simply import and add it to your page:

```tsx
// src/pages/Index.tsx (or app/page.tsx for Next.js 13+ App Router)
import PersonalPolicySalesCalculator from "@/components/PersonalPolicySalesCalculator";

export default function Index() {
  return (
    <main>
      {/* Other sections */}
      
      <PersonalPolicySalesCalculator />
      
      {/* Other sections */}
    </main>
  );
}
```

## Standalone Page Example

If you want to create a dedicated page for the calculator:

```tsx
// src/pages/Calculator.tsx
import PersonalPolicySalesCalculator from "@/components/PersonalPolicySalesCalculator";

export default function CalculatorPage() {
  return <PersonalPolicySalesCalculator />;
}
```

Then add the route in your router:

```tsx
// src/App.tsx
import CalculatorPage from "./pages/Calculator";

// In your Routes:
<Route path="/calculator" element={<CalculatorPage />} />
```

## Component Features

- ✅ Fully responsive (mobile and desktop)
- ✅ Real-time calculations as slider moves
- ✅ Currency formatting with Intl.NumberFormat
- ✅ Clean, modern UI with Tailwind CSS
- ✅ TypeScript typed
- ✅ No external dependencies (pure React + Tailwind)

## Customization

The component is self-contained and includes its own background. If you want to integrate it into an existing page without the background, you can modify the component or wrap it:

```tsx
// Remove the outer background div if needed
<div className="py-8 sm:py-12 px-4">
  <PersonalPolicySalesCalculator />
</div>
```

