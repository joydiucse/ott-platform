import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white/10 dark:bg-[#121717] text-[#111618] dark:text-white w-full relative py-6 pt-12 backdrop-blur-md">

      {/* Container same as navbar */}
      <div className="container">
        
        {/* Header section with platform name and quick links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 min-h-[36px]">
          <span className="text-2xl font-bold">OTT Platform</span>

          {/* Quick navigation links */}
          <div className="flex items-center gap-8 text-[14px] leading-none font-medium mt-2 md:mt-0 flex-wrap">
            <p className="text-[#111618] dark:text-white text-base xl:text-lg cursor-pointer hover:underline">
              Terms & Conditions
            </p>
            <p className="text-[#111618] dark:text-white text-base xl:text-lg cursor-pointer hover:underline">
              FAQ
            </p>
            <p className="text-[#111618] dark:text-white text-base xl:text-lg cursor-pointer hover:underline">
              Privacy Policy
            </p>
            <p className="text-[#111618] dark:text-white text-base xl:text-lg cursor-pointer hover:underline">
              Help
            </p>
          </div>
        </div>

        <hr className="border-black/10 dark:border-white/15" />

        {/* Main content section with download options and social media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-5">
          {/* Download app section */}
          <div>
            <p className="font-semibold text-[15px] leading-none mb-3 text-[#111618] dark:text-white">
              Download App For
            </p>
            <div className="flex gap-3 flex-wrap">
              {/* Google Play Store button */}
              <a
                href="https://play.google.com/store/"
                className="h-10 w-[170px] rounded-md overflow-hidden border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition"
              >
                <img
                  src="https://www.bioscopeplus.com/images/google-play.png?w=384&q=75"
                  alt="Get it on Google Play"
                  className="h-full w-full object-cover"
                />
              </a>

              {/* Apple App Store button */}
              <a
                href="https://apps.apple.com/us/app/"
                className="h-10 w-[170px] rounded-md overflow-hidden border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition"
              >
                <img
                  src="https://www.bioscopeplus.com/images/apple-play.png?w=384&q=75"
                  alt="Download on the App Store"
                  className="h-full w-full object-cover"
                />
              </a>

              {/* Android TV button */}
              <a
                href="https://play.google.com/store/apps/"
                className="h-10 w-[170px] rounded-md overflow-hidden border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition"
              >
                <img
                  src="https://www.bioscopeplus.com/images/android-tv.png?w=384&q=75"
                  alt="Watch on Android TV"
                  className="h-full w-full object-cover"
                />
              </a>
            </div>
          </div>

          {/* Social media links section */}
          <div className="md:justify-self-end flex flex-col items-start md:items-end">
            <p className="font-semibold text-[15px] leading-none mb-3 md:text-right text-[#111618] dark:text-white">
              Follow Us
            </p>
            <div className="flex gap-3">
              {/* Facebook icon link */}
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 flex items-center justify-center"
              >
                <FaFacebookF size={18} className="text-[#111618] dark:text-white" />
              </a>

              {/* YouTube icon link */}
              <a
                href="https://www.youtube.com/"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 flex items-center justify-center"
              >
                <FaYoutube size={18} className="text-[#111618] dark:text-white" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-black/10 dark:border-white/15 my-6" />

        {/* Copyright notice */}
        <div className="text-center text-[#111618]/60 dark:text-white/60 text-[13px] leading-none">
          © All rights reserved | 2025 Nexdecade Technology (Pvt.) Ltd
        </div>
      </div>
    </div>
  );
}
