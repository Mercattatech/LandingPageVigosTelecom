interface VigosLogoProps {
  className?: string;
  height?: number;
}

export function VigosLogo({ className = "h-8 sm:h-10 w-auto", height = 36 }: VigosLogoProps) {
  return (
    <svg
      viewBox="0 0 520 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: `${height}px`, width: "auto" }}
    >
      {/* V */}
      <path
        d="M20 30H75L110 135L150 30H200L140 160H85L20 30Z"
        fill="#FFFFFF"
      />
      {/* I */}
      <path
        d="M195 30H245L215 160H165L195 30Z"
        fill="#FFFFFF"
      />
      {/* G */}
      <path
        d="M335 30C280 30 240 70 230 115C220 150 245 160 280 160C325 160 350 140 355 110H305L308 95H385C380 135 340 175 270 175C215 175 185 145 195 95C210 35 265 15 340 15C370 15 395 22 410 32L385 62C375 42 360 30 335 30Z"
        fill="#FFFFFF"
      />
      {/* O */}
      <path
        d="M410 30C365 30 335 65 325 105C315 145 340 160 380 160C425 160 455 125 465 85C475 45 450 30 410 30ZM430 75C425 100 410 135 375 135C355 135 345 120 350 100C355 75 370 45 405 45C425 45 435 60 430 75Z"
        fill="#FFFFFF"
      />
      {/* S */}
      <path
        d="M515 45C505 32 485 25 460 25C420 25 395 45 400 70C405 92 430 100 460 105C485 110 495 118 490 132C485 148 460 155 435 155C410 155 385 145 375 130L350 155C370 175 405 180 440 180C485 180 520 160 515 125C510 100 485 92 455 88C430 82 420 75 425 62C430 48 450 42 470 42C488 42 502 48 510 58L515 45Z"
        fill="#FFFFFF"
      />

      {/* Signal Antenna Green Dots Cluster on Top Right */}
      <g fill="#9ACB3B">
        <circle cx="450" cy="15" r="5" />
        <circle cx="465" cy="18" r="7" />
        <circle cx="482" cy="25" r="10" />
        <circle cx="498" cy="38" r="13" />
        <circle cx="510" cy="58" r="15" />
        
        <circle cx="440" cy="32" r="6" />
        <circle cx="458" cy="38" r="9" />
        <circle cx="478" cy="48" r="12" />
        <circle cx="495" cy="65" r="14" />
        
        <circle cx="448" cy="55" r="8" />
        <circle cx="468" cy="68" r="11" />
        <circle cx="485" cy="88" r="13" />
        
        <circle cx="455" cy="85" r="7" />
        <circle cx="470" cy="102" r="10" />
      </g>
    </svg>
  );
}
