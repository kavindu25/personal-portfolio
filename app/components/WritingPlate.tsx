"use client";

import Image from "next/image";
import { useState } from "react";
import type { Post } from "../lib/medium";

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

// One post at a time on a square plate. With more than one post, the dates
// above the title switch between them.
export function WritingPlate({ posts, profileUrl }: { posts: Post[]; profileUrl: string }) {
  const [index, setIndex] = useState(0);
  const post = posts[index];
  const meta = [formatDate(post.date), `${post.readingMinutes} min read`].filter(Boolean).join(", ");

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-[clamp(2.5rem,5vw,5rem)]">
      <div className="relative aspect-square w-full overflow-hidden bg-page" data-shutter>
        {post.image ? (
          <Image
            key={post.image}
            src={post.image}
            alt=""
            fill
            loading="eager"
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-between gap-12">
        <div>
          <h2 id="writing-title" className="text-title" data-reveal>
            Writing
          </h2>
          <p className="mt-4 max-w-[40ch] text-lead" data-reveal style={{ "--d": "70ms" } as React.CSSProperties}>
            Guides and notes from things I have built, published on Medium.
          </p>
          {posts.length > 1 ? (
            <div role="group" aria-label="Choose a post" className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {posts.map((p, i) => (
                <button
                  key={p.url}
                  type="button"
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  className={`min-h-11 tabular-nums transition-colors duration-200 ${
                    i === index ? "font-semibold text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {formatDate(p.date) || `Post ${i + 1}`}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <article data-reveal style={{ "--d": "140ms" } as React.CSSProperties}>
          <p className="text-small text-ink-soft">{meta}</p>
          <h3 className="mt-3 max-w-[30ch] text-lead">{post.title}</h3>
          {post.excerpt ? <p className="mt-6 max-w-[48ch]">{post.excerpt}</p> : null}
          {post.tags.length > 0 ? (
            <p className="mt-4 text-small text-ink-soft">
              <span className="sr-only">Topics: </span>
              {post.tags.join(", ")}
            </p>
          ) : null}
        </article>

        <div className="grid gap-2 sm:grid-cols-2">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${post.title} (opens on Medium in a new tab)`}
            className="button min-h-[4.5rem] justify-between bg-ink text-page hover:!bg-accent hover:!text-accent-ink"
          >
            Read the post <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read everything on Medium (opens in a new tab)"
            className="button min-h-[4.5rem] justify-between bg-surface text-ink hover:!bg-surface hover:text-accent"
          >
            Read everything on Medium <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
