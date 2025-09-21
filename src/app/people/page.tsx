import Link from 'next/link';
import Image from 'next/image';


export default function PeoplePage() {
  const peoples = [
      { href: "/people/posts/seaweed_candy", img: 'seaweed_candy.jpeg', alt: "Seaweed Candy Making", label: 'Seaweed Candy Making' },
    { href: "/people/posts/lopi", img: "kert.jpg", alt: "Lopi Lopi Racing", label: 'Lopi Lopi Racing' },
    // { href: "/people/posts/", img: "/images/post3.jpg", alt: "Post 3" },
  ];
    return (
        <div       className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/people.jpg')" }}>
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col">
            <nav className="flex justify-center gap-3 mb-8">
                <Link href="/people" className="px-3 py-1 rounded bg-white shadow text-gray-800 hover:bg-gray-50">
                    People
                </Link>
                <Link href="/places" className="px-3 py-1 rounded bg-white shadow text-gray-800 hover:bg-gray-50">
                    Places
                </Link>
                <Link href="/visit" className="px-3 py-1 rounded bg-white shadow text-gray-800 hover:bg-gray-50">
                    Visit
                </Link>
            </nav>
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    The people of Kertasari are what make it worth visiting. Have a look at some stories from our
                    visitors!
                </h1>
            </div>
            <section className="mt-10 md:mt-16 flex justify-center gap-16">
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
                    <p className="text-center text-white font-medium">{blog.label}</p>
                </Link>
            ))}
          </div>
            </section>

        </div>
            </div>
    );
}

