import Footer from "@/components/Footer";

export const metadata = {
  title: "Aniket | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
