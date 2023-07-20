# 🧊 [COSMO-CUBE](https://cosmo-cube.vercel.app)

![screenshort](https://github.com/advanced-astro/cosmo-cube/blob/main/src/assets/images/og-image.png)

a tiny, almost-unopinionated [Astro](https://astro.build/) starter for your next blog, documentation, personal/marketing website, and more.

it comes with the [CUBE CSS](https://cube.fyi/) file structure, a methodology for managing stylesheets efficiently no matter the size of the project.

the project is mostly barebones, the goal isn't to provide a batteries-included template, just an easy starter kit and stylesheets to copy/paste from.

most styles are for demo purposes and to explain the underlying philosophy: "Be the browser's mentor, not its micromanager" (see [buildexcellentwebsit.es](https://buildexcellentwebsit.es)).

## features

- **[CUBE CSS](https://cube.fyi/) implementation**: take a look at the docs, they are concise and explain way better than i would
- **fluid and responsive**: it looks great no matter the device size
  - [Every Layout](https://every-layout.dev/) examples for layout elements
  - [Utopia](https://utopia.fyi/) for fluid `clamp()`-based font sizes and spacing
- **lightweight**: 💯 [lighthouse score](https://pagespeed.web.dev/analysis/https-cosmo-cube-vercel-app/hyl36ga17o) across the board — not surprising considering the size of the project, but worth mentioning
- **dark-mode ready**: implement your own theme switcher if you're into that sort of thing, all you have to do is toggle the `data-theme` attribute on the body
- **SEO** ready: basic SEO meta-tags are set-up, with `sitemap`s automatically generated at build time

## installation

### clone this repo

```sh
git clone https://github.com/advanced-astro/cosmo-cube.git
```

### instal dependencies

```sh
cd cosmo-cube
pnpm i
```

### spin up local dev server

```sh
pnpm dev
```

### build to `./dist/`

```sh
pnpm build
```

### preview production build

```sh
pnpm preview
```

### ...or use the template directly ➡️ "Use this template" > "Create a new repository"

## contributions are welcome! 👋

it's great if this kit can be helpful to some folks out there, i'm open to feedback and greatly appreciate contributions, feel free to chip in for fixes, suggestions, or features! let me know if you have improvement ideas.

---

## credits

greater minds than mine are behind the choices in this kit, i'd like to mention them for the inspiration and learning provided:

### **[Astro core & docs team](https://docs.astro.build/en/getting-started/)**

along with contributors, for a great onboarding experience and a wholesome community.

### **[Andy Bell](https://andy-bell.co.uk/)**

Andy is a great source of inspiration for building robust UI working with the browser, rather than against it. but also for reminding me that CSS is an extremely powerful tool as it is. CUBE CSS really clicked to me as it brought pure "traditional" CSS to the component-first world of today.

- [Every Layout](https://every-layout.dev/)
- [CUBE CSS](https://cube.fyi/)

### **[Heydon Pickering](https://heydonworks.com/)**

Heydon provides amazing insights and spicy takes on how to build for the web, from an inclusive and accessible perspective.

- [Inclusive Components](https://inclusive-components.design/)
- [Webbed Briefs](https://briefs.video/)
- [Every Layout](https://every-layout.dev/)

### **[Lene Saile](https://www.lenesaile.com/en/)**

Lene made an amazing [Eleventy](https://www.11ty.dev/) starter based on CUBE CSS which is way more mature and complete than this one. it comes batteries included to build a full-blown blog with 11y in a breeze, i'd definitely recommend checking it out.

her starter greatly inspired me to build one for Astro (it will be a separate one from this minimal one).

- [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent)

### **[William Hermozo](https://williamhzo.me/)**

William made [Astro-Cube](https://astro-cube.vercel.app/) a tiny, almost-unopinionated Astro starter for your next blog, documentation, personal/marketing website, and more.

his work formed the foundation for me to fork/create an opinionated and supercharged Astro starter template.
