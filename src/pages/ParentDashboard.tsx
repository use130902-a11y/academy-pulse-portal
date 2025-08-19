import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, BookOpen, TrendingUp, MessageCircle, FileText,
  LogOut, User, Award, Calendar, CheckCircle, AlertTriangle 
} from "lucide-react";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/parent/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  const childData = {
    name: 'Alex Johnson',
    class: '10-A',
    rollNumber: 'ST001',
    attendance: 96,
    overallGrade: 'A',
    subjects: [
      { name: 'Mathematics', grade: 'A', score: 85, teacher: 'Ms. Sarah Williams' },
      { name: 'Physics', grade: 'B+', score: 78, teacher: 'Mr. David Chen' },
      { name: 'Chemistry', grade: 'A+', score: 92, teacher: 'Dr. Maria Garcia' },
      { name: 'English', grade: 'A', score: 88, teacher: 'Ms. Jennifer Brown' },
      { name: 'History', grade: 'B', score: 75, teacher: 'Mr. Robert Taylor' }
    ],
    strengths: ['Mathematics', 'Chemistry', 'Analytical Thinking'],
    improvements: ['Physics Lab Work', 'History Essay Writing', 'Time Management'],
    extracurricular: [
      { activity: 'Debate Club', performance: 'Excellent', rank: 2 },
      { activity: 'Chess Club', performance: 'Good', rank: 5 },
      { activity: 'Basketball', performance: 'Average', rank: 12 }
    ]
  };

  const messages = [
    {
      from: 'Ms. Sarah Williams (Math Teacher)',
      subject: 'Excellent Progress in Calculus',
      date: '2024-01-20',
      type: 'achievement',
      content: 'Alex has shown remarkable improvement in calculus concepts...'
    },
    {
      from: 'Mr. David Chen (Physics Teacher)', 
      subject: 'Lab Report Feedback',
      date: '2024-01-18',
      type: 'feedback',
      content: 'Please encourage Alex to be more detailed in lab observations...'
    },
    {
      from: 'School Administration',
      subject: 'Parent-Teacher Meeting Scheduled',
      date: '2024-01-15',
      type: 'general',
      content: 'Your parent-teacher meeting is scheduled for January 25th...'
    }
  ];

  const leaveRequests = [
    { date: '2024-01-22', reason: 'Medical Appointment', status: 'pending', type: 'half-day' },
    { date: '2024-01-10', reason: 'Family Function', status: 'approved', type: 'full-day' },
    { date: '2024-01-05', reason: 'Illness', status: 'approved', type: 'full-day' }
  ];

  const aiSuggestions = [
    {
      category: 'Academic',
      suggestion: 'Consider additional physics practice problems to strengthen concept understanding.',
      priority: 'medium'
    },
    {
      category: 'Time Management',
      suggestion: 'Create a study schedule with regular breaks to improve focus and retention.',
      priority: 'high'
    },
    {
      category: 'Extracurricular',
      suggestion: 'Alex shows strong analytical skills - consider joining the Science Olympiad team.',
      priority: 'low'
    },
    {
      category: 'Social Skills',
      suggestion: 'Encourage participation in group study sessions to enhance collaborative learning.',
      priority: 'medium'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="parent-gradient text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <User className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">{user.name}</h1>
              <p className="text-orange-100">Parent of {childData.name} (Class {childData.class})</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-white text-white hover:bg-white hover:text-orange-600"
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
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="leave">Leave Requests</TabsTrigger>
            <TabsTrigger value="suggestions">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="card-parent">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Award className="h-8 w-8 text-orange-600" />
                    <div>
                      <p className="text-2xl font-bold">{childData.overallGrade}</p>
                      <p className="text-sm text-gray-600">Overall Grade</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-parent">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-orange-600" />
                    <div>
                      <p className="text-2xl font-bold">{childData.attendance}%</p>
                      <p className="text-sm text-gray-600">Attendance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-parent">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                    <div>
                      <p className="text-2xl font-bold">85</p>
                      <p className="text-sm text-gray-600">Avg Score</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-parent">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-8 w-8 text-orange-600" />
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-gray-600">New Messages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Child Summary & Areas of Interest */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Child Profile Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-lg">{childData.name}</h4>
                    <p className="text-gray-600">Class {childData.class} • Roll No: {childData.rollNumber}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Overall Performance</p>
                        <p className="text-xl font-bold text-orange-600">{childData.overallGrade}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Class Rank</p>
                        <p className="text-xl font-bold text-orange-600">3rd</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Areas of Excellence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Strengths</h5>
                    <div className="flex flex-wrap gap-2">
                      {childData.strengths.map((strength, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Areas for Improvement</h5>
                    <div className="flex flex-wrap gap-2">
                      {childData.improvements.map((improvement, index) => (
                        <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                          {improvement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Report Card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {childData.subjects.map((subject) => (
                    <div key={subject.name} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{subject.name}</h4>
                          <p className="text-sm text-gray-600">Teacher: {subject.teacher}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{subject.grade}</Badge>
                          <p className="text-sm text-gray-600 mt-1">{subject.score}%</p>
                        </div>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance Trend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium">Monthly Progress</h5>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between">
                        <span>January</span>
                        <span className="font-semibold">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                      <div className="flex justify-between">
                        <span>December</span>
                        <span className="font-semibold">83%</span>
                      </div>
                      <Progress value={83} className="h-2" />
                      <div className="flex justify-between">
                        <span>November</span>
                        <span className="font-semibold">81%</span>
                      </div>
                      <Progress value={81} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Extracurricular Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {childData.extracurricular.map((activity, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">{activity.activity}</h5>
                          <p className="text-sm text-gray-600">Rank: #{activity.rank}</p>
                        </div>
                        <Badge variant={
                          activity.performance === 'Excellent' ? 'default' :
                          activity.performance === 'Good' ? 'secondary' : 'outline'
                        }>
                          {activity.performance}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Teacher Communications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">{message.subject}</h5>
                      <Badge variant={
                        message.type === 'achievement' ? 'default' :
                        message.type === 'feedback' ? 'secondary' : 'outline'
                      }>
                        {message.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">From: {message.from}</p>
                    <p className="text-sm text-gray-700 mb-2">{message.content}</p>
                    <p className="text-xs text-gray-500">{message.date}</p>
                    <Button size="sm" variant="outline" className="mt-2">Reply</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-parent">
                <CardHeader>
                  <CardTitle>Submit Leave Request</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Date</label>
                      <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Type</label>
                      <select className="w-full p-2 border rounded">
                        <option>Full Day</option>
                        <option>Half Day</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Reason</label>
                      <textarea 
                        className="w-full p-2 border rounded" 
                        placeholder="Enter reason for leave"
                        rows={3}
                      />
                    </div>
                    <Button className="btn-parent w-full">Submit Request</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leave History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {leaveRequests.map((request, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{request.date}</p>
                          <p className="text-sm text-gray-600">{request.reason}</p>
                          <p className="text-sm text-gray-600">Type: {request.type}</p>
                        </div>
                        <Badge variant={
                          request.status === 'approved' ? 'default' :
                          request.status === 'pending' ? 'secondary' : 'destructive'
                        }>
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Improvement Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium">{suggestion.category}</h5>
                        <Badge variant={
                          suggestion.priority === 'high' ? 'destructive' :
                          suggestion.priority === 'medium' ? 'secondary' : 'outline'
                        }>
                          {suggestion.priority} priority
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700">{suggestion.suggestion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Analysis Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h5 className="font-medium mb-3">Overall Assessment</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {childData.name} demonstrates strong analytical and mathematical abilities, consistently 
                    performing above average in STEM subjects. The student shows particular excellence in 
                    Chemistry and Mathematics, suggesting a natural aptitude for scientific thinking. 
                    However, there are opportunities for improvement in Physics practical work and 
                    History essay writing skills.
                  </p>
                  <div className="mt-4">
                    <h6 className="font-medium">Recommended Actions:</h6>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                      <li>Schedule additional Physics lab practice sessions</li>
                      <li>Consider hiring a History tutor for essay writing techniques</li>
                      <li>Encourage participation in Science Olympiad for advanced challenges</li>
                      <li>Maintain current study schedule for Mathematics and Chemistry</li>
                    </ul>
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

export default ParentDashboard;