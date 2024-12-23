import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Goals from "@/components/goals";
import Programs from "@/components/programs";
import WhyChooseUs from "@/components/why-choose-us";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to our website" />
      </Head>
      <div className="min-h-screen bg-zinc-900">
        <Navbar />
        <Hero />
        <Partners />
        <Goals />
        <Programs />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
      </div>
    </>
  );
}
