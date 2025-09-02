import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Users, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Transaction Management GUI",
      period: "September 2024",
      description: "Developed a secure, microservices-based banking application using Java and Spring Boot to handle core business functionalities efficiently.",
      features: [
        "Designed the MySQL database schema for efficient transaction management",
        "Demonstrated strong RDBMS skills and showcased knowledge of modern UI/UX practices",
        "Authored comprehensive unit tests with JUnit, achieving over 80% code coverage"
      ],
      technologies: ["Java", "JavaFX", "SpringBoot", "MySQL", "Docker", "JUnit"],
      category: "Full-Stack Application",
      github: "#",
      live: "#"
    },
    {
      title: "Smart Charge Drive",
      period: "November 2024",
      description: "Designed and developed an autonomous electric vehicle prototype featuring wireless charging and automated lane guidance using cutting-edge technology.",
      features: [
        "Implemented wireless power transfer system using Arduino microcontrollers",
        "Applied emerging technologies and system integration skills",
        "Integrated infrared sensors for automated lane guidance"
      ],
      technologies: ["Arduino", "Infrared Sensors", "Wireless Power Transfer"],
      category: "IoT & Hardware",
      github: "#",
      live: "#"
    }
  ];

  const achievements = [
    {
      title: "Technical Proficiency",
      description: "Solved over 100 problems on LeetCode, demonstrating strong proficiency in Data Structures and Algorithms",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Leadership Development",
      description: "Activated at Kairalyst from [2021] to [2025], demonstrating commitment to personal and professional development",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover-lift animate-scale-in group" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{project.category}</Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Leadership & Extracurricular</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover-lift animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">{achievement.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;