import AuthLayout from '@/src/components/auth/AuthLayout';
import ResetPasswordForm from '@/src/components/auth/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title='Reset Password'
      subtitle='Create a new password for your account.'
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
