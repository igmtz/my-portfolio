function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Hi, I&apos;m Your Name
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
        A short tagline about what you do and the kind of work you build.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
