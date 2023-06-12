import Image from "next/image"
export default function ProfilePic() {
  return (
    <section className="pt-8 w-full mx-auto">
        <Image
            className="mx-auto border p-2 border-black drop-shadow"
            src="/images/lloyd.png"
            alt="Lloyd Profile"
            height={200}
            width={200}
            priority={true}
        />
    </section>
    
  )
}
