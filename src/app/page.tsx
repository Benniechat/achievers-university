import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="font-['Inter'] text-on-surface">
      {/* Top Navigation */}
      <header className="absolute top-0 w-full z-50 py-6" id="top-nav">
        <div className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center">
            <Image alt="Achievers University Logo" className="h-10 md:h-14 w-auto object-contain" src="/logo.png" width={200} height={56} />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-white hover:text-cta transition-colors font-medium text-sm" href="/">Home</Link>
            <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#about">About</Link>
            <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#courses">Courses</Link>
            <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/affiliate">Become an Affiliate</Link>
            <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#testimonials">Testimonials</Link>
            <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#faq">FAQ</Link>
            <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#contact">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-white border border-white/30 px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">lock</span>
              Login
            </Link>
            <Link href="/register" className="bg-cta text-primary px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_4px_14px_0_rgba(253,191,15,0.39)]">
              Join Now
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <button className="lg:hidden text-white p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-[140px] pb-[80px] bg-gradient-radial min-h-[850px] flex flex-col justify-center border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-6 z-10 text-white">
              <div className="inline-flex items-center border border-cta/40 bg-cta/10 text-cta rounded px-3 py-1.5 w-fit text-xs font-bold tracking-widest uppercase">
                LEARN. PRACTICE. EARN.
              </div>
              
              <h1 className="text-5xl md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-white">
                Learn High-Income <br/>
                <span className="text-cta">AI & Digital Skills</span><br/>
                and Build a Profitable<br/>
                Online Business
              </h1>
              
              <p className="text-lg text-white/80 max-w-[540px] leading-relaxed">
                Join Achievers&apos; University and gain practical skills, mentorship, and access to opportunities that can help you earn consistently from anywhere in the world.
              </p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-xl">psychology</span>
                  <span className="text-xs font-medium text-white/90">Practical<br/>Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-xl">record_voice_over</span>
                  <span className="text-xs font-medium text-white/90">Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-xl">storefront</span>
                  <span className="text-xs font-medium text-white/90">Client<br/>Marketplace</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-xl">all_inclusive</span>
                  <span className="text-xs font-medium text-white/90">Lifetime<br/>Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-xl">verified</span>
                  <span className="text-xs font-medium text-white/90">Money Back<br/>Guarantee*</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 items-start sm:items-center">
                <Link href="/register" className="bg-cta text-primary px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(253,191,15,0.3)]">
                  Join Now for ₦20,000
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <button className="text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-cta">play_circle</span>
                  Watch Free Training
                </button>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <span className="material-symbols-outlined text-cta text-sm">verified_user</span>
                <p className="text-sm text-white/80">Limited Time Offer for the First <span className="text-cta font-bold">15 People Only!</span></p>
                <span className="material-symbols-outlined text-cta text-xl ml-2 rotate-90">subdirectory_arrow_right</span>
              </div>
            </div>

            <div className="relative z-10 lg:ml-8 mt-10 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video group">
                {/* Introduction tag */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-black/80 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">INTRODUCTION</span>
                  <h3 className="text-white font-bold text-2xl mt-3">Achievers&apos; University<br/>Overview</h3>
                </div>
                {/* Custom Play button overlay (mock) */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
                   <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(253,191,15,0.4)] hover:scale-105 transition-transform">
                     <span className="material-symbols-outlined text-primary text-3xl ml-1">play_arrow</span>
                   </div>
                </div>
                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="w-full h-full object-cover opacity-80" frameBorder="0" src="https://www.youtube.com/embed/kJBY0O9Nt_w?autoplay=0&amp;loop=1&amp;playlist=kJBY0O9Nt_w&amp;controls=1&amp;showinfo=0&amp;rel=0" title="Achievers University Training">
                </iframe>
              </div>
              
              {/* Trust Badge Floating */}
              <div className="absolute -bottom-10 right-10 bg-[#020B1F]/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#020B1F] bg-gray-300 overflow-hidden"><Image src="https://via.placeholder.com/40" alt="Student" width={40} height={40}/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#020B1F] bg-gray-300 overflow-hidden"><Image src="https://via.placeholder.com/40" alt="Student" width={40} height={40}/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#020B1F] bg-gray-300 overflow-hidden"><Image src="https://via.placeholder.com/40" alt="Student" width={40} height={40}/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#020B1F] bg-gray-300 overflow-hidden"><Image src="https://via.placeholder.com/40" alt="Student" width={40} height={40}/></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-cta text-sm">
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                  </div>
                  <p className="text-white/80 text-xs mt-1">Trusted by thousands of students<br/>ready to build their online success.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Statistics Strip */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-between items-center gap-8 rounded-xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-6 -mt-16 relative z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">5,000+</h4>
                  <p className="text-sm text-gray-500 font-medium">Students Enrolled</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden lg:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">150+</h4>
                  <p className="text-sm text-gray-500 font-medium">Countries Reached</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden lg:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-2xl">play_circle</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">50+</h4>
                  <p className="text-sm text-gray-500 font-medium">In-Demand Skills</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden lg:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center text-cta">
                  <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings:"'FILL' 1"}}>emoji_events</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">98%</h4>
                  <p className="text-sm text-gray-500 font-medium">Student Satisfaction</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden lg:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center text-cta">
                  <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings:"'FILL' 1"}}>verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">30-Day</h4>
                  <p className="text-sm text-gray-500 font-medium">Money Back Guarantee*</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-gray-50 py-24" id="courses">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-2 block">HIGH-INCOME SKILLS</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">What You Will Learn</h2>
              <p className="text-lg text-gray-600">In-demand skills that can help you earn consistently online.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Course 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-[#1A1A2E] relative flex items-center justify-center p-4">
                  {/* Placeholder for AI Mastery Graphic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                  <div className="relative z-20 text-white text-center">
                     <span className="material-symbols-outlined text-6xl text-blue-400 mb-2">smart_toy</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-blue-600 mb-4">
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>robot_2</span>
                    <h3 className="font-bold text-xl text-primary">AI Mastery</h3>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {["AI Studio Photos", "AI Marketing Videos", "AI Cartoons & Animation", "Photo Manipulation", "Flyer & Poster Design"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-blue-500 text-[18px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Course 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-[#0F362F] relative flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                  <div className="relative z-20 text-white text-center">
                     <span className="material-symbols-outlined text-6xl text-green-400 mb-2">business_center</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-green-600 mb-4">
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>domain</span>
                    <h3 className="font-bold text-xl text-primary">Digital Business</h3>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {["Client Acquisition", "Freelancing Mastery", "Brand Building", "Service Pricing", "Online Business Setup"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Course 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-[#2A1B38] relative flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                  <div className="relative z-20 text-white text-center">
                     <span className="material-symbols-outlined text-6xl text-purple-400 mb-2">forum</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-purple-600 mb-4">
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>mark_chat_read</span>
                    <h3 className="font-bold text-xl text-primary">WhatsApp Marketing</h3>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {["Grow Your Contacts Organically", "WhatsApp Status Strategy", "Engage & Build Trust", "Influence & Monetization", "Daily Income Strategies"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-purple-500 text-[18px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="text-purple-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Course 4 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-[#4A3219] relative flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                  <div className="relative z-20 text-white text-center">
                     <span className="material-symbols-outlined text-6xl text-yellow-400 mb-2">account_balance_wallet</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-yellow-600 mb-4">
                    <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>payments</span>
                    <h3 className="font-bold text-xl text-primary">Digital Payments</h3>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {["PayPal Account Setup", "Verified Account Guide", "Currency Exchange Basics", "Payment Solutions", "Online Business Compliance"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-yellow-500 text-[18px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="text-yellow-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-[#010613] py-24 border-t border-white/5" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-2 block">REAL SKILLS. REAL RESULTS.</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Success Stories from Our Students</h2>
            </div>

            <div className="flex items-center justify-between gap-6">
              {/* Left Arrow */}
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex shrink-0">
                <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {/* Testimonial 1 */}
                <div className="bg-[#020B1F] border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
                  <p className="text-white/80 text-sm leading-relaxed flex-1">
                    &quot;The AI skills I learned here changed everything for me. I now make money daily doing what I love.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600">
                      <Image src="https://via.placeholder.com/48" alt="Joy U." width={48} height={48}/>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Joy U.</h4>
                      <p className="text-white/60 text-xs">Graphic Designer</p>
                      <div className="flex text-cta text-xs mt-1">
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-[#020B1F] border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
                  <p className="text-white/80 text-sm leading-relaxed flex-1">
                    &quot;Within 2 months, I started getting clients from the marketplace and my income increased massively.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600">
                      <Image src="https://via.placeholder.com/48" alt="Emeka P." width={48} height={48}/>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Emeka P.</h4>
                      <p className="text-white/60 text-xs">Digital Marketer</p>
                      <div className="flex text-cta text-xs mt-1">
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-[#020B1F] border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
                  <p className="text-white/80 text-sm leading-relaxed flex-1">
                    &quot;The mentorship and WhatsApp strategies helped me build a strong brand and consistent income.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600">
                      <Image src="https://via.placeholder.com/48" alt="Fatima A." width={48} height={48}/>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Fatima A.</h4>
                      <p className="text-white/60 text-xs">Entrepreneur</p>
                      <div className="flex text-cta text-xs mt-1">
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex shrink-0">
                <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-8 h-2 rounded-full bg-cta"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-radial py-24 border-t border-white/10 relative overflow-hidden">
          {/* Faint skyline/building silhouettes could be an image, we use gradient for now */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-[50px] font-extrabold text-white leading-tight">
                Your Future Starts with<br/>
                One Decision <span className="text-cta">Today!</span>
              </h2>
              <p className="text-white/80 text-lg max-w-md">
                Join Achievers&apos; University now and gain access to high-income skills, mentorship, and opportunities that can change your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start sm:items-center">
                <Link href="/register" className="bg-cta text-primary px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Join Now for ₦20,000
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <button className="text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                  Watch Free Training
                  <span className="material-symbols-outlined text-cta">play_circle</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:pl-12">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <h4 className="text-white font-bold text-sm">Learn From<br/>Anywhere</h4>
                <p className="text-white/60 text-xs">Study at your own<br/>pace, any time.</p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-cta/10 flex items-center justify-center text-cta">
                  <span className="material-symbols-outlined text-3xl">emoji_events</span>
                </div>
                <h4 className="text-white font-bold text-sm">Mentorship<br/>& Support</h4>
                <p className="text-white/60 text-xs">Get guidance<br/>every step<br/>of the way.</p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                </div>
                <h4 className="text-white font-bold text-sm">Practical Projects<br/>& Assessment</h4>
                <p className="text-white/60 text-xs">Build real projects<br/>and get certified.</p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                  <span className="material-symbols-outlined text-3xl">monetization_on</span>
                </div>
                <h4 className="text-white font-bold text-sm">Earn While<br/>You Learn</h4>
                <p className="text-white/60 text-xs">Turn skills into<br/>income fast.</p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}