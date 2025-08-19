import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  BookOpen, Users, FileText, Calendar, MessageCircle, 
  LogOut, User, CheckCircle, Clock, Award, Bell 
} from "lucide-react";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/teacher/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  const classes = [
    { name: '10-A', subject: 'Mathematics', students: 32, attendance: 94 },
    { name: '10-B', subject: 'Mathematics', students: 28, attendance: 89 },
    { name: '11-A', subject: 'Advanced Math', students: 25, attendance: 97 }
  ];

  const students = [
    { name: 'Alex Johnson', class: '10-A', rollNo: 'ST001', performance: { academic: 85, sports: 78, cultural: 92 }, attendance: 96 },
    { name: 'Sarah Smith', class: '10-A', rollNo: 'ST002', performance: { academic: 92, sports: 65, cultural: 88 }, attendance: 98 },
    { name: 'Mike Wilson', class: '10-B', rollNo: 'ST015', performance: { academic: 78, sports: 89, cultural: 73 }, attendance: 94 },
    { name: 'Emma Davis', class: '11-A', rollNo: 'ST025', performance: { academic: 96, sports: 82, cultural: 95 }, attendance: 99 }
  ];

  const assignments = [
    { title: 'Integration Problems Set 1', class: '10-A', dueDate: '2024-01-25', submitted: 25, total: 32 },
    { title: 'Calculus Quiz', class: '10-B', dueDate: '2024-01-27', submitted: 22, total: 28 },
    { title: 'Advanced Algebra', class: '11-A', dueDate: '2024-01-30', submitted: 20, total: 25 }
  ];

  const upcomingBirthdays = [
    { name: 'Alex Johnson', date: 'Jan 25', class: '10-A' },
    { name: 'Sarah Smith', date: 'Jan 28', class: '10-A' },
    { name: 'Mike Wilson', date: 'Feb 2', class: '10-B' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="teacher-gradient text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <User className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">{user.name}</h1>
              <p className="text-green-100">{user.subject} Teacher • {user.classes?.join(', ')}</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-white text-white hover:bg-white hover:text-green-600"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="homework">Homework</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="card-teacher">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Users className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">85</p>
                      <p className="text-sm text-gray-600">Total Students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-teacher">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">94%</p>
                      <p className="text-sm text-gray-600">Avg Attendance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-teacher">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-gray-600">Pending Reviews</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-teacher">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Bell className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-gray-600">Birthdays Today</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Classes & Birthdays */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Classes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {classes.map((cls) => (
                    <div key={cls.name} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{cls.name}</h4>
                        <p className="text-sm text-gray-600">{cls.students} students</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{cls.attendance}% attendance</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Birthdays
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingBirthdays.map((birthday) => (
                    <div key={birthday.name} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{birthday.name}</h4>
                        <p className="text-sm text-gray-600">Class {birthday.class}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{birthday.date}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="classes" className="space-y-6">
            <div className="grid gap-6">
              {classes.map((cls) => (
                <Card key={cls.name} className="card-teacher">
                  <CardHeader>
                    <CardTitle>Class {cls.name} - {cls.subject}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{cls.students}</p>
                        <p className="text-sm text-gray-600">Total Students</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{cls.attendance}%</p>
                        <p className="text-sm text-gray-600">Attendance Rate</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">B+</p>
                        <p className="text-sm text-gray-600">Class Average</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mark Attendance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Class 10-A (Today)</h4>
                    {students.filter(s => s.class === '10-A').map((student) => (
                      <div key={student.rollNo} className="flex justify-between items-center p-3 border rounded">
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">Roll: {student.rollNo}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="btn-teacher">Present</Button>
                          <Button size="sm" variant="outline">Absent</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Attendance Summary</h4>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-lg font-semibold">Today's Attendance</p>
                      <p className="text-3xl font-bold text-green-600">28/30</p>
                      <p className="text-sm text-gray-600">93.3% Present</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="homework" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-teacher">
                <CardHeader>
                  <CardTitle>Add New Homework</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Title</label>
                      <Input placeholder="Enter homework title" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Class</label>
                      <select className="w-full p-2 border rounded">
                        <option>10-A</option>
                        <option>10-B</option>
                        <option>11-A</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Due Date</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <Textarea placeholder="Enter homework description" />
                    </div>
                    <Button className="btn-teacher w-full">Assign Homework</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Assignments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">Class: {assignment.class}</p>
                      <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                      <div className="mt-2">
                        <Badge variant="secondary">
                          {assignment.submitted}/{assignment.total} submitted
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Performance Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {students.map((student) => (
                    <div key={student.rollNo} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-semibold">{student.name}</h4>
                          <p className="text-sm text-gray-600">Class {student.class} • Roll: {student.rollNo}</p>
                        </div>
                        <Badge variant="secondary">{student.attendance}% attendance</Badge>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded">
                          <p className="text-lg font-bold text-blue-600">{student.performance.academic}%</p>
                          <p className="text-sm text-gray-600">Academic</p>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded">
                          <p className="text-lg font-bold text-orange-600">{student.performance.sports}%</p>
                          <p className="text-sm text-gray-600">Sports</p>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded">
                          <p className="text-lg font-bold text-purple-600">{student.performance.cultural}%</p>
                          <p className="text-sm text-gray-600">Cultural</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-teacher">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Send Message to Parents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Select Student</label>
                      <select className="w-full p-2 border rounded">
                        <option>Alex Johnson (10-A)</option>
                        <option>Sarah Smith (10-A)</option>
                        <option>Mike Wilson (10-B)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message Type</label>
                      <select className="w-full p-2 border rounded">
                        <option>General Update</option>
                        <option>Performance Alert</option>
                        <option>Behavior Notice</option>
                        <option>Achievement Recognition</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <Textarea placeholder="Type your message to parents..." />
                    </div>
                    <Button className="btn-teacher w-full">Send Message</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded">
                      <p className="font-medium">To: Mr. Johnson (Alex's parent)</p>
                      <p className="text-sm text-gray-600">Great improvement in math performance...</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <div className="p-3 border rounded">
                      <p className="font-medium">To: Mrs. Smith (Sarah's parent)</p>
                      <p className="text-sm text-gray-600">Excellent participation in class discussions...</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="card-teacher">
              <CardHeader>
                <CardTitle>Generate Student Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Report Configuration</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Select Student</label>
                        <select className="w-full p-2 border rounded">
                          <option>Alex Johnson</option>
                          <option>Sarah Smith</option>
                          <option>Mike Wilson</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Report Period</label>
                        <select className="w-full p-2 border rounded">
                          <option>This Month</option>
                          <option>This Quarter</option>
                          <option>This Semester</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Include Suggestions</label>
                        <Textarea placeholder="Add improvement suggestions..." />
                      </div>
                      <Button className="btn-teacher w-full">Generate Report</Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Daily Thoughts & Facts</h4>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium">Today's Motivation</h5>
                      <p className="text-sm text-gray-600 mt-2">
                        "The beautiful thing about learning is that no one can take it away from you." - B.B. King
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium">Fun Math Fact</h5>
                      <p className="text-sm text-gray-600 mt-2">
                        Did you know? The number 0 was invented in India around the 5th century CE!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;