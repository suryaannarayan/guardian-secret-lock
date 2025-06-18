import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Clock, 
  Shield, 
  MapPin, 
  Activity, 
  Lock, 
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import DeviceMonitor from '@/components/DeviceMonitor';
import AppControl from '@/components/AppControl';
import ScreenTimeManager from '@/components/ScreenTimeManager';
import LocationTracker from '@/components/LocationTracker';
import ContentFilter from '@/components/ContentFilter';
import ActivityReports from '@/components/ActivityReports';
import ScreenMirror from '@/components/ScreenMirror';

const Dashboard = () => {
  const [selectedDevice, setSelectedDevice] = useState("child1-phone");
  
  const devices = [
    {
      id: "child1-phone",
      name: "Emma's Phone",
      type: "Android",
      status: "online",
      batteryLevel: 78,
      screenTime: "3h 24m",
      location: "Home"
    },
    {
      id: "child2-tablet",
      name: "Jake's Tablet",
      type: "iPad",
      status: "locked",
      batteryLevel: 45,
      screenTime: "5h 12m",
      location: "School"
    }
  ];

  const selectedDeviceData = devices.find(d => d.id === selectedDevice);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-400" />
              ParentShield Pro
            </h1>
            
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                <Activity className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                <Smartphone className="mr-2 h-4 w-4" />
                Devices
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                <Clock className="mr-2 h-4 w-4" />
                Screen Time
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                <MapPin className="mr-2 h-4 w-4" />
                Location
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                <Shield className="mr-2 h-4 w-4" />
                Content Filter
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                <Users className="mr-2 h-4 w-4" />
                Family
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Dashboard</h2>
              <p className="text-slate-400">Manage and monitor your children's devices</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-red-600 hover:bg-red-700">
                <Lock className="mr-2 h-4 w-4" />
                Lock All Devices
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Emergency Mode
              </Button>
            </div>
          </div>

          {/* Device Selection */}
          <div className="mb-6">
            <div className="flex gap-4 flex-wrap">
              {devices.map((device) => (
                <Card 
                  key={device.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedDevice === device.id 
                      ? 'bg-blue-600/20 border-blue-500' 
                      : 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setSelectedDevice(device.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-6 w-6 text-blue-400" />
                      <div>
                        <h3 className="font-semibold text-white">{device.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant={device.status === 'online' ? 'default' : 'destructive'}
                            className={device.status === 'online' ? 'bg-green-600' : 'bg-red-600'}
                          >
                            {device.status === 'online' ? (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            ) : (
                              <XCircle className="w-3 h-3 mr-1" />
                            )}
                            {device.status}
                          </Badge>
                          <span className="text-sm text-slate-400">{device.batteryLevel}% battery</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">Screen Time Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{selectedDeviceData?.screenTime}</div>
                <Progress value={65} className="mt-2" />
                <p className="text-xs text-slate-400 mt-1">65% of daily limit</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">Apps Blocked</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">12</div>
                <p className="text-xs text-slate-400 mt-1">Social media & games</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{selectedDeviceData?.location}</div>
                <p className="text-xs text-slate-400 mt-1">Last updated 2 min ago</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  3
                </div>
                <p className="text-xs text-slate-400 mt-1">Require attention</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="monitor" className="space-y-4">
            <TabsList className="bg-slate-800/50 border-slate-700">
              <TabsTrigger value="monitor" className="data-[state=active]:bg-blue-600">Device Monitor</TabsTrigger>
              <TabsTrigger value="mirror" className="data-[state=active]:bg-blue-600">Screen Mirror</TabsTrigger>
              <TabsTrigger value="apps" className="data-[state=active]:bg-blue-600">App Control</TabsTrigger>
              <TabsTrigger value="screentime" className="data-[state=active]:bg-blue-600">Screen Time</TabsTrigger>
              <TabsTrigger value="location" className="data-[state=active]:bg-blue-600">Location</TabsTrigger>
              <TabsTrigger value="content" className="data-[state=active]:bg-blue-600">Content Filter</TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-blue-600">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="monitor">
              <DeviceMonitor device={selectedDeviceData} />
            </TabsContent>

            <TabsContent value="mirror">
              <ScreenMirror device={selectedDeviceData} />
            </TabsContent>

            <TabsContent value="apps">
              <AppControl device={selectedDeviceData} />
            </TabsContent>

            <TabsContent value="screentime">
              <ScreenTimeManager device={selectedDeviceData} />
            </TabsContent>

            <TabsContent value="location">
              <LocationTracker device={selectedDeviceData} />
            </TabsContent>

            <TabsContent value="content">
              <ContentFilter device={selectedDeviceData} />
            </TabsContent>

            <TabsContent value="reports">
              <ActivityReports device={selectedDeviceData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
