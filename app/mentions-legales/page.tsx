import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

                <div className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
                    <section>
                        <h2 className="text-xl font-semibold mb-3">1. Édition du site</h2>
                        <p className="text-gray-600">
                            Le présent site, accessible à l'URL www.dclik-serrure.com (le « Site »), est édité par :
                        </p>
                        <p className="text-gray-600 mt-2">
                            <strong>D'Clik Serrure</strong><br />
                            Adresse : Paris et Île-de-France<br />
                            Email : contact@dclik-serrure.com<br />
                            Téléphone : 01 85 44 01 31
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">2. Hébergement</h2>
                        <p className="text-gray-600">
                            Le Site est hébergé par Vercel Inc., situé 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">3. Propriété intellectuelle</h2>
                        <p className="text-gray-600">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">4. Données personnelles</h2>
                        <p className="text-gray-600">
                            Le traitement de vos données à caractère personnel est régi par notre Politique de Confidentialité, disponible depuis la section "Politique de confidentialité" du site, conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
