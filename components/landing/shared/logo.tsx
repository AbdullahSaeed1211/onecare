interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={`font-bold text-xl md:text-2xl ${className || ""}`}
      style={{ fontFamily: 'Onest, sans-serif' }}
    >
      OneCare
    </div>
  );
};
