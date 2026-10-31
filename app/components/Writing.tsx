import { profile } from "../data/profile";
import { getMediumPosts } from "../lib/medium";
import { WritingPlate } from "./WritingPlate";

export async function Writing() {
  const posts = await getMediumPosts(profile.mediumHandle);

  return (
    <section id="writing" aria-labelledby="writing-title" className="frame section-gap">
      {posts.length > 0 ? (
        <WritingPlate posts={posts} profileUrl={profile.links.medium} />
      ) : (
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="writing-title" className="text-title">
            Writing
          </h2>
          <p className="max-w-[44ch] text-lead">
            Guides and notes from things I have built. The latest posts could not be loaded right now.{" "}
            <a href={profile.links.medium} target="_blank" rel="noopener noreferrer" className="link font-semibold text-accent">
              Read them on Medium
            </a>
            .
          </p>
        </div>
      )}
    </section>
  );
}
