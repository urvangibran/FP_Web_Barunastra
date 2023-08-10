import About from "@/components/About";
import Contact from "@/components/Contact";
import LandingPage from "@/components/LandingPage";
import AchievementPage from "@/components/PageAchievement";
import Seo from "@/components/Seo";
import Team from "@/components/Team";
import Layout from "@/components/layout/Layout";
import ButtonLink from "@/components/links/ButtonLink";


export default function HomePage() {
  return (
    <Layout>
      <Seo
        templateTitle='Web Kelompok 4 FP Barunastra'
        description='Awesome Page'
      />

      <main>
        <LandingPage />
        <About />
        <section className=''>
          <div className='w-screen h-[300px] bg-[url(/images/boat/parallax.jpg)] bg-cover object-cover bg-fixed drop-shadow-[0 35px 35px rgba(0, 0, 0, 0.25)] drop-shadow-xl shadow-slate-800'></div>
        </section>
        <Team />
        <div className='hidden md:block'>
          <AchievementPage />
          <Contact />
        </div>
        <div className='flex justify-center my-10 md:hidden'>
          <ButtonLink
            className=''
            size='xl'
            variant='dark'
            href='https://instagram.com/barunastra_its'
          // href='/robot'
          > Know More About Barunastra!</ButtonLink>
        </div>
      </main>

    </Layout>
  );
}