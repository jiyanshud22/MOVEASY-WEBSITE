// import { motion } from "framer-motion";
// import {
//   phoneMockup,
//   ratingCard,
//   videoThumbnailCard,
//   engagementChartCard,
//   itemsSoldCard,
//   socialPostCard,
// } from "../../assets";

// const EASE = [0.22, 1, 0.36, 1];

// const fadeUp = (delay = 0) => ({
//   initial:    { opacity: 0, y: 28 },
//   animate:    { opacity: 1, y: 0 },
//   transition: { duration: 0.65, delay, ease: EASE },
// });

// function FloatingCard({
//   src,
//   alt,
//   className,
//   entranceDelay,
//   xFrom,
//   floatDelay = 0,
// }) {
//   return (
//     <motion.div
//       className={`absolute ${className}`}
//       initial={{ opacity: 0, x: xFrom }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.72, delay: entranceDelay, ease: EASE }}
//     >
//       <motion.img
//         src={src}
//         alt={alt}
//         className="w-full drop-shadow-xl select-none pointer-events-none"
//         draggable={false}
//         animate={{ y: [0, -9, 0] }}
//         transition={{
//           duration: 3.6 + floatDelay * 0.25,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "loop",
//           delay: entranceDelay + 0.72 + floatDelay * 0.4,
//         }}
//       />
//     </motion.div>
//   );
// }

// export default function Hero() {
//   return (
//     <section
//       className="
//         relative w-full
//         min-h-[calc(100vh-72px)]
//         flex items-center
//         pt-10 pb-16
//         overflow-hidden bg-white
//       "
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
//         <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-4">

//           {/* ── Left: Text Content ─────────────────────────────────────── */}
//           <div className="max-w-[540px]">

//             <motion.h1
//               {...fadeUp(0)}
//               className="
//                 text-[42px] sm:text-[56px] lg:text-[72px]
//                 font-extrabold text-gray-950
//                 leading-[1.05] tracking-tight
//               "
//             >
//               <span className="block">Move To A New</span>
//               <span className="block">City - Without</span>
//               <span className="block">The Chaos</span>
//             </motion.h1>

//             <motion.p
//               {...fadeUp(0.15)}
//               className="
//                 mt-5 text-[15px] sm:text-[15.5px] text-gray-500
//                 leading-[1.78] max-w-[430px]
//               "
//             >
//               We Understand Your Needs, Connect You To The Right Brokers, And
//               Manage Your Move End-To-End With Speed And Trust. And 100%
//               Secure Deposit Protection. Moveasy Makes Relocating Seamless.
//             </motion.p>

//             <motion.div
//               {...fadeUp(0.3)}
//               className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
//             >
//               <button
//                 className="
//                   px-6 sm:px-7 py-[12px] sm:py-[13px]
//                   text-[14px] sm:text-[14.5px] font-semibold
//                   text-white bg-gray-950 rounded-full
//                   hover:bg-gray-800
//                   active:scale-[0.975]
//                   transition-all duration-200
//                 "
//               >
//                 Find My New Home
//               </button>

//               <button
//                 className="
//                   px-6 sm:px-7 py-[12px] sm:py-[13px]
//                   text-[14px] sm:text-[14.5px] font-semibold
//                   text-white bg-[#EF4444] rounded-full
//                   hover:bg-[#DC2626]
//                   active:scale-[0.975]
//                   transition-all duration-200
//                   shadow-[0_6px_22px_rgba(239,68,68,0.32)]
//                 "
//               >
//                 View Webinars
//               </button>
//             </motion.div>
//           </div>

//           {/* ── Right: Phone + Floating Cards ─────────────────────────── */}
//           {/*
//             FIX 1: overflow-hidden clips cards that bleed into the left column.
//             FIX 2: Fixed pixel canvas widths per breakpoint (not w-full) so
//                    absolute card positions are predictable and the phone centers correctly.
//             FIX 3: Phone renders at xs/sm via explicit h-[360px] (not just lg).
//           */}
//           <div className="flex justify-center items-center overflow-hidden">

