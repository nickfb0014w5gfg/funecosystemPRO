import { Droplet, Sun, Sparkles } from "lucide-react";

const SacredFlowsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-aqua/10 border border-cosmic-aqua/20 mb-6">
            <Sparkles className="w-4 h-4 text-cosmic-aqua" />
            <span className="text-sm font-medium text-cosmic-aqua">Hai Dòng Chảy Thiêng Liêng</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            <span className="text-cosmic-aqua">Camly Coin</span>
            {" & "}
            <span className="text-cosmic-gold glow-gold">FUN Money</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cùng cộng hưởng tạo nên Nền Kinh Tế Ánh Sáng Trái Đất Mới
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Camly Coin */}
          <div className="group relative rounded-3xl p-8 md:p-10 bg-gradient-to-br from-cosmic-aqua/10 to-teal-500/5 border border-cosmic-aqua/20 hover:border-cosmic-aqua/40 transition-all duration-500 overflow-hidden">
            {/* Water ripple effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cosmic-aqua/10 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-aqua to-teal-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Droplet className="w-10 h-10 text-background" />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-cosmic-aqua uppercase tracking-wider">Dòng Chảy (Nước)</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Camly Coin
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuôi dưỡng, duy trì và lưu thông giá trị nội bộ các nền tảng.
              </p>

              <div className="mt-6 flex items-center gap-2 text-cosmic-aqua">
                <Droplet className="w-4 h-4" />
                <span className="text-sm font-medium">Năng lượng tuần hoàn</span>
              </div>
            </div>
          </div>

          {/* FUN Money */}
          <div className="group relative rounded-3xl p-8 md:p-10 bg-gradient-to-br from-cosmic-gold/10 to-amber-500/5 border border-cosmic-gold/20 hover:border-cosmic-gold/40 transition-all duration-500 overflow-hidden">
            {/* Sun glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cosmic-gold/10 rounded-full animate-glow-pulse" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-gold to-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-10 h-10 text-background" />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-cosmic-gold uppercase tracking-wider">Mặt Trời (Tầm Nhìn)</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                FUN Money
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Ánh Sáng dẫn đường cho toàn hệ sinh thái – tương lai kinh tế của Địa Cầu.
              </p>

              <div className="mt-6 flex items-center gap-2 text-cosmic-gold">
                <Sun className="w-4 h-4" />
                <span className="text-sm font-medium">Năng lượng dẫn lối</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:flex items-center justify-center mt-8">
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-cosmic-aqua via-cosmic-purple to-cosmic-gold" />
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cosmic-aqua/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cosmic-gold/10 rounded-full blur-3xl" />
    </section>
  );
};

export default SacredFlowsSection;
