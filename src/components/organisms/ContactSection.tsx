import React from "react";
import Button from "../atoms/Button";

export default function ContactSection() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-6xl font-display font-bold mb-8">
          Vamos trabalhar juntos
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Tem um projeto em mente? Adoraria ouvir sobre ele. Vamos discutir como
          podemos dar vida às suas ideias.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="primary">
            <span className="text-lg">Iniciar um projeto</span>
          </Button>
          <Button variant="secondary">
            <span className="text-lg">Enviar um email</span>
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
              href="tel:+5511999999999"
              className="text-lg hover:text-orange-400 transition-colors duration-300"
            >
              +55 (11) 99999-9999
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
