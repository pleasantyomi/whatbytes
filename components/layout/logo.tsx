import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="/logo/logo.png"
        alt="logo"
        width={200}
        height={200}
        quality={100}
        className="hidden md:block"
      />

      <Image
        src="/logo/halfLogo.png"
        alt="logo"
        width={200}
        height={200}
        quality={100}
        className="md:hidden block h-auto w-12"
      />
    </div>
  );
}
