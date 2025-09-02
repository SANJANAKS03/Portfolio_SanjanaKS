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
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science graduate passionate about creating efficient, scalable solutions 
            and continuously learning new technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Computer Science graduate from Dr. Ambedkar Institute of Technology 
                with a strong foundation in software development and a passion for backend technologies.
              </p>
              <p>
                My experience spans from developing automated cable sizing tools at Brite Engineering 
                to creating desktop applications with JavaFX and Spring Boot at Cognitive Technologies. 
                I thrive on solving complex problems and building efficient systems.
              </p>
              <p>
                I'm particularly interested in Java development, system design, and creating 
                solutions that bridge the gap between technical complexity and user needs.
              </p>
            </div>
            
            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-4 hover-lift">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">{highlight.icon}</div>
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
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-medium mb-3 text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
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