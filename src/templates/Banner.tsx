import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Tertarik dengan villa impian Anda?"
      subtitle="Hubungi kami sekarang via WhatsApp untuk info lengkap dan penawaran spesial!"
      button={
        <Button asChild>
          <a
            href="https://wa.me/6283144940611?text=Halo%20saya%20tertarik%20dengan%20villa%20yang%20Anda%20tawarkan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi via WhatsApp
          </a>
        </Button>
      }
    />
  </Section>
);

export { Banner };
