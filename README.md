# Email obfuscation test (Next.js + Amplify + Cloudflare)

Simple **Next.js Pages Router** app to compare Cloudflare email obfuscation on vs off.

```html
<!--email_off-->contact@example.com<!--/email_off-->
```

| Route | Purpose |
|-------|---------|
| `/` | Hub and setup |
| `/obfuscation-on` | Obfuscation **on** |
| `/obfuscation-off` | Obfuscation **off** (via Cloudflare path rule) |

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Cloudflare does not run locally — all emails stay plain in source.

## Deploy on AWS Amplify

1. Push this repo to GitHub.
2. Amplify Console → **Create app** → connect repo.
3. Amplify detects Next.js; `amplify.yml` runs `npm ci` and `npm run build`.
4. In Amplify app settings, use the **Next.js - SSR** hosting option if prompted (Amplify Hosting supports Next.js).

Add your custom domain in Amplify, then proxy the domain through **Cloudflare** (orange cloud).

## Cloudflare

**Zone default:** Email Address Obfuscation → **On**

**Configuration rule** for the OFF test:

- When: URI Path starts with `/obfuscation-off`
- Then: Email Address Obfuscation → **Off**

Purge cache, then **View Page Source** on:

- `https://your-domain/obfuscation-on`
- `https://your-domain/obfuscation-off`

## `email_off` in JSX

HTML comments cannot be written as JSX `{/* ... */}` — they are stripped from output. The test pages use `dangerouslySetInnerHTML` so the literal `<!--email_off-->` comments appear in the HTML Cloudflare receives.

## References

- [Cloudflare: Email Address Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/)
