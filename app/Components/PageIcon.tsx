import Image from "next/image"
export default function PageIcon() {
  return (
    <section className="pt-8 w-full mx-auto">
        <Image
            className="mx-auto"
            src="/images/prompt.png"
            alt="Prompt Icon"
            height={100}
            width={100}
            priority={true}
        />
    </section>
    
  )
}
