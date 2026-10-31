import Image from "next/image";
import { profile } from "../data/profile";
import lake from "../../public/images/place/bolgoda-lake-sri-lanka.jpg";

const credit = {
  title: "Bolgoda Lake, Sri Lanka",
  creator: "Kaveen Weerarathna",
  page: "https://commons.wikimedia.org/wiki/File:Bolgoda_Lake,_Sri_Lanka.jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

// The last photograph is the footer: the lake south of Colombo, near where I
// work from, with the name across its foot.
export function Footer() {
  return (
    <footer className="relative flex min-h-[88svh] flex-col justify-between overflow-hidden bg-[#0f1a22] text-[#f6f9fa] lg:min-h-svh">
      <div className="footer-photo absolute inset-0" aria-hidden="true">
        <Image src={lake} alt="" fill sizes="100vw" placeholder="blur" />
      </div>

      <div className="frame relative flex flex-wrap justify-between gap-x-12 gap-y-6 pt-[calc(var(--m)+0.5rem)]">
        <p className="flex flex-col gap-1 sm:flex-row sm:gap-8">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            LinkedIn
          </a>
          <a href="#top" className="link">
            Back to top
          </a>
        </p>
        <p className="flex flex-col gap-1 sm:items-end">
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
          <span>{profile.location}</span>
        </p>
      </div>

      <div className="frame relative pb-[calc(var(--m)+0.5rem)]">
        <p
          className="footer-name font-heading text-display text-display-fit font-[650] leading-[0.9] tracking-[-0.03em] lg:whitespace-nowrap"
          aria-hidden="true"
        >
          Kavindu de Alwis
        </p>
        <div className="mt-6 flex flex-wrap justify-between gap-x-8 gap-y-2 text-small">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            Photograph: {credit.title}, by {credit.creator},{" "}
            <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="link">
              {credit.license}
            </a>
            , via{" "}
            <a href={credit.page} target="_blank" rel="noopener noreferrer" className="link">
              Wikimedia Commons
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
