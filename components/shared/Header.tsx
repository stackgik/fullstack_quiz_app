import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className='flex-between w-full py-12'>
      <Link href={'/'} className='flex items-center gap-2'>
        <BookOpen />
        <span>GeeksQuiz</span>
      </Link>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <Button asChild className='shad-button bg-blue-500 text-white'>
          <SignInButton />
        </Button>
      </SignedOut>
    </header>
  );
};

export default Header;
