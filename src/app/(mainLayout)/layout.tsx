import { Navbar } from "@/src/components/UI/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
