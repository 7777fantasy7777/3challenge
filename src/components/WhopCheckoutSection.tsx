import { WhopCheckoutEmbed, useCheckoutEmbedControls } from "@whop/checkout/react";
import { useEffect, useState } from "react";

const WhopCheckoutSection = () => {
    const ref = useCheckoutEmbedControls();
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains("dark");
            const newTheme = isDark ? "dark" : "light";
            setTheme(newTheme);
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "theme") {
                checkTheme();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        const interval = setInterval(checkTheme, 500);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="mx-auto mt-16 mb-24 max-w-[700px] px-4 scroll-mt-24" id="checkout">
            <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-xl p-6 md:p-8 text-center space-y-6">
                <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Start Your Free 3-Day Challenge</h3>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Access Clearance AI + Training + Community instantly.
                    </p>
                </div>

                <div className="mt-6 rounded-xl border border-border/50 bg-background/50 p-4 md:p-6 shadow-inner">
                    <WhopCheckoutEmbed
                        key={theme}
                        ref={ref}
                        planId="plan_QOk7Ldw02rMJH"
                        theme={theme}
                        fallback={
                            <div className="py-8 text-muted-foreground">
                                <div className="animate-pulse">Loading checkout…</div>
                            </div>
                        }
                        hidePrice={true}
                    />
                </div>
                <p className="mt-4 text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
                    <span>Secured by Whop</span>
                    <span>•</span>
                    <span>Cancel anytime</span>
                    <span>•</span>
                    <span>You will not be charged today</span>
                </p>
            </div>
        </section>
    )
}

export default WhopCheckoutSection;