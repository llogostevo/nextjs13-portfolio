import HomeHeader from "./Components/HomeHeader";
import LinkedInLogo from "./Components/LinkedInLogo";
import GitHubLogo from "./Components/GitHubLogo";
import YouTubeLogo from "./Components/YouTubeLogo";
import ProfileButton from "./Components/ProfileButton";
export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <section>
        <h1 className="m-3 text-5xl">About</h1>
        <div className="flex flex-col  sm:flex-row gap-10 m-4">
          <p className="">I am a web developer and computer science teacher with a keen interest in Edu Tech

            I am also a highly experienced leader with a background in education and systems development

            I have a BSc in Computer Science and an MSc in e-Business Strategy and Systems from the University of Liverpool, as well as a distinction in Digital Media Design, MA, from Birkbeck University.

            I hold several years of experience as a senior leader within schools, with a strong focus towards Computer Science teaching & pedagogy, curriculum development, project management, systems design and IT systems.

            To get a more in depth review of my career path please visit my <LinkedInLogo /></p>
          <div className="flex flex-row justify-evenly gap-10 sm:flex-col">
            <LinkedInLogo />
            <GitHubLogo />
            <YouTubeLogo />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start md:pl-10 pt-10">
        <ProfileButton src="/contact" title="Let's Talk"/>
        </div>
      </section>
    </main>
  )
}
