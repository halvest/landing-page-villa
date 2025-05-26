import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const socialLinks = [
  {
    href: 'https://www.facebook.com/hasproagency1',
    label: 'Facebook',
    svg: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M22.676 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
      </svg>
    ),
    color: 'hover:text-blue-600',
  },
  {
    href: 'https://www.instagram.com/hasproagency/',
    label: 'Instagram',
    svg: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.36 3.608 1.336.975.975 1.274 2.242 1.336 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.36 2.633-1.336 3.608-.975.975-2.242 1.274-3.608 1.336-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.36-3.608-1.336-.975-.975-1.274-2.242-1.336-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.36-2.633 1.336-3.608.975-.975 2.242-1.274 3.608-1.336C8.416 2.175 8.796 2.163 12 2.163zM12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm6.406-1.244a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
      </svg>
    ),
    color: 'hover:text-pink-500',
  },
  {
    href: 'https://www.tiktok.com/@hasproagency_',
    label: 'TikTok',
    svg: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M12.93 0H9.9v16.574c0 1.297-.612 2.02-1.718 2.02-1.034 0-1.622-.779-1.622-2.02 0-1.26.72-1.992 1.867-2.033v-3.75C4.784 10.878 3 13.22 3 16.499 3 20.12 5.348 22 8.129 22c3.064 0 4.801-2.123 4.801-5.503V8.097c1.076.897 2.5 1.446 4.07 1.532V6.6c-1.356-.143-2.608-.8-3.045-2.273h-.025V0z" />
      </svg>
    ),
    color: 'hover:text-black',
  },
];

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, svg, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Kunjungi ${label}`}
                title={label}
                className={`transition duration-300 ease-in-out ${color}`}
              >
                {svg}
              </Link>
            ))}
          </div>
        }
      >
        <li>
          <Link href="/">Beranda</Link>
        </li>
        <li>
          <Link href="/tentang">Tentang Kami</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
