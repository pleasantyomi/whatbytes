import Image from "next/image";

interface AvatarProps {
  className: string;
}

export default function Avatar({ className }: AvatarProps) {
  return (
    <div>
      <Image
        src="/images/avatar.jpg"
        alt="avatar"
        quality={100}
        width={200}
        height={200}
        className={`${className} object-cover w-8 h-8 rounded-full`}
      />
    </div>
  );
}
