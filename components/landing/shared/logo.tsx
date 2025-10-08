import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Image
        src="/logo.png"
        alt="OneCare Logo"
        width={40}
        height={40}
        className="w-10 h-10"
        priority
      />
      <div
        className="font-bold text-xl md:text-2xl"
        style={{ fontFamily: 'Onest, sans-serif' }}
      >
        One<span className="text-accent">Care</span>
      </div>
    </div>
  );
};
