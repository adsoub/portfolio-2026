import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Header />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
