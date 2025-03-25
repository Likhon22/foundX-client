import { Input } from "@heroui/input";
import { SearchIcon } from "../../../icons";

const Landing = () => {
  return (
    <div className="bg-[url('/banner.jpg')] bg-cover bg-center h-screen">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form action="" className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
