import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ArrowLeft } from "lucide-react";

const ManagementLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    adminId: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.adminId && credentials.password) {
      localStorage.setItem('currentUser', JSON.stringify({
        role: 'management',
        id: credentials.adminId,
        name: 'Dr. Emily Carter',
        position: 'Principal',
        department: 'Administration'
      }));
      navigate("/management/dashboard");
    }
  };

  return (
    <div className="min-h-screen management-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="mx-auto w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <Building2 className="h-8 w-8 text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Management Portal
          </CardTitle>
          <p className="text-gray-600">Administrative access</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="adminId">Admin ID</Label>
              <Input
                id="adminId"
                type="text"
                placeholder="Enter your admin ID"
                value={credentials.adminId}
                onChange={(e) => setCredentials({...credentials, adminId: e.target.value})}
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
            <Button type="submit" className="btn-management w-full">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Demo credentials: Any admin ID and password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagementLogin;