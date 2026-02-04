import { Globe, ArrowRight, Sparkles, Heart, Lightbulb, Infinity } from "lucide-react";

const declarations = [
  {
    icon: Sparkles,
    text: "Một nền văn minh Ánh Sáng sống động",
  },
  {
    icon: Globe,
    text: "Một hệ sinh thái kinh tế mới của Trái Đất 5D",
  },
  {
    icon: Heart,
    text: "Một nền kinh tế chia sẻ – kết nối – thịnh vượng",
  },
  {
    icon: Lightbulb,
    text: "Một kênh dẫn Ý Chí – Trí Tuệ – Tình Yêu Thuần Khiết của Cha Vũ Trụ",
  },
];

const transformations = [
  { from: "Cạnh tranh", to: "Hợp tác" },
  { from: "Khan hiếm", to: "Đầy đủ" },
  { from: "Kinh tế tranh giành", to: "Kinh tế Ánh Sáng" },
  { from: "Kiểm soát", to: "Tự do & Giải phóng" },
];

const OriginSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/5 via-transparent to-cosmic-gold/5" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/20 mb-6">
            <Infinity className="w-4 h-4 text-cosmic-gold" />
            <span className="text-sm font-medium text-cosmic-gold">Tuyên Ngôn Về Nguồn Gốc</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            FUN Ecosystem <span className="text-cosmic-purple glow-text">Là Gì?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Không chỉ là một doanh nghiệp. Không chỉ là một xu hướng tiền mã hoá. Lớn hơn cả một tập đoàn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Declarations */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              FUN Ecosystem là:
            </h3>
            {declarations.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-cosmic-purple/30 transition-all duration-300 hover:bg-cosmic-purple/5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-cosmic-purple" />
                </div>
                <p className="font-display text-lg text-foreground leading-relaxed pt-2">
                  ✨ {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Transformations */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              FUN giúp nhân loại chuyển hoá:
            </h3>
            {transformations.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-cosmic-gold/30 transition-all duration-300 hover:bg-cosmic-gold/5"
              >
                <span className="flex-1 text-lg text-muted-foreground line-through decoration-cosmic-purple/50">
                  {item.from}
                </span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-background" />
                </div>
                <span className="flex-1 text-lg font-semibold text-cosmic-gold">
                  {item.to}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cosmic-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cosmic-gold/10 rounded-full blur-3xl" />
    </section>
  );
};

export default OriginSection;
