import Sidebar from "@/src/components/UI/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full my-3 gap-12">
      <div className="w-2/5">
        <Sidebar />
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
};

export default layout;
