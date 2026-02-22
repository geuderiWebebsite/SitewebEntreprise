"use client";

import { useEffect, useState, useMemo } from "react";
import { Phone, Clock, Shield, Zap, Star, MapPin, Lock, Users, Wrench, Key, AlertTriangle, Home } from "lucide-react";
import Image from "next/image";

interface AggressiveLandingProps {
    city: string;
    phone: string;
    phoneDisplay: string;
}

// ─── City variation system ──────────────────────────────────────────────────
// Each city gets a deterministic variant based on its name.
// This means the same city always looks the same, but different cities vary.

const THEMES = [
    {
        id: "red",
        bg: "from-red-950 via-red-900 to-black",
        accent: "from-orange-400 to-red-500",
        badge: "bg-red-600/30 border-red-500 text-orange-400",
        callBtn: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
        glow: "from-red-600 to-orange-600",
        ticker: "bg-orange-600",
        statBorder1: "border-green-500/30 text-green-400",
        statBorder2: "border-orange-500/30 text-orange-400",
        statBorder3: "border-blue-500/30 text-blue-400",
    },
    {
        id: "blue",
        bg: "from-blue-950 via-blue-900 to-slate-950",
        accent: "from-cyan-400 to-blue-500",
        badge: "bg-blue-600/30 border-blue-500 text-cyan-400",
        callBtn: "from-green-500 to-emerald-700 hover:from-green-600 hover:to-emerald-800",
        glow: "from-blue-600 to-cyan-600",
        ticker: "bg-blue-700",
        statBorder1: "border-cyan-500/30 text-cyan-400",
        statBorder2: "border-blue-500/30 text-blue-400",
        statBorder3: "border-green-500/30 text-green-400",
    },
    {
        id: "purple",
        bg: "from-purple-950 via-purple-900 to-black",
        accent: "from-purple-400 to-pink-500",
        badge: "bg-purple-600/30 border-purple-500 text-pink-400",
        callBtn: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
        glow: "from-purple-600 to-pink-600",
        ticker: "bg-purple-700",
        statBorder1: "border-purple-500/30 text-purple-400",
        statBorder2: "border-pink-500/30 text-pink-400",
        statBorder3: "border-yellow-500/30 text-yellow-400",
    },
    {
        id: "teal",
        bg: "from-teal-950 via-teal-900 to-gray-950",
        accent: "from-teal-400 to-emerald-500",
        badge: "bg-teal-600/30 border-teal-500 text-teal-300",
        callBtn: "from-green-500 to-teal-700 hover:from-green-600 hover:to-teal-800",
        glow: "from-teal-600 to-emerald-600",
        ticker: "bg-teal-700",
        statBorder1: "border-teal-500/30 text-teal-400",
        statBorder2: "border-emerald-500/30 text-emerald-400",
        statBorder3: "border-sky-500/30 text-sky-400",
    },
    {
        id: "amber",
        bg: "from-yellow-950 via-amber-950 to-black",
        accent: "from-yellow-400 to-amber-500",
        badge: "bg-amber-600/30 border-amber-500 text-yellow-300",
        callBtn: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
        glow: "from-amber-600 to-yellow-600",
        ticker: "bg-amber-600",
        statBorder1: "border-yellow-500/30 text-yellow-400",
        statBorder2: "border-amber-500/30 text-amber-400",
        statBorder3: "border-orange-500/30 text-orange-400",
    },
];

const TAGLINES = [
    "Expert local certifié. 15 ans d'expérience. Sans casse garantie.",
    "Artisan qualifié RGE. Devis gratuit. Disponible nuit et jour.",
    "Serrurerie d'urgence. Intervention rapide. Tarifs agréés assurances.",
    "Professionnel de confiance. Matériel certifié A2P. Pas de dépassement.",
    "Dépannage immédiat. Aucun engagement. Satisfaction garantie.",
];

