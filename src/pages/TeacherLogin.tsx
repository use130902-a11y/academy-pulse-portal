import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowLeft } from "lucide-react";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    employeeId: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.employeeId && credentials.password) {
      localStorage.setItem('currentUser', JSON.stringify({
        role: 'teacher',
        id: credentials.employeeId,
        name: 'Sarah Williams',
        subject: 'Mathematics',
        classes: ['10-A', '10-B', '11-A']
      }));
      navigate("/teacher/dashboard");
    }
  };

  return (
    <div className="min-h-screen teacher-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Teacher Portal
          </CardTitle>
          <p className="text-gray-600">Sign in to manage your classes</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                type="text"
                placeholder="Enter your employee ID"
                value={credentials.employeeId}
                onChange={(e) => setCredentials({...credentials, employeeId: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
              />
            </div>
            <Button type="submit" className="btn-teacher w-full">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Demo credentials: Any employee ID and password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherLogin;