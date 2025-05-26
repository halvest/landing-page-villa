import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = ({ logo, children }: INavbarProps) => (
  <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-black/40 px-6 py-4 shadow-md backdrop-blur-md">
    <div className="shrink-0">
      <Link href="/">{logo}</Link>
    </div>

    <nav aria-label="Primary navigation">
      <ul className="flex items-center text-lg font-semibold text-white">
        {children}
      </ul>
    </nav>

    <style jsx>{`
      ul :global(li:not(:last-child)) {
        margin-right: 1.25rem; /* mr-5 */
      }
      ul :global(a) {
        transition: color 0.3s ease;
      }
      ul :global(a:hover) {
        color: #ffd7a0; /* warna hover cokelat terang/emas */
      }
    `}</style>
  </header>
);

export { NavbarTwoColumns };
