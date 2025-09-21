import Link from 'next/link';
import Image from 'next/image';


export default function PeoplePage() {
  const peoples = [
      { href: "/blogposts/post1", img: "/images/post1.jpg", alt: "Post 1" },
    { href: "/blogposts/post2", img: "/images/post2.jpg", alt: "Post 2" },
    { href: "/blogposts/post3", img: "/images/post3.jpg", alt: "Post 3" },
  ];
    return (
    <main style={{
        backgroundImage: "url('/people.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}>
      <h1>People</h1>
      <p>**WIP** Enter info for people/culture including seagrass candy/lopi lopi</p>
    </main>
  );
}
