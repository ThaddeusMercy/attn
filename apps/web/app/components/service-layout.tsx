import Link from "next/link";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function ServiceLayout({ title, subtitle, children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-mono text-sm">
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <Link href="/" className="text-lg font-medium text-black tracking-tight hover:text-[#5B6EF7] transition-colors">
            Attention Factory
          </Link>
          <Link href="/#services" className="text-[#5B6EF7] hover:underline">
            ← All Services
          </Link>
        </header>

        {/* Service Header */}
        <section className="mb-12">
          <h1 className="text-2xl font-medium text-black mb-3">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </section>

        {/* Custom Content */}
        {children}

        {/* CTA */}
        <section className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-base font-medium text-black mb-3">Ready to get started?</h3>
          <p className="text-gray-600 mb-6">Let's talk about your project.</p>
          <a
            href="mailto:hello@attentionfactory.io"
            className="inline-flex items-center gap-2 text-[#5B6EF7] hover:underline"
          >
            Get in touch <span>→</span>
          </a>
        </section>

        {/* Footer Nav */}
        {/* <section className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex gap-6">
            <Link href="/" className="text-gray-500 hover:text-[#5B6EF7]">
              Home
            </Link>
            <Link href="/#services" className="text-gray-500 hover:text-[#5B6EF7]">
              Services
            </Link>
            <a href="mailto:hello@attentionfactory.io" className="text-gray-500 hover:text-[#5B6EF7]">
              Contact
            </a>
          </div>
        </section> */}
      </div>
    </div>
  );
}
