import Image from "next/image";
import Link from "next/link";

export default function lopi() {
  return (
    <article className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <Link href="/people" className="text-sm text-gray-500 hover:text-gray-700">
          ← All posts
        </Link>
      </div>

      <header className="mx-auto max-w-3xl px-6 pt-6">
        <div className="relative w-full max-w-2xl mx-auto h-64 md:h-96 mb-6">
          <Image
              src="/kert.jpg"
              alt="Lopi Lopi Painting"
              fill
              className="object-cover rounded-lg shadow-md"
              priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">Lopi Lopi Painting</h1>

        <div className="flex items-center gap-4 mb-6">

          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border">
              <Image src="anon.jpg" alt="author" fill className="object-cover"/>
            </div>
            <div>
              <div className="text-sm text-gray-700 font-medium">Anonymous 2</div>
              <div className="text-xs text-gray-700">May 28, 2025</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pb-20 text-lg text-gray-900 leading-relaxed space-y-6">
        <p>
            Lopi refers to a traditional fishing boat used by the villagers of Kertasari.
            Every year, they host a competition where miniature replicas of these boats are made.
            These boats are then painted by teams to represent either their culture or their team and is a source of great community building.
            The race is held in the waters right by the shore with each team setting up their boat next to a starting line.
            Once the boat is released, it is up to the winds and the boat to cross the finising line first wins.
        </p>
        <p>
           There is a electric atmosphere every race with everyone cheering for their own creations.
            The boats are more than just pieces of carefully crafted wood that happen to float. They represent
            what Kertasari stands for. More than just utilities for fishing, they are unique, rich and extravagant.
        </p>
        <p>
          Visiting Kertasari, you will also have the chance to paint and race your own boat. Go wild with your designs and
            see where the wind takes you! You will even get to see some of the boats that are reigning champions and have
            and undefeated win streak. It is a great chance to bond not just with the culture of Kertasari, but also with the
            people that make this place so special.
        </p>
      </div>
    </article>
  );
}
