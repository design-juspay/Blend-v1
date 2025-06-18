import { Home } from "lucide-react";
import { Breadcrumb } from "../../../lib/main";

const BreadcrumbDemo = () => {
  const simpleItems = [
    { label: "Home", href: "/", leftSlot: <Home size={14} /> },
    { label: "Shop", href: "/shop" },
    { label: "Electronics", href: "/shop/electronics" },
    { label: "Laptops", href: "/shop/electronics/laptops" },
    { label: "MacBook Pro", href: "/shop/electronics/laptops/macbook-pro" },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Breadcrumb items={simpleItems.slice(0, 2)} />
      <Breadcrumb items={simpleItems.slice(0, 3)} />
      <Breadcrumb items={simpleItems.slice(0, 4)} />
      <Breadcrumb items={simpleItems.slice(0, 5)} />
      <Breadcrumb items={simpleItems} />
    </div>
  );
};

export default BreadcrumbDemo;
