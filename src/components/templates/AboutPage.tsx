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
              About Me
            </h1>
            <p className="text-gray-400 text-2xl leading-relaxed">
              Passionate frontend developer with a love for creating beautiful,
              functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-white text-5xl font-display font-bold">
                My Journey
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                I started my software journey from photography. Through that, I
                learned to love the process of creating from scratch. Since
                then, this has led me to software development as it fulfills my
                love for learning and building things.
              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
                With over 10 years of experience in web development, I've had
                the privilege of working with startups and established
                companies, helping them bring their digital visions to life
                through clean, efficient, and scalable code.
              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly React
                and Vue.js, and I'm passionate about creating responsive,
                accessible, and performant web applications.
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
            Technical Skills
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
                <li className="text-gray-400 text-xl">REST APIs</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-10 rounded-lg">
              <h3 className="text-white text-3xl font-display font-bold mb-8">
                Tools & Others
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-xl">Git & GitHub</li>
                <li className="text-gray-400 text-xl">Docker</li>
                <li className="text-gray-400 text-xl">Webpack</li>
                <li className="text-gray-400 text-xl">Jest & Testing</li>
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
            Experience
          </h2>

          <div className="space-y-16">
            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Senior Frontend Developer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  2021 - Present
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">
                TechCorp Solutions
              </h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Lead frontend development for multiple client projects,
                specializing in React and Vue.js applications. Collaborated with
                design teams to implement pixel-perfect, responsive interfaces
                and improved application performance by 40% through code
                optimization.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Frontend Developer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  2018 - 2021
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">StartupXYZ</h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Developed and maintained the company's main web application
                using React and Redux. Implemented responsive design principles
                and accessibility standards, resulting in a 25% increase in user
                engagement.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Junior Web Developer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  2016 - 2018
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">WebAgency Pro</h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Built custom websites and web applications for various clients
                using HTML, CSS, JavaScript, and PHP. Gained experience in
                project management and client communication while delivering
                high-quality solutions on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
