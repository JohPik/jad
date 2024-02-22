import Lottie from "react-lottie";
import loader from "../../public/loader.json";

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loader">
      <Lottie options={defaultOptions} height={100} width={100} speed={2} />
    </div>
  );
};
