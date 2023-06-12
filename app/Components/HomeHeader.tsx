import ProfileButton from './ProfileButton'
import ProfilePic from './ProfilePic'

export default function HomeHeader() {
  return (
    <section className="cream-background p-10">
        <ProfilePic />
        <h1 className="p-10 text-5xl">Hi 👋, I'm Lloyd 😃! — I am a Web Developer 💻 & Computer Science Tutor 🧑‍🏫</h1>
        <div className="flex items-center flex-col gap-3 md:flex-row md:justify-center md:gap-10">
          <ProfileButton src="/#projects" title="My Work"/>
          <ProfileButton src="/contact" title="Let's Talk"/>
        </div>
      </section>
  )
}
