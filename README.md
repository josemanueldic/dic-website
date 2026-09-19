# Doha International Co. website

Next.js (App Router) + TypeScript + Tailwind CSS. Statically generated for speed and SEO.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Copy `.env.example` to `.env.local` and fill it in (site URL and contact form email).

## Where content lives

All content is in `lib/`. Pages only read from these files, which is what lets an admin dashboard replace them later.

| File | What it holds |
| --- | --- |
| `lib/site.ts` | Company name, phone, email, address, hours, chairman, social links, navigation |
| `lib/services.ts` | The 9 services (text, scope lists, photo) |
| `lib/projects.ts` | Projects (title, client, service, summary, photos) |
| `lib/clients.ts` | Client names (logos) |
| `lib/gallery.ts` | Gallery captions and photos |
| `lib/equipment.ts` | Equipment groups. **Placeholder content: replace it.** |

## Replacing a photo placeholder

Every photo is a `<Photo>` component. With no `src` it draws a hatched placeholder; with one it shows the image.

1. Put the file in `public/images/` (for example `public/images/east-corridor.jpg`).
2. Set the field in the matching `lib/` file: `image: "/images/east-corridor.jpg"` (services, gallery, equipment, client logos, chairman) or `images: ["/images/east-corridor.jpg"]` (projects).

To use images hosted elsewhere (for example a CDN, which the admin dashboard will need), add the host to `images.remotePatterns` in `next.config.ts`.

## SEO built in

- Same URL structure as the current dicqa.com (`/about-us`, `/services/...`, `/project/...`, `/equipments`, `/our-clients`, `/contact-us`), so existing rankings carry over.
- Unique title, description and canonical URL on every page.
- `sitemap.xml` and `robots.txt` generated from the content files.
- Structured data: `GeneralContractor` (site-wide), `Service` (service pages), `BreadcrumbList` (inner pages).
- Server-rendered HTML, self-hosted font, `next/image` for photos.

## Contact form

`POST /api/contact` sends enquiries through Resend. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (an address on a domain verified in Resend). If these are missing, production shows an error to the visitor instead of silently dropping the message.

## Before launch

- Swap the text "DIC" wordmark in `components/Header.tsx` and `Footer.tsx` for the real logo.
- Add a social sharing image (`app/opengraph-image.png`, 1200x630).
- Review items marked `CONFIRM` in `lib/site.ts`, and the draft project summaries in `lib/projects.ts`.
