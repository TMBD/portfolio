import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface BlogPost {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    heroImage?: string;
  };
}

interface BlogPageProps {
  posts: BlogPost[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header currentPath="/blog" />

      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-6xl font-bold mb-6">Blog</h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Pensamentos, tutoriais e insights sobre desenvolvimento web,
            tendências tecnológicas e minha jornada como desenvolvedor.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-slate-900 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <a href={`/blog/${post.id}/`} className="block">
                  {post.data.heroImage && (
                    <div
                      className={`aspect-video overflow-hidden ${
                        index === 0 ? "aspect-[2/1]" : ""
                      }`}
                    >
                      <img
                        src={post.data.heroImage}
                        alt={post.data.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="text-orange-500 text-sm font-medium mb-2">
                      {formatDate(post.data.pubDate)}
                    </div>
                    <h2
                      className={`text-white font-bold mb-3 hover:text-orange-500 transition-colors ${
                        index === 0 ? "text-3xl" : "text-xl"
                      }`}
                    >
                      {post.data.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {post.data.description}
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Nenhum post encontrado.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
