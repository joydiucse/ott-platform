// src/Components/ScrollButtons.jsx
import { ArrowUp, Download } from "lucide-react";
import { useEffect, useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ScrollButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <div
                    className="hidden md:flex sm:flex fixed bottom-12 right-2
          flex flex-col items-center justify-center
          gap-5 px-3 py-4
          rounded-full shadow-xl
          bg-black/40 backdrop-blur-md
          border border-white/10
          z-50"
                >
                    {/* Download button (dummy for now) */}
                    <Tooltip>
                        <TooltipTrigger><button
                            className="hover:scale-110 transition-transform"
                            onClick={() => alert('Download button clicked! (dummy)')}
                        >
                            <Download size={26} className="text-white" />
                        </button></TooltipTrigger>
                        <TooltipContent>
                            <p>Download</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Scroll to top button */}
                    <Tooltip>
                        <TooltipTrigger>
                            <button
                            className="hover:scale-110 transition-transform"
                            onClick={scrollToTop}
                        >
                            <ArrowUp size={26} className="text-white" />
                        </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Scroll To Top</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            )}
        </>
    );
}
