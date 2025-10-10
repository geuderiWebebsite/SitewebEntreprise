'use client';

import { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import PromoBanners from '../components/PromoBanners';

interface SecurityTestResult {
  score: number;
  level: 'excellent' | 'bon' | 'moyen' | 'faible';
  recommendations: string[];
  message: string;
}

export default function TestSecuritePage() {
  const [formData, setFormData] = useState({
    lockType: '',
    lockAge: '',
    doorType: '',
    location: '',
    hasBeenBrokenInto: ''
  });

  const [result, setResult] = useState<SecurityTestResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateSecurity = (): SecurityTestResult => {
    let score = 100;
    const recommendations: string[] = [];

    if (formData.lockType === 'simple') {
      score -= 30;
      recommendations.push('Remplacez votre serrure simple par une serrure multipoints certifiée A2P.');
    } else if (formData.lockType === 'monopoint') {
      score -= 15;
      recommendations.push('Envisagez une mise à niveau vers une serrure multipoints 3 ou 5 points.');
    }

    if (formData.lockAge === 'plus-10-ans') {
      score -= 25;
      recommendations.push('Votre serrure est obsolète. Un remplacement est fortement recommandé.');
    } else if (formData.lockAge === '5-10-ans') {
      score -= 15;
      recommendations.push('Faites vérifier votre serrure par un professionnel.');
    }

    if (formData.doorType === 'bois-simple') {
      score -= 20;
      recommendations.push('Renforcez votre porte avec un blindage ou installez une porte blindée.');
    } else if (formData.doorType === 'composite') {
      score -= 10;
      recommendations.push('Vérifiez que vos gonds et encadrements sont renforcés.');
    }

    if (formData.hasBeenBrokenInto === 'oui') {
      score -= 30;
      recommendations.push('URGENT: Changement immédiat de serrure et audit sécurité complet recommandés.');
    }

    if (score > 80) {
      return {
        score,
        level: 'excellent',
        recommendations: recommendations.length > 0 ? recommendations : ['Votre sécurité est excellente. Continuez l\'entretien régulier.'],
        message: 'Excellent niveau de sécurité'
      };
    } else if (score > 60) {
      return {
        score,
        level: 'bon',
        recommendations,
        message: 'Bon niveau de sécurité avec quelques améliorations possibles'
      };
    } else if (score > 40) {
      return {
        score,
        level: 'moyen',
        recommendations,
        message: 'Niveau de sécurité moyen - Des améliorations sont recommandées'
      };
    } else {
      return {
        score,
        level: 'faible',
        recommendations,
        message: 'Niveau de sécurité faible - Action urgente requise'
      };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const testResult = calculateSecurity();
      setResult(testResult);
      setIsSubmitting(false);
    }, 1500);
  };

  const getScoreColor = (level: string) => {
    switch(level) {
      case 'excellent': return 'text-green-600';
      case 'bon': return 'text-emerald-600';
      case 'moyen': return 'text-orange-500';
      case 'faible': return 'text-red-600';
      default: return 'text-charcoal';
    }
  };

  const getScoreIcon = (level: string) => {
    switch(level) {
      case 'excellent': return <CheckCircle className="h-16 w-16 text-green-600" />;
      case 'bon': return <CheckCircle className="h-16 w-16 text-emerald-600" />;
      case 'moyen': return <AlertTriangle className="h-16 w-16 text-orange-500" />;
      case 'faible': return <XCircle className="h-16 w-16 text-red-600" />;
      default: return <Shield className="h-16 w-16 text-charcoal" />;
    }
  };

  return (
    <div className="min-h-screen bg-elegant-50">
      <Header />
      <PromoBanners />

      <main className="pt-32 pb-20">
        <section
          className="relative bg-cover bg-center mb-16"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5691604/pexels-photo-5691604.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-overlay-lighter"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <Shield className="h-20 w-20 text-red-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
                Test de Sécurité Serrurier
              </h1>
              <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
                Évaluez gratuitement le niveau de sécurité de votre domicile en quelques minutes.
                Recevez des recommandations personnalisées de nos experts.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!result ? (
            <Card className="shadow-2xl border-2 border-elegant-300">
              <CardHeader className="bg-elegant-100">
                <CardTitle className="text-3xl text-charcoal">Évaluez votre sécurité</CardTitle>
                <CardDescription className="text-lg text-charcoal-light">
                  Répondez à ces quelques questions pour obtenir une évaluation complète
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="lockType" className="text-lg font-semibold text-charcoal">
                      Type de serrure actuelle
                    </Label>
                    <Select
                      value={formData.lockType}
                      onValueChange={(value) => setFormData({ ...formData, lockType: value })}
                    >
                      <SelectTrigger className="w-full text-lg">
                        <SelectValue placeholder="Sélectionnez votre type de serrure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simple">Serrure simple</SelectItem>
                        <SelectItem value="monopoint">Serrure monopoint</SelectItem>
                        <SelectItem value="multipoints-3">Serrure multipoints 3 points</SelectItem>
                        <SelectItem value="multipoints-5">Serrure multipoints 5 points</SelectItem>
                        <SelectItem value="multipoints-7">Serrure multipoints 7 points</SelectItem>
                        <SelectItem value="a2p">Serrure certifiée A2P</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="lockAge" className="text-lg font-semibold text-charcoal">
                      Ancienneté de la serrure
                    </Label>
                    <Select
                      value={formData.lockAge}
                      onValueChange={(value) => setFormData({ ...formData, lockAge: value })}
                    >
                      <SelectTrigger className="w-full text-lg">
                        <SelectValue placeholder="Depuis quand avez-vous cette serrure ?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moins-1-an">Moins d'1 an</SelectItem>
                        <SelectItem value="1-5-ans">1 à 5 ans</SelectItem>
                        <SelectItem value="5-10-ans">5 à 10 ans</SelectItem>
                        <SelectItem value="plus-10-ans">Plus de 10 ans</SelectItem>
                        <SelectItem value="ne-sais-pas">Je ne sais pas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="doorType" className="text-lg font-semibold text-charcoal">
                      Type de porte
                    </Label>
                    <Select
                      value={formData.doorType}
                      onValueChange={(value) => setFormData({ ...formData, doorType: value })}
                    >
                      <SelectTrigger className="w-full text-lg">
                        <SelectValue placeholder="Quel type de porte avez-vous ?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bois-simple">Porte en bois simple</SelectItem>
                        <SelectItem value="bois-renforce">Porte en bois renforcée</SelectItem>
                        <SelectItem value="composite">Porte composite</SelectItem>
                        <SelectItem value="blindee">Porte blindée</SelectItem>
                        <SelectItem value="metal">Porte métallique</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="location" className="text-lg font-semibold text-charcoal">
                      Localisation
                    </Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                    >
                      <SelectTrigger className="w-full text-lg">
                        <SelectValue placeholder="Où se situe votre logement ?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rez-de-chaussee">Rez-de-chaussée</SelectItem>
                        <SelectItem value="etage-bas">Étage bas (1-2)</SelectItem>
                        <SelectItem value="etage-moyen">Étage moyen (3-5)</SelectItem>
                        <SelectItem value="etage-eleve">Étage élevé (6+)</SelectItem>
                        <SelectItem value="maison">Maison individuelle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="hasBeenBrokenInto" className="text-lg font-semibold text-charcoal">
                      Avez-vous déjà été victime d'une tentative d'effraction ?
                    </Label>
                    <Select
                      value={formData.hasBeenBrokenInto}
                      onValueChange={(value) => setFormData({ ...formData, hasBeenBrokenInto: value })}
                    >
                      <SelectTrigger className="w-full text-lg">
                        <SelectValue placeholder="Sélectionnez une réponse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="non">Non, jamais</SelectItem>
                        <SelectItem value="oui">Oui</SelectItem>
                        <SelectItem value="tentative">Oui, tentative seulement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={!formData.lockType || !formData.lockAge || !formData.doorType || !formData.location || !formData.hasBeenBrokenInto || isSubmitting}
                    className="w-full bg-charcoal hover:bg-charcoal-dark text-white text-xl py-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      'Analyse en cours...'
                    ) : (
                      <>
                        Lancer le Test de Sécurité
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-2xl border-2 border-elegant-300">
              <CardHeader className={`${result.level === 'excellent' ? 'bg-green-50' : result.level === 'bon' ? 'bg-emerald-50' : result.level === 'moyen' ? 'bg-orange-50' : 'bg-red-50'}`}>
                <div className="flex flex-col items-center">
                  {getScoreIcon(result.level)}
                  <CardTitle className={`text-4xl mt-4 ${getScoreColor(result.level)}`}>
                    Score: {result.score}/100
                  </CardTitle>
                  <CardDescription className="text-xl text-charcoal mt-2">
                    {result.message}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Recommandations Personnalisées</h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-3 p-4 bg-elegant-100 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-lg text-charcoal">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-warm-100 p-6 rounded-xl border-2 border-warm-300">
                  <h4 className="text-xl font-bold text-charcoal mb-3">Besoin d'un audit professionnel ?</h4>
                  <p className="text-charcoal-light mb-4">
                    Nos experts certifiés peuvent réaliser un audit complet de votre sécurité et vous proposer des solutions adaptées à votre situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white flex-1"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Demander un Audit Gratuit
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-charcoal text-charcoal hover:bg-elegant-100 flex-1"
                      onClick={() => setResult(null)}
                    >
                      Refaire le Test
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
