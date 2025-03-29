import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="bg-black/10 h-screen backdrop-blur-md fixed inset-0 z-[999] flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
