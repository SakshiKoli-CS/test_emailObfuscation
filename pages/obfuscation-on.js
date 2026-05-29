import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const emailOffHtml =
  'Contact: <!--email_off-->contact@example.com<!--/email_off-->';

export default function ObfuscationOn() {
  return (
    <Layout>
      <Head>
        <title>Test — obfuscation ON</title>
      </Head>

      <h1>
        Obfuscation <span className="badge badge-on">ON</span>
      </h1>
      <p className="note">
        Use this URL when zone obfuscation is <strong>On</strong> and no
        configuration rule disables it for this path. Compare with{' '}
        <Link href="/obfuscation-off">/obfuscation-off</Link>.
      </p>

      <section>
        <h2>
          1. <code>email_off</code> (should stay plain in source)
        </h2>
        <p dangerouslySetInnerHTML={{ __html: emailOffHtml }} />
      </section>

      <section>
        <h2>2. Plain text email (should be obfuscated)</h2>
        <p>Support: plain@example.com</p>
      </section>

      <section>
        <h2>3. <code>mailto:</code> link (should be obfuscated)</h2>
        <p>
          <a href="mailto:link@example.com">Email via mailto</a>
        </p>
      </section>

      <section>
        <h2>Expected (View Page Source)</h2>
        <ul>
          <li>Section 1: still <code>contact@example.com</code></li>
          <li>
            Sections 2–3: <code>/cdn-cgi/l/email-protection</code> and/or decode
            script
          </li>
        </ul>
      </section>
    </Layout>
  );
}
