type Props = {
  id: string;
  placeholder: string;
  type: string;
};

function InputForm({ type, placeholder, id }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {/* <label htmlFor={id}>{children}</label> */}
      <input
        type={type}
        id={id}
        className="rounded-sm border-b border-neutral-200 bg-none px-2.5 py-4 focus:outline-neutral-200"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputForm;
