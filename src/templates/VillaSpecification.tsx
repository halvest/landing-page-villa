'use client';

import 'rc-slider/assets/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  BadgeCheck,
  BedDouble,
  LineChart,
  MapPin,
  Rocket,
  Ruler,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Slider from 'rc-slider';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Carousel } from 'react-responsive-carousel';

import { Section } from '@/layout/Section';
import { formatRupiah } from '@/utils/formatRupiah';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

// ✅ Komponen Feature didefinisikan sebelum digunakan
const Feature: React.FC<FeatureProps> = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-stone-900">{title}</h4>
      <p className="text-sm text-stone-600">{desc}</p>
    </div>
  </div>
);

const VillaSpecification: React.FC = () => {
  const [price, setPrice] = useState<number>(375000000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(6250000);
  const [selectedYear, setSelectedYear] = useState<number>(1);

  const yearlyIncome = monthlyIncome * 12;
  const years = Array.from({ length: 20 }, (_, i) => i + 1);
  const totalIncomes = years.map((year) => yearlyIncome * year);
  const bepYear = totalIncomes.findIndex((val) => val >= price) + 1;

  const images = [
    { src: '/assets/images/1.svg' },
    { src: '/assets/images/2.svg' },
    { src: '/assets/images/3.svg' },
    { src: '/assets/images/4.svg' },
    { src: '/assets/images/5.svg' },
    { src: '/assets/images/6.svg' },
  ];

  return (
    <Section
      title="✨ Tinggal Duduk Manis, Villanya yang Kerja untuk Anda!"
      description="📢 Launching perdana cuma Rp375 JUTA untuk 4 UNIT PERTAMA! Lokasi premium di Seturan – belakang kampus UPN & Plaza Ambarukmo. Potensi passive income hingga Rp6 juta/bulan, capital gain naik 10% per tahun, dan free stay 12x/tahun. Investasi properti paling realistis di 2025!"
      yPadding="py-16"
    >
      {/* Carousel */}
      <div className="mb-10">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          ariaLabel="Carousel gambar villa"
        >
          {images.map((img, index) => (
            <div key={index} className="relative h-72 md:h-96">
              <Image
                src={img.src}
                fill
                alt={`Foto villa nomor ${index + 1}`}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Fitur Villa */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-10">
        <Feature
          icon={<MapPin className="w-6 h-6 text-amber-700" />}
          title="Lokasi Premium"
          desc="Belakang kampus UPN, dekat Plaza Ambarukmo – kawasan emas Seturan."
        />
        <Feature
          icon={<LineChart className="w-6 h-6 text-orange-600" />}
          title="Passive Income Tinggi"
          desc="Cuan hingga Rp6 juta/bulan – balik modal hanya 5 tahun!"
        />
        <Feature
          icon={<TrendingUp className="w-6 h-6 text-yellow-600" />}
          title="Capital Gain 10%/Tahun"
          desc="Nilai aset naik tiap tahun, cocok untuk jangka panjang."
        />
        <Feature
          icon={<Users className="w-6 h-6 text-amber-600" />}
          title="Full Managed"
          desc="Tinggal terima beres – properti dikelola profesional."
        />
        <Feature
          icon={<BedDouble className="w-6 h-6 text-stone-500" />}
          title="Fasilitas Lengkap"
          desc="Kamar tidur, kamar mandi, pantry, dan kolam renang privat."
        />
        <Feature
          icon={<Ruler className="w-6 h-6 text-stone-600" />}
          title="Luas Ideal"
          desc="Desain compact namun lega – cocok untuk staycation & sewa harian."
        />
        <Feature
          icon={<BadgeCheck className="w-6 h-6 text-lime-700" />}
          title="Leasehold 20 Tahun"
          desc="Tanah SHM Developer."
        />
        <Feature
          icon={<Rocket className="w-6 h-6 text-rose-700" />}
          title="Bonus Eksklusif"
          desc="Free stay 12x/tahun selama 20 tahun + fleksibel dijual kapan pun."
        />
      </div>

      {/* Kalkulasi BEP */}
      <div className="rounded-xl border border-stone-300 bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">
          Simulasi BEP (Break Even Point)
        </h3>

        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="price">
            Harga Villa
          </label>
          <NumericFormat
            id="price"
            value={price}
            thousandSeparator="."
            decimalSeparator=","
            prefix="Rp"
            allowNegative={false}
            className="w-full rounded border px-3 py-2"
            onValueChange={(values) => setPrice(values.floatValue ?? 0)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="income">
            Passive Income per Bulan
          </label>
          <NumericFormat
            id="income"
            value={monthlyIncome}
            thousandSeparator="."
            decimalSeparator=","
            prefix="Rp"
            allowNegative={false}
            className="w-full rounded border px-3 py-2"
            onValueChange={(values) => setMonthlyIncome(values.floatValue ?? 0)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="yearSlider">
            Simulasi Tahun
          </label>
          <Slider
            id="yearSlider"
            min={1}
            max={20}
            defaultValue={1}
            value={selectedYear}
            onChange={(value) => setSelectedYear(Number(value))}
          />
          <div className="mt-2 text-sm text-stone-600">
            Tahun ke-{selectedYear} → Total income:{' '}
            <strong>{formatRupiah(totalIncomes[selectedYear - 1] ?? 0)}</strong>
          </div>
        </div>

        <div className="mt-6 text-sm text-green-700 font-medium">
          Balik modal dalam <strong>{bepYear} tahun</strong> (
          {formatRupiah(totalIncomes[bepYear - 1] ?? 0)})
        </div>
      </div>
    </Section>
  );
};

export { VillaSpecification };
