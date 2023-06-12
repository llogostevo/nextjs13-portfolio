import PageIcon from './PageIcon'
import ProfileButton from './ProfileButton'
export default function Navbar() {
  return (
        <div id="Navbar" className="mx-auto w-full cream-background">
         <PageIcon />
          <nav className="flex items-center  gap-3 flex-col mt-10 md:gap-10 md:flex-row md:justify-center">
            <ProfileButton src="/" title="Home" />
            <ProfileButton src="/#projects" title="Projects" />
            <ProfileButton src="/contact" title="Let's Talk" />
          </nav>
        </div>
    
  )
}