//             {/* Fixed-size composition canvas — phone + cards are positioned inside */}
//             <div
//               className="
//                 relative
//                 w-[300px]   h-[480px]
//                 sm:w-[460px] sm:h-[580px]
//                 lg:w-[540px] lg:h-[650px]
//               "
//             >

//               {/* ── Phone Mockup — always centered in canvas ── */}
//               <motion.img
//                 src={phoneMockup}
//                 alt="MovEASY mobile app"
//                 initial={{ opacity: 0, scale: 0.88, y: 20 }}
//                 animate={{ opacity: 1, scale: 1,    y: 0 }}
//                 transition={{ duration: 0.82, delay: 0.1, ease: EASE }}
//                 className="
//                   absolute left-[20%] top-[10%]
//                   translate-x-1/2 translate-y-1/2
//                   h-[360px] sm:h-[480px] lg:h-[540px]
//                   w-auto z-10
//                   drop-shadow-2xl
//                   select-none pointer-events-none
//                 "
//                 draggable={false}
//               />

//               {/* ── Floating Cards (sm and above only) ── */}

//               {/* 5-Star Rating — upper left */}
//               <FloatingCard
//                 src={ratingCard}
//                 alt="5.0 Traveler Rating"
//                 className="top-[8%] left-[0%] w-[140px] sm:w-[158px] lg:w-[176px] z-20 hidden sm:block"
//                 entranceDelay={0.52}
//                 xFrom={-32}
//                 floatDelay={0}
//               />

//               {/* Items Sold — lower left */}
//               <FloatingCard
//                 src={itemsSoldCard}
//                 alt="Items sold this week"
//                 className="bottom-[13%] left-[3%] w-[132px] sm:w-[148px] lg:w-[164px] z-20 hidden sm:block"
//                 entranceDelay={0.67}
//                 xFrom={-32}
//                 floatDelay={1.4}
//               />

//               {/* Video Thumbnail — upper right */}
//               <FloatingCard
//                 src={videoThumbnailCard}
//                 alt="Virtual Tour: Skyline Loft"
//                 className="top-[2%] right-[1%] w-[140px] sm:w-[158px] lg:w-[178px] z-20 hidden sm:block"
//                 entranceDelay={0.58}
//                 xFrom={32}
//                 floatDelay={0.6}
//               />

//               {/* Engagement Chart — middle right */}
//               <FloatingCard
//                 src={engagementChartCard}
//                 alt="40% Efficiency increase"
//                 className="top-[39%] right-[-1%] w-[132px] sm:w-[148px] lg:w-[164px] z-20 hidden sm:block"
//                 entranceDelay={0.72}
//                 xFrom={32}
//                 floatDelay={1.0}
//               />

//               {/* Social Post Card — lower right */}
//               <FloatingCard
//                 src={socialPostCard}
//                 alt="Social post card"
//                 className="bottom-[9%] right-[2%] w-[104px] sm:w-[118px] lg:w-[136px] z-20 hidden sm:block"
//                 entranceDelay={0.78}
//                 xFrom={32}
//                 floatDelay={1.8}
//               />

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/sections/Hero.jsx

import { motion } from "framer-motion";
import {
  phoneMockup,
  ratingCard,
  videoThumbnailCard,
  engagementChartCard,
  itemsSoldCard,
  socialPostCard,
} from "../../assets";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
});

