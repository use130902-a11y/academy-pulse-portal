import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, BookOpen, TrendingUp, Award, FileText, Settings,
  LogOut, User, School, BarChart3, Calendar, Trophy 
} from "lucide-react";

const ManagementDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/management/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  const schoolStats = {
    totalStudents: 1247,
    totalTeachers: 84,
    totalClasses: 45,
    overallAttendance: 94.2,
    academicPerformance: 87.5,
    sportsPerformance: 82.3,
    culturalPerformance: 89.1
  };

  const teacherPerformance = [
    { name: 'Sarah Williams', subject: 'Mathematics', rating: 4.8, classes: 3, students: 85, feedback: 'Excellent' },
    { name: 'David Chen', subject: 'Physics', rating: 4.6, classes: 4, students: 112, feedback: 'Very Good' },
    { name: 'Maria Garcia', subject: 'Chemistry', rating: 4.9, classes: 3, students: 78, feedback: 'Outstanding' },
    { name: 'Jennifer Brown', subject: 'English', rating: 4.5, classes: 5, students: 145, feedback: 'Good' },
    { name: 'Robert Taylor', subject: 'History', rating: 4.3, classes: 3, students: 89, feedback: 'Good' }
  ];

  const studentDevelopment = {
    academic: {
      excellent: 23,
      good: 45,
      average: 28,
      improvement: 4
    },
    sports: {
      excellent: 18,
      good: 38,
      average: 35,
      improvement: 9
    },
    cultural: {
      excellent: 31,
      good: 42,
      average: 22,
      improvement: 5
    }
  };

  const competitions = [
    { name: 'Mathematics Olympiad 2024', category: 'Academic', registrations: 156, deadline: '2024-01-30', status: 'active' },
    { name: 'Science Fair Competition', category: 'Academic', registrations: 89, deadline: '2024-02-15', status: 'active' },
    { name: 'Inter-School Basketball', category: 'Sports', registrations: 23, deadline: '2024-02-01', status: 'active' },
    { name: 'Annual Debate Championship', category: 'Cultural', registrations: 67, deadline: '2024-01-28', status: 'active' }
  ];

  const scholarshipCandidates = [
    { name: 'Emma Davis', class: '11-A', gpa: 4.9, achievements: 12, category: 'Academic Excellence' },
    { name: 'Alex Johnson', class: '10-A', gpa: 4.7, achievements: 8, category: 'Well-Rounded' },
    { name: 'Michael Zhang', class: '12-B', gpa: 4.8, achievements: 15, category: 'STEM Excellence' },
    { name: 'Sofia Rodriguez', class: '11-C', gpa: 4.6, achievements: 10, category: 'Cultural Arts' }
  ];

  const monthlyReports = [
    { month: 'January 2024', attendance: 94.5, academic: 88.2, sports: 83.1, cultural: 90.3 },
    { month: 'December 2023', attendance: 93.8, academic: 87.1, sports: 81.9, cultural: 88.7 },
    { month: 'November 2023', attendance: 95.1, academic: 86.9, sports: 80.5, cultural: 87.4 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="management-gradient text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <User className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">{user.name}</h1>
              <p className="text-purple-100">{user.position} • {user.department}</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-white text-white hover:bg-white hover:text-purple-600"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* School Overview Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="card-management">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Users className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">{schoolStats.totalStudents}</p>
                      <p className="text-sm text-gray-600">Total Students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-management">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <School className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">{schoolStats.totalTeachers}</p>
                      <p className="text-sm text-gray-600">Total Teachers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-management">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">{schoolStats.totalClasses}</p>
                      <p className="text-sm text-gray-600">Total Classes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-management">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">{schoolStats.overallAttendance}%</p>
                      <p className="text-sm text-gray-600">Attendance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Overview */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>School Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Academic Performance</span>
                        <span className="font-semibold">{schoolStats.academicPerformance}%</span>
                      </div>
                      <Progress value={schoolStats.academicPerformance} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Sports Performance</span>
                        <span className="font-semibold">{schoolStats.sportsPerformance}%</span>
                      </div>
                      <Progress value={schoolStats.sportsPerformance} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Cultural Performance</span>
                        <span className="font-semibold">{schoolStats.culturalPerformance}%</span>
                      </div>
                      <Progress value={schoolStats.culturalPerformance} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Teachers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teacherPerformance.slice(0, 3).map((teacher) => (
                    <div key={teacher.name} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <div>
                        <h5 className="font-medium">{teacher.name}</h5>
                        <p className="text-sm text-gray-600">{teacher.subject}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">⭐ {teacher.rating}</p>
                        <Badge variant="secondary">{teacher.feedback}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Teacher Performance Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {teacherPerformance.map((teacher) => (
                    <div key={teacher.name} className="p-4 border rounded-lg">
                      <div className="grid md:grid-cols-4 gap-4 items-center">
                        <div>
                          <h4 className="font-semibold">{teacher.name}</h4>
                          <p className="text-sm text-gray-600">{teacher.subject}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-purple-600">⭐ {teacher.rating}</p>
                          <p className="text-sm text-gray-600">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold">{teacher.students}</p>
                          <p className="text-sm text-gray-600">{teacher.classes} Classes</p>
                        </div>
                        <div className="text-center">
                          <Badge variant={
                            teacher.feedback === 'Outstanding' ? 'default' :
                            teacher.feedback === 'Excellent' ? 'secondary' : 'outline'
                          }>
                            {teacher.feedback}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Development Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-4">Academic Development</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Excellent</span>
                        <Badge className="bg-green-100 text-green-800">{studentDevelopment.academic.excellent}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Good</span>
                        <Badge className="bg-blue-100 text-blue-800">{studentDevelopment.academic.good}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Average</span>
                        <Badge variant="secondary">{studentDevelopment.academic.average}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Needs Improvement</span>
                        <Badge variant="destructive">{studentDevelopment.academic.improvement}%</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-4">Sports Development</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Excellent</span>
                        <Badge className="bg-green-100 text-green-800">{studentDevelopment.sports.excellent}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Good</span>
                        <Badge className="bg-blue-100 text-blue-800">{studentDevelopment.sports.good}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Average</span>
                        <Badge variant="secondary">{studentDevelopment.sports.average}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Needs Improvement</span>
                        <Badge variant="destructive">{studentDevelopment.sports.improvement}%</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-4">Cultural Development</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Excellent</span>
                        <Badge className="bg-green-100 text-green-800">{studentDevelopment.cultural.excellent}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Good</span>
                        <Badge className="bg-blue-100 text-blue-800">{studentDevelopment.cultural.good}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Average</span>
                        <Badge variant="secondary">{studentDevelopment.cultural.average}%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Needs Improvement</span>
                        <Badge variant="destructive">{studentDevelopment.cultural.improvement}%</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitions" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-management">
                <CardHeader>
                  <CardTitle>Add New Competition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Competition Name</label>
                      <input className="w-full p-2 border rounded" placeholder="Enter competition name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Category</label>
                      <select className="w-full p-2 border rounded">
                        <option>Academic</option>
                        <option>Sports</option>
                        <option>Cultural</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Registration Deadline</label>
                      <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <textarea className="w-full p-2 border rounded" rows={3} placeholder="Competition details..." />
                    </div>
                    <Button className="btn-management w-full">Create Competition</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Competitions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {competitions.map((competition, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium">{competition.name}</h5>
                        <Badge variant="secondary">{competition.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">Registrations: {competition.registrations}</p>
                      <p className="text-sm text-gray-600">Deadline: {competition.deadline}</p>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" className="btn-management">Manage</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scholarship Candidates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {scholarshipCandidates.map((candidate) => (
                    <div key={candidate.name} className="p-4 border rounded-lg">
                      <div className="grid md:grid-cols-4 gap-4 items-center">
                        <div>
                          <h4 className="font-semibold">{candidate.name}</h4>
                          <p className="text-sm text-gray-600">Class {candidate.class}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-purple-600">{candidate.gpa}</p>
                          <p className="text-sm text-gray-600">GPA</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold">{candidate.achievements}</p>
                          <p className="text-sm text-gray-600">Achievements</p>
                        </div>
                        <div className="text-center">
                          <Badge className="bg-purple-100 text-purple-800">{candidate.category}</Badge>
                          <div className="mt-2">
                            <Button size="sm" className="btn-management">Select</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {monthlyReports.map((report, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-4">{report.month}</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded">
                          <p className="text-lg font-bold text-blue-600">{report.attendance}%</p>
                          <p className="text-sm text-gray-600">Attendance</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded">
                          <p className="text-lg font-bold text-green-600">{report.academic}%</p>
                          <p className="text-sm text-gray-600">Academic</p>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded">
                          <p className="text-lg font-bold text-orange-600">{report.sports}%</p>
                          <p className="text-sm text-gray-600">Sports</p>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded">
                          <p className="text-lg font-bold text-purple-600">{report.cultural}%</p>
                          <p className="text-sm text-gray-600">Cultural</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManagementDashboard;