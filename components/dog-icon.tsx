interface DogIconProps {
  className?: string
}

export function DogIcon({ className }: DogIconProps) {
  return (
    <div className={`rounded-full bg-[#F7941D] p-4 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-white"
      >
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
        <path d="M14.328 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5" />
        <path d="M8 14v.5" />
        <path d="M16 14v.5" />
        <path d="M11.5 17c.667.333 1.333.333 2 0" />
        <path d="M12 16v-3" />
      </svg>
    </div>
  )
}

