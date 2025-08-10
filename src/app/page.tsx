import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Website</h1>
      <nav>
        <Link href="/people">People</Link>
        <Link href="/places">Places</Link>
      </nav>
    </main>
  );
}
