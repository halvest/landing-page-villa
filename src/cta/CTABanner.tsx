import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = ({ title, subtitle, button }: ICTABannerProps) => (
  <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-[#F4EDE4] px-6 py-10 text-center text-[#4B3F35] shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div>
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      <p className="mt-1 text-lg font-medium text-primary-700">{subtitle}</p>
    </div>

    <div className="flex justify-center sm:justify-end">{button}</div>
  </div>
);

export { CTABanner };
