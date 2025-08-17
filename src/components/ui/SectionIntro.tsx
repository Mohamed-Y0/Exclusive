type SectionIntroProps = {
  title: string;
  info: string;
};

function SectionIntro({ title, info }: SectionIntroProps) {
  console.log(title, info);
  return (
    <div className="flex flex-col gap-10 px-5 py-16 text-lg md:px-0 md:text-[20px]">
      <div className="flex gap-10">
        <span className="relative before:absolute before:-top-1 before:h-10 before:w-5 before:rounded-lg before:bg-red-600"></span>
        <span className="relative text-red-600">{info}</span>
      </div>
      <div>
        <h3 className="text-2xl lg:text-4xl">{title}</h3>
      </div>
    </div>
  );
}

export default SectionIntro;
