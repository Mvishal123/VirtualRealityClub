import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import HeroSlider from "../src/components/HeroSlider";
import Events from "../src/components/Events";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section */}
      <HeroSlider />
      {/* !Home Section */}
      

      {/* About Section */}
      <About />
      {/* !About Section */}

      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      
      {/* !Section Divider */}
      <Events />
      <SectionDivider />
        {/* Collection Section */}
      <Collection />
      {/* !Collection Section */}
      {/* Section Divider */}

      {/* Section Divider */}
      
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index;
