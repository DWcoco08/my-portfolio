import { Code, Lightbulb, Users, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Phát triển Full-Stack",
      description: "Chuyên môn về React, Node.js, và các công nghệ hiện đại",
    },
    {
      icon: Lightbulb,
      title: "Giải pháp Sáng tạo",
      description: "Tạo ra những ứng dụng web độc đáo và hiệu quả",
    },
    {
      icon: Users,
      title: "Khả năng tự học hỏi",
      description: "Kinh nghiệm tìm kiếm tài liệu và áp dụng công nghệ mới",
    },
    {
      icon: Zap,
      title: "Hiệu suất Cao",
      description: "Tối ưu hóa ứng dụng cho trải nghiệm người dùng tốt nhất",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Giới <span className="text-gradient">Thiệu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tìm hiểu thêm về hành trình của tôi trong lĩnh vực phát triển web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="fade-in-left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden hero-glow">
                <img
                  src={
                    "image/z6946273364767_e7de62bb6287365e5be8879545011095.jpg"
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 hero-gradient rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="fade-in-right">
            <h3 className="text-3xl font-bold mb-6">
              Xin chào! Tôi là Đặng Nguyễn Đức Huy
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Tôi hiện đang là sinh viên năm 2 của trường Đại Học Giao Thông
                Vận Tải TP.HCM, chuyên ngành Công Nghệ Thông Tin. Tôi đam mê
                phát triển web và đã hoàn thành nhiều dự án cá nhân cũng như
                tham gia các dự án nhóm trong quá trình học tập.
              </p>
              <p>
                Chuyên môn của tôi bao gồm React, TypeScript, Node.js, và các
                công nghệ cloud hiện đại. Tôi luôn học hỏi và cập nhật những xu
                hướng mới nhất trong ngành công nghệ.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="portfolio-card group">
                  <item.icon className="w-8 h-8 text-primary mb-3 transition-transform group-hover:scale-110" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
