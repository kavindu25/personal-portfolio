// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: "Portfolio site <onboarding@resend.dev>",
//       to: ["kavindudealwis@gmail.com"],
//       subject: "Hello world",
//       react: (
//         <>
//           <p>Email Body</p>
//         </>
//       ),
//       //   react: EmailTemplate({ firstName: 'John' }),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
}
