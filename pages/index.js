
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "BILLYGAHNG AGENCY";
  }, []);

  return (
    <main className="font-sans text-white bg-black">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/60 backdrop-blur">
        <div className="text-lg font-bold">BILLYGAHNG AGENCY</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-gray-400">ABOUT</a>
          <a href="#projects" className="hover:text-gray-400">PROJECTS</a>
          <a href="#contact" className="hover:text-gray-400">CONTACT</a>
        </nav>
      </header>

      <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/main-bg.jpg')" }}>
        <h1 className="text-4xl md:text-6xl font-light tracking-wider text-center px-4">
          COMMUNICATION<br />BASED ON DESIGN
        </h1>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl mb-6">ABOUT</h2>
        <p className="text-lg leading-relaxed">
          빌리강 에이전시는 커뮤니케이션 기반의 디자인을 통해 브랜드가
          전하고자 하는 메시지를 시각적으로 풀어냅니다. 브랜딩, 광고 캠페인,
          디지털 콘텐츠 등 다양한 매체에서 브랜드의 일관성과 매력을 높이는 디자인을 제안합니다.
        </p>
      </section>

      <section id="projects" className="bg-white text-black px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-6">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div whileHover={{ scale: 1.05 }} key={i} className="overflow-hidden rounded shadow-lg">
                <img src={`/projects/${i}.jpg`} alt={`project-${i}`} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl mb-6">CONTACT</h2>
        <p className="text-lg mb-2">Email: billygahng@gmail.com</p>
        <p className="text-lg">Phone: 010-3047-7057</p>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6 border-t border-gray-700">
        ⓒ BILLYGAHNG AGENCY All Rights Reserved.
      </footer>
    </main>
  );
}
