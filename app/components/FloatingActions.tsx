"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const phoneNumber = "+3365095583";
    const text = encodeURIComponent(
      "Bonjour, j'ai besoin d'une intervention rapide pour un problème de serrurerie."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message sent:", message);
    setMessage("");
    alert("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    setIsChatOpen(false);
  };

  return (
    <>
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Contact WhatsApp"
      >
        <svg
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-24 right-6 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
        aria-label="Chat en ligne"
      >
        {isChatOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>

      {isChatOpen && (
        <Card className="fixed bottom-44 right-6 z-50 w-80 md:w-96 shadow-2xl border-2 border-red-200 animate-fade-in-up">
          <CardHeader className="bg-red-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span>Chat en ligne</span>
              <button onClick={() => setIsChatOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </CardTitle>
            <p className="text-sm text-red-100 mt-1">
              Nous répondons rapidement
            </p>
          </CardHeader>
          <CardContent className="p-4">
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Votre nom"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Décrivez votre problème..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[100px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
