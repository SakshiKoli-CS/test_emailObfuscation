import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Email obfuscation tests</title>
      </Head>

      <h1>Email obfuscation tests</h1>
      <p className="note">
        Deploy on <strong>AWS Amplify</strong>, put the custom domain behind{' '}
        <strong>Cloudflare</strong> (proxied), then open each test page and use{' '}
        <strong>View Page Source</strong>.
      </p>

      <section>
        <h2>Test pages</h2>
        <ul>
          <li>
            <Link href="/obfuscation-on">
              <strong>Obfuscation ON</strong>
            </Link>
            {' — '}
            Cloudflare should rewrite plain emails; <code>email_off</code> should
            stay plain.
          </li>
          <li>
            <Link href="/obfuscation-off">
              <strong>Obfuscation OFF</strong>
            </Link>
            {' — '}
            All emails should stay plain in the HTML source (baseline).
          </li>
        </ul>
      </section>

      <section>
        <h2>Cloudflare setup (both tests on one domain)</h2>
        <ol>
          <li>
            Amplify app → custom domain → add that domain in Cloudflare (orange
            cloud / proxied).
          </li>
          <li>
            Zone default: <strong>Email Address Obfuscation</strong> →{' '}
            <strong>On</strong>.
          </li>
          <li>
            <strong>Rules</strong> → <strong>Configuration Rules</strong> →
            create rule:
            <ul>
              <li>Name: <code>Disable email obfuscation on test path</code></li>
              <li>
                When: URI Path starts with <code>/obfuscation-off</code>
              </li>
              <li>Then: Email Address Obfuscation → <strong>Off</strong></li>
            </ul>
          </li>
          <li>Purge cache after rule changes, then open both URLs above.</li>
        </ol>
      </section>
    </Layout>
  );
}
