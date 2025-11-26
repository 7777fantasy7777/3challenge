import { useState, useMemo, useEffect } from 'react';

// Constants
const PROFIT_PER_FLIP = 20;
const MEMBERSHIP_COST = 49;

interface ProfitCardProps {
  label: string;
  value: number;
}

function ProfitCard({ label, value }: ProfitCardProps) {
  const formattedValue = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }, [value]);

  return (
    <div className="bg-white dark:bg-card rounded-xl p-6 shadow-md border border-gray-100 dark:border-border">
      <div className="text-sm text-slate-600 dark:text-muted-foreground mb-2">{label}</div>
      <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-500">
        {formattedValue}
      </div>
    </div>
  );
}

const EarningsCalculatorSection: React.FC = () => {
  const [flipsPerWeek, setFlipsPerWeek] = useState<number>(0);
  const [isDark, setIsDark] = useState(false);
  const tickMarks = [0, 5, 10, 15, 20, 25];
  const isAtTickMark = tickMarks.includes(flipsPerWeek);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  // Calculate all derived values
  const calculations = useMemo(() => {
    const weeklyProfit = flipsPerWeek * PROFIT_PER_FLIP;
    const monthlyProfit = weeklyProfit * 4.33;
    const yearlyProfit = weeklyProfit * 52;
    const membershipFlipsToCover = Math.ceil(MEMBERSHIP_COST / PROFIT_PER_FLIP);

    return {
      weeklyProfit,
      monthlyProfit,
      yearlyProfit,
      membershipFlipsToCover,
    };
  }, [flipsPerWeek]);

  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-12 sm:py-16 px-4">
      <div className="max-w-[700px] mx-auto bg-white dark:bg-card p-6 sm:p-8 rounded-2xl shadow-lg eMoney-card">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800 dark:text-foreground">
          What Could You Realistically Make With eMoney?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 dark:text-muted-foreground text-center mb-8 text-sm sm:text-base">
          Move the slider and see your potential.
        </p>

        {/* Slider Container */}
        <div className="mb-8">
          {/* Label and Value */}
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm sm:text-base font-medium text-gray-700 dark:text-foreground">
              Flips per week
            </label>
            <span className={`text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-500 transition-all duration-300 ${isAtTickMark ? 'scale-125' : ''}`}>
              {flipsPerWeek}
            </span>
          </div>

          {/* Slider */}
          <div className="relative mb-4 mx-auto py-0 px-[6.5%]">
            <input
              type="range"
              min={0}
              max={25}
              step={5}
              value={flipsPerWeek}
              onChange={(e) => setFlipsPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer range-slider"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${(flipsPerWeek / 25) * 100}%, ${isDark ? '#374151' : '#e5e7eb'} ${(flipsPerWeek / 25) * 100}%, ${isDark ? '#374151' : '#e5e7eb'} 100%)`,
              }}
            />
          </div>

          {/* Tick Labels */}
          <div className="flex justify-between px-1">
            {tickMarks.map((tick) => {
              const isActive = flipsPerWeek === tick;
              return (
                <div
                  key={tick}
                  className="flex flex-col items-center cursor-pointer"
                  style={{ width: `${100 / 6}%` }}
                  onClick={() => setFlipsPerWeek(tick)}
                >
                  <div className={`w-px h-2 mb-1 transition-all ${isActive ? 'h-4 bg-emerald-600 dark:bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                  <span className={`text-xs font-medium transition-all ${isActive ? 'text-emerald-600 dark:text-emerald-500 text-base font-bold' : 'text-gray-600 dark:text-gray-400'}`}>
                    {tick}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <ProfitCard label="Weekly Profit" value={calculations.weeklyProfit} />
          <ProfitCard label="Monthly Profit" value={calculations.monthlyProfit} />
          <ProfitCard label="Yearly Profit" value={calculations.yearlyProfit} />
        </div>

        {/* Membership Line */}
        <p className="text-sm text-slate-500 dark:text-muted-foreground text-center mb-6">
          Covers your membership after {calculations.membershipFlipsToCover} flips.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-semibold rounded-full px-6 py-3 transition-colors duration-200 shadow-md hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              const checkoutSection = document.getElementById('checkout');
              if (checkoutSection) {
                const yOffset = -80;
                const y = checkoutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Unlock these flips with a Free Trial <span className='display'>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculatorSection;

