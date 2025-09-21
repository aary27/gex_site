import Image from "next/image";
import Link from "next/link";

export default function seaweed() {
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
              alt="Seaweed Candy Making"
              fill
              className="object-cover rounded-lg shadow-md"
              priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Seaweed Candy Making</h1>

        <div className="flex items-center gap-4 mb-6">

          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border">
              <Image src="anon.jpg" alt="author" fill className="object-cover"/>
            </div>
            <div>
              <div className="text-sm font-medium">Anonymous 1</div>
              <div className="text-xs text-black-500">May 26, 2025</div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-20 prose prose-gray">
        <p>
          Running a business is never easy. Much less so when you are alone and the odds are stacked against you.
          Kertasari grows a lot of seaweed. One of their biggest exports is the seaweed they obtain from systematic farming.
          While everyone never imagined uses beyond dried seaweed, she pioneered a form of seaweed candy.
          She started off by making small batches and went house to house getting people to taste her creation.
          Despite their interest, it was hard to convince people that there was a future in doing something different.
          She kept at it, changing her recipe for the better every time someone tasted it, until eventually she started selling it.
          Operating purely out of her own kitchen and with limited resources, she had no choice but to start small and hope that people would see the potential.
        </p>
        <p>
          Now, backed by the government who provided her with a complete dehydrator, she has a full scale business.
          Seaweed candies are able to generate far more revenue than selling seaweed commercially and are able to give Kertasari a unique, innovative identity.
          She employs other women in the village to assist her in making these candies, which are then packaged and exported.
          With exports reaching part of Indonesia beyond Sumbawa and Lombok, along with a few international locations, she is a testament to human willpower and
          how having faith in yourself can be the difference between doing nothing and being an inspiration to everyone.
        </p>
        <p>
          Now with a full scale kitchen and a shopfront, you can visit her store while also taking a tour of the facilities.

        </p>
      </div>
    </article>
  );
}
