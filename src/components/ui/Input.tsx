type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, ...props }: InputProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        className="w-full rounded-lg bg-white px-2.5 py-1 text-black focus:outline-1 focus:outline-neutral-200 lg:px-5 lg:py-2.5"
        {...props}
      />
    </div>
  );
}

export default Input;
