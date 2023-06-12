import HyperLink from "./HyperLink"
export default function Footer() {
  return (
    <div className="w-full mx-auto grid gap-8 grid-cols-2 prose prose-slate">
          <div className="flex flex-col items-center ">
            <h2>Social</h2>
            <HyperLink src="https://www.linkedin.com/in/lloydstevens/" title="LinkedIn"/>
            <HyperLink src="https://github.com/llogostevo" title="GitHub" />
            <HyperLink src="https://www.youtube.com/@VidTings" title="YouTube" />
          </div>
          <div className="flex flex-col items-center">
            <h2>Acknowledgements</h2>
            <HyperLink src="https://www.flaticon.com/free-icons/cmd" title="Cmd icons created by Freepik -Flaticon" />
            <HyperLink src="https://www.flaticon.com/free-icons/email" title="Email icons created by lakonicon - Flaticon" />
            <HyperLink src="https://www.flaticon.com/free-icons/star" title="Star icons created by Pixel perfect - Flaticon" />
          </div>
    </div>
  )
}