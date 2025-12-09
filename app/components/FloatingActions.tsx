"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "+330650095583";
    const text = encodeURIComponent(
      `Nom: ${name}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    setMessage("");
    setName("");
    setIsChatOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
        aria-label="Chat WhatsApp"
      >
        {isChatOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>

      {isChatOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 md:w-96 shadow-2xl border-2 border-[#25D366] animate-fade-in-up">
          <CardHeader className="bg-[#25D366] text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span>Chat WhatsApp</span>
              <button onClick={() => setIsChatOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </CardTitle>
            <p className="text-sm text-green-100 mt-1">
              Réponse rapide via WhatsApp
            </p>
          </CardHeader>
          <CardContent className="p-4">
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Votre nom (optionnel)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-gray-300 focus:border-[#25D366] focus:ring-[#25D366]"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Votre message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-gray-300 focus:border-[#25D366] focus:ring-[#25D366] min-h-[100px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Envoyer sur WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
