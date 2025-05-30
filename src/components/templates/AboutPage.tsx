import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header currentPath="/about" />

      {/* Hero Section */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-white text-8xl font-display font-bold mb-8">
              Sobre Mim
            </h1>
            <p className="text-gray-400 text-2xl leading-relaxed">
              Desenvolvedor frontend apaixonado por criar experiências digitais
              bonitas, funcionais e centradas no usuário.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-white text-5xl font-display font-bold">
                Minha Jornada
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Comecei minha jornada no desenvolvimento através da fotografia.
                Por meio dela, aprendi a amar o processo de criar do zero. Desde
                então, isso me levou ao desenvolvimento de software, pois
                satisfaz meu amor por aprender e construir coisas.
              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
                Com mais de 10 anos de experiência em desenvolvimento web, tive
                o privilégio de trabalhar com startups e empresas estabelecidas,
                ajudando-as a dar vida às suas visões digitais através de código
                limpo, eficiente e escalável.
              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
                Sou especializado em frameworks JavaScript modernos,
                particularmente React e Vue.js, e sou apaixonado por criar
                aplicações web responsivas, acessíveis e performáticas.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-orange-500 rounded-full absolute -z-10 top-4 left-4"></div>
                <div className="w-96 h-96 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src="/blog-placeholder-about.jpg"
                    alt="Jucelito Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-6xl font-display font-bold text-center mb-20">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-900 p-10 rounded-lg">
              <h3 className="text-white text-3xl font-display font-bold mb-8">
                Frontend
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-xl">React & Next.js</li>
                <li className="text-gray-400 text-xl">Vue.js & Nuxt.js</li>
                <li className="text-gray-400 text-xl">TypeScript</li>
                <li className="text-gray-400 text-xl">Tailwind CSS</li>
                <li className="text-gray-400 text-xl">SASS/SCSS</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-10 rounded-lg">
              <h3 className="text-white text-3xl font-display font-bold mb-8">
                Backend
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-xl">Node.js</li>
                <li className="text-gray-400 text-xl">Express.js</li>
                <li className="text-gray-400 text-xl">MongoDB</li>
                <li className="text-gray-400 text-xl">PostgreSQL</li>
                <li className="text-gray-400 text-xl">APIs REST</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-10 rounded-lg">
              <h3 className="text-white text-3xl font-display font-bold mb-8">
                Ferramentas & Outros
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-xl">Git & GitHub</li>
                <li className="text-gray-400 text-xl">Docker</li>
                <li className="text-gray-400 text-xl">Webpack</li>
                <li className="text-gray-400 text-xl">Jest & Testes</li>
                <li className="text-gray-400 text-xl">Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-6xl font-display font-bold text-center mb-20">
            Experiência
          </h2>

          <div className="space-y-16">
            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Desenvolvedor Frontend Sênior
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  2021 - Presente
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">
                TechCorp Solutions
              </h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Lidero o desenvolvimento frontend para múltiplos projetos de
                clientes, especializando-me em aplicações React e Vue.js.
                Colaboro com equipes de design para implementar interfaces
                pixel-perfect e responsivas, melhorando a performance das
                aplicações em 40% através de otimização de código.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Desenvolvedor Frontend
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  2018 - 2021
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">StartupXYZ</h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Desenvolvi e mantive a aplicação web principal da empresa usando
                React e Redux. Implementei princípios de design responsivo e
                padrões de acessibilidade, resultando em um aumento de 25% no
                engajamento dos usuários.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Desenvolvedor Web Júnior
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  2016 - 2018
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">WebAgency Pro</h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Construí sites e aplicações web personalizadas para diversos
                clientes usando HTML, CSS, JavaScript e PHP. Ganhei experiência
                em gerenciamento de projetos e comunicação com clientes,
                entregando soluções de alta qualidade no prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
