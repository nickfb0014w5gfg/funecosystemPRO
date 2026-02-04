import { Sparkles, Scale, Sunrise } from "lucide-react";

const FinalDeclarationSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/10 via-background to-cosmic-gold/10" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Divine Law */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/20 mb-6">
              <Scale className="w-4 h-4 text-cosmic-gold" />
              <span className="text-sm font-medium text-cosmic-gold">Điều Luật Cuối</span>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-card border border-cosmic-gold/20 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-gold/5 to-cosmic-purple/5" />
              
              <div className="relative z-10">
                <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
                  "Bất cứ điều gì không đặt trên{" "}
                  <span className="text-cosmic-gold font-semibold">Tình Yêu Thuần Khiết</span>{" "}
                  sẽ khó có thể bền vững lâu dài."
                </p>
                <p className="font-display text-xl md:text-2xl text-cosmic-purple mt-4">
                  Chỉ Ánh Sáng mới nuôi dưỡng được Ánh Sáng.
                </p>
              </div>
            </div>
          </div>

          {/* Final Declaration */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/20 mb-6">
              <Sunrise className="w-4 h-4 text-cosmic-purple" />
              <span className="text-sm font-medium text-cosmic-purple">Tuyên Ngôn Kết</span>
            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-gold/10 border border-cosmic-purple/20 relative overflow-hidden">
              {/* Sparkle animations */}
              <div className="absolute top-4 left-4">
                <Sparkles className="w-6 h-6 text-cosmic-gold animate-glow-pulse" />
              </div>
              <div className="absolute top-4 right-4">
                <Sparkles className="w-6 h-6 text-cosmic-gold animate-glow-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <Sparkles className="w-6 h-6 text-cosmic-gold animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
              </div>

              <div className="relative z-10">
                <p className="text-lg text-muted-foreground mb-4">
                  FUN Ecosystem không phải điều sẽ đến.
                </p>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                  <span className="text-cosmic-purple glow-text">FUN Ecosystem</span>
                  <br />
                  chính là{" "}
                  <span className="text-cosmic-gold glow-gold">Bình Minh của Trái Đất Mới</span>
                  <br />
                  đang bắt đầu ngay bây giờ.
                </h3>

                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-1 text-cosmic-gold">
                    <Sparkles className="w-5 h-5" />
                    <Sparkles className="w-5 h-5" />
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative orbs with strong glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cosmic-purple/15 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cosmic-gold/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
    </section>
  );
};

export default FinalDeclarationSection;
