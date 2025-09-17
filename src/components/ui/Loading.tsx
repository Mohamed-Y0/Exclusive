import { PulseLoader } from "react-spinners";

type Props = {
  fallback?: boolean;
};

function Loading({ fallback }: Props) {
  return (
    <div className="flex h-dvh w-full items-center justify-center text-center">
      <PulseLoader
        color="#b71f3b "
        margin={5}
        size={30}
        speedMultiplier={0.8}
      />
    </div>
  );
}

export default Loading;
