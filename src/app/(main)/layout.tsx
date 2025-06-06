import type { Metadata } from "next";
import Nabar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "I Care ",
  keywords: [
    "I Care",
    "เพื่อนกัน",
    "หาเพื่อนเที่ยว",
    "ทำธุระ",
    "ขับรถ",
    "ทานข้าว",
    "ปรึกษาพูดคุย",
  ],
  description: "I Care เพื่อนกันเพราะเราแคร์คุณเสมอหาเพื่อนเที่ยว ทำธุระ ขับรถ ทานข้าว ปรึกษาพูดคุย และอื่นๆ",
};


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <>
       <Nabar/>
        {children}
        <Footer />
      </>
    
  );
}
