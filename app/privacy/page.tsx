import type { Metadata } from "next";
import {
  A,
  Address,
  EFFECTIVE_DATE,
  Email,
  LegalPage,
  Note,
  OL,
  P,
  Section,
  Title,
  UL,
} from "../legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vibely - Music Visualizer.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage>
      <Title>Privacy Policy</Title>
      <P>Vibely - Music Visualizer (“Vibely”, “the app”)</P>
      <Note>Effective date: {EFFECTIVE_DATE}</Note>
      <P>
        This policy explains what happens to your data when you use the Vibely
        app for iPhone and iPad, the website tryvibely.app, our support, and our
        free Vibely Pro promotion. It is written to be complete: if something is
        not described here, Vibely does not do it.
      </P>

      <Section>1. Who is responsible</Section>
      <P>
        The controller under the EU General Data Protection Regulation (GDPR)
        is:
      </P>
      <P>
        <Address />
        <br />
        Email: <Email />
      </P>
      <P>
        Vibely is made by one independent developer. There is no company behind
        it, no advertising partner and no data broker. We have not appointed a
        data protection officer, because the law does not require one for us.
      </P>

      <Section>2. Short version</Section>
      <OL>
        <li>
          <strong>No account.</strong> You never sign up, log in or give us your
          name to use the app.
        </li>
        <li>
          <strong>Your work stays on your device.</strong> Songs, videos,
          photos, text, projects and exported videos are stored only on your
          iPhone or iPad. We never upload them and we cannot see them.
        </li>
        <li>
          <strong>No ads, no tracking, no selling.</strong> The app contains no
          advertising, no analytics and no tracking across other apps or
          websites. We do not sell or rent your data to anyone.
        </li>
        <li>
          <strong>Crash reports only.</strong> If the app crashes, a technical
          crash report is sent so we can fix the bug. You can turn this off in
          Settings.
        </li>
        <li>
          <strong>Payments go through Apple.</strong> We never see your name,
          email address or payment details when you buy Vibely Pro.
        </li>
      </OL>

      <Section>3. Data that stays on your device</Section>
      <P>Everything you create in Vibely is processed on your device only:</P>
      <UL>
        <li>songs and audio you import, including audio taken from videos,</li>
        <li>
          background videos and images you pick from your photo library, the
          Files app or Unsplash,
        </li>
        <li>text you type, layers, effects and all project settings,</li>
        <li>videos you export.</li>
      </UL>
      <P>
        These files are stored inside the app’s private storage on your
        device. They are not sent to us or to anyone else. You can delete them
        at any time in Settings {">"} Storage, or all at once by deleting the
        app. Please note that we have no copy: if you delete the app or lose
        your device, your projects cannot be restored by us.
      </P>
      <P>
        If your device is set to back up to iCloud or a computer, Apple’s
        backup may include the app’s storage. This backup is controlled by
        you and Apple, under Apple’s privacy policy, not by us.
      </P>

      <Section>4. Permissions the app asks for</Section>
      <P>
        <strong>Photo library.</strong> Vibely asks for access to your photo
        library so you can pick videos and images for your projects and save
        exported videos. You can allow access to all photos, to selected photos
        only, or deny it, and change this at any time in the iOS Settings app.
        Photos are read on your device only.
      </P>
      <P>
        <strong>Files.</strong> When you import a song or a template through the
        Files app, the app only reads the file you pick.
      </P>
      <P>
        Vibely does <strong>not</strong> access your microphone, camera,
        contacts, location, calendar, health data or music library, and does not
        ask for permission to track you (App Tracking Transparency). The app
        does not read the advertising identifier (IDFA).
      </P>

      <Section>5. Crash reports (Firebase Crashlytics)</Section>
      <P>
        <strong>What.</strong> When the app crashes, it sends a crash report to
        Firebase Crashlytics, a service of Google Ireland Limited, Gordon House,
        Barrow Street, Dublin 4, Ireland (“Google”). A report
        contains:
      </P>
      <UL>
        <li>
          the technical crash details (which part of the app code failed and
          why),
        </li>
        <li>device model, iOS version, app version and build number,</li>
        <li>
          technical state at the time of the crash (for example free memory and
          storage, device orientation, whether the app was in the foreground),
        </li>
        <li>
          a random installation ID created by Crashlytics, so repeated crashes
          on the same device can be counted as one affected user,
        </li>
        <li>
          your IP address, which is technically needed to send the report over
          the internet.
        </li>
      </UL>
      <P>
        A crash report never contains your songs, videos, photos, text, projects
        or any content you created. It does not contain your name, email address
        or Apple ID. We cannot use it to find out who you are.
      </P>
      <P>
        <strong>Why.</strong> To find and fix bugs that make the app crash.
      </P>
      <P>
        <strong>Legal basis.</strong> Our legitimate interest in providing an
        app that works reliably (Article 6(1)(f) GDPR). Storing and reading the
        installation ID on your device is strictly necessary for the crash
        reporting you can control in the app (Section 25(2) no. 2 of the German
        Telecommunications Digital Services Data Protection Act, TDDDG).
      </P>
      <P>
        <strong>Your choice.</strong> You can turn crash reports off at any time
        in the app under Projects menu {">"} Settings {">"} Privacy {">"} Share
        Crash Reports. When you turn it off, reports that were not sent yet are
        deleted and no further reports are sent. You can also object at any time
        (see Section 13).
      </P>
      <P>
        <strong>How long.</strong> Google keeps crash reports for 90 days, then
        deletes them.
      </P>
      <P>
        <strong>Processor.</strong> Google processes this data on our behalf
        under the Google Cloud and Firebase data processing terms. More
        information: <A href="https://firebase.google.com/support/privacy" />
      </P>

      <Section>6. Purchases (Vibely Pro)</Section>
      <P>
        Vibely Pro subscriptions and the lifetime purchase are sold and
        processed by Apple through the App Store. Apple handles payment,
        billing, refunds and your Apple ID. We never receive your name, email
        address, Apple ID, address or payment details.
      </P>
      <P>
        To unlock Pro features, the app asks Apple’s StoreKit system on
        your device which purchases your Apple ID owns. This check happens
        between your device and Apple. From Apple, we only receive anonymous,
        aggregated sales reports (for example how many subscriptions were sold
        in a country), which do not identify you.
      </P>
      <P>
        The same applies to offer codes: you redeem them in the App Store, and
        Apple does not tell us who redeemed which code.
      </P>
      <P>
        Apple’s privacy policy applies to purchases:{" "}
        <A href="https://www.apple.com/legal/privacy/" />
      </P>

      <Section>7. Unsplash photos</Section>
      <P>
        In the editor you can search Unsplash for free photos. When you do this,
        your device connects directly to Unsplash Inc. (Canada). Unsplash
        receives your search terms, the photos you view and download, your IP
        address and basic technical information about your device and app, as
        needed to show and deliver the photos. Unsplash’s API rules also
        require that a download is reported to Unsplash so the photographer is
        credited. Downloaded photos are saved on your device only.
      </P>
      <P>
        We do not receive your searches or your IP address from Unsplash. Canada
        has an adequacy decision from the European Commission for commercial
        organizations. Unsplash’s privacy policy applies:{" "}
        <A href="https://unsplash.com/privacy" />
      </P>

      <Section>8. Sharing, templates and other apps</Section>
      <P>
        <strong>Exported videos.</strong> You decide where your videos go. When
        you save a video to Photos or the Files app, or share it through the iOS
        share sheet, the video goes where you send it. We receive nothing.
      </P>
      <P>
        <strong>TikTok, Instagram and YouTube buttons.</strong> On the share
        screen, these buttons only open the other app on your device. We do not
        send your video or any data to these services. Once you post there,
        their privacy policies apply.
      </P>
      <P>
        <strong>Caption.</strong> Tapping the caption copies a fixed text
        (“Made with Vibely ...”) to your clipboard. The app does not
        read your clipboard.
      </P>
      <P>
        <strong>Share Template.</strong> When you share a project as a template,
        the app creates a template file on your device. It contains the project
        title, text you typed into text layers, the layout and all settings.
        Your own song, your background video and your own images are left out
        and replaced with built-in placeholders. You choose who receives the
        file. Templates you import are read on your device only.
      </P>

      <Section>9. Website and in-app links</Section>
      <P>
        <strong>Hosting.</strong> The website tryvibely.app, including the
        Privacy, Terms and Support pages that the app opens, is hosted by GitHub
        Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
        Francisco, CA 94107, USA. When you open a page, your browser sends
        technical data, including your IP address, the page requested, the date
        and time and your browser type, to GitHub. GitHub uses this data to
        deliver the website and to keep it secure, and may store it in log files
        for security purposes. Legal basis: our legitimate interest in a secure,
        working website (Article 6(1)(f) GDPR). GitHub’s privacy statement:{" "}
        <A href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" />
      </P>
      <P>
        <strong>No cookies, no analytics.</strong> The website sets no cookies,
        uses no analytics or tracking tools, and loads no fonts or scripts from
        other servers.
      </P>
      <P>
        <strong>Support link.</strong> When you open Support from the app, the
        link includes your app version and iOS version (for example
        “app_version=4.0.0&os_version=26.1”), so we can see which
        version you are asking about if you contact us. This contains no
        personal information.
      </P>
      <P>
        <strong>Other links.</strong> The app links to our pages on Discord,
        TikTok, Instagram, YouTube and X, to the App Store, and to websites
        named in the Credits screen. When you follow such a link, you leave
        Vibely and the other service’s privacy policy applies. If you
        interact with our social media accounts, the platform processes your
        data under its own responsibility. For the statistics that Instagram
        provides to us about our account, we are jointly responsible with Meta
        Platforms Ireland Limited; the main points of this arrangement are here:{" "}
        <A href="https://www.facebook.com/legal/terms/information_about_page_insights_data" />
      </P>

      <Section>10. Contacting support</Section>
      <P>
        If you email us, we receive your email address, your name if you include
        it, your message and anything you attach. We use this only to answer you
        and to fix the problem you report.
      </P>
      <P>
        Legal basis: answering your request (Article 6(1)(b) GDPR, where it is
        about a contract, otherwise Article 6(1)(f) GDPR, our legitimate
        interest in answering). We use Gmail, a service of Google, to receive
        and send email.
      </P>
      <P>
        We delete support conversations when they are no longer needed, and at
        the latest two years after the conversation ends, unless we must keep
        them longer by law.
      </P>

      <Section>11. Free Vibely Pro promotion</Section>
      <P>
        From time to time we give Vibely Pro offer codes to people who follow
        our TikTok account and join our Discord server. Taking part is voluntary
        and only happens if you fill in the sign-up form.
      </P>
      <P>
        <strong>What we collect.</strong> Through the sign-up form (a Google
        Form): your email address, full name, TikTok username, Discord username
        and how you found out about the offer, plus the time you submitted it.
      </P>
      <P>
        <strong>What we do with it.</strong>
      </P>
      <OL>
        <li>
          We check whether your TikTok username is in the follower list of our
          own TikTok account. We download this list from TikTok’s data
          export for our account.
        </li>
        <li>
          We check whether your Discord username is a member of our Discord
          server, using Discord’s interface for server owners.
        </li>
        <li>
          We email you either an offer code or a message telling you which step
          is still missing.
        </li>
        <li>
          We record in the sign-up sheet whether we sent you a code, so that
          each person receives only one code.
        </li>
      </OL>
      <P>
        A script prepares these checks, and the developer reviews and approves
        every email before it is sent. No decision is made solely by automated
        means.
      </P>
      <P>
        <strong>Legal basis.</strong> Handling the promotion you signed up for
        (Article 6(1)(b) GDPR) and our legitimate interest in preventing people
        from claiming more than one code (Article 6(1)(f) GDPR).
      </P>
      <P>
        <strong>Recipients.</strong> Google (Google Forms, Google Sheets and
        Gmail), Discord Inc. (USA) for the membership check, and TikTok for the
        follower list of our own account.
      </P>
      <P>
        <strong>How long.</strong> We keep your submission until 12 months after
        the promotion ends, so we can prevent duplicate claims, then we delete
        it.
      </P>
      <P>
        <strong>Age.</strong> You must be at least 16 years old to take part.
      </P>

      <Section>12. International transfers</Section>
      <P>
        Some of the providers above are based in the USA or send data there
        (Google LLC, GitHub, Inc., Discord Inc.). Where a provider is certified
        under the EU-U.S. Data Privacy Framework, the transfer is based on the
        European Commission’s adequacy decision (Article 45 GDPR).
        Otherwise, it is based on the European Commission’s Standard
        Contractual Clauses (Article 46(2)(c) GDPR). Unsplash (Canada) is
        covered by an adequacy decision.
      </P>

      <Section>13. Your rights</Section>
      <P>Under the GDPR you have the right to:</P>
      <UL>
        <li>
          <strong>access</strong> the data we hold about you (Article 15),
        </li>
        <li>
          <strong>correct</strong> incorrect data (Article 16),
        </li>
        <li>
          <strong>delete</strong> your data (Article 17),
        </li>
        <li>
          <strong>restrict</strong> processing (Article 18),
        </li>
        <li>
          <strong>data portability</strong> (Article 20),
        </li>
        <li>
          <strong>withdraw consent</strong> at any time, with effect for the
          future, where processing is based on consent (Article 7(3)).
        </li>
      </UL>
      <P>
        <strong>Right to object (Article 21 GDPR).</strong> Where we process
        your data based on our legitimate interest (Article 6(1)(f) GDPR), you
        can object at any time for reasons arising from your particular
        situation. For crash reports, simply turn off Share Crash Reports in the
        app’s Settings.
      </P>
      <P>
        To use your rights, email <Email />. Please note: because crash reports
        and App Store data do not identify you, we usually cannot link them to
        you (Article 11 GDPR). Data that exists only on your device is fully in
        your control and can be deleted by you at any time.
      </P>
      <P>
        You also have the right to lodge a complaint with a data protection
        supervisory authority, in particular in the EU member state where you
        live or work, or where you think a violation took place (Article 77
        GDPR).
      </P>

      <Section>14. What Vibely does not do</Section>
      <UL>
        <li>no advertising and no ad networks,</li>
        <li>no analytics or usage tracking in the app or on the website,</li>
        <li>
          no tracking across apps or websites and no advertising identifier,
        </li>
        <li>no selling, renting or trading of personal data,</li>
        <li>
          no profiling and no automated decisions with legal or similarly
          significant effect,
        </li>
        <li>
          no user accounts, no cloud storage of your content, no access to your
          contacts, location, microphone or camera.
        </li>
      </UL>

      <Section>15. Children</Section>
      <P>
        The app does not require any personal data, so it can be used by anyone
        the App Store age rating allows. We do not knowingly collect personal
        data from children. The promotion in Section 11 is only for people aged
        16 and over. If you believe a child has sent us personal data, please
        contact us and we will delete it.
      </P>

      <Section>16. Security</Section>
      <P>
        Data sent to Crashlytics, Unsplash and our website is encrypted in
        transit (HTTPS). Access to the promotion sheet and support email is
        limited to the developer. Content in the app stays on your device and is
        protected by your device’s own security, such as your passcode and
        iOS data protection.
      </P>

      <Section>17. Changes to this policy</Section>
      <P>
        We update this policy when Vibely changes how it handles data, for
        example if we add a new feature or service provider. The effective date
        at the top always shows the current version. If a change affects data we
        already hold, we will tell you in the app or on the website before it
        takes effect.
      </P>

      <Section>18. Contact</Section>
      <P>
        <Address />
        <br />
        <Email />
      </P>
    </LegalPage>
  );
}
