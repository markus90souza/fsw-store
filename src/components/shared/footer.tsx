export const Footer = () => {
  return (
    <div className="bg-accent px-8 py-4 text-[0.625rem] opacity-75">
      © {new Date().getFullYear()} Copyright{' '}
      <span className="font-semibold">FSW Store</span>
    </div>
  )
}
