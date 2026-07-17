import AuthLayout from '@/src/components/auth/AuthLayout';
import RegisterForm from '@/src/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthLayout
      title='Create Account'
      subtitle='Create your customer account to start booking events.'
    >
      <RegisterForm />
    </AuthLayout>
  );
}
