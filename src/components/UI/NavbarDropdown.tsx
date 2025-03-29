"use client";
import { protectedRoutes } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthServices";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { usePathname, useRouter } from "next/navigation";

const NavbarDropdown = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const router = useRouter();
  const { user, setIsLoading } = useUser();
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  const handleLogout = () => {
    logout();

    if (protectedRoutes.some((path) => pathname.startsWith(path))) {
      router.push("/");
      console.log("logout", pathname);
    }
    setIsLoading(true);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name={user?.name} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onPress={() => handleNavigation("/profile")}
          key="profile"
        >
          Profile
        </DropdownItem>
        <DropdownItem
          onPress={() => handleNavigation("/profile/create-post")}
          key="create-post"
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          onPress={() => handleNavigation("/profile/claim-request")}
          key="claim-request"
        >
          {" "}
          Claim Request
        </DropdownItem>
        <DropdownItem
          onPress={() => handleNavigation("/profile/setting")}
          key="setting"
        >
          {" "}
          Setting
        </DropdownItem>
        <DropdownItem
          onPress={() => handleNavigation("/profile/about")}
          key="about"
        >
          {" "}
          About
        </DropdownItem>
        <DropdownItem onPress={() => handleLogout()} key="logout">
          {" "}
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
