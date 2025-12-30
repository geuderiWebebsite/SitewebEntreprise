import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PolitiqueConfidentialite() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

                <div className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
                    <section>
                        <h2 className="text-xl font-semibold mb-3">1. Collecte des données</h2>
                        <p className="text-gray-600">
                            Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez notre formulaire de contact : nom, numéro de téléphone, adresse email, et adresse d'intervention.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">2. Utilisation des données</h2>
                        <p className="text-gray-600">
                            Les données collectées sont utilisées uniquement pour :
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                            <li>Répondre à vos demandes d'intervention ou de devis</li>
                            <li>Vous contacter dans le cadre de nos services</li>
                            <li>Améliorer notre service client</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">3. Protection des données</h2>
                        <p className="text-gray-600">
                            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">4. Vos droits</h2>
                        <p className="text-gray-600">
                            Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, vous pouvez nous contacter à : contact@dclik-serrure.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
                        <p className="text-gray-600">
                            Ce site peut utiliser des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies si vous le souhaitez.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
