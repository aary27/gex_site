import Image from "next/image";
import Link from "next/link";

export default function sarang() {
  return (
    <article className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <Link href="/places" className="text-sm text-gray-500 hover:text-gray-700">
          ← All posts
        </Link>
      </div>

      <header className="mx-auto max-w-3xl px-6 pt-6">
        <div className="relative w-full max-w-2xl mx-auto h-64 md:h-96 mb-6">
          <Image
              src="/kert.jpg"
              alt="Kertasari Beach"
              fill
              className="object-cover rounded-lg shadow-md"
              priority
          />
        </div>
        <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">Kertasari Beach</h2>

        <div className="flex items-center gap-4 mb-6">

          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border">
              <Image src="anon.jpg" alt="author" fill className="object-cover"/>
            </div>
            <div>
              <div className="text-sm text-gray-700 font-medium">Anonymous 3</div>
              <div className="text-xs text-gray-700">May 28, 2025</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pb-20 text-lg text-gray-900 leading-relaxed space-y-6">
        <p>
          Spanning the length of the entire village, Kertasari beach is perhaps the most easily identifiable tourist attraction.
            From shining sand to pristine unpolluted waters, the beach is the perfect place to kick back and relax after a long day of travel.
            Facing west, the beach benefits from having a splendid view of the sunset and is home to multiple pet dogs and cats who are always open to pets.
        </p>
        <p>
          During low tides, you can take a trip over to Batu Rusung Kertasari, a rock formation with a little shack that offers a great place to
          have a seat and take in the beauty of the ocean. You will also be able to see a very green island, Gili Sarang, close to the shore.
          If you are feeling adventurous and want to wake up to the sound of waves crashing, you can even camp out on the beach. The wind at night
          coupled with the quiet of the town make for a pleasurable sleeping experience under the stars.
        </p>
        <p>
          Walking along the beach, you will also notice multiple stores that cater to nearly every need you may have during a leisurely stroll.
          From fresh coconut juice to some cold coffee, you will never go thirsty in Kertasari. If the weather permits, you could even go for
          a quick snorkel and get a glimpse into life in those magnificent blue waters.
        </p>
      </div>
    </article>
  );
}
