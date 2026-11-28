@AGENTS.md

# tryvibely.app

Vibely's website: the landing page, the help center (handbook and articles) and the legal pages. How it deploys, and the rules every site here follows, are in `../CLAUDE.md`. Rules for every agent are in `../../CLAUDE.md`.

1. Help center text is in `content/` (`handbook/`, `articles/`). The work on it is issue #150. Use the words in `../../CONTEXT.md` ("Vibely help").
2. The legal pages are `app/(site)/privacy`, `terms` and `support`, with the shared details in `app/(site)/legal.tsx`. Slouly's site started from the same text, so a legal wording fix here usually belongs there too.
3. `yarn dev` serves it on port 3000 (also `vibely-site` in `.claude/launch.json` at the repo root).
