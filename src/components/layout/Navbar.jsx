// import { useState, useEffect } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { logo } from "../../assets";

// // ── Static data ───────────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: "Services",   href: "#services",   dropdown: true },
//   { label: "Guarantee",  href: "#guarantee",  dropdown: false },
//   { label: "Listings",   href: "#listings",   dropdown: false },
// ];

// // ── Framer Motion variants ────────────────────────────────────────────────────
// const mobileMenuVariants = {
//   closed: { height: 0, opacity: 0 },
//   open:   { height: "auto", opacity: 1, transition: { duration: 0.28, ease: "easeInOut" } },
//   exit:   { height: 0, opacity: 0, transition: { duration: 0.22, ease: "easeInOut" } },
// };

// const iconVariants = {
//   initial: { rotate: -90, opacity: 0 },
//   animate: { rotate: 0,   opacity: 1, transition: { duration: 0.18 } },
//   exit:    { rotate: 90,  opacity: 0, transition: { duration: 0.18 } },
// };

// // ─────────────────────────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled,   setScrolled]   = useState(false);

//   // Close mobile menu on resize to desktop
//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // Add shadow on scroll
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -88, opacity: 0 }}
//       animate={{ y: 0,   opacity: 1 }}
//       transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
//       className={`
//         fixed top-0 inset-x-0 z-50 bg-white
//         transition-shadow duration-300
//         ${scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.09)]" : ""}
//       `}
//     >
//       {/* ── Main bar ─────────────────────────────────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-[72px]">

//           {/* Logo */}
//           <a href="/" className="flex-shrink-0">
//             <img src={logo} alt="MovEASY" className="h-9 w-auto" />
//           </a>

//           {/* Desktop nav links — centered */}
//           <nav className="hidden lg:flex items-center gap-9">
//             {NAV_LINKS.map(({ label, href, dropdown }) => (
//               <a
//                 key={label}
//                 href={href}
//                 className="
//                   inline-flex items-center gap-[5px]
//                   text-[14.5px] font-medium text-gray-700
//                   hover:text-gray-950 transition-colors duration-150
//                 "
//               >
//                 {label}
//                 {dropdown && (
//                   <ChevronDown
//                     size={13}
//                     strokeWidth={2.5}
//                     className="text-gray-400 mt-[1px]"
//                   />
//                 )}
//               </a>
//             ))}
//           </nav>

//           {/* Desktop CTA buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <button
//               className="
//                 px-5 py-[9px] text-[13.5px] font-semibold
//                 text-gray-950 border-[1.5px] border-gray-950 rounded-full
//                 hover:bg-gray-950 hover:text-white
//                 active:scale-[0.97]
//                 transition-all duration-200
//               "
//             >
//               Book A Consultation
//             </button>
//             <button
//               className="
//                 px-5 py-[9px] text-[13.5px] font-semibold
//                 text-white bg-[#EF4444] rounded-full
//                 hover:bg-[#DC2626]
//                 active:scale-[0.97]
//                 transition-all duration-200
//                 shadow-sm
//               "
//             >
//               Login
//             </button>
//           </div>

//           {/* Mobile: hamburger toggle */}
//           <button
//             onClick={() => setMobileOpen((v) => !v)}
//             className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
//             aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               <motion.span
//                 key={mobileOpen ? "x" : "menu"}
//                 variants={iconVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="block"
//               >
//                 {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//               </motion.span>
//             </AnimatePresence>
//           </button>

//         </div>
//       </div>

//       {/* ── Mobile Menu ──────────────────────────────────────────────────── */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             key="mobile-menu"
//             variants={mobileMenuVariants}
//             initial="closed"
//             animate="open"
//             exit="exit"
//             className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
//           >
//             <div className="px-6 py-5 space-y-1">
//               {NAV_LINKS.map(({ label, href, dropdown }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   onClick={() => setMobileOpen(false)}
//                   className="
//                     flex items-center gap-1 py-2.5
//                     text-[15px] font-medium text-gray-800
//                     hover:text-gray-950 transition-colors
//                   "
//                 >
//                   {label}
//                   {dropdown && <ChevronDown size={13} className="text-gray-400" />}
//                 </a>
//               ))}

//               {/* Mobile CTA buttons */}
//               <div className="pt-4 pb-1 flex flex-col gap-3 border-t border-gray-100 mt-2">
//                 <button
//                   className="
//                     w-full py-3 text-sm font-semibold
//                     text-gray-950 border-[1.5px] border-gray-950 rounded-full
//                     hover:bg-gray-950 hover:text-white transition-all
//                   "
//                 >
//                   Book A Consultation
//                 </button>
//                 <button
//                   className="
//                     w-full py-3 text-sm font-semibold
//                     text-white bg-[#EF4444] rounded-full
//                     hover:bg-[#DC2626] transition-all
//                   "
//                 >
//                   Login
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }
// src/components/layout/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../../assets/logo/moveasy.svg";
import { useAuth } from "../../context/AuthContext";

const NAV_LINKS = [
  { label: "Services",  href: "/services",  dropdown: false },
  { label: "Guarantee", href: "/guarantee", dropdown: false },
  { label: "Listings",  href: "/listings",   dropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const displayName = profile?.name || user?.displayName || user?.email || "";

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.09)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logoSvg} alt="MovEASY" className="h-9 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map(({ label, href, dropdown }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-[5px] text-[14.5px] font-medium text-gray-700 hover:text-gray-950 transition-colors duration-150"
              >
                {label}
                {dropdown && <ChevronDown size={13} strokeWidth={2.5} className="text-gray-400 mt-[1px]" />}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-[9px] text-[13.5px] font-semibold text-gray-950 border-[1.5px] border-gray-950 rounded-full hover:bg-gray-950 hover:text-white active:scale-[0.97] transition-all duration-200">
              Book A Consultation
            </button>
            {user ? (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-[13.5px] font-medium text-gray-700">
                  <User size={15} className="text-gray-400" />
                  {displayName}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-4 py-[9px] text-[13.5px] font-semibold text-gray-600 border-[1.5px] border-gray-300 rounded-full hover:bg-gray-100 active:scale-[0.97] transition-all duration-200"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-[9px] text-[13.5px] font-semibold text-white bg-[#EF4444] rounded-full hover:bg-[#DC2626] active:scale-[0.97] transition-all duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-5 space-y-1">
              {NAV_LINKS.map(({ label, href, dropdown }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1 py-2.5 text-[15px] font-medium text-gray-800 hover:text-gray-950 transition-colors"
                >
                  {label}
                  {dropdown && <ChevronDown size={13} className="text-gray-400" />}
                </a>
              ))}
              <div className="pt-4 pb-1 flex flex-col gap-3 border-t border-gray-100 mt-2">
                <button className="w-full py-3 text-sm font-semibold text-gray-950 border-[1.5px] border-gray-950 rounded-full hover:bg-gray-950 hover:text-white transition-all">
                  Book A Consultation
                </button>
                {user ? (
                  <>
                    <div className="flex items-center gap-2 py-2 text-sm font-medium text-gray-700">
                      <User size={15} className="text-gray-400" />
                      {displayName}
                    </div>
                    <button
                      onClick={() => { handleLogout(); setMobileOpen(false); }}
                      className="w-full py-3 text-sm font-semibold text-gray-600 border-[1.5px] border-gray-300 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-1.5"
                    >
                      <LogOut size={14} />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full py-3 text-sm font-semibold text-white bg-[#EF4444] rounded-full hover:bg-[#DC2626] transition-all text-center block"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
