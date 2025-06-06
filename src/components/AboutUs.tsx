import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">เกี่ยวกับเรา</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
          I Care
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
           เบื่อไหมกับการต้องไปไหนมาไหนคนเดียว? มีธุระสำคัญแต่ไม่มีใครช่วย?อยากมีเพื่อนใหม่ แชร์เรื่องราว ปรึกษาปัญหา? 
           I Care เพื่อนกัน พร้อมเป็นเพื่อนคู่ใจที่จะดูแลและช่วยเหลือคุณในทุกสถานการณ์! เรา ไม่ใช่แค่แอปพลิเคชัน แต่คือชุมชนแห่งน้ำใจและความช่วยเหลือ 
           ที่พร้อมเชื่อมโยงคุณกับเพื่อนใหม่ที่มีความสนใจเดียวกัน หรืออาสาที่จะเป็นธุระให้คุณในยามจำเป็น
          </p>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            บริการ App I Care
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="relative aspect-video">
            <Image
              src="/images/s10.jpg"
              alt="About I Care"
              fill
              className="object-cover rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-xl"
            />
          </div>
          <div>
            {/* <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              ที่ฝึกงาน
            </h3> */}
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>อยากออกไปเปิดโลกกว้าง สัมผัสประสบการณ์ใหม่ ๆ แต่ยังไม่มีเพื่อนร่วมทริปใช่ไหม? 🤔 I Care เพื่อนกัน ช่วยให้คุณได้พบกับเพื่อนที่ชอบการผจญภัยเหมือนกัน พร้อมออกเดินทางสร้างความทรงจำดี ๆ ไปด้วยกัน! ✈️⛰️.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>ชีวิตยุ่งจนไม่มีเวลาไปทำธุระส่วนตัวใช่ไหม? 😩 ให้ I Care เพื่อนกัน เป็นผู้ช่วยจัดการธุระต่าง ๆ ให้คุณ ไม่ว่าจะเป็นการไปรษณีย์ จ่ายบิล หรือซื้อของ เพียงแค่บอกเรา เราพร้อมอำนวยความสะดวกให้ชีวิตคุณง่ายขึ้นเยอะเลย! 😊</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>เบื่อขับรถคนเดียว อยากมีเพื่อนคุยระหว่างทาง 🚗💨 I Care เพื่อนกัน เชื่อมโยงคุณกับเพื่อนร่วมทางที่มีจุดหมายเดียวกัน ให้ทุกการเดินทางของคุณไม่เหงา 😊👍</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>มื้ออาหารของคุณจะไม่เดียวดายอีกต่อไป! 😋 I Care เพื่อนกัน ชวนคุณมาพบปะเพื่อนใหม่ ๆ ที่ชอบลิ้มลองอาหารอร่อยเหมือนกัน จะร้านดัง ร้านลับ หรือสตรีทฟู้ด ก็พร้อมไปอร่อยด้วยกัน แชร์ความสุขและรสชาติในทุกมื้อ! 😊🥢</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>รู้สึกไม่สบายใจ มีเรื่องอยากระบาย หรือต้องการใครสักคนช่วยคิดแก้ไขปัญหาใช่ไหม? 🤗 I Care เพื่อนกัน พร้อมเป็นพื้นที่ปลอดภัยให้คุณได้พูดคุยและระบายความรู้สึก โดยมีเพื่อนที่พร้อมรับฟังและให้คำปรึกษาอย่างจริงใจ ให้คุณรู้สึกสบายใจและมีกำลังใจมากขึ้น! 😊❤️</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>รู้สึกกังวลเมื่อต้องไปหาหมอคนเดียวใช่ไหม? 😔 ให้ I Care เพื่อนกัน เป็นเพื่อนที่คอยอยู่เคียงข้าง ให้กำลังใจ และดูแลคุณในทุกขั้นตอน ไม่ว่าจะเป็นการเดินทาง การรอคิว หรือการพูดคุยกับคุณหมอ เราพร้อมเป็นเพื่อนที่ใส่ใจและห่วงใยคุณเสมอ 😊💖</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 