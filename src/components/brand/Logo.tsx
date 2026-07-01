export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center">
      <span
        className={`relative inline-block whitespace-nowrap pr-2 font-display text-[1.34rem] font-bold leading-none sm:text-[1.42rem] ${light ? "text-white" : "text-navy"}`}
      >
        Wallace Croft
        <span className="absolute right-0 top-0 h-1.5 w-1.5 -translate-y-1 bg-orange" />
      </span>
    </div>
  );
}
