export default function Navbar() {
  return (
    <nav className="px-global h-16 fixed inset-0 z-9999">
      <ul className="flex w-full items-center justify-between h-full">
        <li>
          <a href="/" className="label-sans py-1">
            Home
          </a>
        </li>
        <li>
          <p className="body-serif">01—</p>
          <p className="label-sans text-light-muted">Launch</p>
        </li>
      </ul>
    </nav>
  );
}
