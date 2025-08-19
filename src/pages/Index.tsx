import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Building2 } from "lucide-react";
import schoolHero from "@/assets/school-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Student Portal",
      description: "Access your courses, assignments, and track your progress",
      icon: GraduationCap,
      path: "/student/login",
      className: "btn-student",
      cardClass: "card-student"
    },
    {
      title: "Teacher Portal", 
      description: "Manage classes, assignments, and student progress",
      icon: BookOpen,
      path: "/teacher/login",
      className: "btn-teacher",
      cardClass: "card-teacher"
    },
    {
      title: "Parent Portal",
      description: "Monitor your child's academic journey and communicate with teachers",
      icon: Users,
      path: "/parent/login", 
      className: "btn-parent",
      cardClass: "card-parent"
    },
    {
      title: "Management Portal",
      description: "Oversee school operations, staff, and student performance",
      icon: Building2,
      path: "/management/login",
      className: "btn-management", 
      cardClass: "card-management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Academy Pulse Portal
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Empowering education through technology. A comprehensive platform 
                connecting students, teachers, parents, and management for seamless 
                academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 shadow-lg"
                >
                  Explore Features
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={schoolHero} 
                alt="Modern school building" 
                className="rounded-3xl shadow-2xl float-animation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To create an integrated educational ecosystem that fosters learning, 
            collaboration, and growth. We believe in the power of technology to 
            transform education and create meaningful connections between all 
            stakeholders in the learning journey.
          </p>
        </div>
      </div>

      {/* Login Portals */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Choose Your Portal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <Card 
                  key={role.title} 
                  className={`${role.cardClass} p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                  onClick={() => navigate(role.path)}
                >
                  <CardContent className="p-0 text-center">
                    <div className="mb-6">
                      <IconComponent className="h-16 w-16 mx-auto text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {role.description}
                    </p>
                    <Button className={`${role.className} w-full text-lg py-3`}>
                      Access Portal
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Academy Pulse Portal</h3>
          <p className="text-gray-400">
            © 2024 Academy Pulse Portal. All rights reserved. Empowering education for tomorrow.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;