import { Heart, Eye, Sparkles, Gem, Users, CheckCircle } from "lucide-react";

const pillars = [
  {
    number: 1,
    title: "Phụng Sự Sự Sống",
    question: "Hành động này có nâng đỡ cộng đồng và Trái Đất không?",
    icon: Heart,
    colorClass: "text-cosmic-aqua",
    bgClass: "from-cosmic-aqua/20 to-cosmic-aqua/5",
    borderClass: "border-cosmic-aqua/30 hover:border-cosmic-aqua/50",
  },
  {
    number: 2,
    title: "Chân Lý Minh Bạch",
    question: "Hành động này có trong sáng và rõ ràng không?",
    icon: Eye,
    colorClass: "text-cosmic-gold",
    bgClass: "from-cosmic-gold/20 to-cosmic-gold/5",
    borderClass: "border-cosmic-gold/30 hover:border-cosmic-gold/50",
  },
  {
    number: 3,
    title: "Chữa Lành & Yêu Thương",
    question: "Hành động này có giảm đau khổ và tăng hạnh phúc không?",
    icon: Sparkles,
    colorClass: "text-cosmic-purple",
    bgClass: "from-cosmic-purple/20 to-cosmic-purple/5",
    borderClass: "border-cosmic-purple/30 hover:border-cosmic-purple/50",
  },
  {
    number: 4,
    title: "Tạo Giá Trị Lâu Dài",
    question: "Hành động này có xây dựng nền kinh tế ánh sáng không?",
    icon: Gem,
    colorClass: "text-cosmic-gold",
    bgClass: "from-cosmic-gold/20 to-cosmic-gold/5",
    borderClass: "border-cosmic-gold/30 hover:border-cosmic-gold/50",
  },
  {
    number: 5,
    title: "Hợp Nhất Thay Vì Tách Biệt",
    question: "Hành động này có xuất phát từ kết nối và tình yêu không?",
    icon: Users,
    colorClass: "text-cosmic-purple",
    bgClass: "from-cosmic-purple/20 to-cosmic-purple/5",
    borderClass: "border-cosmic-purple/30 hover:border-cosmic-purple/50",
  },
];

const VerificationPillarsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/20 mb-6">
            <CheckCircle className="w-4 h-4 text-cosmic-gold" />
            <span className="text-sm font-medium text-cosmic-gold">5 Trụ Cột Xác Minh Ánh Sáng</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            <span className="text-cosmic-purple">Proof of Light</span>
            {" "}
            <span className="text-cosmic-gold">Contribution</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mỗi hành động mint FUN Money cần hội đủ 5 trụ cột thiêng liêng
          </p>
        </div>

        {/* Pillars Grid - Row 1: 3 pillars, Row 2: 2 pillars centered */}
        <div className="max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {pillars.slice(0, 3).map((pillar) => (
              <div
                key={pillar.number}
                className={`
                  group relative p-6 md:p-8 rounded-3xl 
                  bg-gradient-to-br ${pillar.bgClass}
                  border ${pillar.borderClass}
                  transition-all duration-500
                  hover:shadow-lg hover:shadow-cosmic-purple/10
                `}
              >
                {/* Number badge */}
                <div className={`
                  absolute -top-3 -left-3 w-10 h-10 rounded-full 
                  bg-card border-2 ${pillar.borderClass.replace('hover:', '')}
                  flex items-center justify-center
                  font-display font-bold ${pillar.colorClass}
                `}>
                  {pillar.number}
                </div>

                <div className="pt-4">
                  <div className={`w-14 h-14 rounded-2xl bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.colorClass}`} />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-muted-foreground italic">
                    "{pillar.question}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pillars.slice(3).map((pillar) => (
              <div
                key={pillar.number}
                className={`
                  group relative p-6 md:p-8 rounded-3xl 
                  bg-gradient-to-br ${pillar.bgClass}
                  border ${pillar.borderClass}
                  transition-all duration-500
                  hover:shadow-lg hover:shadow-cosmic-gold/10
                `}
              >
                {/* Number badge */}
                <div className={`
                  absolute -top-3 -left-3 w-10 h-10 rounded-full 
                  bg-card border-2 ${pillar.borderClass.replace('hover:', '')}
                  flex items-center justify-center
                  font-display font-bold ${pillar.colorClass}
                `}>
                  {pillar.number}
                </div>

                <div className="pt-4">
                  <div className={`w-14 h-14 rounded-2xl bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.colorClass}`} />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-muted-foreground italic">
                    "{pillar.question}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer tagline */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-gold/10 border border-cosmic-purple/20">
            <p className="font-display text-xl md:text-2xl text-foreground">
              Chỉ khi hội đủ 5 trụ cột:
              <br />
              <span className="text-cosmic-gold font-semibold glow-gold">
                FUN Money được mint như một phước lành ✨
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cosmic-purple/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent" />
    </section>
  );
};

export default VerificationPillarsSection;
