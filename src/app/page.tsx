import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Website</h1>
      <nav>
        <Link href="/src/app/people">About</Link>
        <Link href="/src/app/places">Projects</Link>
      </nav>
    </main>
  );
}
