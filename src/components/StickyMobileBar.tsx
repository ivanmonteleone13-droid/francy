import { business } from "@/lib/business";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-[#7B4B6F]/10 bg-[#FFF8FA]/95 p-3 backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Snabbkontakt"
    >
      <a
        href={business.phoneLink}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#7B4B6F] bg-white py-3 text-sm font-semibold text-[#7B4B6F]"
      >
        <span aria-hidden>📞</span>
        Ring
      </a>
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F4C2C2] py-3 text-sm font-semibold text-[#4A2D42]"
      >
        <span aria-hidden>📅</span>
        Boka
      </a>
    </div>
  );
}
