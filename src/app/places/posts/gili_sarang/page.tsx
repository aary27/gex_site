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
              alt="Gili Sarang"
              fill
              className="object-cover rounded-lg shadow-md"
              priority
          />
        </div>
        <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">Gili Sarang</h2>

        <div className="flex items-center gap-4 mb-6">

          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border">
              <Image src="anon.jpg" alt="author" fill className="object-cover"/>
            </div>
            <div>
              <div className="text-sm text-gray-700 font-medium">Anonymous 4</div>
              <div className="text-xs text-gray-700">May 28, 2025</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pb-20 text-lg text-gray-900 leading-relaxed space-y-6">
        <p>
          Looming over the horizon, Gili Sarang is the island you will see off the coast of Kertasari. Densely populated with mangroves,
          it is home to a rich ecosystem. On a day with clear skies, consider taking a ride over to this island and check out the unique
          species of mangroves that grow there.
        </p>
        <p>
          For enjoyers of adventure sports, there are banana boats available to take a trip over to Gili Sarang. Not only do you
          get to see what the island has to offer, you get to take the most fun mode of transport there is and go for a swim in the process.
          If you are brave enough, you can even consider swimming the entire length to the island back. At about 400 meters each way, it can be
          quite the workout.
        </p>
        <p>
          Visiting Gili Sarang is the perfect way to top off a holiday to Kertasari. It is a testament to the breadth of experiences
          one can have in this seemingly unassuming village. From hospitality that is about as warm as it gets to unparalleled natural beauty,
          Kertasari has something for everyone.
        </p>
      </div>
    </article>
  );
}
