# EarningsCalculatorSection - Usage Example

## Basic Usage in Index Page

Add the component to your `src/pages/Index.tsx`:

```tsx
import EarningsCalculatorSection from "@/components/EarningsCalculatorSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Earnings Calculator Section */}
      <EarningsCalculatorSection />

      {/* Other sections... */}
      <StatsSection />
      {/* ... */}
    </main>
  );
};
```

## Standalone Page Example

If you want to create a dedicated page:

```tsx
// src/pages/EarningsCalculator.tsx
import EarningsCalculatorSection from "@/components/EarningsCalculatorSection";

export default function EarningsCalculatorPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center py-8">eMoney Deals</h1>
      <EarningsCalculatorSection />
    </main>
  );
}
```

## Example with Main Title (as requested)

```tsx
// src/pages/CalculatorPage.tsx
import EarningsCalculatorSection from "@/components/EarningsCalculatorSection";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      {/* Main page title */}
      <div className="bg-white py-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          eMoney Deals
        </h1>
      </div>

      {/* Earnings Calculator Section appears immediately below */}
      <EarningsCalculatorSection />

      {/* Rest of page content */}
    </main>
  );
}
```

## Component Features

- ✅ Slider range: 0-25 with step 1
- ✅ Tick marks at: 0, 5, 10, 15, 20, 25
- ✅ Real-time calculations:
  - Weekly Profit = flips × $20
  - Monthly Profit = weekly × 4.33
  - Yearly Profit = weekly × 52
- ✅ Membership coverage calculation
- ✅ Responsive design (mobile & desktop)
- ✅ Emerald green styling matching brand
- ✅ CTA button with smooth scroll to checkout

## Styling Notes

- Uses `bg-slate-100` for outer section
- White card with `max-w-[700px]` centered
- Emerald-600 for profit values and button
- Responsive grid: 1 column on mobile, 3 columns on desktop
- Currency formatting with no decimals

