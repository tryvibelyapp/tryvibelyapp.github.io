@AGENTS.md

# tryvibely.app

Vibely's website: the landing page, the help center (handbook and articles) and the legal pages. Its own git repo inside the ai-kata workspace (`~/dev/aikata/web/`). Rules for every agent are in `../../CLAUDE.md`.

## Working here

1. Next.js with yarn: `yarn dev` serves it on port 3000. To check a change, run `yarn install --frozen-lockfile` and `yarn build`; the rendered pages land in `.next/server/app/*.html`.
2. Commit straight to `main`, no branches. Pushing `main` deploys through GitHub Actions (`.github/workflows/nextjs.yml`), so I push.
3. Help center text is in `content/` (`handbook/`, `articles/`). The work on it is issue #150 in `heyaibek/aikata`. Use the words in `../../CONTEXT.md` ("Vibely help").
4. The legal pages (`app/(site)/privacy`, `terms`, `support`) follow `../../docs/agents/privacy-and-legal.md`: what the app sends off the device, the policy and the App Store privacy label change together. Slouly's site started from the same text, so a legal wording fix here usually belongs there too.
