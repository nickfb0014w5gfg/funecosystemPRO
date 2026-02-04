import { Heart, Link, Zap, Coins, Shield, Sparkles, ArrowRight } from "lucide-react";

const proofEvolution = [
  {
    name: "Proof of Work",
    description: "Năng lượng",
    icon: Zap,
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/50",
  },
  {
    name: "Proof of Stake",
    description: "Tài sản",
    icon: Coins,
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/50",
  },
  {
    name: "Proof of Authority",
    description: "Danh tính",
    icon: Shield,
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/50",
  },
  {
    name: "Proof of Pure Love",
    description: "Tình Yêu & Hợp Nhất",
    icon: Heart,
    colorClass: "text-cosmic-purple",
    bgClass: "bg-gradient-to-br from-cosmic-purple/20 to-cosmic-gold/20",
    highlight: true,
  },
];

const PPLPSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/5 via-background to-cosmic-gold/5" />
      
      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/20 mb-6">
            <Link className="w-4 h-4 text-cosmic-purple" />
            <span className="text-sm font-medium text-cosmic-purple">Giao Thức Đồng Thuận Ánh Sáng</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            <span className="text-cosmic-purple glow-text">Proof of Pure Love</span>
            <br />
            <span className="text-cosmic-gold">Protocol (PPLP)</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Xác minh giá trị bằng <span className="text-cosmic-gold font-medium">ánh sáng của hành động</span>
            <br />
            và tạo ra tiền tệ từ <span className="text-cosmic-purple font-medium">sự Hợp Nhất</span>
          </p>
        </div>

        {/* Introduction cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="p-6 rounded-2xl bg-card border border-cosmic-purple/20 hover:border-cosmic-purple/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-cosmic-purple" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Giao Thức Đầu Tiên
            </h3>
            <p className="text-muted-foreground">
              PPLP là giao thức đầu tiên trong lịch sử blockchain xác minh giá trị bằng tình yêu thuần khiết.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-cosmic-gold/20 hover:border-cosmic-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-cosmic-gold/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-cosmic-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Chuyển Đổi Mô Hình
            </h3>
            <p className="text-muted-foreground">
              Từ Proof of Work/Stake sang Proof of Pure Love – nền kinh tế dựa trên Hợp Nhất.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-cosmic-aqua/20 hover:border-cosmic-aqua/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-cosmic-aqua/10 flex items-center justify-center mb-4">
              <Link className="w-6 h-6 text-cosmic-aqua" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Nền Móng Linh Hồn
            </h3>
            <p className="text-muted-foreground">
              PPLP chính là nền móng linh hồn cho FUN Money – Tiền Ánh Sáng của Cha Vũ Trụ.
            </p>
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Sự Tiến Hóa Của Cơ Chế Đồng Thuận
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {proofEvolution.map((proof, index) => (
              <div key={proof.name} className="flex items-center gap-2 md:gap-4">
                <div 
                  className={`
                    relative p-6 rounded-2xl border transition-all duration-300
                    ${proof.highlight 
                      ? 'border-cosmic-purple/40 shadow-lg shadow-cosmic-purple/20' 
                      : 'border-border'
                    }
                    ${proof.bgClass}
                  `}
                >
                  {proof.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cosmic-gold text-background text-xs font-semibold">
                      MỚI
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${proof.highlight ? 'bg-cosmic-purple/20 animate-glow-pulse' : 'bg-muted'}`}>
                      <proof.icon className={`w-6 h-6 ${proof.colorClass}`} />
                    </div>
                    <h4 className={`font-display text-lg font-semibold mb-1 ${proof.highlight ? 'text-cosmic-purple' : 'text-foreground'}`}>
                      {proof.name}
                    </h4>
                    <p className={`text-sm ${proof.highlight ? 'text-cosmic-gold font-medium' : 'text-muted-foreground'}`}>
                      {proof.description}
                    </p>
                  </div>
                </div>
                
                {index < proofEvolution.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-display text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto">
            "Blockchain ra đời để phi tập trung hóa niềm tin.
            <br />
            <span className="text-cosmic-purple not-italic font-medium">Giờ đây, blockchain được nâng cấp để phi tập trung hóa ánh sáng.</span>"
          </blockquote>
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cosmic-gold/10 rounded-full blur-3xl" />
    </section>
  );
};

export default PPLPSection;
