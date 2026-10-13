import type { Metadata } from "next";
import {
  Address,
  Email,
  LEGAL_NAME,
  LegalPage,
  P,
  Section,
  Title,
} from "../legal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum (Legal Notice) for Vibely - Music Visualizer.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <LegalPage>
      <Title>Impressum (Legal Notice)</Title>
      <P>
        Information according to Section 5 of the German Digital Services Act
        (DDG)
      </P>
      <P>
        <Address />
      </P>

      <Section>Contact</Section>
      <P>
        Email: <Email />
      </P>

      <Section>
        Responsible for content according to Section 18(2) of the German
        Interstate Media Treaty (MStV)
      </Section>
      <P>{LEGAL_NAME}, address as above</P>

      <Section>Consumer dispute resolution</Section>
      <P>
        We are not willing or obliged to take part in dispute resolution
        proceedings before a consumer arbitration board.
      </P>
    </LegalPage>
  );
}
