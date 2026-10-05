# Lead Converter (demo)

A lead-converting landing page for a local service business, built for a Service Hawk tutorial.
**Coolside Heating & Air is a sample business**: the phone number and reviews are samples.

- Astro static site, mobile first, system fonts, optimized WebP images (Lighthouse mobile: 100 / 100 / 100).
- One goal per page: a qualified lead (form, call or text). 3-field form, sticky call/text bar, source and UTM capture.
- Leads post to the CRM's inbound webhook (`PUBLIC_LEAD_WEBHOOK`), which texts the lead back in under 60 seconds.
- Analytics: `dataLayer` events (`form_start`, `generate_lead`, `call_click`, `text_click`), plus optional GA4 and Clarity IDs.
- Business details live in `src/config.ts`. Change that one file for a real client, and switch `demo` off.

```
npm install
npm run dev      # local
npm run build    # dist/
```
