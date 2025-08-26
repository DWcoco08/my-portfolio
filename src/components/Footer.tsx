import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1AuyUX5xbF/",
      label: "Facebook",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
            >
              DWuy
            </button>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Nhà phát triển web full-stack đam mê tạo ra những trải nghiệm web
              hiện đại và thú vị.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
            <div className="space-y-2">
              {[
                { name: "Trang chủ", href: "#home" },
                { name: "Giới thiệu", href: "#about" },
                { name: "Dự án", href: "#projects" },
                { name: "Kỹ năng", href: "#skills" },
                { name: "Liên hệ", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Kết nối với tôi</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Luôn sẵn sàng cho những cơ hội hợp tác mới và thú vị!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} DWuy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
