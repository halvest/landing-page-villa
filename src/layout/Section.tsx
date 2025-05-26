import type { ReactNode } from "react";

type ISectionProps = {
  id?: string;
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = ({
  id,
  title,
  description,
  yPadding = "py-16",
  children,
}: ISectionProps) => (
  <section
    id={id}
    className={`mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 ${yPadding}`}
  >
    {(title || description) && (
      <header className="mx-auto mb-12 max-w-4xl text-center">
        {title && (
          <h2 className="text-4xl font-extrabold leading-tight text-[#4B3F35]">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-4 text-lg text-[#6B5844] md:px-10">{description}</p>
        )}
      </header>
    )}

    {children}
  </section>
);

export { Section };
