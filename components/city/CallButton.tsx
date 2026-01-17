"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CallButtonProps {
    phone: string;
    label: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

export default function CallButton({ phone, label, className = "", variant = "default", size = "default" }: CallButtonProps) {
    const handlePhoneClick = () => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "conversion", {
                send_to: "AW-17860666652/PHONE_CONVERSION_LABEL", // Use specific label if available
            });
        }
    };

    return (
        <a href={`tel:${phone}`} onClick={handlePhoneClick}>
            <Button
                variant={variant}
                size={size}
                className={className}
            >
                <Phone className="h-6 w-6 mr-3" />
                {label}
            </Button>
        </a>
    );
}
