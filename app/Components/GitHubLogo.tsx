import Image from "next/image"

const imageStyle = {
    height: 'auto',
    width: '2rem',
  }
 
  
export default function GitHubLogo() {
    return (
        <Image
            src="/images/GitHub_Logo.png"
            alt="Prompt Icon"
            height={410}
            width={1000}
            style={imageStyle}
            priority={true}
        />
    )
}
