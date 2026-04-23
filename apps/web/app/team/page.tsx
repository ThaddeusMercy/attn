import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Joshua Omobola",
    role: "Co-founder",
    photo: "/images/team-joshua.jpg",
    site: "https://koha.wtf",
    instagram: "https://www.instagram.com/kohawithstuff",
    linkedin: "https://www.linkedin.com/in/kohasummons",
  },
  {
    name: "Mercy Thaddeus",
    role: "Co-founder",
    photo: "/images/team-mercy.jpg",
    site: "https://mercythaddeus.xyz",
    instagram: "https://www.instagram.com/mercythaddeus_",
    linkedin: "https://www.linkedin.com/in/mercythaddeus",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white font-mono text-sm">
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        <header className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="text-lg font-medium text-black tracking-tight hover:text-[#5B6EF7] transition-colors"
          >
            Attention Factory
          </Link>
          <Link href="/" className="text-[#5B6EF7] hover:underline">
            ← Home
          </Link>
        </header>

        <section className="mb-12">
          <h1 className="text-2xl font-medium text-black mb-3">Team</h1>
          <p className="text-gray-600">The humans behind Attention Factory.</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((person) => (
            <div key={person.name}>
              <div className="relative aspect-square w-full bg-gray-100 mb-4 overflow-hidden">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-base font-medium text-black">{person.name}</h2>
              <p className="text-gray-600 mb-3">{person.role}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5B6EF7] hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5B6EF7] hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={person.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5B6EF7] hover:underline"
                >
                  Web
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