const SERVICES_SETS = [
    [
        { icon: Zap, title: "Porte Claquée", desc: "Ouverture sans casse", color: "text-yellow-400" },
        { icon: Lock, title: "Serrure Cassée", desc: "Réparation immédiate", color: "text-blue-400" },
        { icon: Key, title: "Changement Serrure", desc: "Pose certifiée A2P", color: "text-green-400" },
        { icon: Shield, title: "Porte Blindée", desc: "Installation & réparation", color: "text-red-400" },
    ],
    [
        { icon: Home, title: "Ouverture Porte", desc: "Résidentiel & bureau", color: "text-orange-400" },
        { icon: Wrench, title: "Dépannage Urgent", desc: "Disponible 24h/24", color: "text-cyan-400" },
        { icon: AlertTriangle, title: "Après Effraction", desc: "Sécurisation immédiate", color: "text-red-400" },
        { icon: Star, title: "Serrure A2P", desc: "Anti-intrusion certifiée", color: "text-yellow-400" },
    ],
];

const ACTIVITY_NAMES = [
    ["Sophie M.", "Marc T.", "Karim B.", "Julie R.", "Pierre L."],
    ["Ahmed K.", "Nathalie F.", "Thomas G.", "Leila D.", "François B."],
    ["Isabelle P.", "Sonia C.", "David M.", "Laura S.", "Nicolas H."],
];

const ACTIVITY_ACTIONS = [
    ["a appelé depuis", "a été dépanné à", "a noté 5★ depuis"],
    ["vient d'appeler pour", "a demandé un devis à", "recommande notre service à"],
    ["a été secouru à", "a laissé un avis 5★ à", "a contacté notre serrurier à"],
];

const INTERVENTION_TIMES = ["15 min", "20 min", "30 min", "25 min"];
const DELAY_TEXTS = ["ARRIVÉE", "INTERVENTION", "DÉPANNAGE EN"];

