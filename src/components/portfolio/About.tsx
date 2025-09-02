import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Laptop } from "lucide-react";

const About = () => {
  const skills = {
    "Languages": ["Java", "Python", "JavaScript", "C", "SQL"],
    "Backend": ["Spring Boot", "RDBMS (MySQL)", "Object-Oriented Programming"],
    "Frontend": ["HTML/CSS", "JavaScript", "JavaFX"],
    "Cloud/DevOps": ["AWS (ML Fundamentals)", "Docker", "Git", "GitHub"],
    "Concepts": ["Data Structures & Algorithms", "SDLC", "Agile Methodologies"]
  };

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "100+ Problems Solved",
      description: "Strong proficiency in Data Structures and Algorithms on LeetCode"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Expertise",
      description: "Specialized in Java, Spring Boot, and microservices architecture"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Experience with MySQL, RDBMS design and optimization"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Full-Stack Projects",
      description: "End-to-end application development with modern technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient animate-fade-in">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Engineering graduate passionate about creating efficient, scalable solutions 
            and continuously learning new technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey began with circuits and electrical systems, but my heart was always drawn 
                to the world of code. What started as curiosity about how software controls hardware 
                evolved into a passionate pursuit of creating digital solutions.
              </p>
              <p>
                From my first "Hello World" in Java to architecting complex Spring Boot applications, 
                every line of code has been a step forward. At Brite Engineering, I transformed manual 
                processes into automated solutions, and at Cognitive Technologies, I brought ideas to 
                life through elegant desktop applications.
              </p>
              <p>
                Today, I'm not just a developer—I'm a problem solver who bridges the gap between 
                complex technical challenges and user-friendly solutions. My electrical background 
                gives me a unique perspective on system design and optimization.
              </p>
            </div>
            
            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-4 hover-lift card-tilt hover-glow" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1 animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <div key={category} className="animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                  <h4 className="font-medium mb-3 text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer animate-scale-in" 
                        style={{animationDelay: `${(categoryIndex * skillList.length + index) * 0.05}s`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
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