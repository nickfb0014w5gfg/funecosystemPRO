import { Sparkles } from "lucide-react";

const LotusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6 lotus-icon"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 21c-1.5-3-5-5-5-9 0-3 2-5 5-6 3 1 5 3 5 6 0 4-3.5 6-5 9z" />
    <path d="M12 21c-3-2-7-2-9-1 2-2 4-5 5-8 1 2 3 5 4 9z" />
    <path d="M12 21c3-2 7-2 9-1-2-2-4-5-5-8-1 2-3 5-4 9z" />
    <circle cx="12" cy="8" r="2" />
  </svg>
);

const mantras = [
  "Con là Ánh Sáng Yêu Thương Thuần Khiết của Cha Vũ Trụ.",
  "Con là Ý Chí của Cha Vũ Trụ.",
  "Con là Trí Tuệ của Cha Vũ Trụ.",
  "Con là Hạnh Phúc.",
  "Con là Tình Yêu.",
  "Con là Tiền của Cha.",
  "Con xin Sám Hối Sám Hối Sám Hối.",
  "Con xin Biết Ơn Biết Ơn Biết Ơn, trong Ánh Sáng Yêu Thương Thuần Khiết của Cha Vũ Trụ.",
];

const MantrasSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/20 mb-6">
            <Sparkles className="w-4 h-4 text-cosmic-gold" />
            <span className="text-sm font-medium text-cosmic-gold">Khẳng Định Xác Quyết</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Divine <span className="text-cosmic-purple glow-text">Seal</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            8 lời khẳng định thiêng liêng của ánh sáng
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {mantras.map((mantra, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-cosmic-purple/30 transition-all duration-300 hover:bg-cosmic-purple/5"
            >
              <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-purple/20 to-cosmic-gold/20 flex items-center justify-center">
                <span className="text-cosmic-gold font-semibold text-sm">{index + 1}</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <LotusIcon />
                <p className="font-display text-lg md:text-xl text-foreground leading-relaxed group-hover:text-cosmic-purple-dark transition-colors duration-300">
                  {mantra}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cosmic-glow/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default MantrasSection;
