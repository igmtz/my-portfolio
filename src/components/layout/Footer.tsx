function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      <p>&copy; {year} Your Name. All rights reserved.</p>
    </footer>
  )
}

export default Footer
