import Footer from '@/src/components/layout/Footer';
import Navbar from '@/src/components/layout/Navbar';

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
