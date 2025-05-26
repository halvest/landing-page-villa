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

const VillaSpecification = () => {
  const [price, setPrice] = useState(375000000);
  const [monthlyIncome, setMonthlyIncome] = useState(6250000);
  const [selectedYear, setSelectedYear] = useState(1);

  const yearlyIncome = monthlyIncome * 12;
  const years = Array.from({ length: 20 }, (_, i) => i + 1);
  const totalIncomes = years.map((year) => yearlyIncome * year);
  const bepYear = totalIncomes.findIndex((val) => val >= price) + 1;

  const images = [
    { src: '/assets/images/1.svg'},
    { src: '/assets/images/2.svg'},
    { src: '/assets/images/3.svg'},
    { src: '/assets/images/4.svg'},
    { src: '/assets/images/5.svg'},
    { src: '/assets/images/6.svg'},
  ];

  return (
    <Section
      title="✨ Tinggal Duduk Manis, Villanya yang Kerja untuk Anda!"
      description="📢 Launching perdana cuma Rp375 JUTA untuk 4 UNIT PERTAMA! Lokasi premium di Seturan – belakang kampus UPN & Plaza Ambarukmo. Potensi passive income hingga Rp6 juta/bulan, capital gain naik 10% per tahun, dan free stay 12x/tahun. Investasi properti paling realistis di 2025!"
      yPadding="py-16"
    >
      <div className="mb-10">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
        >
          {images.map((img, index) => (
            <div key={index} className="relative h-72 md:h-96">
              <Image
                src={img.src}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mb-10 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-100 via-yellow-50 to-stone-100 p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold text-amber-800">
          🌟 Kenapa Harus Investasi Villa?
        </h3>
        <ul className="list-inside list-disc space-y-3 text-stone-800">
          <li>Permintaan hunian terus naik — nilai investasi makin cuan.</li>
          <li>Inflasi 3–5% vs kenaikan properti hingga 20% per tahun.</li>
          <li>
            <strong>Passive income</strong> tanpa repot – cocok untuk generasi smart investor.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Feature icon={<MapPin className="size-6 text-amber-700" />} title="Lokasi Premium" desc="Belakang kampus UPN, dekat Plaza Ambarukmo – kawasan emas Seturan." />
        <Feature icon={<LineChart className="size-6 text-orange-600" />} title="Passive Income Tinggi" desc="Cuan hingga Rp6 juta/bulan – balik modal hanya 5 tahun!" />
        <Feature icon={<TrendingUp className="size-6 text-yellow-600" />} title="Capital Gain 10%/Tahun" desc="Nilai aset naik tiap tahun, cocok untuk jangka panjang." />
        <Feature icon={<Users className="size-6 text-amber-600" />} title="Full Managed" desc="Tinggal terima beres – properti dikelola profesional." />
        <Feature icon={<BedDouble className="size-6 text-stone-500" />} title="Fasilitas Lengkap" desc="Kamar tidur, kamar mandi, pantry, dan kolam renang privat." />
        <Feature icon={<Ruler className="size-6 text-stone-600" />} title="Luas Ideal" desc="Desain compact namun lega – cocok untuk staycation & sewa harian." />
        <Feature icon={<BadgeCheck className="size-6 text-lime-700" />} title="Leasehold 20 Tahun" desc="Tanah SHM Developer." />
        <Feature icon={<Rocket className="size-6 text-rose-700" />} title="Bonus Eksklusif" desc="Free stay 12x/tahun selama 20 tahun + fleksibel dijual kapan pun." />
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-stone-100 to-amber-50 p-6 shadow">
        <h4 className="mb-3 text-lg font-semibold text-amber-800">
          📍 Lokasi Strategis
        </h4>
        <ul className="list-disc space-y-1 pl-6 text-sm text-stone-800">
          <li>5 Menit ke Mall Ambarukmo Plaza (Amplaz)</li>
          <li>8 Menit ke Pakuwon Mall Yogyakarta</li>
          <li>10 Menit ke Universitas Gadjah Mada (UGM)</li>
          <li>18 Menit ke Tugu Jogja</li>
          <li>20 Menit ke Stasiun Tugu Yogyakarta</li>
          <li>25 Menit ke Malioboro / Titik Nol Kilometer</li>
        </ul>

        <div className="mt-6 overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15809.084808489218!2d110.4060604!3d-7.7742971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDYnMjcuNSJTIDExMMKwMjQnMjEuOCJF!5e0!3m2!1sen!2sid!4v1716700000000"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="h-64 w-full border-0"
          ></iframe>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-amber-300 bg-white p-6 shadow-lg">
        <h4 className="mb-4 text-xl font-bold text-amber-800">
          📈 Simulasi ROI Investasi
        </h4>

        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">
              Harga Villa (Rp)
            </label>
            <NumericFormat
              className="w-full rounded-lg border border-stone-300 px-4 py-2"
              value={price}
              thousandSeparator="."
              decimalSeparator="," 
              prefix="Rp "
              onValueChange={(values) => setPrice(values.floatValue || 0)}
              allowNegative={false}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">
              Passive Income / Bulan (Rp)
            </label>
            <NumericFormat
              className="w-full rounded-lg border border-stone-300 px-4 py-2"
              value={monthlyIncome}
              thousandSeparator="."
              decimalSeparator="," 
              prefix="Rp "
              onValueChange={(values) => setMonthlyIncome(values.floatValue || 0)}
              allowNegative={false}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-stone-700">
            Pilih Tahun ke-{selectedYear}
          </label>
          <Slider
            min={1}
            max={20}
            value={selectedYear}
            onChange={(value) => setSelectedYear(Number(value))}
          />
        </div>

        <div className="mt-4 text-lg font-medium text-stone-800">
          Estimasi Akumulasi Profit Tahun ke-{selectedYear}: 
          <span className="text-green-600">
            {formatRupiah(yearlyIncome * selectedYear)}
          </span>
        </div>

        <p className="mt-4 font-semibold text-green-700">
          🎯 Estimasi Balik Modal: Tahun ke-{bepYear > 0 ? bepYear : '-'}
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-amber-300 bg-amber-50 p-6 shadow-md">
        <h4 className="mb-4 text-lg font-bold text-amber-800">
          💳 Cara Pembayaran
        </h4>
        <ul className="list-disc space-y-1 pl-6 text-sm text-stone-700">
          <li>Booking Fee: <strong>Rp5.000.000</strong></li>
          <li>DP 50%: <strong>Rp187.500.000</strong></li>
          <li>Pelunasan: <strong>Rp182.500.000</strong></li>
          <li>Termin 1: <strong>Rp91.250.000</strong></li>
          <li>Termin 2: <strong>Rp91.250.000</strong></li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://wa.me/6283144940611?text=Halo,%20saya%20tertarik%20dengan%20investasi%20villa%20Lodji%20Svarga%202"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-green-700"
        >
          📞 Konsultasi Sekarang via WhatsApp
        </a>
        <p className="mx-auto mt-4 max-w-md text-sm text-stone-700">
          Jangan tunggu sampai <strong>SOLD OUT</strong>! Klik tombol di atas
          untuk info lengkap, brosur, dan survei lokasi. 🎯
        </p>
      </div>
    </Section>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-stone-900">{title}</h4>
      <p className="text-sm text-stone-600">{desc}</p>
    </div>
  </div>
);

export { VillaSpecification };