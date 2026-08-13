function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
      <p className="mt-4 text-slate-600">
        The best way to reach me is by email.
      </p>
      <a
        href="mailto:you@example.com"
        className="mt-6 inline-block rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
      >
        you@example.com
      </a>
    </section>
  )
}

export default Contact
