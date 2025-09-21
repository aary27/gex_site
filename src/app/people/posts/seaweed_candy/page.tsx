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
              <div className="text-xs text-gray-500">May 26, 2025</div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-20 prose prose-neutral">
        <p>
          Paragraph 1 about the seaweed candy lady.
        </p>
        <p>
          Paragraph 2.
        </p>
      </div>
    </article>
  );
}
