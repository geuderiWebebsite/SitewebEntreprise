import { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  title: "Serrurier Créteil - Intervention 24h/24",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
