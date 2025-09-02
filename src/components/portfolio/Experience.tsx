import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Engineer Intern",
      company: "Brite Engineering Control Switchgears Pvt.Ltd",
      location: "Bengaluru, Karnataka",
      period: "Jan 2025 – June 2025",
      type: "Current Position",
      description: "Drove the independent development of the backend logic in Java for an Automated Cable Sizing Tool, ensuring compliance with industry standards.",
      achievements: [
        "Integrated complex electrical schematics to support the creation of GA drawings",
        "Enhanced LT Panel estimations through accurate calculations",
        "Gained insights into manufacturing workflows and client engagement",
        "Enhanced understanding of business requirements"
      ],
      technologies: ["Java", "Backend Development", "Industry Standards", "Client Engagement"]
    },
    {
      title: "Java Development Intern",
      company: "Cognitive Technologies",
      location: "Bengaluru, Karnataka", 
      period: "March 2024 – May 2024",
      type: "Internship",
      description: "Developed user-friendly desktop applications utilizing JavaFX and Swing, enhancing application performance by implementing multi-threading concepts.",
      achievements: [
        "Enhanced application performance through multi-threading implementation",
        "Developed robust applications utilizing core Java fundamentals",
        "Effective data management using OOPs principles",
        "Showcased knowledge of modern UI/UX practices"
      ],
      technologies: ["Java", "JavaFX", "Swing", "Multi-threading", "OOPs", "UI/UX"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Electrical and Electronics",
      institution: "Dr. Ambedkar Institute of Technology",
      location: "Bengaluru, Karnataka",
      period: "Dec 2021 – May 2025",
      grade: "CGPA: 7.69",
      type: "Bachelor's Degree"
    },
    {
      degree: "Pre-University Education (PCMB)",
      institution: "Sri Bhuvanendra College",
      location: "Karkala, Udupi",
      period: "May 2019 – July 2021",
      grade: "",
      type: "Pre-University"
    },
    {
      degree: "Senior Schooling (SSLC)",
      institution: "Taralabalu High School",
      location: "Nallur, Davanagere",
      period: "May 2018- April 2019",
      grade: "",
      type: "High School"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Professional journey and key accomplishments
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover-lift animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <Badge variant={exp.type === "Current Position" ? "default" : "secondary"}>
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Education</h2>
            <p className="text-lg text-muted-foreground">
              Academic background and qualifications
            </p>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <Badge variant="outline">{edu.type}</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.grade && (
                      <div className="font-semibold text-primary">{edu.grade}</div>
                    )}
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

export default Experience;