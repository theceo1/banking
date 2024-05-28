import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
        {children}
        <div className="auth-asset">
          <div>
            <Image 
            src="/icons/asset.svg" 
            alt="Auth image"
            width={500}
            height={500}
            />
          </div>
        </div>
      </main>
    );
  }  
