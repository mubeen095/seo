"use client";
import Certificate from "@/component/Elite/Certificate";
import CourseFeeSection from "@/component/Elite/CourseFeeSection";
import EliteHero from "@/component/Elite/EliteHero";
import EliteOverview from "@/component/Elite/EliteOverview";
import EliteSyllabusContent from "@/component/Elite/EliteSyllabusContent";
import Faq from "@/component/Elite/Faq";
import KeyHighlight from "@/component/Elite/KeyHighlight";
import PopularClasses from "@/component/Elite/PopularClasses";
import ReviewSection from "@/component/Elite/ReviewSection";
import React from "react";
import Head from "next/head";
import { HeroEliteData } from "@/data/Elite/Hero";

const EpicProgram = ({ params }) => {
  const { page } = params;
  const validPages = [
    "DSAPython",
    "DSAJava",
    "DSACPP",
    "uiux",
    "digitalmarketing",
  ];

  if (!validPages.includes(page)) {
    return <h1>Page Not Found</h1>;
  }

  const courseData = HeroEliteData[page];
  const pageTitle = `${courseData?.heading} Course at IT NOVA | Best Online ${courseData?.heading} Training`;
  const pageDescription = `${courseData?.subHeading} ${courseData?.array?.join(" ")}`;
  const canonicalUrl = `https://itnova.com/ep/${page}`;

  return (
    <div className="relative pb-[100px] ">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`IT NOVA, itnova, it nova, ${courseData?.heading}, online course, programming, technology education, ${page}, best ${courseData?.heading} course, learn ${courseData?.heading} online`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IT NOVA" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": courseData?.heading,
            "description": courseData?.subHeading,
            "provider": {
              "@type": "Organization",
              "name": "IT NOVA",
              "sameAs": "https://itnova.com"
            },
            "offers": {
              "@type": "Offer",
              "category": "Online Course"
            }
          })}
        </script>
      </Head>
      <EliteHero page={page} />
      <EliteOverview page={page} />
      <EliteSyllabusContent page={page} />
      <KeyHighlight />
      <Certificate />
      <PopularClasses />
      <ReviewSection />
      <CourseFeeSection page={page} />
      <Faq />
    </div>
  );
};

export default EpicProgram;
