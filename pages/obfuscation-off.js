import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const emailOffHtml =
  'Contact: <!--email_off-->contact@example.com<!--/email_off-->';

export default function ObfuscationOff() {
  return (
    <Layout>
      <Head>
        <title>Test — obfuscation OFF</title>
      </Head>

      <h1>
        Obfuscation <span className="badge badge-off">OFF</span>
      </h1>
      <p className="note">
        Use this URL with a Cloudflare configuration rule that sets{' '}
        <strong>Email Address Obfuscation → Off</strong> for paths starting with{' '}
        <code>/obfuscation-off</code>, or with obfuscation disabled for the whole
        zone. Compare with <Link href="/obfuscation-on">/obfuscation-on</Link>.
      </p>

      <section>
        <h2>
          1. <code>email_off</code> (same markup as ON test)
        </h2>
        <p dangerouslySetInnerHTML={{ __html: emailOffHtml }} />
      </section>

      <section>
        <h2>2. Plain text email</h2>
        <p>Support: plain@example.com</p>
      </section>

      <section>
        <h2>3. <code>mailto:</code> link</h2>
        <p>
          <a href="mailto:link@example.com">Email via mailto</a>
        </p>
      </section>

      <section>
        <h2>Expected (View Page Source)</h2>
        <ul>
          <li>All three sections: plain emails and normal <code>mailto:</code> in source</li>
          <li>No <code>/cdn-cgi/l/email-protection</code> links from Cloudflare</li>
        </ul>
      </section>
    </Layout>
  );
}
