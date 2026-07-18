# Image Acquisition & Local SEO Checklist

Companion notes for the Alleviation Wellness multi-page redesign. On-page SEO is implemented in the HTML; the items below are for photos and off-site ranking work.

## Images to acquire

Current pages reuse existing photos. These new shots will improve trust, Core Web Vitals (if compressed), and Google Business Profile alignment.

1. **Hero (highest priority)** — Landscape, full-bleed photo of Dr. Bigoms with a patient or the treatment room. Natural light, sharp focus. Export WebP/JPEG ≤300KB at ~1920px wide.
2. **Hand / wrist care** — Close-up of a hand or wrist adjustment/exam for `hand-foot.html`.
3. **Foot / ankle care** — Foot adjustment or plantar fascia–related clinical shot.
4. **Office exterior** — Suite entrance with visible signage (also upload to Google Business Profile).
5. **Treatment room / TRT Integrator** — Clean wide shot of the adjustment area and Integrator tool.
6. **Compress existing assets** — Done for current JPEGs (resized long edge ≤1600–1920px, quality ~78). Re-compress any newly added photos the same way before publish.

Until new assets arrive, the site uses `Bigoms_child_patient.jpg`, `BigomsPhoto.jpg`, and existing office/TRT images.

## On-page SEO (done in code)

- Keyword-focused titles and meta descriptions (including “Douglasville chiropractor”)
- Canonical URLs, Open Graph tags
- JSON-LD `Chiropractor` / `Person` / service schema
- `robots.txt` and `sitemap.xml`
- Internal links across Home, Services, Hand & Foot, About, Contact
- Descriptive image `alt` text

**Recommended follow-up:** Migrate Universal Analytics (`UA-142282997-1`) to **GA4** and replace the tracking ID in each page’s `<head>`.

After deploy: submit `https://alleviationwellnesschiro.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Google Business Profile & local SEO

Profile link: https://share.google/MpOVP25gZin9RKcY5

- Confirm primary category **Chiropractor**; add secondary categories if available (e.g. wellness / sports medicine if accurate).
- Match NAP exactly to the website:  
  **Alleviation Wellness Chiropractic**  
  9559 Highway 5 Suite 204, Douglasville, GA 30135  
  (678) 306-6449
- Set hours to match the Contact page (Mon/Wed/Thu open; Tue/Fri/Sat/Sun closed).
- Website URL → homepage; add the zHealth appointment link as a booking button if supported.
- Upload photos: exterior, interior, team, hand/foot care, logo.
- Post weekly (tips, hours, hand/foot education, wellness reminders).
- Seed Q&A (parking, first visit, insurance, kids, extremity care).
- Ask happy patients for Google reviews that mention “Douglasville” and specific results (hand, foot, back).
- Keep Facebook / Instagram NAP identical to the site.
- List on Apple Maps, Bing Places, and relevant directories directories when appropriate.
- Monitor Search Console for “douglasville chiropractor” impressions/clicks after launch.

## Dev notes

- Static HTML/CSS/JS only. Bootstrap 5.3 and Font Awesome 6 load from CDN.
- Local preview: `npm start` (serves on port 3000).
- Contact form posts to Basin (`usebasin.com/f/6542b071cffd`); validation lives in `js/site.js` (no jQuery).
