import GuestRoute from '@/src/components/auth/GuestRoute';

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return <GuestRoute>{children}</GuestRoute>;
}
