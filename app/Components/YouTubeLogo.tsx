import Image from "next/image"

const imageStyle = {
    height: 'auto',
    width: '2rem',
  }
 

export default function YouTubeLogo() {
    return (
        <Image
            // className="mx-auto"
            src="/images/yt_logo_rgb_light.png"
            alt="Prompt Icon"
            height={178}
            width={794}
            style={imageStyle}
            priority={true}
        />
    )
}
