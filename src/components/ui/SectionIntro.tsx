type SectionIntroProps = {
  title?: string;
  info?: string;
};

function SectionIntro({ title, info }: SectionIntroProps) {
  console.log(title, info);
  return (
    <div className="flex flex-col gap-10 py-16">
      <div className="flex gap-10">
        <span className="relative before:absolute before:-top-1 before:h-10 before:w-5 before:rounded-lg before:bg-red-600"></span>
        <span className="relative text-red-600">Today's</span>
      </div>
      <div>
        <h3 className="text-2xl lg:text-4xl">Flash Sales</h3>
      </div>
    </div>
  );
}

export default SectionIntro;
