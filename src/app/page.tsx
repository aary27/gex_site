import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Website</h1>
      <nav>
        <Link href="/people">About</Link>
        <Link href="/places">Projects</Link>
      </nav>
    </main>
  );
}
