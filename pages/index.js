import Head from 'next/head';

const emailOffHtml =
  '<!--email_off-->exempt@example.com<!--/email_off-->';

export default function Home() {
  return (
    <>
      <Head>
        <title>Email protection test</title>
      </Head>

      <main>
        <h1>Email protection test</h1>
        <p className="note">
          With Cloudflare obfuscation on, compare both in{' '}
          <strong>View Page Source</strong> (or <code>curl</code>).
        </p>

        <section>
          <h2>Protected (obfuscated)</h2>
          <p>
            Contact:{' '}
            <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
        </section>

        <section>
          <h2>Exempt (<code>email_off</code>)</h2>
          <p dangerouslySetInnerHTML={{ __html: emailOffHtml }} />
        </section>
      </main>
    </>
  );
}
