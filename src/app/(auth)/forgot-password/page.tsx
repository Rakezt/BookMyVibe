import AuthLayout from '@/src/components/auth/AuthLayout';
import ForgotPasswordForm from '@/src/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title='Forgot Password'
      subtitle='Enter your registered email to receive a verification code.'
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
