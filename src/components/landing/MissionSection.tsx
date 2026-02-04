import {
  GraduationCap,
  Gamepad2,
  TrendingUp,
  Gift,
  Share2,
  Key,
  Star,
  Hammer,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const earnModels = [
  {
    icon: GraduationCap,
    title: "Learn & Earn",
    description: "Học và Kiếm tiền",
    gradient: "from-blue-500/20 to-cosmic-purple/20",
  },
  {
    icon: Gamepad2,
    title: "Play & Earn",
    description: "Chơi và Kiếm tiền",
    gradient: "from-pink-500/20 to-cosmic-purple/20",
  },
  {
    icon: TrendingUp,
    title: "Invest & Earn",
    description: "Đầu tư và Kiếm tiền",
    gradient: "from-cosmic-gold/20 to-amber-500/20",
  },
  {
    icon: Gift,
    title: "Give & Gain",
    description: "Cho đi và Nhận lại",
    gradient: "from-cosmic-aqua/20 to-teal-500/20",
  },
  {
    icon: Share2,
    title: "Share & Have",
    description: "Chia sẻ và Sở hữu",
    gradient: "from-green-500/20 to-cosmic-aqua/20",
  },
  {
    icon: Key,
    title: "Own & Earn",
    description: "Sở hữu và Kiếm tiền",
    gradient: "from-cosmic-purple/20 to-indigo-500/20",
  },
  {
    icon: Star,
    title: "Review & Reward",
    description: "Đánh giá và Được thưởng",
    gradient: "from-cosmic-gold/20 to-orange-500/20",
  },
  {
    icon: Hammer,
    title: "Build & Bounty",
    description: "Xây dựng và Nhận thưởng",
    gradient: "from-rose-500/20 to-cosmic-purple/20",
  },
];

const flowSteps = [
  { en: "Join", vi: "Gia Nhập" },
  { en: "Use", vi: "Sử Dụng" },
  { en: "Earn", vi: "Kiếm Tiền" },
  { en: "Share", vi: "Chia Sẻ" },
  { en: "Rise", vi: "Thăng Hoa" },
];

const MissionSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/20 mb-6">
            <Sparkles className="w-4 h-4 text-cosmic-purple" />
            <span className="text-sm font-medium text-cosmic-purple">Sứ Mệnh Trọng Tâm</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            <span className="text-cosmic-gold glow-gold">99% Gift</span>{" "}
            <span className="text-foreground">cho Cộng Đồng Toàn Cầu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Phi tập trung hoá cơ hội toàn cầu. Nâng cấp kinh tế song hành với nâng cấp ý thức.
          </p>
        </div>

        {/* Sacred Flow */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-6 rounded-3xl bg-card border border-border max-w-4xl mx-auto">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-4">
                <div className="text-center">
                  <p className="font-display text-xl md:text-2xl font-semibold text-cosmic-purple">
                    {step.en}
                  </p>
                  <p className="text-sm text-muted-foreground">{step.vi}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-cosmic-gold flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 8 Earn Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {earnModels.map((model, index) => (
            <div
              key={model.title}
              className="group relative rounded-2xl p-6 bg-card border border-border hover:border-cosmic-purple/30 transition-all duration-500 hover:shadow-lg overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${model.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <model.icon className="w-7 h-7 text-cosmic-purple group-hover:text-cosmic-gold transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {model.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-gold/5 rounded-full blur-3xl" />
    </section>
  );
};

export default MissionSection;
