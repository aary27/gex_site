import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
          <li><Link href="/src/app/people/page">people</Link></li>
          <li><Link href="/src/app/places/page">places</Link></li>
        </ul>
      </nav>
    </main>
  );
}