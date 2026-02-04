import { Check, Users, Heart, Sparkles } from "lucide-react";

const pledges = [
  {
    icon: Heart,
    text: "Xây dựng bằng chính trực và tình yêu",
  },
  {
    icon: Check,
    text: "Không khai thác – không thao túng – không cạnh tranh",
  },
  {
    icon: Sparkles,
    text: "Cùng nhau nâng nhau lên trong ánh sáng",
  },
  {
    icon: Users,
    text: "Phụng sự nhân loại bằng trái tim thuần khiết",
  },
];

const CommunityPledgeSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/20 mb-6">
              <Users className="w-4 h-4 text-cosmic-purple" />
              <span className="text-sm font-medium text-cosmic-purple">Cam Kết Cộng Đồng</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Đồng <span className="text-cosmic-purple glow-text">Nguyện</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tất cả Builders – Partners – Leaders – Members đồng nguyện:
            </p>
          </div>

          {/* Pledge List */}
          <div className="space-y-4">
            {pledges.map((pledge, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-cosmic-purple/30 transition-all duration-300 hover:bg-cosmic-purple/5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pledge.icon className="w-6 h-6 text-background" />
                </div>
                <p className="font-display text-xl text-foreground group-hover:text-cosmic-purple-dark transition-colors duration-300">
                  {pledge.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom seal */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cosmic-purple/10 to-cosmic-gold/10 border border-cosmic-purple/20">
              <Sparkles className="w-5 h-5 text-cosmic-gold" />
              <span className="font-display text-lg font-medium text-foreground">
                Trong Ánh Sáng – Chúng Ta Là Một
              </span>
              <Sparkles className="w-5 h-5 text-cosmic-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cosmic-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cosmic-gold/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CommunityPledgeSection;
