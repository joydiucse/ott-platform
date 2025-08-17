import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function FooterDiv() {
  return (
    <div className="bg-[#121717] text-white w-full relative px-12 md:px-32 py-6">
      {/* Top row: OTT + Links */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 min-h-[36px]">
        <span className="text-2xl font-bold">OTT Platform</span>
        {/* <img src="../../assets/images/Logo.png" alt="" /> */}
        <div className="flex items-center gap-8 text-[14px] leading-none font-medium mt-2 md:mt-0 flex-wrap">
          <p className="text-base xl:text-lg cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="text-base xl:text-lg cursor-pointer hover:underline">FAQ</p>
          <p className="text-base xl:text-lg cursor-pointer hover:underline">Privacy Policy</p>
          <p className="text-base xl:text-lg cursor-pointer hover:underline">Help</p>
        </div>
      </div>

      <hr className="border-white/15" />

      {/* Download + Social */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-5">
        {/* Download buttons */}
        <div>
          <p className="font-semibold text-[15px] leading-none mb-3">Download App For</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://play.google.com/store/"
              className="h-10 w-[170px] rounded-md overflow-hidden border border-white/20 hover:border-white/40 transition"
            >
              <img
                src="https://www.bioscopeplus.com/images/google-play.png?w=384&q=75"
                alt="Get it on Google Play"
                className="h-full w-full object-cover"
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/"
              className="h-10 w-[170px] rounded-md overflow-hidden border border-white/20 hover:border-white/40 transition"
            >
              <img
                src="https://www.bioscopeplus.com/images/apple-play.png?w=384&q=75"
                alt="Download on the App Store"
                className="h-full w-full object-cover"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/"
              className="h-10 w-[170px] rounded-md overflow-hidden border border-white/20 hover:border-white/40 transition"
            >
              <img
                src="https://www.bioscopeplus.com/images/android-tv.png?w=384&q=75"
                alt="Watch on Android TV"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div className="md:justify-self-end flex flex-col items-start md:items-end">
          <p className="font-semibold text-[15px] leading-none mb-3 md:text-right">Follow Us</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-white/15 my-6" />

      {/* Bottom copyright */}
      <div className="text-center text-white/60 text-[13px] leading-none">
        © All rights reserved | 2025 Nexdecade Technology (Pvt.) Ltd
      </div>
    </div>
  );
}