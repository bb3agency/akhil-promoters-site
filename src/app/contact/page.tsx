import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="flex flex-col w-full bg-pure-white min-h-screen pt-24">
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-border-gray">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit uppercase text-charcoal max-w-4xl">
          Get in Touch
        </h1>
        <p className="mt-6 text-soft-gray font-inter max-w-2xl text-sm md:text-base leading-relaxed">
          We are here to assist you. Reach out to our expert team for any inquiries, project details, or to schedule a site visit.
        </p>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-24 bg-pure-white flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Contact Information */}
        <div className="w-full lg:w-1/3 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-outfit uppercase text-lg text-charcoal">Corporate Office</h3>
            <p className="font-inter text-sm text-soft-gray leading-relaxed">
              123 Luxury Lane, Business District<br/>
              Metropolis City, 10001
            </p>
            <Link href="#" className="text-xs font-bold font-inter uppercase tracking-widest text-primary-red hover:text-charcoal transition-colors mt-2">
              View on Google Maps →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-outfit uppercase text-lg text-charcoal">Contact Details</h3>
            <div className="font-inter text-sm text-soft-gray flex flex-col gap-2">
              <p>Email: <a href="mailto:info@akhilpromoters.com" className="hover:text-charcoal transition-colors">info@akhilpromoters.com</a></p>
              <p>Phone: <a href="tel:+911234567890" className="hover:text-charcoal transition-colors">+91 123 456 7890</a></p>
              <p>WhatsApp: <a href="#" className="hover:text-charcoal transition-colors">+91 987 654 3210</a></p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-outfit uppercase text-lg text-charcoal">Business Hours</h3>
            <div className="font-inter text-sm text-soft-gray flex flex-col gap-2">
              <p>Monday - Friday: 9:00 AM to 6:00 PM</p>
              <p>Saturday: 10:00 AM to 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="w-full lg:w-2/3 bg-warm-white border border-border-gray p-8 md:p-12">
          <h2 className="text-2xl font-outfit uppercase text-charcoal mb-8">Send an Enquiry</h2>
          
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Full Name *</label>
                <input type="text" className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Email Address *</label>
                <input type="email" className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Phone Number *</label>
                <input type="tel" className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Interested Project</label>
                <select className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter appearance-none rounded-none">
                  <option>Akhil Heights</option>
                  <option>The Residency</option>
                  <option>Eco Retreat</option>
                  <option>General Enquiry</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Message</label>
              <textarea rows={4} className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter resize-none"></textarea>
            </div>

            <button type="submit" className="bg-charcoal text-pure-white px-8 py-4 font-outfit uppercase tracking-widest text-sm hover:bg-primary-red transition-colors mt-4 w-fit">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
