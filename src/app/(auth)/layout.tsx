import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "I Care",
  keywords: ["I Care", "เพื่อนกัน", "หาเพื่อนเที่ยว", "ทำธุระ", "ขับรถ", "ทานข้าว", "ปรึกษาพูดคุย"],
  description: "เว็บไซต์I Care เพื่อนกันเพราะเราแคร์คุณเสมอหาเพื่อนเที่ยว ทำธุระ ขับรถ ทานข้าว ปรึกษาพูดคุย และอื่นๆ",
}


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
