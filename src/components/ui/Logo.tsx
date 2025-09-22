type LogoProps = {
  color: string;
};

function Logo({ color }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={`/imgs/logo-${color}-70.webp`}
        className="h-full w-full"
        alt=""
      />
      <p
        className={`text-lg font-bold tracking-wider text-${color} hidden gap-2.5 sm:block lg:text-2xl`}
      >
        Exclusive
      </p>
    </div>
  );
}

export default Logo;
