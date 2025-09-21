import Link from 'next/link';
import Image from 'next/image';

export default function Visit() {
    const stays = [
    {
      name: "Kertasari Lodge",
      img: "/lodge.jpg",
      desc: "Hilltop hotel",
      link: "https://www.kertasarilodge.com/", // or external booking link
    },
    {
      name: "Whales and Waves",
      img: "/waves.jpg",
      desc: "Chill surf resort",
      link: "https://whales-and-waves.com/",
    },
  ];
    return (
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col bg-white">
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
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Visit Kertasari</h1>
            <div className="space-y-4 text-gray-800">
                <h2 className="text-2xl font-semibold">How to Get Here</h2>
                <p>
                    The most precious gems are usually hard to find. To get to Kertasari, it is imperative to plan well
                    in
                    advance.
                    However, there is a lot of accessible transport for tourists from all over.
                </p>
                <p>
                    From Lombok Airport:
                </p>
                <p>
                    Lombok airport is one of the best ways to get to Kertasari. With direct flights to 3 different
                    countries
                    and major hubs like Singapore and Bali, it is easy to arrive at Lombok.
                </p>
                <p>
                    Kayangan harbour in Lombok has daily ferries to Poto Tano. The ferry typically takes about 3 hours
                    and Kayangan is about 2 hours from the airport.
                    From Poto Tano, it is an hour long drive down to Kertasari. You can usually find buses or private
                    hire taxis for the final stretch.
                </p>
            </div>
            <div className="relative w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden shadow">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59275.90372254239!2d116.7094301100631!3d-8.710233926864126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc5cd9c0c40879%3A0x1a0fd924478b6374!2sLabuan%20Kertasari%2C%20Taliwang%2C%20West%20Sumbawa%20Regency%2C%20West%20Nusa%20Tenggara%2C%20Indonesia!5e1!3m2!1sen!2ssg!4v1758437498743!5m2!1sen!2ssg"
                    loading="lazy" width='900' height='500'
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h2 className="text-2xl font-semibold mb-6 text-left text-gray-900">Places to Stay</h2>
            <section className="mx-auto max-w-3xl">
                <div className="grid gap-8 sm:grid-cols-2 ">
                    {stays.map((stay, i) => (
                        <div
                            key={i}
                            className="rounded-lg bg-white shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <div className="relative w-full h-40">
                                <Image
                                    src={stay.img}
                                    alt={stay.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 space-y-2">
                                <h3 className="text-lg font-semibold">{stay.name}</h3>
                                <p className="text-sm text-gray-600">{stay.desc}</p>
                                <Link
                                    href={stay.link}
                                    className="inline-block mt-2 text-blue-600 hover:underline text-sm font-medium"
                                >
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
