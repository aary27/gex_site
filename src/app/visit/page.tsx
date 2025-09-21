import Link from 'next/link';
import Image from 'next/image';

export default function Visit() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Visit Kertasari</h1>

      <div className="relative w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden shadow">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59275.90372254239!2d116.7094301100631!3d-8.710233926864126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc5cd9c0c40879%3A0x1a0fd924478b6374!2sLabuan%20Kertasari%2C%20Taliwang%2C%20West%20Sumbawa%20Regency%2C%20West%20Nusa%20Tenggara%2C%20Indonesia!5e1!3m2!1sen!2ssg!4v1758437498743!5m2!1sen!2ssg"
              width="600" height="450" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
