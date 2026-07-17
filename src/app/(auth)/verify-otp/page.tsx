import AuthLayout from '@/src/components/auth/AuthLayout';
import VerifyOtpForm from '@/src/components/auth/VerifyOtpForm';

export default function VerifyOtpPage() {
  return (
    <AuthLayout
      title='Verify OTP'
      subtitle='Enter the verification code sent to your email.'
    >
      <VerifyOtpForm />
    </AuthLayout>
  );
}
