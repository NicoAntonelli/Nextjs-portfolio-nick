# Next.js Portfolio Nick

Animated personal portfolio project because... why not? doing it sounded really fun

[![Deployment Pipeline](https://github.com/NicoAntonelli/Nextjs-portfolio-nick/actions/workflows/pipeline.yml/badge.svg)](https://github.com/NicoAntonelli/Nextjs-portfolio-nick/actions/workflows/pipeline.yml)

## Getting started

1. Clone this repository
2. Run `npm install` in the project directory
3. Run `npm run dev` in the project directory
4. Go to `localhost:3000` (by default, or other custom port) in any browser

> To make API requests, the API base path is `localhost:3000/api/`

> To load new custom data, go to `localhost:3000/studio` (admin only) or configure a new `Sanity.io` project instance of your own (and replace with your `PROJECT_ID` in the `.env` file)

## Deploy

-   Sanity deploy --> run `npm run deploy:sanity` in the project directory

## Technologies used

| Name                            | What adds to the portfolio?                              |
| :------------------------------ | :------------------------------------------------------- |
| :pushpin: TypeScript            | Programming language that builds on JavaScript           |
| :pushpin: Node.js               | JavaScript runtime. Without node, nothing would work     |
| :pushpin: Next.js               | Fullstack framework for React.js                         |
| :pushpin: React.js              | In the bottom, we all now the components are in React.js |
| :art: Tailwind CSS + PostCSS    | Simple stylization                                       |
| :film_projector: Framer Motion  | Cool animations                                          |
| :paintbrush: Prettier           | Nice code formatter                                      |
| :triangular_ruler: ESLint       | Complete linter with strict rules                        |
| :desktop_computer: Sanity.io    | Simple backend CMS                                       |
| :test_tube: Cypress             | Component-level and E2E testing                          |
| :package: TurboPack & WebPack   | JavaScript bundlers (Turbo is in beta, so... only dev)   |
| :page_with_curl: GitHub Actions | CI/CD automation                                         |
| :rocket: Deploy in Vercel       | Deployment is very important!                            |

> I use WebPack bundler for _Production_ & TurboPack bundler only for _Dev_ because Turbo is still on **Beta** in _Next.js 13_. In the future I hope to use Turbo for both Dev and Production.

## Other libraries & plugins

| Name                                 | What adds to the portfolio?                                 |
| :----------------------------------- | :---------------------------------------------------------- |
| :framed_picture: Heroicons           | Icons Tailwind-compatible                                   |
| :earth_americas: React-Social-Icons  | Icons that renders detecting the base URL                   |
| :bust_in_silhouette: React-Hook-Form | Easy-to-use fast forms                                      |
| :keyboard: React-Simple-Typewriter   | Typewriter effect with Hooks                                |
| :computer_mouse: Tailwind-Scrollbar  | Nice scrollbar plugin for Tailwind                          |
| :jigsaw: Autoprefixer                | PostCSS plugin that automatically adds CSS browser-prefixes |

## Author

| Name              | GitHub Account                             |
| :---------------- | :----------------------------------------- |
| Nicolás Antonelli | :octocat: https://github.com/NicoAntonelli |
