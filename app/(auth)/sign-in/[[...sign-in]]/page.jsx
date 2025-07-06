import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function SignInPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left side: Image */}
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <Image
          src="/signup-image.png"
          alt="Sign in"
          width={500}
          height={500}
          className="object-contain w-full max-w-md"
          priority
        />
      </div>

      {/* Right side: SignIn */}
      <div className="h-full w-full flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}
