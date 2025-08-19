import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, Calendar, Trophy, Library, FileText, 
  LogOut, User, Target, Award, Clock, MessageCircle 
} from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/student/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  const subjects = [
    { name: 'Mathematics', progress: 85, grade: 'A', nextTopic: 'Calculus Basics' },
    { name: 'Physics', progress: 78, grade: 'B+', nextTopic: 'Electromagnetic Waves' },
    { name: 'Chemistry', progress: 92, grade: 'A+', nextTopic: 'Organic Chemistry' },
    { name: 'English', progress: 88, grade: 'A', nextTopic: 'Literature Analysis' },
    { name: 'History', progress: 75, grade: 'B', nextTopic: 'World War II' }
  ];

  const assignments = [
    { subject: 'Mathematics', title: 'Integration Problems', due: '2024-01-25', status: 'pending' },
    { subject: 'Physics', title: 'Wave Motion Lab Report', due: '2024-01-27', status: 'completed' },
    { subject: 'Chemistry', title: 'Molecular Structure Essay', due: '2024-01-30', status: 'pending' },
    { subject: 'English', title: 'Shakespeare Analysis', due: '2024-02-01', status: 'in-progress' }
  ];

  const leaderboards = [
    { category: 'Academic Overall', rank: 3, total: 45, points: 1247 },
    { category: 'Mathematics', rank: 1, total: 45, points: 387 },
    { category: 'Sports - Basketball', rank: 7, total: 23, points: 156 },
    { category: 'Cultural - Debate', rank: 2, total: 18, points: 298 }
  ];

  const schedule = [
    { time: '09:00 AM', subject: 'Mathematics', room: 'Room 201', type: 'lecture' },
    { time: '10:30 AM', subject: 'Physics Lab', room: 'Lab 3', type: 'practical' },
    { time: '12:00 PM', subject: 'Lunch Break', room: 'Cafeteria', type: 'break' },
    { time: '01:00 PM', subject: 'English', room: 'Room 105', type: 'lecture' },
    { time: '02:30 PM', subject: 'Basketball Practice', room: 'Sports Complex', type: 'sports' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="student-gradient text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <User className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">{user.name}</h1>
              <p className="text-blue-100">Class {user.class} • Roll No: {user.rollNumber}</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-white text-white hover:bg-white hover:text-blue-600"
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
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="card-student">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Trophy className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">3rd</p>
                      <p className="text-sm text-gray-600">Overall Rank</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-student">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Target className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">85%</p>
                      <p className="text-sm text-gray-600">Avg Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-student">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Award className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-gray-600">Achievements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-student">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">4</p>
                      <p className="text-sm text-gray-600">Pending Tasks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Performance & Leaderboards */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {subjects.slice(0, 3).map((subject) => (
                    <div key={subject.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{subject.name}</span>
                        <Badge variant="secondary">{subject.grade}</Badge>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leaderboard Rankings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {leaderboards.map((board) => (
                    <div key={board.category} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{board.category}</p>
                        <p className="text-sm text-gray-600">{board.points} points</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        #{board.rank}/{board.total}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map((subject) => (
                <Card key={subject.name} className="card-student">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      {subject.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Progress</span>
                      <Badge variant="secondary">{subject.grade}</Badge>
                    </div>
                    <Progress value={subject.progress} className="h-3" />
                    <p className="text-sm text-gray-600">
                      Next Topic: <span className="font-medium">{subject.nextTopic}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <div className="grid gap-4">
              {assignments.map((assignment, index) => (
                <Card key={index} className="card-student">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">Subject: {assignment.subject}</p>
                        <p className="text-sm text-gray-600">Due: {assignment.due}</p>
                      </div>
                      <Badge variant={
                        assignment.status === 'completed' ? 'default' :
                        assignment.status === 'in-progress' ? 'secondary' : 'destructive'
                      }>
                        {assignment.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-blue-50">
                    <div className="text-sm font-medium text-blue-600 w-20">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.subject}</p>
                      <p className="text-sm text-gray-600">{item.room}</p>
                    </div>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitions" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-student">
                <CardHeader>
                  <CardTitle>Available Competitions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">Mathematics Olympiad 2024</h4>
                      <p className="text-sm text-gray-600">Registration ends: Jan 30, 2024</p>
                      <Button size="sm" className="btn-student mt-2">Register</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">Science Fair Competition</h4>
                      <p className="text-sm text-gray-600">Submission deadline: Feb 15, 2024</p>
                      <Button size="sm" className="btn-student mt-2">Participate</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>My Participations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">Debate Championship</h4>
                      <p className="text-sm text-gray-600">Status: Semifinals</p>
                      <Badge className="mt-2">Active</Badge>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">Chess Tournament</h4>
                      <p className="text-sm text-gray-600">Result: 2nd Place</p>
                      <Badge variant="secondary" className="mt-2">Completed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="library" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-student">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Library className="h-5 w-5" />
                    Digital Library
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded">
                      <h4 className="font-medium">To Kill a Mockingbird</h4>
                      <p className="text-sm text-gray-600">Harper Lee</p>
                      <Button size="sm" variant="outline" className="mt-2">Read</Button>
                    </div>
                    <div className="p-3 border rounded">
                      <h4 className="font-medium">Physics Fundamentals</h4>
                      <p className="text-sm text-gray-600">Dr. Richard Stone</p>
                      <Button size="sm" variant="outline" className="mt-2">Read</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Currently Reading</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 border rounded">
                    <h4 className="font-medium">The Great Gatsby</h4>
                    <Progress value={65} className="mt-2" />
                    <p className="text-sm text-gray-600 mt-1">65% complete</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reading Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Monthly Goal</p>
                      <Progress value={75} className="mt-1" />
                      <p className="text-sm text-gray-600">3/4 books completed</p>
                    </div>
                    <div>
                      <p className="font-medium">Reading Streak</p>
                      <p className="text-2xl font-bold text-blue-600">12 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;