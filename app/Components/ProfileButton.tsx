import Link from "next/link"

export default function ProfileButton({src, title}: Partial<ProfileButtonProps>) {
  return (
    <Link className="profile-button border border-black border-solid p-2 w-40 text-center inline-block bg-white text-black" href={src}>{title}</Link>
  )
}
