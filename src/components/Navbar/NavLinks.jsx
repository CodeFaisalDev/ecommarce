import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Discover", path: "/discover" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavLinks = () => {
  const pathname = usePathname(); // Get current path

  return (
    <div className="flex flex-col md:flex-row gap-10 text-primary md:text-sm font-semibold">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`transition-all duration-200 max-md:hover:border-l-8 max-md:pl-10 w-full border-primary border-dotted md:hover:border-b-4 ${
            pathname === item.path
              ? "max-md:pl-10 border-dotted max-md:border-l-8 md:border-b-4 md:border-primary"
              : "border-transparent"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
