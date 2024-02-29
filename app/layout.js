import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Example | Website - Login with Phone | Phone.email",
  description: "Example | Next App",
  keywords: "free SMS,OTP,phone email,free sms otp service",
  author: "phone-email"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor:'#f1f5f9' }}>{children}</body>
    </html>
  );
}
