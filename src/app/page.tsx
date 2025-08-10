import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Website</h1>
      <nav>
        <li><Link href="/people">people</Link></li>
        <li><Link href="/places">places</Link></li>
      </nav>
    </main>
  );
}
