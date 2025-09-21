import Link from 'next/link';
import Image from 'next/image';


export default function PeoplePage() {
  const peoples = [
      { href: "/people/posts/seaweed_candy", img: 'seaweed_candy.jpeg', alt: "Seaweed Candy Making", label: 'Seaweed Candy Making' },
    { href: "/people/posts/lopi", img: "kert.jpg", alt: "Lopi Lopi Racing", label: 'Lopi Lopi Racing' },
    // { href: "/people/posts/", img: "/images/post3.jpg", alt: "Post 3" },
  ];
    return (

        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <nav className="flex gap-3 mb-8"
                style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px",
                    fontSize: "1.2rem",
                }}
            >
                <Link href="/people">People</Link>
                <Link href="/places">Places</Link>
                <Link href="/visit">Visit</Link>
            </nav>
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    The people of Kertasari are what make it worth visiting. Have a look at some stories from our visitors!
                </h1>
            </div>
            <div className="flex gap-12">
                {peoples.map((blog, idx) => (
                    <Link key={idx} href={blog.href}>
                        <div
                        className="w-40 h-40 rounded-full overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105">
                        <Image
                            src={blog.img}
                            alt={blog.alt}
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <p className="text-center text-gray-800 font-medium">{blog.label}</p>
                </Link>
            ))}
          </div>
        </div>
    );
}
