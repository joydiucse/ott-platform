import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121717] text-white px-6 md:px-16 py-6 w-full fixed bottom-0 left-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 min-h-[36px]">
        <span className="text-2xl font-bold">OTT Platform</span>
        <div className="flex items-center gap-8 text-[14px] leading-none font-medium mt-2 md:mt-0">
          <p className="text-base xl:text-lg">Terms & Conditions</p>
          <p className="text-base xl:text-lg">FAQ</p>
          <p className="text-base xl:text-lg">Privacy Policy</p>
          <p className="text-base xl:text-lg">Help</p>
        </div>
      </div>

      <hr className="border-white/15" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-5">
        <div>
          <p className="font-semibold text-[15px] leading-none mb-3">Download App For</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="h-10 w-[170px] rounded-md overflow-hidden border border-white/20 hover:border-white/40 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-full w-full object-cover"
              />
            </a>

            <a
              href="#"
              className="h-10 w-[170px] rounded-md overflow-hidden border border-white/20 hover:border-white/40 transition"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-full w-full object-cover"
              />
            </a>

            <a
              href="#"
              className="h-10 w-[170px] rounded-md overflow-hidden border border-white/20 hover:border-white/40 transition"
            >
              <img
                src="https://logo.wine/logo/Android_TV.png"
                alt="Watch on Android TV"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
        </div>

        <div className="md:justify-self-end">
          <p className="font-semibold text-[15px] leading-none mb-3 md:text-right">Follow Us</p>
          <div className="flex gap-3 md:justify-end">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-white/15 my-6" />

      <div className="text-center text-white/60 text-[13px] leading-none">
        © All rights reserved | 2025 Nexdecade Technology (Pvt.) Ltd
      </div>
    </footer>
  );
}
