import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

function LinkButton({ to, children }: Props) {
  return (
    <Link
      className="grow rounded-sm bg-red-600 px-16 py-4 text-center text-neutral-50"
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
