# hedwig

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── feature-x/
│   │   └── ComponentName.astro
│   │   └── AnotherComponentName.astro 
│   ├── shared/
│   │   └── Card.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/feature-x/`, (replace "x" with any component name that you want)  but that's where we like to put any Astro/React/Vue/Svelte/Preact components or something related to the feature.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Tools used

- [Tailwind CSS (Utility-First CSS Framework)](https://tailwindcss.com/)
- [DaisyUI (Tailwind CSS Components)](https://daisyui.com/)
- [astro-i18n](https://github.com/yassinedoghri/astro-i18next)

## Mockup

TBD

## Code of Conduct
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## License

The project is published under the [MIT license](/LICENSE.md).
Feel free to clone and modify repo as you want, but don't forget to add a reference to authors :)
