import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

function LinkButton({ to, children }: Props) {
  return (
    <Link className="bg-red-600 px-16 py-6 text-neutral-50" to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
