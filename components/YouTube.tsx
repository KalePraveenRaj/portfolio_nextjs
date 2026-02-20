"use client";

import { useState } from "react";

export default function YouTube() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const videos = [
    { id: "ceV2V5lqm9M", title: "DeepSnap using DeepSeek API" },
    { id: "yMWbYOioDU4", title: "Printing Array Elements" },
    { id: "1qLxrQ-_g5w", title: "Hello World!" },
    { id: "qIEhHPTd0MY", title: "My Portfolio Website" },
    { id: "IYlzet7yPis", title: "FloatingIcon" },
    { id: "Egz6MOXl9jw", title: "Password Manager" },
    { id: "tlI58Wz49Kk", title: "CRUD Operations Backend" },
    { id: "KTeIRGrUhJM", title: "Portfolio Website" },
    { id: "zmNNIMT5Y4Q", title: "Todo App (Flutter)" },
    { id: "6Vo6J1f1kaw", title: "Snakes & Ladders (Flutter)" },
    { id: "huUBZg-rqmo", title: "Expense Tracker (Flutter)" },
  ];

  return (
    <section
      id="youtube"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          YouTube Videos
        </h2>

        <p className="text-gray-300 text-center mb-16">
          Coding tutorials and project showcases.
        </p>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <button
              key={video.id}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setActiveVideo(video.id)}
              className="group relative w-full text-left rounded-xl bg-[rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
            >
              {/* Shadow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    "0 12px 30px rgba(34,211,238,0.25), 0 12px 30px rgba(168,85,247,0.2), 0 12px 30px rgba(236,72,153,0.18)",
                }}
              />

              <div className="relative">
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">

                  {/* Thumbnail */}
                  {hoveredVideo !== video.id && (
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Hover Preview */}
                  {hoveredVideo === video.id && (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                      title={video.title}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                </div>

                <div className="p-4 text-center">
                  <p className="text-gray-300 font-medium transition-colors group-hover:text-white">
                    {video.title}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="https://www.youtube.com/@kalepraveenraj"
            target="_blank"
            rel="noreferrer"
            className="relative overflow-hidden px-6 py-3 font-semibold rounded-lg bg-red-600 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(239,68,68,0.4)]"
          >
            View More on YouTube
          </a>

          <a
            href="https://github.com/KalePraveenRaj"
            target="_blank"
            rel="noreferrer"
            className="relative overflow-hidden px-6 py-3 font-semibold rounded-lg border border-gray-400 text-white transition-all duration-300 hover:-translate-y-1 hover:text-black hover:bg-white"
          >
            GitHub Repo
          </a>

        </div>

        {/* Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 text-white text-2xl opacity-80 hover:opacity-100"
              >
                ✕
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube player"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
