type ILogoProps = {
  xl?: boolean;
};

const Logo = ({ xl }: ILogoProps) => {
  const size = xl ? 44 : 32;
  const fontStyle = xl
    ? 'font-bold text-3xl tracking-tight'
    : 'font-semibold text-xl';

  return (
    <span
      role="img"
      aria-label="Logo Investasi Villa"
      className={`inline-flex items-center text-white ${fontStyle}`}
    >
      <svg
        className="mr-2 text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11l9-7 9 7" />
        <path d="M9 21V9h6v12" />
        <path d="M9 21h6" />
      </svg>
      Investasi <span className="ml-1 text-primary-500">Villa</span>
    </span>
  );
};

export { Logo };
