import type { Metadata } from "next";
import {
  A,
  Address,
  EFFECTIVE_DATE,
  Email,
  LEGAL_ADDRESS,
  LEGAL_NAME,
  LegalPage,
  Note,
  OL,
  P,
  Section,
  Title,
} from "../legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Vibely - Music Visualizer.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage>
      <Title>Terms of Use</Title>
      <P>Vibely - Music Visualizer (“Vibely”, “the app”)</P>
      <Note>Effective date: {EFFECTIVE_DATE}</Note>

      <Section>1. Who we are and what these terms cover</Section>
      <P>
        1.1 Vibely is provided by {LEGAL_NAME}, {LEGAL_ADDRESS.join(", ")},{" "}
        <Email /> (“we”, “us”).
      </P>
      <P>
        1.2 These Terms of Use (“Terms”) apply to your use of the
        Vibely app for iPhone and iPad, the website tryvibely.app and our
        promotions. By downloading or using Vibely, you agree to these Terms. If
        you do not agree, please do not use Vibely.
      </P>
      <P>
        1.3 Vibely is licensed to you through Apple’s App Store.
        Apple’s Licensed Application End User License Agreement (
        <A href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" />
        ) applies in addition to these Terms. Where these Terms and Apple’s
        agreement differ, these Terms apply, except for Section 12 (Apple),
        which always applies.
      </P>
      <P>
        1.4 How we handle personal data is explained in our Privacy Policy at{" "}
        <A href="/privacy">https://tryvibely.app/privacy</A>.
      </P>

      <Section>2. What Vibely is</Section>
      <P>
        2.1 Vibely is an app for making music visualizer videos. You combine a
        song, a background and visual layers and effects, and export the result
        as a video file.
      </P>
      <P>
        2.2 Vibely works without an account. Your projects, media and exports
        are stored only on your device. We do not store copies, and we cannot
        restore lost projects. Please keep your own backups of work that matters
        to you.
      </P>
      <P>
        2.3 Vibely offers free features and paid features (“Vibely
        Pro”). The app shows which features, export options and limits
        apply to the free version and to Vibely Pro.
      </P>

      <Section>3. Your license to use Vibely</Section>
      <P>
        3.1 We grant you a non-exclusive, non-transferable, revocable license to
        use Vibely on Apple devices that you own or control, as allowed by the
        App Store Usage Rules.
      </P>
      <P>
        3.2 You may use Vibely to create videos for personal and commercial
        purposes, including posting them on social media and monetized channels,
        as long as you have the rights to the content you put into them (see
        Section 4).
      </P>
      <P>3.3 You may not:</P>
      <OL>
        <li>
          copy, sell, rent, sublicense or distribute the app or parts of it,
        </li>
        <li>
          decompile, reverse engineer or modify the app, except where the law
          expressly allows this (for example Section 69e of the German Copyright
          Act),
        </li>
        <li>
          bypass, disable or interfere with in-app purchases, export limits,
          license checks or other technical protections,
        </li>
        <li>
          extract the app’s built-in content (templates, shaders, effects,
          graphics, fonts, music or photos) and use or distribute it outside of
          videos made with Vibely, or use it to build a competing product,
        </li>
        <li>
          use Vibely in a way that breaks the law or infringes the rights of
          others.
        </li>
      </OL>

      <Section>4. Your content and your responsibility</Section>
      <P>
        4.1 <strong>You own what you make.</strong> Songs, videos, images and
        text you add, and the videos you export, belong to you (or to whoever
        owns them). We do not receive them and claim no rights to them.
      </P>
      <P>
        4.2 <strong>Vibely does not give you rights to music or media.</strong>{" "}
        Vibely is a tool. It does not license any song, video, image or other
        content that you import. Before you publish a video, make sure you have
        all necessary rights and permissions, for example from the owners of the
        music (songwriters, labels and collecting societies), the owners of the
        footage and images, and any people shown in them. Many platforms have
        their own rules for copyrighted music.
      </P>
      <P>
        4.3 You must not use Vibely to create or share content that is illegal,
        infringes copyright, trademarks or personality rights, or is harassing,
        hateful, violent, sexually exploitative or otherwise harmful.
      </P>
      <P>
        4.4 If a third party makes a claim against us because content you
        created with Vibely infringes their rights, and you are at fault, you
        will compensate us for the damage this causes us, including reasonable
        legal costs. You may prove that less damage was caused.
      </P>
      <P>
        4.5 <strong>Shared templates.</strong> When you share a template, you
        are responsible for its contents, including the text in it, and for
        having the right to share it.
      </P>

      <Section>5. Content included in Vibely</Section>
      <P>
        5.1 Vibely includes templates, visual effects, layers, graphics, fonts,
        a demo song and photos (“Included Content”). You may use
        Included Content in videos you create with Vibely, subject to this
        Section.
      </P>
      <P>
        5.2 <strong>Demo song.</strong> The demo song “Think About Me”
        by Yancle is provided by NoCopyrightSounds (NCS) so you can try
        templates. It is not licensed by us. If you publish a video that
        contains it, you must follow NCS’s usage policy (
        <A href="https://ncs.io/usage-policy" />
        ), including the attribution NCS requires, and check whether your use
        (for example in advertising) needs a separate license from NCS.
      </P>
      <P>
        5.3 <strong>Unsplash photos.</strong> Photos from Unsplash are provided
        under the Unsplash License (<A href="https://unsplash.com/license" />
        ). You must follow it, for example by not selling unaltered copies of
        the photos.
      </P>
      <P>
        5.4 <strong>Fonts</strong> are included under the SIL Open Font License
        1.1 or the Apache License 2.0. Using them in your videos is allowed.
      </P>
      <P>
        5.5 Credits and license texts for Included Content and open source
        software are in the app under Projects menu {">"} Legal {">"} Credits.
        Third-party license terms take priority over these Terms for the content
        they cover.
      </P>

      <Section>6. Vibely Pro, subscriptions and purchases</Section>
      <P>
        6.1 <strong>Offers.</strong> Vibely Pro is available as an auto-renewing
        subscription (weekly, monthly or yearly) or as a one-time lifetime
        purchase, as shown in the app. The price, billing period and any free
        trial or introductory offer are shown before you buy. Prices include any
        taxes Apple charges.
      </P>
      <P>
        6.2 <strong>Apple is the seller.</strong> All purchases are made through
        the App Store and are subject to Apple’s Media Services Terms and
        Conditions (
        <A href="https://www.apple.com/legal/internet-services/itunes/" />
        ). Payment is charged to your Apple ID at confirmation of purchase.
      </P>
      <P>
        6.3 <strong>Automatic renewal.</strong> A subscription renews
        automatically for the same period and price unless you turn off
        auto-renew at least 24 hours before the end of the current period. Apple
        charges the renewal within 24 hours before the end of the current
        period. If Apple changes the price of your subscription, Apple tells you
        in advance and, where required by law, asks for your consent.
      </P>
      <P>
        6.4 <strong>Cancelling.</strong> You can manage or cancel a subscription
        at any time in your Apple ID settings (Settings {">"} your name {">"}
        Subscriptions). Deleting the app does not cancel a subscription. After
        you cancel, Vibely Pro stays active until the end of the period you
        already paid for.
      </P>
      <P>
        6.5 <strong>Free trials.</strong> If a free trial is offered and you do
        not cancel at least 24 hours before it ends, it converts into a paid
        subscription. If you buy a subscription during a free trial, the unused
        part of the trial ends.
      </P>
      <P>
        6.6 <strong>Lifetime purchase.</strong> The lifetime purchase unlocks
        Vibely Pro for the Apple ID that bought it, for as long as we offer
        Vibely and it is available on the App Store. It is not a subscription
        and does not renew. You can restore it on your other devices with
        “Restore Purchase”.
      </P>
      <P>
        6.7 <strong>Refunds and right of withdrawal.</strong> Because Apple
        sells Vibely Pro, refunds and any statutory right of withdrawal are
        handled by Apple under its terms. You can request a refund at{" "}
        <A href="https://reportaproblem.apple.com" />. We cannot issue refunds
        ourselves.
      </P>
      <P>
        6.8 <strong>Changes to Vibely Pro.</strong> We continue to develop
        Vibely and may add, change or remove features. We will not remove a core
        feature of Vibely Pro (such as unlimited exports or higher export
        resolution) during a period you have already paid for, unless this is
        needed for legal, security or technical reasons outside our control.
        Your statutory rights for digital products remain unaffected.
      </P>

      <Section>7. Promotions and offer codes</Section>
      <P>
        7.1 We may run promotions, for example giving free Vibely Pro offer
        codes to members of our community. Each promotion has the conditions we
        announce with it.
      </P>
      <P>
        7.2 Offer codes are personal and have no cash value. Unless we say
        otherwise, each person may receive only one code per promotion. Codes
        may not be sold, traded or published.
      </P>
      <P>
        7.3 We may refuse or cancel a code if it was obtained by giving false
        information, by using several identities or accounts, or by breaking the
        promotion’s conditions.
      </P>
      <P>
        7.4 We may end or change a promotion at any time for the future. Codes
        already sent remain valid until they expire, unless Section 7.3 applies.
      </P>
      <P>7.5 You must be at least 16 years old to take part in a promotion.</P>

      <Section>8. Availability and updates</Section>
      <P>
        8.1 We try to keep Vibely working well, but we cannot promise that it is
        always available, free of errors or compatible with every device, iOS
        version, file format or third-party app. Exporting can take time and may
        fail, for example if your device is low on storage.
      </P>
      <P>
        8.2 We may release updates to fix bugs, improve security, add features
        or keep Vibely compatible with new iOS versions. Some updates may be
        needed to keep using the app.
      </P>
      <P>
        8.3 Services from others that Vibely connects to, such as the App Store,
        Unsplash, TikTok, Instagram and YouTube, are provided by those companies
        under their own terms. We are not responsible for them, and they may
        change or stop at any time.
      </P>

      <Section>9. Our liability</Section>
      <P>
        9.1 We are liable without limitation for damage caused intentionally or
        through gross negligence, for injury to life, body or health, under the
        German Product Liability Act, and where we have given a guarantee.
      </P>
      <P>
        9.2 For slight negligence, we are only liable if we breach an essential
        obligation, meaning an obligation that makes the proper use of Vibely
        possible in the first place and on which you may regularly rely. In that
        case our liability is limited to the damage that is typical and
        foreseeable for this kind of contract.
      </P>
      <P>
        9.3 In all other cases, our liability for slight negligence is excluded.
      </P>
      <P>
        9.4 <strong>Loss of data.</strong> If you lose data, we are only liable
        for the effort that would have been needed to restore it if you had made
        regular backups appropriate to its importance.
      </P>
      <P>
        9.5 <strong>Free use.</strong> If you use Vibely without paying, we are
        only liable for intent and gross negligence, and in the cases of Section
        9.1.
      </P>
      <P>
        9.6 These limitations also apply to anyone who works for us or on our
        behalf.
      </P>

      <Section>10. Ending use</Section>
      <P>
        10.1 You can stop using Vibely at any time by deleting the app. Remember
        to cancel any subscription separately (Section 6.4).
      </P>
      <P>
        10.2 We may end your license if you seriously breach these Terms, for
        example under Section 3.3 or Section 4.3. Your statutory rights remain
        unaffected.
      </P>

      <Section>11. Changes to these Terms</Section>
      <P>
        11.1 We may update these Terms, for example when we add features, change
        Vibely Pro or when the law changes. We will publish the new version on{" "}
        <A href="/terms">tryvibely.app/terms</A> and tell you about important
        changes in the app or on the website before they take effect.
      </P>
      <P>
        11.2 Changes do not affect purchases or subscription periods you have
        already paid for to your disadvantage, unless you agree. If you do not
        agree with a change, you can stop using Vibely and cancel your
        subscription.
      </P>

      <Section>12. Apple</Section>
      <P>
        12.1 These Terms are between you and us only, not with Apple. We, not
        Apple, are solely responsible for Vibely and its content.
      </P>
      <P>
        12.2 Apple has no obligation to provide any maintenance or support for
        Vibely.
      </P>
      <P>
        12.3 If Vibely fails to conform to any applicable warranty, you may
        notify Apple, and Apple will refund the purchase price (if any) for
        Vibely to you. To the maximum extent permitted by law, Apple has no
        other warranty obligation for Vibely.
      </P>
      <P>
        12.4 We, not Apple, are responsible for addressing any claims by you or
        any third party relating to Vibely or your possession and use of it,
        including product liability claims, claims that Vibely fails to meet any
        legal or regulatory requirement, and claims under consumer protection,
        privacy or similar laws.
      </P>
      <P>
        12.5 If a third party claims that Vibely or your possession and use of
        it infringes their intellectual property rights, we, not Apple, are
        solely responsible for the investigation, defense, settlement and
        discharge of that claim.
      </P>
      <P>
        12.6 You confirm that you are not located in a country that is subject
        to a U.S. Government embargo or that has been designated by the U.S.
        Government as a “terrorist supporting” country, and that you
        are not listed on any U.S. Government list of prohibited or restricted
        parties.
      </P>
      <P>
        12.7 Apple and its subsidiaries are third-party beneficiaries of these
        Terms. When you accept these Terms, Apple has the right to enforce them
        against you as a third-party beneficiary.
      </P>

      <Section>13. Law and disputes</Section>
      <P>
        13.1 These Terms are governed by the laws of the Federal Republic of
        Germany, excluding the UN Convention on Contracts for the International
        Sale of Goods. If you are a consumer, this choice of law does not take
        away the protection of mandatory laws of the country where you usually
        live.
      </P>
      <P>
        13.2 If you are a merchant, a legal entity under public law or a special
        fund under public law, the exclusive place of jurisdiction is our place
        of residence. If you are a consumer, you may bring claims in the courts
        where you live, and the statutory rules on jurisdiction apply.
      </P>
      <P>
        13.3 We are not willing or obliged to take part in dispute resolution
        proceedings before a consumer arbitration board.
      </P>

      <Section>14. Final provisions</Section>
      <P>
        14.1 If any part of these Terms is invalid or unenforceable, the rest
        remains in effect, and the statutory provisions apply in place of the
        invalid part.
      </P>
      <P>
        14.2 These Terms are written in English. If we provide a translation,
        the English version applies in case of differences, unless mandatory law
        says otherwise.
      </P>

      <Section>15. Contact</Section>
      <P>
        <Address />
        <br />
        <Email />
      </P>
    </LegalPage>
  );
}
