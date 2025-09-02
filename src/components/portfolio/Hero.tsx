import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 border border-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-white/5 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-scale-in">
            Sanjana K S
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Software Engineer & Java Developer
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Passionate about backend development, innovative solutions, and creating 
            efficient systems that make a difference.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Channagiři, Karnataka</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(+91) 9019816463</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-scale-in" style={{animationDelay: '0.8s'}}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow hover-glow">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary hover-lift">
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in" style={{animationDelay: '1s'}}>
            <a href="mailto:sanjanakssanju11@gmail.com" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sanjanaKs2525/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/SANJANAKS03" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;