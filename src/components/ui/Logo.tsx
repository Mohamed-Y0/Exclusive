type LogoProps = {
  color: string;
};

function Logo({ color }: LogoProps) {
  return (
    <p className={`text-lg font-bold tracking-wider text-${color} lg:text-2xl`}>
      Exclusive
    </p>
  );
}

export default Logo;
