type LogoProps = {
  color: string;
};

function Logo({ color }: LogoProps) {
  return (
    <p
      className={`text-lg font-bold tracking-wider text-${color} flex items-center gap-2.5 lg:text-2xl`}
    >
      <img
        src={`/imgs/logo-${color}-70.webp`}
        className="h-full w-full"
        alt=""
      />
      Exclusive
    </p>
  );
}

export default Logo;
