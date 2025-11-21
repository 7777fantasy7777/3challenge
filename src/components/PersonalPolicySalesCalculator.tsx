import { useState, useMemo } from 'react';

interface CalculationRowProps {
    label: string;
    value: string | number;
    isMoney?: boolean;
    isBold?: boolean;
    showFormula?: string;
}

function CalculationRow({
    label,
    value,
    isMoney = false,
    isBold = false,
    showFormula
}: CalculationRowProps) {
    const formattedValue = useMemo(() => {
        if (isMoney && typeof value === 'number') {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: value % 1 === 0 ? 0 : 2,
                maximumFractionDigits: 2,
            }).format(value);
        }
        return value.toString();
    }, [value, isMoney]);

    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-border last:border-b-0">
            <div className="flex-1">
                <div className="text-gray-700 dark:text-foreground text-sm sm:text-base">{label}</div>
                {showFormula && (
                    <div className="text-xs text-gray-500 dark:text-muted-foreground mt-0.5">{showFormula}</div>
                )}
            </div>
            <div className={`text-right ${isMoney ? 'text-green-600 dark:text-green-500' : 'text-blue-600 dark:text-blue-500'} ${isBold ? 'font-bold text-lg' : 'font-medium'}`}>
                {formattedValue}
            </div>
        </div>
    );
}

export default function PersonalPolicySalesCalculator() {
    const [dailyPolicies, setDailyPolicies] = useState<number>(0);

    // Calculate all derived values
    const calculations = useMemo(() => {
        const monthlyPolicies = dailyPolicies * 30;
        const monthlyCommission = monthlyPolicies * 100;
        const futureMonthlyResidual = (monthlyPolicies * 100) / 12;
        const totalMonthlyIncome = monthlyCommission + futureMonthlyResidual;

        return {
            monthlyPolicies,
            monthlyCommission,
            futureMonthlyResidual,
            totalMonthlyIncome,
        };
    }, [dailyPolicies]);

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-background py-8 sm:py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white dark:bg-card rounded-lg shadow-lg p-6 sm:p-8">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-foreground mb-2">
                    What Could You Realistically Make With eMoney?
                </h2>

                {/* Subtitle */}
                <p className="text-gray-600 dark:text-muted-foreground text-sm sm:text-base mb-8">
                    How many policies do you personally sell per day?
                </p>

                {/* Slider Container */}
                <div className="mb-8">
                    {/* Current Value Display */}
                    <div className="mb-4">
                        <div className="text-center">
                            <span className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">
                                {dailyPolicies}
                            </span>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="relative mb-6">
                        <input
                            type="range"
                            min={0}
                            max={15}
                            step={1}
                            value={dailyPolicies}
                            onChange={(e) => setDailyPolicies(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer range-slider"
                            style={{
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(dailyPolicies / 15) * 100}%, ${document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'} ${(dailyPolicies / 15) * 100}%, ${document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'} 100%)`,
                            }}
                        />
                    </div>

                    {/* Tick Labels */}
                    <div className="flex justify-between px-1">
                        {Array.from({ length: 16 }, (_, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center"
                                style={{ width: `${100 / 15.5}%` }}
                            >
                                <div className="w-px h-2 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Calculations Table */}
                <div className="rounded-lg overflow-hidden">
                    <CalculationRow
                        label="Daily Policies"
                        value={dailyPolicies}
                    />

                    <CalculationRow
                        label="Monthly Policies"
                        value={calculations.monthlyPolicies}
                        showFormula={`${dailyPolicies} × 30 days`}
                    />

                    <CalculationRow
                        label="Monthly Commission"
                        value={calculations.monthlyCommission}
                        isMoney
                        showFormula={`${calculations.monthlyPolicies} × $100`}
                    />

                    <CalculationRow
                        label="Future Monthly Residual"
                        value={calculations.futureMonthlyResidual}
                        isMoney
                        showFormula={`${calculations.monthlyPolicies} × $100 ÷ 12`}
                    />

                    <CalculationRow
                        label="Total Monthly Personal Income"
                        value={calculations.totalMonthlyIncome}
                        isMoney
                        isBold
                    />
                </div>
            </div>
        </div>
    );
}

