"use client";

import "swiper/css";
import "swiper/css/effect-fade";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const imageUrls = ["/assets/images/9.svg", "/assets/images/10.svg"];

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const translateY = useTransform(scrollY, [0, 500], [0, -100]);
  const textTranslateY = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.9]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      <motion.div className="absolute inset-0 z-0" style={{ y: translateY }}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          effect="fade"
          loop
          className="size-full"
          aria-label="Gambar slideshow villa"
        >
          {imageUrls.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={url}
                alt={`Slide gambar villa nomor ${idx + 1}`}
                className="size-full object-cover brightness-[0.85]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-10 bg-black/10" />
      </motion.div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-40 bg-black/20 backdrop-blur-sm">
        <Background color="bg-transparent">
          <Section yPadding="py-4">
            <NavbarTwoColumns logo={<Logo xl />}>
              <li>
                <a
                  href="#features"
                  className="font-medium text-white transition hover:text-primary-300"
                >
                  Fasilitas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-medium text-white transition hover:text-primary-300"
                >
                  Hubungi Kami
                </a>
              </li>
            </NavbarTwoColumns>
          </Section>
        </Background>
      </div>

      {/* Hero CTA */}
      <Section yPadding="py-0 relative z-20">
        <motion.div
          className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 text-center"
          style={{ y: textTranslateY, opacity }}
        >
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/10 px-6 py-12 text-white backdrop-blur-sm shadow-2xl sm:px-10 sm:py-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight drop-shadow md:text-5xl"
            >
              <span className="mb-1 block">Investasi Villa 2 Lantai</span>
              <span className="font-extrabold text-primary-500">
                Seturan, Yogyakarta
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-8 text-lg text-white/90 md:text-xl"
            >
              Lokasi premium dekat UGM & Amplaz, desain modern, ROI tinggi.
              Cocok untuk disewakan harian maupun investasi jangka panjang.
            </motion.p>
            <motion.a
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              href="https://wa.me/6283144940611?text=Halo%20saya%20tertarik%20dengan%20villa%20yang%20Anda%20tawarkan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi via WhatsApp"
            >
              <Button
                xl
                className="animate-bounce rounded-full bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-700"
              >
                Hubungi via WhatsApp
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export { Hero };
