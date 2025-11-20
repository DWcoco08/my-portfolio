import { useEffect, useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiBootstrap,
  SiSass,
  SiExpress,
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiAmazon,
  SiPostman,
  SiDocker,
  SiGithub,
  SiTypescript,
  SiFigma,
  SiSupabase,
  SiCloudflare,
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Sass", icon: SiSass },
    { name: "Express", icon: SiExpress },
    { name: "C++", icon: SiCplusplus },
    { name: "HTML5", icon: SiHtml5 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "AWS", icon: SiAmazon },
    { name: "Postman", icon: SiPostman },
    { name: "Docker", icon: SiDocker },
    { name: "Git/GitHub", icon: SiGithub },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Figma", icon: SiFigma },
    { name: "Supabase", icon: SiSupabase },
    { name: "Cloudflare", icon: SiCloudflare },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kỹ <span className="text-gradient">Năng</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dưới đây là các công nghệ tôi biết và sử dụng.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className={`portfolio-card flex flex-col items-center justify-center p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <IconComponent
                  size={48}
                  className="text-primary mb-4 transition-colors duration-300"
                />
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
