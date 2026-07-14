# Can Down Website

A responsive, single-page static website for Can Down - Trash Can Retrieval Service, serving Rockwall County, Texas. The site uses semantic HTML, plain CSS, and minimal vanilla JavaScript with no build process or package dependencies.

## Project structure

```text
index.html                 Page content, metadata, and structured data
assets/css/styles.css      Mobile-first layout and visual styles
assets/js/main.js          Form enhancement and dynamic copyright year
assets/images/             Supplied website images
```

## Local preview

From the repository root, run a simple static server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Opening `index.html` directly also works for general review, but a local server is recommended for testing form JavaScript.

## Required images

The intended image filenames are:

- `can-down-logo.webp`
- `hero-worker.webp`
- `rain-service.webp`
- `airport-travel.webp`
- `short-term-rentals.webp`
- `payment.webp`
- `service-flag.webp`

## Formspree setup

The form progressively enhances a normal HTML form submission with a small `fetch` request. To activate it:

1. Create or select a Formspree form that delivers submissions to `strattontx539@gmail.com`.
2. Copy the Formspree form ID.
3. In `index.html`, replace `FORM_ID_NEEDED` in the form action with that ID.
4. Submit a test request and verify delivery, the success state, and Formspree’s spam settings.

The Gmail recipient is intentionally not present in the public form action. Until the placeholder is replaced, form submissions will not work.

## Payment setup

In `index.html`, replace:

- `VENMO_USERNAME_NEEDED` with the confirmed Venmo username.
- `ZELLE_DETAILS_NEEDED` with the confirmed Zelle recipient details.

Keep these values as plain text unless the business supplies and approves direct payment links. The website does not process payments.

## Cloudflare Pages deployment

Connect this repository to Cloudflare Pages and configure:

- Production branch: `main`
- Framework preset: None
- Build command: leave blank
- Build output directory: `/` (repository root)

Deploy and confirm the root page and all files under `assets/` load correctly.

### Custom domain checklist

1. Add `candownservices.com` in the Pages project’s Custom domains section.
2. Follow Cloudflare’s DNS prompts and wait for the certificate to become active.
3. Decide whether the `www` hostname should redirect to the apex domain.
4. Verify HTTPS, the canonical URL, Open Graph image, and favicon on production.
5. Test call, text, Facebook, anchor, and form links on a mobile device.

## Contact-number reference

- Calls: `(469) 226-8546` / `tel:+14692268546`
- Texts: `(469) 226-8546` / `sms:+14692268546`
