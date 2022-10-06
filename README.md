# Welcome to Astrocom

Astromcom is a comic book reader and local download application, which works in tandem with a flask backend and MongoDB, which I know is inherently non-sensical as this is supposed to be a standalone app. Now in order to get this app functioning, I should have migrated the storage of the downloaded pages to the front-end and allowed for a cache of chapter information to be stored in the device itself. I will device a better solution later, for now, this is what it is. Thanks for trying it out for the two people who will actually go through the bother.

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```
/
├── public/
|   ├── assets/
|   ├── library/
|   ├── style/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
|   |   ├── Adder.vue
|   |   ├── Jumper.vue
|   |   ├── Placeholder.vue
|   |   ├── Skipper.vue
|   |   ├── Tagger.vue
|   |   ├── Toggler.vue
|   |   └── Viewer.vue
│   ├── fragments/
|   |   ├── Backton.astro
|   |   ├── Chapton.astro
|   |   ├── Fabton.astro
|   |   ├── Imagcon.astro
|   |   ├── Snackon.astro
|   |   └── Texicon.astro
│   ├── graphql/
|   |   ├── client.ts
|   |   ├── mutations.ts
|   |   └── queries.ts
│   ├── icons/
|   |   ├── FaIcon.vue
|   |   └── faicons.json
│   ├── layouts/
|   |   └── Base.astro
│   ├── models/
|   |   ├── author.ts
|   |   ├── comic.ts
|   |   ├── genre.ts
|   |   └── publisher.ts
│   ├── pages/
|   |   ├── comics/
|   |   |   ├── [comic]-[chapter].astro
|   |   |   └── [comic].astro
|   |   ├── [error].astro
|   |   ├── add.astro
|   |   ├── gallery.astro
│   |   └── index.astro
|   └── scss/
├── .gitignore
├── .npmrc
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json

```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `npm install`   | Installs dependencies                       |
| `npm start`     | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
