import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/obfuscation-on">Obfuscation ON</Link>
        <Link href="/obfuscation-off">Obfuscation OFF</Link>
      </nav>
      {children}
    </>
  );
}
