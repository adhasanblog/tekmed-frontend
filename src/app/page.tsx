import Image from "next/image";
import {Header} from "@/ui/header";
import  {Hero} from "@/ui/hero";
import {Service} from "@/ui/service";
import {PopularProducts} from "@/ui/popular-products";
import {Gallery} from "@/ui/gallery";
import {FAQAlkes} from "@/ui/faq";
import {LatestNews, PartnerTestimonials} from "@/ui/another";
import {Footer} from "@/ui/footer";

export default function Home() {
  return (
      <>
          <Header/>
          <main>
              <Hero/>
              <Service/>
              <PopularProducts/>
              <Gallery/>
              <FAQAlkes/>
              <PartnerTestimonials />
              <LatestNews />
          </main>
          <Footer/>
      </>

  );
}
