# Email protection test

Single Next.js page to test Cloudflare **Email Address Obfuscation** (email protection).

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

**When protection is working**, the email is often rewritten to something like:

```html
<a href="/cdn-cgi/l/email-protection#...">...</a>
```

The page still shows a normal email in the browser; protection is in the HTML source.
