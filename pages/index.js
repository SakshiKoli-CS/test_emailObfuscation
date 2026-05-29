import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Email protection test</title>
      </Head>

      <main>
        <h1>Email protection test</h1>
        <p className="note">
          With Cloudflare <strong>Email Address Obfuscation</strong> enabled,
          this email is protected in the HTML. Check <strong>View Page Source</strong>{' '}
          on your live proxied domain.
        </p>
        <p>
          Contact: <a href="mailto:contact@example.com">contact@example.com</a>
        </p>
      </main>
    </>
  );
}
