import { PulseLoader } from "react-spinners";

function Loading() {
  return (
    <div className="h-full w-full text-center">
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
