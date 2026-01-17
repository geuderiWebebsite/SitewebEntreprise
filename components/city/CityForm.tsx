"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CityForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "conversion", {
                send_to: "AW-17860666652/aWmNCKCyuucbEJzK0MRC", // Using the ID from earlier tasks
                value: 1.0,
                currency: "EUR",
            });
        }
        console.log("Formulaire soumis:", formData);
        alert("Votre demande a bien été prise en compte. Un technicien va vous rappeler.");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white"
            />
            <Input
                type="tel"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-white"
            />
            <Input
                placeholder="Votre adresse"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="bg-white"
            />
            <Textarea
                placeholder="Décrivez votre problème (ex: porte claquée, serrure cassée...)"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-white"
            />
            <Button
                type="submit"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
            >
                Obtenir mon devis gratuit
            </Button>
        </form>
    );
}
