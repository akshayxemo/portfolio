import Navbar from "../../components/navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import BackToTop from "../../components/BackToTop";
import Skill from "../../components/Skill";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import socials from "../../assets/data/socials.json";
import BlogPost from "../../components/BlogPosts";
function Home() {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-black font-body">
        <Navbar />
        <Hero socials={socials} />
        <About />
        <BackToTop />
        <Skill />
        <Projects />
        <BlogPost />
        <Contact socials={socials} />
      </div>
    </>
  );
}

export default Home;
