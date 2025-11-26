import EarningsCalculatorSection from "@/components/EarningsCalculatorSection";

/**
 * Example page showing how to use EarningsCalculatorSection
 * with a main title above it.
 * 
 * This demonstrates the pattern requested:
 * - Main page title appears first
 * - EarningsCalculatorSection appears immediately below it
 */
export default function CalculatorExample() {
  return (
    <main className="min-h-screen">
      <div className="bg-white py-12 text-center border-b border-gray-200">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          eMoney Deals
        </h1>
      </div>

      <EarningsCalculatorSection />

    </main>
  );
}

