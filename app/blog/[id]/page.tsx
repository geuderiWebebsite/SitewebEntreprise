import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingActions from "../../components/FloatingActions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "../data";
import { generateArticleSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import Script from "next/script";

interface PageProps {
    params: {
        id: string;
    };
}

// Generate static params for static export if needed
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = BLOG_POSTS.find((p) => p.id === params.id);

    if (!post) {
        return { title: "Article non trouvé" };
    }

    return generateSEOMetadata({
        title: post.title,
        description: post.excerpt,
        publishedTime: post.date,
        author: post.author,
        ogType: "article",
        ogImage: post.image,
        category: post.category,
    });
}

export default function BlogPost({ params }: PageProps) {
    const post = BLOG_POSTS.find((p) => p.id === params.id);

    if (!post) {
        notFound();
    }

    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.excerpt,
        url: `https://www.dclik-serrure.com/blog/${post.id}`,
        image: post.image,
        publishedTime: post.date,
        author: post.author,
        category: post.category,
    });

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Inject Article Schema */}
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <main className="flex-grow pt-32 pb-20">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-4 items-center mb-6">
                            <span className="bg-red-100 text-red-800 px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                                <Tag className="h-4 w-4" />
                                {post.category}
                            </span>
                            <div className="flex items-center text-gray-500 text-sm gap-2">
                                <Clock className="h-4 w-4" />
                                {post.readTime} de lecture
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-gray-500 border-b border-gray-200 pb-8">
                            <div className="flex items-center gap-2">
                                <div className="bg-gray-200 rounded-full p-2">
                                    <User className="h-5 w-5 text-gray-600" />
                                </div>
                                <span className="font-medium text-gray-900">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString("fr-FR", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </time>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 relative aspect-video">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-red max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA Bottom */}
                    <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un serrurier expert ?</h3>
                        <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
                            Nos techniciens sont disponibles 24h/24 pour répondre à toutes vos questions de sécurité.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 border-none">
                                    Demander conseil
                                </Button>
                            </Link>
                            <a href="tel:0185440131">
                                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                    Appeler maintenant
                                </Button>
                            </a>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
}
