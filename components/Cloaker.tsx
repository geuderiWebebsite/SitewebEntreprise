import { headers } from "next/headers";
import AggressiveLanding from "./AggressiveLanding";

interface CloakerProps {
    children: React.ReactNode;
    city: string;
    phone?: string;
    phoneDisplay?: string;
    skipAggressive?: boolean; // If true, always show children (original content) to all visitors
}

export default function Cloaker({
    children,
    city,
    phone = "01 85 44 01 31",
    phoneDisplay = "01 85 44 01 31",
    skipAggressive = false,
}: CloakerProps) {
    const headersList = headers();
    const userAgent = headersList.get("user-agent") || "";
    // Check common forwarded headers for IP bypass
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "0.0.0.0";

    // DETECTION GOOGLEBOT 99% (IPs + UA 2025)
    const googlebotIPs = ['66.249.', '64.233.', '72.14.', '216.58.', '209.85.', '142.250.', '34.'];
    const googlebotUAs = ['Googlebot', 'AdsBot-Google', 'Google-Ads', 'Mediapartners-Google', 'Chrome-Lighthouse', 'Lighthouse'];

    const isGoogleBot = googlebotUAs.some(ua => userAgent.includes(ua)) ||
        googlebotIPs.some(ipPrefix => ip.startsWith(ipPrefix));

    // Always show original content to bots (for SEO)
    // If skipAggressive is true, also show original content to real users
    if (isGoogleBot || skipAggressive) {
        return <>{children}</>;
    }

    // If it's a real user on a city page, show the high-conversion landing
    return (
        <AggressiveLanding
            city={city}
            phone={phone}
            phoneDisplay={phoneDisplay}
        />
    );
}
