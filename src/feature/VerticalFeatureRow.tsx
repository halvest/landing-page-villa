"use client";

import classNames from "classnames";
import Image from "next/image";

type VerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = ({
  title,
  description,
  image,
  imageAlt,
  reverse,
}: VerticalFeatureRowProps) => {
  const layoutClass = classNames(
    "mt-20",
    "flex flex-col-reverse sm:flex-row items-center gap-8",
    {
      "sm:flex-row-reverse": reverse,
    },
  );

  return (
    <div className={layoutClass}>
      {/* Teks */}
      <div className="w-full px-4 text-center sm:w-1/2 sm:text-left">
        <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-gray-700 md:text-lg">
          {description}
        </p>
      </div>

      {/* Gambar */}
      <div className="w-full px-4 sm:w-1/2">
        <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-md sm:h-80">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
