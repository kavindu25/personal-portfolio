import Image from "next/image";
import { profile } from "../data/profile";
import { getMediumPosts, type Post } from "../lib/medium";
import { Section } from "./Section";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function PostRow({ post }: { post: Post }) {
  const meta = [formatDate(post.date), `${post.readingMinutes} min read`].filter(Boolean).join(", ");
  return (
    <li className="row">
      <article className="grid gap-x-10 gap-y-5 sm:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[24rem_minmax(0,1fr)]">
        <div className="media" data-reveal>
          {post.image ? (
            <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 24rem, (min-width: 640px) 16rem, 100vw" />
          ) : null}
        </div>
        <div>
          <p className="text-small text-ink-soft" data-reveal style={d(80)}>
            {meta}
          </p>
          <h3 className="mt-2 max-w-[34ch] text-lead font-semibold" data-reveal style={d(120)}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.title} (opens on Medium in a new tab)`}
              className="row-title"
            >
              {post.title}
            </a>
          </h3>
          {post.excerpt ? (
            <p className="mt-3 max-w-[60ch]" data-reveal style={d(180)}>
              {post.excerpt}
            </p>
          ) : null}
          {post.tags.length > 0 ? (
            <p className="mt-4 text-small text-ink-soft" data-reveal style={d(240)}>
              <span className="sr-only">Topics: </span>
              {post.tags.join(", ")}
            </p>
          ) : null}
        </div>
      </article>
    </li>
  );
}

export async function Writing() {
  const posts = await getMediumPosts(profile.mediumHandle);

  // Closes the list: under the latest post's text, the way to all of them.
  const more = (
    <p
      className={`${posts.length > 0 ? "mt-8 sm:pl-[calc(16rem+2.5rem)] lg:pl-[calc(24rem+2.5rem)] " : ""}font-semibold`}
      data-reveal
      style={d(120)}
    >
      <a
        href={profile.links.medium}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read everything on Medium (opens in a new tab)"
        className="link inline-flex min-h-11 items-center gap-2"
      >
        Read everything on Medium <span className="arrow" aria-hidden="true">→</span>
      </a>
    </p>
  );

  return (
    <Section
      id="writing"
      title="Writing"
      intro={
        posts.length > 0
          ? "Guides and notes from things I have built, published on Medium."
          : "Guides and notes from things I have built. The latest posts could not be loaded right now."
      }
    >
      {posts.length > 0 ? (
        <ul className="space-y-[clamp(3.5rem,6vw,5rem)]">
          {posts.map((post) => (
            <PostRow key={post.url} post={post} />
          ))}
        </ul>
      ) : null}
      {more}
    </Section>
  );
}
