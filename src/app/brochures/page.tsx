import Link from "next/link";

export default function Brochures() {
  const BROCHURES = [
    { title: "Akhil Heights Master Plan", type: "PDF", size: "4.2 MB", desc: "Detailed floor plans and master layout for Akhil Heights." },
    { title: "The Residency Brochure", type: "PDF", size: "8.1 MB", desc: "Complete project specifications, amenities, and pricing details." },
    { title: "Eco Retreat E-Brochure", type: "PDF", size: "5.5 MB", desc: "Sustainability features and architectural insights for Eco Retreat." },
    { title: "Marina Bay Towers Overview", type: "PDF", size: "6.8 MB", desc: "Waterfront living features, location map, and unit layouts." },
  ];

  return (
    <main className="flex flex-col w-full bg-pure-white min-h-screen pt-24">
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-border-gray">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit uppercase text-charcoal">
          Brochures & Resources
        </h1>
        <p className="mt-6 text-soft-gray font-inter max-w-2xl text-sm md:text-base leading-relaxed">
          Download comprehensive project brochures, floor plans, master plans, and promotional materials.
        </p>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-24 bg-warm-white">
        <div className="max-w-4xl flex flex-col gap-8">
          {BROCHURES.map((brochure, i) => (
            <div key={i} className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 bg-pure-white border border-border-gray hover:border-charcoal transition-colors">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-outfit uppercase text-charcoal">{brochure.title}</h3>
                  <span className="bg-light-stone text-soft-gray text-[10px] font-bold tracking-widest px-2 py-1 uppercase">
                    {brochure.type} • {brochure.size}
                  </span>
                </div>
                <p className="text-sm font-inter text-soft-gray">
                  {brochure.desc}
                </p>
              </div>
              <button className="shrink-0 border border-charcoal text-charcoal px-6 py-3 font-inter text-xs font-bold uppercase tracking-widest hover:bg-charcoal hover:text-pure-white transition-colors duration-300">
                Download
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
