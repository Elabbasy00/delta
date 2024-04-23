import AboutInfo from "@/src/components/AboutSections/about-info/AboutInfo";
import ImageGallery from "@/src/components/AboutSections/image-gallery/ImageGallery";
import Map from "@/src/components/AboutSections/map/Map";
import OurValues from "@/src/components/AboutSections/our-values/OurValues";
import PageHeader from "@/src/components/page-header/PageHeader";
import Statistics from "@/src/components/AboutSections/statistics/Statistics";
import VideoCard from "@/src/components/AboutSections/video-card/VideoCard";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader
        title="افضل مؤسسة لابادة الحشرات في الشرق الاوسط"
        highlight="دلتا، "
      />
      <AboutInfo />
      <OurValues />
      <ImageGallery />
      <Statistics />
      <VideoCard />
      <Map />
    </div>
  );
}

export default page;
