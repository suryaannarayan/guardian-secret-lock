
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Calendar,
  Ban,
  Play,
  Pause,
  Settings,
  AlertTriangle,
  Moon,
  Sun,
  Smartphone,
  Timer
} from 'lucide-react';

interface ScreenTimeManagerProps {
  device: any;
}

const ScreenTimeManager: React.FC<ScreenTimeManagerProps> = ({ device }) => {
  const [dailyLimit, setDailyLimit] = useState(4);
  const [bedtimeEnabled, setBedtimeEnabled] = useState(true);
  const [breakEnabled, setBreakEnabled] = useState(true);

  const todayUsage = {
    total: "3h 24m",
    percentage: 85,
    apps: [
      { name: "YouTube", time: "1h 45m", percentage: 52 },
      { name: "Instagram", time: "45m", percentage: 22 },
      { name: "TikTok", time: "32m", percentage: 16 },
      { name: "WhatsApp", time: "22m", percentage: 10 }
    ]
  };

  const weeklyData = [
    { day: "Mon", hours: 3.5 },
    { day: "Tue", hours: 4.2 },
    { day: "Wed", hours: 2.8 },
    { day: "Thu", hours: 5.1 },
    { day: "Fri", hours: 6.2 },
    { day: "Sat", hours: 7.8 },
    { day: "Sun", hours: 4.5 }
  ];

  const schedules = [
    { name: "School Hours", days: "Mon-Fri", time: "8:00 AM - 3:00 PM", active: true },
    { name: "Bedtime", days: "Daily", time: "9:00 PM - 7:00 AM", active: true },
    { name: "Study Time", days: "Mon-Fri", time: "4:00 PM - 6:00 PM", active: false }
  ];

  return (
    <div className="space-y-6">
      {/* Daily Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-400" />
              Today's Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-white">{todayUsage.total}</div>
              <Progress value={todayUsage.percentage} className="h-3" />
              <p className="text-sm text-slate-400">
                {todayUsage.percentage}% of daily limit ({dailyLimit}h)
              </p>
              {todayUsage.percentage > 90 && (
                <Badge className="bg-red-600">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Limit Exceeded
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Ban className="mr-2 h-4 w-4" />
              Block All Apps Now
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Timer className="mr-2 h-4 w-4" />
              Add 30 Min Break
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Pause className="mr-2 h-4 w-4" />
              Pause Limits (1h)
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Weekly Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center justify-between">
                  <span className="text-slate-300 w-10">{day.day}</span>
                  <div className="flex-1 mx-3">
                    <Progress value={(day.hours / 8) * 100} className="h-2" />
                  </div>
                  <span className="text-white text-sm w-12">{day.hours}h</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Management */}
      <Tabs defaultValue="apps" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="apps" className="data-[state=active]:bg-blue-600">App Usage</TabsTrigger>
          <TabsTrigger value="schedules" className="data-[state=active]:bg-blue-600">Schedules</TabsTrigger>
          <TabsTrigger value="limits" className="data-[state=active]:bg-blue-600">Time Limits</TabsTrigger>
          <TabsTrigger value="bedtime" className="data-[state=active]:bg-blue-600">Bedtime</TabsTrigger>
        </TabsList>

        <TabsContent value="apps">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">App Usage Breakdown</CardTitle>
              <CardDescription className="text-slate-400">
                See how time is spent across different apps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayUsage.apps.map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{app.name}</h4>
                        <p className="text-sm text-slate-400">{app.time} today</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">{app.percentage}%</div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="mt-1 border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        Set Limit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedules">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Screen Time Schedules</CardTitle>
              <CardDescription className="text-slate-400">
                Manage when device usage is allowed or restricted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      <div>
                        <h4 className="text-white font-medium">{schedule.name}</h4>
                        <p className="text-sm text-slate-400">{schedule.days} • {schedule.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Switch checked={schedule.active} onCheckedChange={() => {}} />
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Add New Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="limits">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Daily Time Limits</CardTitle>
              <CardDescription className="text-slate-400">
                Set overall device usage limits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="daily-limit" className="text-white">Daily Screen Time Limit</Label>
                <div className="flex items-center gap-4">
                  <Input 
                    id="daily-limit"
                    type="number" 
                    value={dailyLimit}
                    onChange={(e) => setDailyLimit(Number(e.target.value))}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                  <span className="text-slate-300">hours</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Break Reminders</h4>
                  <p className="text-sm text-slate-400">Remind to take breaks every 30 minutes</p>
                </div>
                <Switch checked={breakEnabled} onCheckedChange={setBreakEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Weekend Different Limits</h4>
                  <p className="text-sm text-slate-400">Apply different limits on weekends</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bedtime">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Moon className="h-5 w-5 text-blue-400" />
                Bedtime Settings
              </CardTitle>
              <CardDescription className="text-slate-400">
                Configure sleep-friendly restrictions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Enable Bedtime Mode</h4>
                  <p className="text-sm text-slate-400">Restrict device usage during sleep hours</p>
                </div>
                <Switch checked={bedtimeEnabled} onCheckedChange={setBedtimeEnabled} />
              </div>

              {bedtimeEnabled && (
                <div className="space-y-4 p-4 bg-slate-700/20 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">Bedtime Start</Label>
                      <Input 
                        type="time" 
                        defaultValue="21:00"
                        className="bg-slate-700/50 border-slate-600 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Wake Up Time</Label>
                      <Input 
                        type="time" 
                        defaultValue="07:00"
                        className="bg-slate-700/50 border-slate-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Block all apps</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Allow emergency calls</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Dim screen automatically</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScreenTimeManager;
