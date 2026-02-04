import HeroSection from "@/components/landing/HeroSection";
import OriginSection from "@/components/landing/OriginSection";
import MissionSection from "@/components/landing/MissionSection";
import VisionSection from "@/components/landing/VisionSection";
import SacredFlowsSection from "@/components/landing/SacredFlowsSection";
import ChakrasSection from "@/components/landing/ChakrasSection";
import PrinciplesSection from "@/components/landing/PrinciplesSection";
import LeadershipSection from "@/components/landing/LeadershipSection";
import CommunityPledgeSection from "@/components/landing/CommunityPledgeSection";
import MantrasSection from "@/components/landing/MantrasSection";
import FinalDeclarationSection from "@/components/landing/FinalDeclarationSection";
import Footer from "@/components/landing/Footer";
import AngelAIChatButton from "@/components/angel-ai/AngelAIChatButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FUN Ecosystem – Nền Kinh Tế Ánh Sáng 5D | Web3 + AI + Tình Yêu</title>
        <meta
          name="description"
          content="Hệ sinh thái Web3 + AI + Ánh Sáng đầu tiên, nơi con người sáng tạo – chia sẻ – nhận lại – tiến hóa trong tình yêu thuần khiết. Khám phá FUN Profile, FUN Charity và 12 nền tảng ánh sáng."
        />
        <meta property="og:title" content="FUN Ecosystem – Nền Kinh Tế Ánh Sáng 5D" />
        <meta
          property="og:description"
          content="Free to Join • Free to Use • Earn Together • With Pure Love. Hệ sinh thái Web3 + AI + Ánh Sáng đầu tiên của Trái Đất Mới."
        />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <OriginSection />
        <MissionSection />
        <VisionSection />
        <SacredFlowsSection />
        <ChakrasSection />
        <PrinciplesSection />
        <LeadershipSection />
        <CommunityPledgeSection />
        <MantrasSection />
        <FinalDeclarationSection />
        <Footer />
      </main>
      
      <AngelAIChatButton />
    </>
  );
};

export default Index;
