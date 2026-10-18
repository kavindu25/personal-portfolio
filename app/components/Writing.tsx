import Image from "next/image";
import { profile } from "../data/profile";
import { getMediumPosts, type Post } from "../lib/medium";
import { Section } from "./Section";

const link = "text-accent underline decoration-from-font underline-offset-4 hover:no-underline";

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function PostCard({ post }: { post: Post }) {
  const meta = [formatDate(post.date), `${post.readingMinutes} min read`].filter(Boolean).join(", ");

  return (
    <article className="group relative flex flex-col gap-5 rounded-md border border-line bg-surface p-4 transition-colors focus-within:border-accent hover:border-accent sm:flex-row sm:gap-6">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-sm border border-line bg-page sm:w-60">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 640px) 240px, 90vw"
            className="object-cover"
          />
        ) : null}
      </div>

      <div className="min-w-0 py-1">
        <p className="text-meta tabular-nums text-ink-soft">{meta}</p>
        <h3 className="mt-1.5 text-lead">
          {/* The stretched ::after makes the whole card one link. */}
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${post.title} (opens on Medium in a new tab)`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {post.title}
          </a>
        </h3>
        {post.excerpt ? <p className="mt-2 text-small text-ink-2">{post.excerpt}</p> : null}
        {post.tags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2 text-meta" aria-label="Topics">
            {post.tags.map((tag) => (
              <li key={tag} className="rounded-sm border border-line px-2 py-0.5 text-ink-soft">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export async function Writing() {
  const posts = await getMediumPosts(profile.mediumHandle);

  return (
    <Section
      id="writing"
      title="Writing"
      intro="Guides and notes from things I have built, published on Medium."
    >
      {posts.length > 0 ? (
        <>
          <div className="space-y-5">
            {posts.map((post) => (
              <PostCard key={post.url} post={post} />
            ))}
          </div>
          <p className="mt-8 text-small font-medium">
            <a href={profile.links.medium} target="_blank" rel="noopener noreferrer" className={link}>
              Read everything on Medium
            </a>
          </p>
        </>
      ) : (
        <p className="max-w-[64ch] text-ink-2">
          The latest posts could not be loaded right now.{" "}
          <a href={profile.links.medium} target="_blank" rel="noopener noreferrer" className={link}>
            Read them on Medium
          </a>
          .
        </p>
      )}
    </Section>
  );
}
