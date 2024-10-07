import Header from '@/components/shared/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full max-w-[1100px] mx-auto h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
    </div>
  );
}
