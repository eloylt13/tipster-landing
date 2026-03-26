"use client";

import About from "@/components/About";
import Benefits from "@/components/Benefits";
import CTAFinal from "@/components/CTAFinal";
import Customization from "@/components/Customization";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Programs from "@/components/Programs";
import QuickQualifier from "@/components/QuickQualifier";
import SocialProof from "@/components/SocialProof";
import { content } from "@/lib/content";
import { useState } from "react";

type QuizAnswers = {
  searchingFor: string;
  startingPoint: string;
  mainBlocker: string;
};

const initialQuizAnswers: QuizAnswers = {
  searchingFor: "",
  startingPoint: "",
  mainBlocker: "",
};

export default function HomePageClient() {
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>(initialQuizAnswers);

  const handleAnswer = (field: keyof QuizAnswers, value: string) => {
    setQuizAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(93,103,255,0.14),_transparent_38%),linear-gradient(180deg,_#070a12_0%,_#0a1020_46%,_#07090f_100%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <Hero content={content.hero} />
        <Benefits content={content.benefits} />
        <HowItWorks content={content.howItWorks} />
        <Programs content={content.programs} />
        <Customization content={content.customization} />
        <SocialProof content={content.testimonials} />
        <About content={content.about} />
        <FAQ content={content.faq} />
        <QuickQualifier
          content={content.quiz}
          answers={quizAnswers}
          onAnswer={handleAnswer}
        />
        <CTAFinal
          content={content.ctaFinal}
          formContent={content.contactForm}
          answers={quizAnswers}
        />
        <Footer content={content.footer} />
      </div>
    </main>
  );
}
