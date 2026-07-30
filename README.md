# The Maypole Project Instructions
This is the simple site I built to house my family's occasionally sent update newsletter. I originally built it using Gridsome, then Nuxt 3, and now Nuxt 4.

It uses:
- [Nuxt 4](https://nuxt.com)
- [Content v3](https://content.nuxt.com)
- [Mailchimp](https://mailchimp.com) (signup form placeholder)
- Markdown files

---

## Setup the site locally
Make sure to install the dependencies:

1. Clone the site's repository
2. In your terminal app, install the site's dependancies. (I use npm as my package manger to manage dependancies.):
```bash
npm install
```
3. In your terminal app, start the development server
```bash
npm run dev
```
This will on start the local development server at: http://localhost:3000

4. Navigate to the local development server in your web browser and confirm the site is running locally.

## Dealing with the production/live site
The website is hosted at [Netlify](https://netlify.com) and has continuous integration setup with the Github repository. Anytime a change is pushed to a branch, the site is rebuilt and published on Netlify.

If the change is pushed to the `master` branch, it will immediate go live to the internet at themaypole.siefertfamily.com. If the change is pushed to any other branch, the change will create a Deploy Preview in Netlify where the changes can be reviewed. The changes on that branch must be merged into the `master` branch for them to be built and to go live on the production site (themaypole.siefertfamily.com).

## Nuxt production build options
Nuxt has a these options for building or previewing the site.

Locally preview production build:

```bash
npm run preview
```

Build the application for production:

```bash
npm run build
```
