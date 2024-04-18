import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "Esta es la pagina sobre mi",
  keywords: ["About Page", "Luis", "Informacion", "..."],
};

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}
