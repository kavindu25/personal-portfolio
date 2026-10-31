import { profile } from "../data/profile";
import { ContactForm } from "./ContactForm";

type Option = {
  title: string;
  value: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

const options: Option[] = [
  { title: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { title: "LinkedIn", value: "Connect with me", href: profile.links.linkedin, external: true },
  { title: "GitHub", value: "Browse my code", href: profile.links.github, external: true },
  { title: "CV", value: "Download as PDF", href: profile.cvPath, download: true },
];

// One deep teal card: who to contact and how on the left, the form on the right.
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="frame section-gap">
      <div
        className="on-field mx-auto grid max-w-[78rem] bg-field text-field-ink lg:grid-cols-[46%_54%]"
        data-reveal
      >
        <div className="flex flex-col justify-between gap-12 p-6 sm:p-10 lg:p-12">
          <div>
            <h2 id="contact-title" className="text-title">
              Contact
            </h2>
            <p className="mt-6 max-w-[30ch] text-lead font-semibold">
              Hiring an engineer who can own a product from interface to deployment? Tell me about the team and what you need to ship.
            </p>
          </div>

          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-1">
            {profile.workDetails.map((item) => (
              <div key={item.label}>
                <dt className="text-small text-field-soft">{item.label}</dt>
                <dd className="mt-0.5 font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {options.map((option) => (
              <li key={option.title}>
                <a
                  href={option.href}
                  {...(option.external
                    ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${option.title}: ${option.value} (opens in a new tab)` }
                    : {})}
                  {...(option.download ? { download: true } : {})}
                  className="group flex min-h-11 flex-col justify-center"
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <span className="link">{option.title}</span>
                    <span className="arrow" aria-hidden="true">
                      {option.download ? "↓" : "→"}
                    </span>
                  </span>
                  <span className="break-words text-small text-field-soft">{option.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 pt-0 sm:p-10 sm:pt-0 lg:p-12 lg:pl-0">
          <h3 className="text-lead">Send a message</h3>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
