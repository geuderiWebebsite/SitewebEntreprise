import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import { generateSEOMetadata } from "@/app/seo/seoConfig";
import { BookOpen, Shield, Wrench, AlertTriangle, ChevronRight, Search } from "lucide-react";
import { BLOG_POSTS } from "../blog/data";

export const metadata: Metadata = generateSEOMetadata({
    title: "Conseils Serrurerie & Sécurité - Le Guide de l'Expert | D'Clik Serrure",
    description: "Retrouvez tous nos conseils de pro pour sécuriser votre domicile. Guides pratiques, tutos entretien serrure, et astuces anti-cambriolage.",
    canonical: "https://www.dclik-serrure.com/conseils",
    keywords: ["conseils serrurier", "guide sécurité maison", "entretien serrure", "astuces anti cambriolage"],
});

export default function ConseilsPage() {
    const featuredPost = BLOG_POSTS[0];
    const guides = BLOG_POSTS.slice(1, 4);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <BookOpen className="w-16 h-16 text-sky-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Conseils d'Expert
                        <br />
                        <span className="text-sky-400 text-3xl md:text-5xl">Sécurité & Serrurerie</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Parce que votre sécurité ne devrait pas avoir de secret pour vous.
                        Apprenez à protéger votre domicile avec nos guides pratiques.
                    </p>

                    <div className="max-w-xl mx-auto relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Rechercher un conseil (ex: porte blindée, clé perdue...)"
                            className="w-full py-4 pl-12 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-sky-500"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 px-4 -mt-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-sky-500 hover:transform hover:-translate-y-1 transition-all">
                        <Shield className="w-10 h-10 text-sky-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Sécurité Maison</h3>
                        <p className="text-gray-600 text-sm mb-4">Guides pour renforcer vos portes et fenêtres contre les effractions.</p>
                        <Link href="/blog" className="text-sky-600 font-bold flex items-center text-sm">Voir les guides <ChevronRight className="w-4 h-4 ml-1" /></Link>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-orange-500 hover:transform hover:-translate-y-1 transition-all">
                        <Wrench className="w-10 h-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Entretien & Brico</h3>
                        <p className="text-gray-600 text-sm mb-4">Tutos pour graisser vos serrures et petits dépannages faciles.</p>
                        <Link href="/blog" className="text-orange-600 font-bold flex items-center text-sm">Voir les tutos <ChevronRight className="w-4 h-4 ml-1" /></Link>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-red-500 hover:transform hover:-translate-y-1 transition-all">
                        <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Urgence & Arnaques</h3>
                        <p className="text-gray-600 text-sm mb-4">Comment réagir en cas de porte claquée et éviter les arnaques.</p>
                        <Link href="/blog" className="text-red-600 font-bold flex items-center text-sm">Infos cruciales <ChevronRight className="w-4 h-4 ml-1" /></Link>
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-slate-800 border-l-4 border-sky-500 pl-4">Articles à la Une</h2>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Main Feature */}
                        <Link href={`/blog/${featuredPost.id}`} className="group">
                            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 shadow-xl">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    Nouveau
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-600 transition-colors">{featuredPost.title}</h3>
                            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                            <span className="text-sky-600 font-bold flex items-center">Lire l'article <ChevronRight className="w-4 h-4 ml-1" /></span>
                        </Link>

                        {/* Side List */}
                        <div className="space-y-8">
                            {guides.map((post) => (
                                <Link key={post.id} href={`/blog/${post.id}`} className="flex gap-6 group items-start">
                                    <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">{post.title}</h4>
                                        <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="bg-sky-50 rounded-2xl p-8 text-center border border-sky-100">
                        <h3 className="text-2xl font-bold mb-4 text-sky-900">Besoin d'un avis personnalisé ?</h3>
                        <p className="mb-6 text-sky-800">Nos experts répondent à vos questions techniques gratuitement par téléphone.</p>
                        <a href="tel:0185490707" className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-700 transition-colors shadow-lg">
                            Parler à un expert (Gratuit)
                        </a>
                    </div>

                </div>
            </section>

            <Footer />
            <FloatingActions />
        </div>
    );
}
