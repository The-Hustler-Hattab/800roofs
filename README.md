# 800Roofs.com

A mobile-first Astro + TypeScript + Tailwind CSS website. All routes build to static HTML. No backend, forms, database, authentication, analytics, or runtime JavaScript is required.

## Development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` checks Astro/TypeScript and generates `dist/`. The production URL is `https://800roofs.com` with no repository base path by default. GitHub Actions reads the configured Pages base path before building, so the temporary `https://the-hustler-hattab.github.io/800roofs/` URL also loads styles, images, and navigation correctly. After setting the custom domain, rerun the deployment so the base path returns to `/`. Canonicals and sitemap page URLs always target `https://800roofs.com`.

## Confirm business information before launching

Edit `src/config/business.ts`, the single source for Kevin’s phone number and business details.

- Set `phone` to Kevin’s verified international-format number and `phoneDisplay` to its readable version. Header, homepage, footer, mobile CTA, contact page, and JSON-LD will update together. Until then, Call Now links open the clearly labeled contact placeholder; no fake number is dialed.
- The confirmed service area is Pittsburgh, Pennsylvania only. Add only confirmed cities to `cities` and an actual business address to `address` if appropriate for public display. Do not publish private address information accidentally.
- Confirm the proposed repair, replacement, and inspection offerings. Remove unoffered services from the configuration, revise their descriptions and the services page metadata, and remove the awaiting-confirmation notices only after verification. These are distinct educational draft pages, not verified offerings.
- Replace project placeholders in `src/pages/projects.astro` and `src/pages/index.astro` with matching before-and-after photographs, verified descriptions, and permission to publish. Supply dimensions, useful alt text, and lazy loading for below-the-fold photos.
- Add verified biography and business details to the About and Contact pages. There are no invented credentials, reviews, warranties, or service history.

RoofingContractor JSON-LD includes only the supplied name and URL by default. Phone, address, and cities are included when configured; no ratings, credentials, or opening hours are fabricated. Search engines may require more verified fields for enhanced results.

The service-area page lists confirmed cities once in a useful context rather than creating duplicate city landing pages. Each page has a unique title, description, and canonical. The sitemap integration generates `sitemap-index.xml` and `sitemap-0.xml`; `robots.txt` references the index.

## GitHub Pages deployment

1. Create a GitHub repository and push this project to its `main` branch, including `package-lock.json`.
2. In repository **Settings → Pages**, select **GitHub Actions** as the source.
3. The included `.github/workflows/deploy.yml` installs locked dependencies, checks/builds the site, uploads `dist`, and deploys after a push to `main`. It can also run manually.
4. In **Settings → Pages**, set the custom domain to `800roofs.com`. `public/CNAME` also contains that domain and is copied to the build output as requested, but GitHub Actions deployments require the custom domain setting; GitHub does not use CNAME files to configure Actions deployments.
5. At the DNS provider, remove conflicting apex records and configure the apex `A` records to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. For `www`, add a CNAME pointing to `<your-github-username>.github.io` (not the repository URL). Verify the current values against GitHub’s documentation before editing DNS.
6. Consider verifying domain ownership in GitHub account Settings → Pages using the TXT record GitHub supplies. Avoid wildcard DNS records.
7. Wait for DNS and certificate provisioning, then enable **Enforce HTTPS** in repository Pages settings. Confirm both the apex domain and the `www` redirect work.

Official guides: [Custom domain DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https), [Domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

The repository is `The-Hustler-Hattab/800roofs`. Set the custom domain and configure DNS for the production URL; repository Pages hosting can also be used while DNS is being prepared.

## Images and performance

`public/images/roofing.webp` is a locally stored, compressed 1600-pixel stock photo from the [Unsplash image CDN](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80&fm=webp). It is illustrative, not Kevin’s project. Replace it with approved actual roofing photography when available. The hero is eagerly fetched, dimensions are supplied, fonts are system fonts, and no client JavaScript is shipped. Run a mobile Lighthouse audit against the deployed domain to verify actual Core Web Vitals; no performance score is claimed.
