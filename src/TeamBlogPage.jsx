import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { blogPosts, tagStyles } from './teamBlogData';


const categoryFilters = ['All', 'Mechanical', 'Electrical', 'Software', 'Vehicle Test'];

export default function TeamBlogPage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const initialCompetition = tabParam === 'robosub2026' ? 'robosub2026' : 'robotx2026';

  const [activeCompetition, setActiveCompetition] = useState(initialCompetition);
  const [activeCategory, setActiveCategory] = useState('All');

  // Keep state in sync with URL search params
  useEffect(() => {
    if (tabParam === 'robosub2026') {
      setActiveCompetition('robosub2026');
    } else {
      setActiveCompetition('robotx2026');
    }
  }, [tabParam]);

  const competitionPosts = blogPosts.filter((post) => post.competition === activeCompetition);
  const visiblePosts = activeCategory === 'All'
    ? competitionPosts
    : competitionPosts.filter((post) => post.tag === activeCategory);

  const competitionLabel = activeCompetition === 'robotx2026' ? 'RobotX 2026' : 'RoboSub 2026';
  const heroBg = activeCompetition === 'robotx2026'
    ? '/competition/images/RobotX_2026.PNG'
    : '/competition/images/robosub2026-bots.jpg';

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-8 md:px-20 pt-32 pb-16 text-center">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url('${heroBg}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

        <div className="relative z-10">
          <p className="text-lg text-gray-300 mb-3">{competitionLabel}</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-6">
            Team Blog
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-gray-300 mb-8">
            Follow our mechanical, electrical, and software progress for {competitionLabel}!
          </p>
        </div>
      </section>

      {/* Main Content & Category Filters */}
      <section className="bg-[#1a1a1a] px-4 sm:px-8 md:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Subsystem Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categoryFilters.map((category) => {
              const isActive = activeCategory === category;
              const categoryStyle = category === 'All'
                ? 'border-white/20 bg-white/10 text-gray-100'
                : tagStyles[category];

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg border px-5 py-2 text-sm sm:text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/20'
                      : `${categoryStyle} hover:bg-white/15 hover:text-white`
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {visiblePosts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col rounded-lg border border-white/15 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 overflow-hidden"
              >
                <div className="h-56 sm:h-60 lg:h-64 shrink-0 bg-zinc-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-orange-300 mb-2">
                        {post.date}
                      </p>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-300">
                        By {post.authors}
                      </p>
                    </div>

                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${tagStyles[post.tag]}`}>
                      {post.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <div className="mt-auto flex justify-center pt-6">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visiblePosts.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No blog posts found for this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
