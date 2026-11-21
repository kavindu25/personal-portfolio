import { Atkinson_Hyperlegible_Next, Funnel_Display } from "next/font/google";

// The only place typefaces are chosen. To swap one, change the import and the
// call below; the CSS variable names stay the same, so nothing else moves.
//
//   heading: the name, h1-h4 and anything using `font-heading`
//   text:    body copy, the request trace, dates, nav, buttons, form fields
const heading = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-heading-face",
  display: "swap",
});

const text = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-text-face",
  display: "swap",
});

export const fontVariables = `${heading.variable} ${text.variable}`;
