import Image from "next/image"

const imageStyle = {
    height: 'auto',
    width: '2rem',
  }
 

export default function LinkedInLogo() {
    return (
        <Image
            // className="mx-auto"
            src="/images/LI-Logo.png"
            alt="Prompt Icon"
            height={540}
            width={2212}
            style={imageStyle}
            priority={true}
        />
    )
}
