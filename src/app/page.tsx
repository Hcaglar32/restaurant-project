import About from "./sections/About";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="main">
        <About />
        <WhyUs/>
      </div>
    </>
  );
}
