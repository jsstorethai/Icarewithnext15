import Image from 'next/image'

const Head = () => {
  return (
    //hero

    <section>
        <div className="relative bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-r opacity-50"></div>
                <h1 className='text-5xl font-black tracking-tight'>
                   I Care 
                    <span className='bg-gradient-to-r from-purple-600 bg-clip-text text-transparent '>เพื่อนกัน</span> เป็นธุระให้คุณ 
                </h1>
                <p className='my-4 text-lg text-gray-600' >I Care หาเพื่อนเที่ยว ทำธุระ ขับรถ ทานข้าว ปรึกษาพูดคุย พาไปหาหมอ!มาเป็นส่วนหนึ่งของ "I Care เพื่อนกัน" สมัครลงทะเบียนได้แล้ววันนี้! <br/>
              มาพร้อมระบบ Ai จับคู่งานกับธุระของคุณ ได้ที่นี่</p>
            {/* Search Box */}
            <div className="flex w-full max-w-xl mx-auto mb-6 bg-white rounded-full overflow-hidden border border-gray-200">
              <input
                type="text"
                placeholder="เช่น หาเพื่อนทำธุระ, หาเพื่อนเที่ยว, หาเพื่อนไปหาหมอ"
                className="flex-1 px-6 py-3 bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-500"
              />

              <button className="px-6 py-2 m-1 bg-red-700 text-white rounded-full hover:bg-gray-800 flex items-center gap-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                ค้นหา
              </button>
            </div>
                <div className='flex justify-center mt-8'>
                    <Image src="/images/s1.jpg" alt="Hero Image" width={400} height={300} className="object-contain" />
                </div>
                <div className='mt-8 text-gray-500 text-sm'>
                    <p>สมัครสมาชิกฟรี ไม่มีค่าใช้จ่าย</p>

            </div>
              <div className='mt-8 flex gap-x-8 justify-center'>
                <a href="/register" className='bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors'>สมัครสมาชิก</a>
                <a href="/login" className='bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors'>เข้าสู่ระบบ</a>

              </div>
            </div>
        </div>
         {/* Hero Images - Mobile */}
        
    </section>
  );
};

export default Head