function getVariantIndex(city: string): number {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
        hash = ((hash << 5) - hash) + city.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AggressiveLanding({ city, phone, phoneDisplay }: AggressiveLandingProps) {
    const phoneLink = `tel:${phone.replace(/\s+/g, "")}`;

    // Deterministic variation based on city name
    const variantIdx = useMemo(() => getVariantIndex(city), [city]);
    const theme = THEMES[variantIdx % THEMES.length];
    const tagline = TAGLINES[variantIdx % TAGLINES.length];
    const services = SERVICES_SETS[variantIdx % SERVICES_SETS.length];
    const activityNames = ACTIVITY_NAMES[variantIdx % ACTIVITY_NAMES.length];
    const activityActions = ACTIVITY_ACTIONS[variantIdx % ACTIVITY_ACTIONS.length];
    const interventionTime = INTERVENTION_TIMES[variantIdx % INTERVENTION_TIMES.length];
    const delayText = DELAY_TEXTS[variantIdx % DELAY_TEXTS.length];

    // Base counters vary by city too
    const baseCallsToday = 120 + (variantIdx % 80);
    const baseVisitors = 5 + (variantIdx % 8);
    const baseTimeAgo = 2 + (variantIdx % 8);
    const reviewCount = 450 + (variantIdx % 200);
    const rating = (variantIdx % 3 === 0) ? "4.8" : (variantIdx % 3 === 1) ? "4.9" : "5.0";

    const [callsToday, setCallsToday] = useState(baseCallsToday);
    const [visitorsNow, setVisitorsNow] = useState(baseVisitors);
    const [timeAgo, setTimeAgo] = useState(baseTimeAgo);

    useEffect(() => {
        const callInterval = setInterval(() => {
            setCallsToday(prev => prev + 1);
        }, Math.random() * 20000 + 25000);

        const visitorInterval = setInterval(() => {
            setVisitorsNow(prev => {
                const change = Math.random() > 0.5 ? 1 : -1;
                return Math.max(4, Math.min(16, prev + change));
            });
        }, 8000);

        const timeInterval = setInterval(() => {
            setTimeAgo(prev => prev + 1);
        }, 60000);

        const scrollTimer = setTimeout(() => {
            const btn = document.getElementById("main-call-button");
            if (btn && window.innerHeight < 800) {
                btn.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 3000);

        return () => {
            clearInterval(callInterval);
            clearInterval(visitorInterval);
            clearInterval(timeInterval);
            clearTimeout(scrollTimer);
        };
    }, []);

    return (
        <div className={`min-h-screen bg-gradient-to-br ${theme.bg} text-white font-sans selection:bg-orange-500`}>

            {/* Header with Logo */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-2 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="D'Clik Serrure"
                        width={44}
                        height={44}
                        className="rounded-lg object-contain"
                        priority
                    />
                    <div>
                        <span className="font-black text-lg tracking-tighter italic block leading-none">D'CLIK SERRURE</span>
                        <span className="text-xs text-gray-400">Artisan Qualifié · Agréé Assurances</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center space-x-1.5 text-green-400 font-bold text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                        <span>DISPONIBLE MAINTENANT</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-300">
                        <Users className="w-3 h-3" />
                        <span>{visitorsNow} personnes sur cette page</span>
                    </div>
                </div>
            </header>

            {/* Urgency ticker */}
            <div className={`fixed top-[64px] left-0 right-0 z-40 ${theme.ticker} text-white text-xs font-bold py-1.5 px-4 flex justify-center items-center gap-3`}>
                <span className="animate-pulse">🔴 EN DIRECT</span>
                <span>Dernier appel il y a {timeAgo} min</span>
                <span>•</span>
                <span>{callsToday} appels traités aujourd'hui</span>
                <span>•</span>
                <span>{city} & alentours</span>
            </div>

            {/* Main content */}
            <main className="pt-36 pb-32 px-4 max-w-4xl mx-auto text-center">
                <div className={`inline-block px-4 py-1.5 ${theme.badge} border rounded-full font-bold text-sm mb-6 animate-bounce`}>
                    🚨 SERRURIER DISPONIBLE À {city.toUpperCase()} — {interventionTime}
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                    SERRURIER <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.accent}`}>{city.toUpperCase()}</span>
                    <br />
                    <span className="text-3xl md:text-4xl text-gray-300 font-bold">URGENCE 24H/24 — 7J/7</span>
                </h1>

                <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto italic">
                    &ldquo;{tagline}&rdquo;
                </p>

                {/* Live Stats */}
                <div className="grid grid-cols-3 gap-3 mb-10 max-w-md mx-auto">
                    <div className={`bg-black/40 border ${theme.statBorder1} rounded-xl p-3`}>
                        <div className={`text-2xl font-black ${theme.statBorder1.split(" ")[1]}`}>{callsToday}</div>
                        <div className="text-xs text-gray-400 leading-tight">appels<br />aujourd'hui</div>
                    </div>
                    <div className={`bg-black/40 border ${theme.statBorder2} rounded-xl p-3`}>
                        <div className={`text-2xl font-black ${theme.statBorder2.split(" ")[1]}`}>{interventionTime}</div>
                        <div className="text-xs text-gray-400 leading-tight">délai<br />moyen</div>
                    </div>
                    <div className={`bg-black/40 border ${theme.statBorder3} rounded-xl p-3`}>
                        <div className={`text-2xl font-black ${theme.statBorder3.split(" ")[1]}`}>{rating}★</div>
                        <div className="text-xs text-gray-400 leading-tight">{reviewCount}<br />avis Google</div>
                    </div>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                    {services.map((svc, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm text-center">
                            <svc.icon className={`w-7 h-7 ${svc.color} mx-auto mb-2`} />
                            <div className="font-bold text-sm uppercase leading-tight">{svc.title}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{svc.desc}</div>
                        </div>
                    ))}
                </div>

                {/* CALL BUTTON */}
                <div id="main-call-button" className="relative group mb-8">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${theme.glow} rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
                    <a
                        href={phoneLink}
                        className={`relative block bg-gradient-to-r ${theme.callBtn} text-white py-8 px-6 rounded-[1.8rem] shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ring-4 ring-green-400/20`}
                    >
                        <div className="flex flex-col items-center">
                            <span className="flex items-center text-3xl md:text-5xl font-black mb-2">
                                <Phone className="w-8 h-8 md:w-12 md:h-12 mr-3 animate-call" />
                                APPELER MAINTENANT
                            </span>
                            <span className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white/90">
                                {phoneDisplay}
                            </span>
                            <div className="mt-4 flex items-center space-x-4 text-sm md:text-base font-bold bg-black/20 px-6 py-2 rounded-full">
                                <span>⚡ {delayText} {interventionTime}</span>
                                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                                <span>💰 DÉPLACEMENT GRATUIT</span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Activity feed */}
                <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-left max-w-md mx-auto mb-10">
                    <div className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Activité récente — {city}
                    </div>
                    {activityNames.slice(0, 3).map((name, i) => (
                        <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0 text-sm">
                            <div className={`w-6 h-6 bg-gradient-to-br ${theme.glow} rounded-full flex items-center justify-center text-xs font-black shrink-0`}>
                                {name[0]}
                            </div>
                            <span className="text-gray-300 truncate">
                                <span className="text-white font-bold">{name}</span>{" "}
                                {activityActions[i % activityActions.length]}{" "}
                                <span className="text-orange-300 font-semibold">{city}</span>
                            </span>
                            <span className="text-xs text-gray-500 shrink-0">
                                {i === 0 ? `${timeAgo} min` : i === 1 ? "18 min" : "42 min"}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Proof Points */}
                <div className="grid md:grid-cols-3 gap-4 mb-10 text-left">
                    {[
                        { icon: Clock, title: "7j/7 & 24h/24", desc: "Même dimanches et jours fériés" },
                        { icon: Shield, title: "Agréé Assurances", desc: "Tarifs officiels conventionnés" },
                        { icon: Star, title: `${rating}/5 Avis Google`, desc: `Plus de ${reviewCount} clients satisfaits` }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                            <item.icon className="w-9 h-9 text-orange-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-black text-lg uppercase mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo trust section */}
                <div className="p-6 bg-black/40 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-center gap-6">
                    <Image
                        src="/logo.png"
                        alt="D'Clik Serrure logo"
                        width={80}
                        height={80}
                        className="rounded-xl object-contain shrink-0"
                    />
                    <div className="text-left">
                        <div className="font-black text-xl text-white mb-2">D'Clik Serrure — {city}</div>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {["✓ Artisan Qualifié", "✓ RC Pro", "✓ Devis Gratuit", "✓ Tarifs Agréés"].map(badge => (
                                <span key={badge} className="text-xs bg-green-900/60 border border-green-600/40 text-green-300 px-2 py-0.5 rounded-full">{badge}</span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            Serrurier de confiance à <span className="text-white font-bold">{city}</span> — {interventionTime} de délai moyen. Intervention sur tous les quartiers et alentours.
                        </p>
                    </div>
                </div>
            </main>

            {/* STICKY MOBILE CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:hidden bg-gradient-to-t from-black via-black/90 to-transparent">
                <a
                    href={phoneLink}
                    className={`flex items-center justify-center bg-gradient-to-r ${theme.callBtn} text-white py-5 px-6 rounded-2xl font-black text-xl shadow-3xl animate-pulse ring-4 ring-green-400/30`}
                >
                    <Phone className="w-7 h-7 mr-3 fill-current" />
                    APPELER — {phoneDisplay}
                </a>
            </div>

            <style jsx global>{`
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-tilt { animation: tilt 10s infinite linear; }
        @keyframes call-jump {
          0%, 100% { transform: scale(1) rotate(0); }
          10%, 20% { transform: scale(1.1) rotate(-10deg); }
          30%, 40% { transform: scale(1.1) rotate(10deg); }
          50% { transform: scale(1); }
        }
        .animate-call { animation: call-jump 2s infinite ease-in-out; }
      `}</style>
        </div>
    );
}
