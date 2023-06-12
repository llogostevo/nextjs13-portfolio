import Link from "next/link"

export default function HyperLink({src, title}:HyperLinkProps) {
  return (
    <Link className="no-underline hover:underline hover:decoration-4" href={src}>{title}</Link>
  )
}
