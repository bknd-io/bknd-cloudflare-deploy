# bknd: Quick deploy to Cloudflare Workers

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/bknd-io/bknd-cloudflare-deploy)

https://github.com/user-attachments/assets/7ccef128-cfaf-49b8-9800-fd88e7177075

A minimal cloudflare workers boilerplate to deploy a fully functional instance to Cloudflare Workers, using Cloudflare-only infrastructure:

-  Worker as compute
-  [D1](https://developers.cloudflare.com/d1/) as the database
-  [R2](https://developers.cloudflare.com/r2/) bucket as storage
-  [`waitUntil`](https://developers.cloudflare.com/workers/runtime-apis/context/#waituntil) for async event handlers

## Project Structure

Inside of your bknd project, you'll see the following folders and files:

```text
/
├── src/
│   └── index.ts
├── package.json
└── wrangler.jsonc
```

To update `bknd` config, check `src/index.ts`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                                   |
| :---------------- | :------------------------------------------------------- |
| `npm install`     | Installs dependencies                                    |
| `npm run dev`     | Starts local dev server with `watch` at `localhost:8787` |
| `npm run typegen` | Generates wrangler types                                 |

## Deployment

You can either use the `Deploy to Cloudflare` button above (automatically configured), or deploy manually.

If deploying manually, make sure the `database_id` in the `wrangler.jsonc` configuration is correctly pointing to your database. If you haven't created one yet, run the following command:

```sh
npx wrangler d1 create my-database
```

## Want to learn more?

Feel free to check [our documentation](https://docs.bknd.io/integration/cloudflare) or jump into our [Discord server](https://discord.gg/952SFk8Tb8).
