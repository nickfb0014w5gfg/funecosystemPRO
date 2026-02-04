import {
  User,
  Play,
  Gamepad2,
  Heart,
  Leaf,
  GraduationCap,
  Scale,
  Globe,
  Store,
  Wallet,
  Bot,
  Sparkles,
} from "lucide-react";
import PlatformCard from "./PlatformCard";

const platforms = [
  { icon: User, name: "FUN Profile", description: "Web3 Social Network" },
  { icon: Play, name: "FUN Play", description: "Web3 Video Platform" },
  { icon: Gamepad2, name: "FUN Planet", description: "Game Marketplace for Kids" },
  { icon: Sparkles, name: "FUNLife", description: "Cosmic Game / Simulation of Life 5D" },
  { icon: GraduationCap, name: "FUN Academy", description: "Learn & Earn Education Platform" },
  { icon: Heart, name: "FUN Charity", description: "Pure Love Charity Network" },
  { icon: Wallet, name: "FUN Wallet", description: "Our Own Bank of Light Economy" },
  { icon: Leaf, name: "FUN Farm", description: "Farm to Table Abundance Platform" },
  { icon: Store, name: "FUN Market", description: "Marketplace of Light" },
  { icon: Scale, name: "FUN Legal", description: "Cosmic Laws for New Earth" },
  { icon: Globe, name: "FUN Earth", description: "Regeneration & Sustainability Platform" },
  { icon: Bot, name: "Angel AI", description: "Light-Aligned Artificial Intelligence" },
];

const ChakrasSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            12 Nền Tảng <span className="text-cosmic-purple glow-text">Ánh Sáng</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tất cả Platforms của FUN Ecosystem là một cơ thể Ánh Sáng thống nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              icon={platform.icon}
              name={platform.name}
              description={platform.description}
              delay={index * 50}
            />
          ))}
        </div>

        {/* Future expansion tagline */}
        <div className="mt-12 text-center">
          <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
            ✨ Và đây mới chỉ là những nền tảng đầu tiên...
          </p>
          <p className="text-lg text-cosmic-purple mt-2">
            FUN Ecosystem sẽ còn mở rộng thêm nhiều tầng ánh sáng nữa
          </p>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cosmic-aqua/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ChakrasSection;
