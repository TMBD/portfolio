import React from "react";
import Button from "../atoms/Button";

export default function ContactSection() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-6xl font-display font-bold mb-8">
          Let's work together
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? I'd love to hear about it. Let's discuss how
          we can bring your ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="primary">
            <span className="text-lg">Start a project</span>
          </Button>
          <Button variant="secondary">
            <span className="text-lg">Send me an email</span>
          </Button>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
            <a
              href="mailto:jucelito@example.com"
              className="text-lg hover:text-orange-400 transition-colors duration-300"
            >
              jucelito@example.com
            </a>
            <span className="hidden sm:block text-slate-600">|</span>
            <a
              href="tel:+1234567890"
              className="text-lg hover:text-orange-400 transition-colors duration-300"
            >
              +55 (11) 986565114
            </a>
            <span className="hidden sm:block text-slate-600">|</span>
            <a
              href="https://linkedin.com/in/jucelito"
              className="text-lg hover:text-orange-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
