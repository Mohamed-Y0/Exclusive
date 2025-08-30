type InputProps = {
  label?: string;
  hidden?: boolean;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, hidden, id, ...props }: InputProps) {
  return (
    <div className={`${hidden && "hidden sm:block"}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={`w-full rounded-lg bg-white px-2.5 py-1 text-black focus:outline-1 focus:outline-neutral-200 lg:px-5 lg:py-2.5`}
        {...props}
      />
    </div>
  );
}

export default Input;
