export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FoundX",
  description: "A lost and found platform",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },
    {
      label: "Found Item",
      href: "/found-item",
    },
    {
      label: "register",
      href: "/register",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },
    {
      label: "Found Item",
      href: "/found-item",
    },
  ],
};
