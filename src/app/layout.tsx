import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import './globals.css';

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Anika Turns 2 - Magical Birthday Celebration',
    description: 'Join us in celebrating Anika\'s 2nd birthday with a magical Disney Frozen theme!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${lora.variable}`}>
            <body className="font-sans bg-[#f8fbff] text-slate-800 antialiased overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
