import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';
import { staggerContainer, itemFadeUp } from '../utils/motion';

export const ComingSoon = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20 flex flex-col items-center justify-center">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl mx-auto px-6"
      >
        <motion.div
          variants={itemFadeUp}
          className="w-20 h-20 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center mx-auto mb-8 shadow-sm"
        >
          <Clock size={36} />
        </motion.div>

        <motion.span
          variants={itemFadeUp}
          className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
        >
          COMING SOON
        </motion.span>

        <motion.h1
          variants={itemFadeUp}
          className="text-4xl md:text-5xl font-serif text-akhil-charcoal mb-6"
        >
          We're Working on This
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="text-akhil-gray text-sm md:text-base font-light leading-relaxed mb-10"
        >
          This section of the Akhil Promoters website is under development. In the meantime, explore our flagship projects or reach out to our Vijayawada office directly.
        </motion.p>

        <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-4 bg-akhil-red hover:bg-akhil-red-hover text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md hover:scale-[1.02]"
          >
            Explore Projects
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02]"
          >
            <MessageSquare size={16} /> WhatsApp Us
          </a>
          <Link
            to="/"
            className="px-8 py-4 bg-white hover:bg-akhil-border text-akhil-charcoal text-xs font-bold tracking-widest uppercase rounded-xl border border-akhil-border transition-all hover:scale-[1.02]"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
