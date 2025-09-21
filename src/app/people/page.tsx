import Link from 'next/link';
import Image from 'next/image';


export default function PeoplePage() {
  const peoples = [
      { href: "/post1", img: "/images/post1.jpg", alt: "Post 1" },
    { href: "/blogposts/post2", img: "/images/post2.jpg", alt: "Post 2" },
    { href: "/blogposts/post3", img: "/images/post3.jpg", alt: "Post 3" },
  ];
    return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex gap-12">
        {peoples.map((blog, idx) => (
          <Link key={idx} href={blog.href}>
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105">
              <Image
                src={blog.img}
                alt={blog.alt}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
