import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const features = [
  {
    title: 'Investasi Villa Mewah di Tengah Kota Jogja',
    description:
      'Miliki unit eksklusif di Seturan – Sleman, hanya Rp375 juta! Dapat 1 kamar tidur, kamar mandi, pantry, & kolam renang privat. Full furnished dan siap pakai.',
    image: '/assets/images/villa1.png',
    imageAlt: 'Tampak luar villa Lodji Svarga 2 di Seturan',
  },
  {
    title: 'Pasif Income hingga Rp75 Juta/Tahun',
    description:
      'Dapatkan potensi pendapatan pasif hingga Rp6 juta per bulan. ROI tinggi, balik modal hanya dalam 5 tahun. Didukung akta notaris & sistem pengelolaan profesional.',
    image: '/assets/images/interior.png',
    imageAlt: 'Interior elegan villa lengkap dengan furniture premium',
  },
  {
    title: 'Bebas Ribet – Tim Profesional Kelola Unit Anda',
    description:
      'Anda tidak perlu urus penyewa atau operasional harian. Semua dikelola penuh oleh manajemen berpengalaman. Anda cukup terima hasilnya.',
    image: '/assets/images/bedroom.png',
    imageAlt: 'Kamar tidur villa yang dirancang fungsional dan nyaman',
  },
  {
    title: 'Bonus Menggiurkan untuk Investor Awal',
    description:
      'Booking fee hanya Rp5 juta dan 4 unit pertama mendapat harga launching spesial. Dapat juga 12x free stay tiap tahun selama 20 tahun. Investasi dengan banyak bonus!',
    image: '/assets/images/villa2.png',
    imageAlt: 'Private pool villa Lodji Svarga 2 cocok untuk relaksasi',
  },
];

const VerticalFeatures = () => (
  <Section
    id="features"
    title="Kenapa Harus Investasi di Villa Lodji Svarga 2?"
    description="Properti eksklusif di Jogja dengan konsep full passive income, lokasi premium di Seturan, dan potensi cuan tinggi."
  >
    {features.map((item, i) => (
      <VerticalFeatureRow
        key={i}
        title={item.title}
        description={item.description}
        image={item.image}
        imageAlt={item.imageAlt}
        reverse={i % 2 !== 0}
      />
    ))}

    <p className="mt-10 px-4 text-center text-xs text-gray-500">
      *Gambar bersifat ilustratif. Semua informasi dan skema pengembalian
      investasi didukung dengan akta notaris dan sistem pengelolaan resmi.
    </p>
  </Section>
);

export { VerticalFeatures };
