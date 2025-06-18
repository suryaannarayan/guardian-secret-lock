
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Calendar, 
  Pause,
  Play,
  RotateCcw,
  AlertTriangle,
  Moon,
  Sun
} from 'lucide-react';

interface ScreenTimeManagerProps {
  device: any;
}

const ScreenTimeManager: React.FC<ScreenTimeManagerProps> = ({ device }) => {
  const [dailyLimit, setDailyLimit] = useState(4);
  const [bedtimeEnabled, setBedtimeEnabled] = useState(true);
  const [bedtimeStart, setBedtimeStart] = useState('21:00');
  const [bedtimeEnd, setBedtimeEnd] = useState('07:00');

  const todayUsage = [
    { app: 'YouTube', time: 95, icon: '📺', color: 'bg-red-500' },
    { app: 'Instagram', time: 45, icon: '📸', color: 'bg-pink-500' },
    { app: 'WhatsApp', time: 32, icon: '💬', color: 'bg-green-500' },
    { app: 'Games', time: 28, icon: '🎮', color: 'bg-blue-500' },
    { app: 'Others', time: 20, icon: '📱', color: 'bg-gray-500' }
  ];

  const weeklyData = [
    { day: 'Mon', usage: 3.5 },
    { day: 'Tue', usage: 4.2 },
    { day: 'Wed', usage: 3.8 },
    { day: 'Thu', usage: 5.1 },
    { day: 'Fri', usage: 4.7 },
    { day: 'Sat', usage: 6.2 },
    { day: 'Sun', usage: 4.9 }
  ];

  const totalMinutes = todayUsage.reduce((sum, app) => sum + app.time, 0);
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  const usagePercentage = (totalMinutes / (dailyLimit * 60)) * 100;

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
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">
                {totalHours}h {remainingMinutes}m
              </div>
              <Progress 
                value={Math.min(usagePercentage, 100)} 
                className="h-3"
              />
              <div className="flex justify-between text-sm text-slate-400">
                <span>0h</span>
                <span>{usagePercentage.toFixed(0)}% used</span>
                <span>{dailyLimit}h limit</span>
              </div>
              {usagePercentage > 100 && (
                <Badge className="bg-red-600 mt-2">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Limit Exceeded
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full bg-red-600 hover:bg-red-700"
            >
              <Pause className="mr-2 h-4 w-4" />
              Pause Screen Time
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset Daily Usage
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-blue-600 text-blue-400 hover:bg-blue-900/20"
            >
              <Clock className="mr-2 h-4 w-4" />
              Add 30 Minutes
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Moon className="h-5 w-5 text-blue-400" />
              Bedtime Mode
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Enable Bedtime</span>
              <Switch 
                checked={bedtimeEnabled} 
                onCheckedChange={setBedtimeEnabled}
              />
            </div>
            {bedtimeEnabled && (
              <div className="space-y-2">
                <div className="text-sm text-slate-400">
                  Sleep time: {bedtimeStart} - {bedtimeEnd}
                </div>
                <Badge className="bg-purple-600">
                  Active in 3h 25m
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="daily" className="data-[state=active]:bg-blue-600">Daily Usage</TabsTrigger>
          <TabsTrigger value="weekly" className="data-[state=active]:bg-blue-600">Weekly Trends</TabsTrigger>
          <TabsTrigger value="limits" className="data-[state=active]:bg-blue-600">Time Limits</TabsTrigger>
          <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">App Usage Breakdown</CardTitle>
              <CardDescription className="text-slate-400">
                Today's screen time by application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayUsage.map((app, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-2xl">{app.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-medium">{app.name}</span>
                        <span className="text-slate-300">{app.time}m</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${app.color}`}
                          style={{ width: `${(app.time / totalMinutes) * 100}%` }}
                        />
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      Limit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Weekly Screen Time</CardTitle>
              <CardDescription className="text-slate-400">
                Usage patterns over the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 text-slate-300 font-medium">{day.day}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <div className="w-full bg-slate-700 rounded-full h-4">
                          <div 
                            className="h-4 rounded-full bg-blue-500"
                            style={{ width: `${(day.usage / 8) * 100}%` }}
                          />
                        </div>
                        <span className="text-slate-300 ml-3 w-12">{day.usage}h</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                <div className="text-white font-medium mb-2">Weekly Summary</div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      {weeklyData.reduce((sum, day) => sum + day.usage, 0).toFixed(1)}h
                    </div>
                    <div className="text-sm text-slate-400">Total</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      {(weeklyData.reduce((sum, day) => sum + day.usage, 0) / 7).toFixed(1)}h
                    </div>
                    <div className="text-sm text-slate-400">Daily Avg</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">
                      {Math.max(...weeklyData.map(day => day.usage)).toFixed(1)}h
                    </div>
                    <div className="text-sm text-slate-400">Peak Day</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="limits">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Time Limits Configuration</CardTitle>
              <CardDescription className="text-slate-400">
                Set daily and app-specific time limits
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
                    className="w-24 bg-slate-700/50 border-slate-600 text-white"
                    min="1"
                    max="12"
                  />
                  <span className="text-slate-300">hours per day</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-medium">App-Specific Limits</h3>
                {todayUsage.slice(0, 4).map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{app.icon}</span>
                      <span className="text-white">{app.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input 
                        type="number" 
                        placeholder="60"
                        className="w-16 bg-slate-700/50 border-slate-600 text-white text-sm"
                      />
                      <span className="text-slate-400 text-sm">min/day</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Device Schedule</CardTitle>
              <CardDescription className="text-slate-400">
                Configure when the device can be used
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Moon className="h-5 w-5 text-purple-400" />
                    <div>
                      <h4 className="text-white font-medium">Bedtime Mode</h4>
                      <p className="text-sm text-slate-400">Device locks during sleep hours</p>
                    </div>
                  </div>
                  <Switch 
                    checked={bedtimeEnabled} 
                    onCheckedChange={setBedtimeEnabled}
                  />
                </div>

                {bedtimeEnabled && (
                  <div className="pl-8 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bedtime-start" className="text-slate-300">Sleep Time</Label>
                        <Input 
                          id="bedtime-start"
                          type="time" 
                          value={bedtimeStart}
                          onChange={(e) => setBedtimeStart(e.target.value)}
                          className="bg-slate-700/50 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bedtime-end" className="text-slate-300">Wake Time</Label>
                        <Input 
                          id="bedtime-end"
                          type="time" 
                          value={bedtimeEnd}
                          onChange={(e) => setBedtimeEnd(e.target.value)}
                          className="bg-slate-700/50 border-slate-600 text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Sun className="h-5 w-5 text-yellow-400" />
                    <div>
                      <h4 className="text-white font-medium">Study Time</h4>
                      <p className="text-sm text-slate-400">Only educational apps allowed</p>
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-green-400" />
                    <div>
                      <h4 className="text-white font-medium">Weekend Mode</h4>
                      <p className="text-sm text-slate-400">Extended hours on weekends</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScreenTimeManager;
