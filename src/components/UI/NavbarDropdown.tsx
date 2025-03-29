"use client";
import { logout } from "@/src/services/AuthServices";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { useRouter } from "next/navigation";

const NavbarDropdown = () => {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="John Doe" />
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
        <DropdownItem onPress={() => logout()} key="logout">
          {" "}
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