function FloatingCard({
  src,
  alt,
  className,
  entranceDelay,
  xFrom,
  floatDelay = 0,
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, x: xFrom }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.72, delay: entranceDelay, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full drop-shadow-xl select-none pointer-events-none"
        draggable={false}
        animate={{ y: [0, -9, 0] }}
        transition={{
          duration: 3.6 + floatDelay * 0.25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: entranceDelay + 0.72 + floatDelay * 0.4,
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="
        relative w-full
        min-h-[calc(100vh-72px)]
        flex items-center
        pt-[88px] sm:pt-[96px] lg:pt-[110px] pb-16
        overflow-hidden bg-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-4">
          {/* Left: Text Content */}
          <div className="max-w-[540px] mx-auto lg:mx-0 text-center lg:text-left">
            <motion.h1
              {...fadeUp(0)}
              className="
                text-[40px] sm:text-[56px] lg:text-[72px]
                font-extrabold text-gray-950
                leading-[1.05] tracking-tight
              "
            >
              <span className="block">Move To A New</span>
              <span className="block">City - Without</span>
              <span className="block">The Chaos</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.15)}
              className="
                mt-5 text-[15px] sm:text-[15.5px] text-gray-500
                leading-[1.78] max-w-[430px] mx-auto lg:mx-0
              "
            >
              We Understand Your Needs, Connect You To The Right Brokers, And
              Manage Your Move End-To-End With Speed And Trust. And 100%
              Secure Deposit Protection. Moveasy Makes Relocating Seamless.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <button
                className="
                  px-6 sm:px-7 py-[12px] sm:py-[13px]
                  text-[14px] sm:text-[14.5px] font-semibold
                  text-white bg-gray-950 rounded-full
                  hover:bg-gray-800
                  active:scale-[0.975]
                  transition-all duration-200
                "
              >
                Find My New Home
              </button>

              <button
                className="
                  px-6 sm:px-7 py-[12px] sm:py-[13px]
                  text-[14px] sm:text-[14.5px] font-semibold
                  text-white bg-[#EF4444] rounded-full
                  hover:bg-[#DC2626]
                  active:scale-[0.975]
                  transition-all duration-200
                  shadow-[0_6px_22px_rgba(239,68,68,0.32)]
                "
              >
                View Webinars
              </button>
            </motion.div>
          </div>

          {/* Right: Phone + Floating Cards */}
          <div className="flex justify-center items-center overflow-hidden">
            <div
              className="
                relative
                w-[340px] h-[500px]
                sm:w-[460px] sm:h-[580px]
                lg:w-[540px] lg:h-[650px]
              "
            >
              {/* Phone Mockup */}
              {/* Phone Mockup */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <motion.img
                  src={phoneMockup}
                  alt="MovEASY mobile app"
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.82, delay: 0.1, ease: EASE }}
                  className="h-[380px] sm:h-[460px] lg:h-[540px]
                              w-auto
                              drop-shadow-2xl
                              select-none
                            "
                  draggable={false}
                />
              </div>

              {/* Floating Cards — visible on mobile too */}

              {/* 5-Star Rating — upper left */}
              <FloatingCard
                src={ratingCard}
                alt="5.0 Traveler Rating"
                className="
                  top-[6%] left-[-2%] w-[176px]
                  z-20
                "
                entranceDelay={0.52}
                xFrom={-26}
                floatDelay={0}
              />

              {/* Video Thumbnail — upper right */}
              <FloatingCard
                src={videoThumbnailCard}
                alt="Virtual Tour: Skyline Loft"
                className="
                  top-[3%] right-[-2%]
                  w-[130px] sm:w-[158px] lg:w-[178px]
                  z-20
                "
                entranceDelay={0.58}
                xFrom={26}
                floatDelay={0.6}
              />

              {/* Engagement Chart — middle right */}
              <FloatingCard
                src={engagementChartCard}
                alt="40% Efficiency increase"
                className="
                  top-[40%] right-[-4%]
                  w-[120px] sm:w-[148px] lg:w-[164px]
                  z-20
                "
                entranceDelay={0.72}
                xFrom={26}
                floatDelay={1.0}
              />

              {/* Items Sold — lower left */}
              <FloatingCard
                src={itemsSoldCard}
                alt="Items sold this week"
                className="
                  bottom-[10%] left-[-2%]
                  w-[130px] sm:w-[148px] lg:w-[164px]
                  z-20
                "
                entranceDelay={0.67}
                xFrom={-26}
                floatDelay={1.4}
              />

              {/* Social Post Card — lower right */}
              <FloatingCard
                src={socialPostCard}
                alt="Social post card"
                className="
                  bottom-[8%] right-[1%]
                  w-[90px] sm:w-[118px] lg:w-[136px]
                  z-20
                "
                entranceDelay={0.78}
                xFrom={26}
                floatDelay={1.8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}