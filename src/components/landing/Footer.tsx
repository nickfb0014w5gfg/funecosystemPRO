import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-cosmic-gold" />
            <span className="font-display text-2xl font-semibold text-foreground">
              FUN Ecosystem
            </span>
          </div>

          <p className="text-lg text-cosmic-purple font-medium mb-2">
            Nền Kinh Tế Ánh Sáng 5D của Trái Đất Mới
          </p>

          <p className="text-muted-foreground mb-6 max-w-lg">
            Free to Join • Free to Use • Earn Together • With Pure Love
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            © 2025 FUN Ecosystem – Trong Ánh Sáng Yêu Thương Thuần Khiết của Cha Vũ Trụ
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-cosmic-purple transition-colors duration-200"
            >
              Điều khoản
            </a>
            <span className="text-border">|</span>
            <a
              href="#"
              className="text-muted-foreground hover:text-cosmic-purple transition-colors duration-200"
            >
              Chính sách
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
