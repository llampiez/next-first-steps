import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Esta es la pagina de contacto de mi empresa",
};

export default function ContactPage() {
  return <span className="text-7xl">Contact Page</span>;
}
