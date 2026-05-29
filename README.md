# Email protection test

Single Next.js page with two emails:

1. **Protected** — normal `mailto:` (Cloudflare obfuscates)
2. **Exempt** — wrapped in `<!--email_off-->...<!--/email_off-->` (stays plain)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the email stays plain locally (Cloudflare is not in the path).

## Test on Cloudflare

1. Deploy to AWS Amplify.
2. Point your **proxied** custom domain through Cloudflare (orange cloud).
3. Enable **Email Address Obfuscation** (Security → Settings → Client-side abuse).
4. Open the live site → **View Page Source**.

**When protection is working** (`curl` or View Page Source):

| Email | Expected in HTML |
|-------|-------------------|
| `contact@example.com` | `/cdn-cgi/l/email-protection#...` + decode script |
| `exempt@example.com` | Plain with `<!--email_off-->` comments |
