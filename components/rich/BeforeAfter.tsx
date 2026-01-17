interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    title: string;
    description: string;
}

export default function BeforeAfter({ beforeImage, afterImage, title, description }: BeforeAfterProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
                    <p className="text-xl text-gray-600">La preuve par l'image : qualité et propreté garanties</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group">
                                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold z-10">AVANT</div>
                                <img src={beforeImage} alt="Avant intervention" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group border-4 border-green-500">
                                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold z-10">APRÈS</div>
                                <img src={afterImage} alt="Après intervention" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
