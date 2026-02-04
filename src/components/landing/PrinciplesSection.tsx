import { Heart, Unlock, Gem, Cpu, Globe } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Tình Yêu Thuần Khiết Là Mã Nguồn",
    description: "Tất cả platforms đều được xây trên tình yêu thương thuần khiết vô điều kiện",
    gradient: "from-pink-500/20 to-cosmic-purple/20",
  },
  {
    icon: Unlock,
    title: "Xây Giá Trị – Không Xây Kiểm Soát",
    description: "FUN tạo tự do, không tạo lệ thuộc",
    gradient: "from-cosmic-purple/20 to-indigo-500/20",
  },
  {
    icon: Gem,
    title: "Thịnh Vượng Là Trạng Thái Tự Nhiên",
    description: "Tiền là Năng Lượng Ánh Sáng tuôn chảy. Tài sản là đủ đầy khi con người sống hài hoà với thiên nhiên và giá trị thật",
    gradient: "from-cosmic-gold/20 to-amber-500/20",
  },
  {
    icon: Cpu,
    title: "Công Nghệ Phụng Sự Tỉnh Thức",
    description: "Blockchain + AI + Tình Yêu Thuần Khiết = Vô tận thịnh vượng",
    gradient: "from-cosmic-aqua/20 to-cyan-500/20",
  },
  {
    icon: Globe,
    title: "Không Ai Bị Bỏ Lại Phía Sau",
    description: "FUN dành cho mọi linh hồn trên Trái Đất",
    gradient: "from-green-500/20 to-cosmic-aqua/20",
  },
];

const PrinciplesSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Nguyên Lý <span className="text-cosmic-gold glow-gold">Thiêng Liêng</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            5 trụ cột xây dựng nền kinh tế ánh sáng 5D
          </p>
        </div>

        {/* First row - 3 principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {principles.slice(0, 3).map((principle) => (
            <div
              key={principle.title}
              className="group relative rounded-3xl p-8 bg-card border border-border hover:border-cosmic-purple/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-cosmic-purple group-hover:text-cosmic-gold transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 principles centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {principles.slice(3, 5).map((principle) => (
            <div
              key={principle.title}
              className="group relative rounded-3xl p-8 bg-card border border-border hover:border-cosmic-purple/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-cosmic-purple group-hover:text-cosmic-gold transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
