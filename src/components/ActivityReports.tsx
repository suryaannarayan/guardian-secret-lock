
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Calendar,
  Download,
  Eye,
  Clock,
  Smartphone,
  Globe,
  MessageSquare,
  Phone,
  Camera,
  MapPin,
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';

interface ActivityReportsProps {
  device: any;
}

const ActivityReports: React.FC<ActivityReportsProps> = ({ device }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const weeklyStats = {
    screenTime: { current: '28h 45m', change: +12, trend: 'up' },
    appsUsed: { current: 45, change: -3, trend: 'down' },
    sitesVisited: { current: 127, change: +8, trend: 'up' },
    blockedAttempts: { current: 23, change: -15, trend: 'down' }
  };

  const dailyScreenTime = [
    { day: 'Mon', hours: 3.5, productive: 1.2, entertainment: 2.3 },
    { day: 'Tue', hours: 4.2, productive: 1.8, entertainment: 2.4 },
    { day: 'Wed', hours: 2.8, productive: 1.5, entertainment: 1.3 },
    { day: 'Thu', hours: 5.1, productive: 2.1, entertainment: 3.0 },
    { day: 'Fri', hours: 6.2, productive: 1.9, entertainment: 4.3 },
    { day: 'Sat', hours: 7.8, productive: 0.8, entertainment: 7.0 },
    { day: 'Sun', hours: 4.5, productive: 1.0, entertainment: 3.5 }
  ];

  const topApps = [
    { name: 'YouTube', time: '8h 23m', category: 'Entertainment', change: +15 },
    { name: 'Instagram', time: '4h 12m', category: 'Social', change: -8 },
    { name: 'WhatsApp', time: '3h 45m', category: 'Communication', change: +5 },
    { name: 'TikTok', time: '3h 21m', category: 'Entertainment', change: +22 },
    { name: 'Chrome', time: '2h 56m', category: 'Productivity', change: -3 }
  ];

  const locationHistory = [
    { location: 'Home', time: '18h 32m', percentage: 65 },
    { location: 'School', time: '6h 45m', percentage: 24 },
    { location: 'Friend\'s House', time: '2h 15m', percentage: 8 },
    { location: 'Mall', time: '51m', percentage: 3 }
  ];

  const communicationStats = {
    calls: { total: 47, duration: '2h 34m', contacts: 12 },
    messages: { sent: 234, received: 189, contacts: 8 },
    socialMedia: { posts: 12, comments: 67, likes: 89 }
  };

  const securityEvents = [
    { time: '14:32', event: 'Inappropriate website blocked', severity: 'medium', category: 'Content Filter' },
    { time: '12:15', event: 'App installation blocked', severity: 'low', category: 'App Control' },
    { time: '10:45', event: 'Left safe zone without permission', severity: 'high', category: 'Location' },
    { time: '09:20', event: 'Screen time limit exceeded', severity: 'medium', category: 'Screen Time' }
  ];

  return (
    <div className="space-y-6">
      {/* Period Selection */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-white">Activity Reports</h3>
          <p className="text-slate-400">Comprehensive device usage analytics</p>
        </div>
        <div className="flex gap-2">
          <select 
            className="bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Screen Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{weeklyStats.screenTime.current}</div>
            <div className={`text-sm flex items-center gap-1 ${
              weeklyStats.screenTime.trend === 'up' ? 'text-red-400' : 'text-green-400'
            }`}>
              {weeklyStats.screenTime.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(weeklyStats.screenTime.change)}% vs last week
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Apps Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{weeklyStats.appsUsed.current}</div>
            <div className={`text-sm flex items-center gap-1 ${
              weeklyStats.appsUsed.trend === 'down' ? 'text-green-400' : 'text-red-400'
            }`}>
              {weeklyStats.appsUsed.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(weeklyStats.appsUsed.change)} vs last week
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Sites Visited
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{weeklyStats.sitesVisited.current}</div>
            <div className={`text-sm flex items-center gap-1 ${
              weeklyStats.sitesVisited.trend === 'up' ? 'text-red-400' : 'text-green-400'
            }`}>
              {weeklyStats.sitesVisited.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              +{weeklyStats.sitesVisited.change} vs last week
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Blocked Attempts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{weeklyStats.blockedAttempts.current}</div>
            <div className="text-sm flex items-center gap-1 text-green-400">
              <TrendingDown className="h-3 w-3" />
              -{Math.abs(weeklyStats.blockedAttempts.change)} vs last week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <Tabs defaultValue="screen-time" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="screen-time" className="data-[state=active]:bg-blue-600">Screen Time</TabsTrigger>
          <TabsTrigger value="apps" className="data-[state=active]:bg-blue-600">App Usage</TabsTrigger>
          <TabsTrigger value="location" className="data-[state=active]:bg-blue-600">Location</TabsTrigger>
          <TabsTrigger value="communication" className="data-[state=active]:bg-blue-600">Communication</TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-blue-600">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="screen-time">
          <div className="grid gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Daily Screen Time Breakdown</CardTitle>
                <CardDescription className="text-slate-400">
                  Productive vs Entertainment usage patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dailyScreenTime.map((day) => (
                    <div key={day.day} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">{day.day}</span>
                        <span className="text-white">{day.hours}h total</span>
                      </div>
                      <div className="flex gap-1 h-3">
                        <div 
                          className="bg-green-600 rounded-l"
                          style={{ width: `${(day.productive / day.hours) * 100}%` }}
                        />
                        <div 
                          className="bg-blue-600 rounded-r"
                          style={{ width: `${(day.entertainment / day.hours) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Productive: {day.productive}h</span>
                        <span>Entertainment: {day.entertainment}h</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="apps">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Top Apps This Week</CardTitle>
              <CardDescription className="text-slate-400">
                Most used applications and time spent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topApps.map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{app.name}</h4>
                        <p className="text-sm text-slate-400">{app.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">{app.time}</div>
                      <div className={`text-sm flex items-center gap-1 ${
                        app.change > 0 ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {app.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {Math.abs(app.change)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                Location Analytics
              </CardTitle>
              <CardDescription className="text-slate-400">
                Time spent at different locations this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {locationHistory.map((location, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{location.location}</span>
                      <span className="text-slate-300">{location.time}</span>
                    </div>
                    <Progress value={location.percentage} className="h-2" />
                    <div className="text-right text-sm text-slate-400">
                      {location.percentage}% of total time
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-400" />
                    Phone Calls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Total Calls</span>
                      <span className="text-white font-medium">{communicationStats.calls.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Duration</span>
                      <span className="text-white font-medium">{communicationStats.calls.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Contacts</span>
                      <span className="text-white font-medium">{communicationStats.calls.contacts}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                    Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Sent</span>
                      <span className="text-white font-medium">{communicationStats.messages.sent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Received</span>
                      <span className="text-white font-medium">{communicationStats.messages.received}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Contacts</span>
                      <span className="text-white font-medium">{communicationStats.messages.contacts}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Camera className="h-5 w-5 text-blue-400" />
                    Social Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Posts</span>
                      <span className="text-white font-medium">{communicationStats.socialMedia.posts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Comments</span>
                      <span className="text-white font-medium">{communicationStats.socialMedia.comments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Likes</span>
                      <span className="text-white font-medium">{communicationStats.socialMedia.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Security Events</CardTitle>
              <CardDescription className="text-slate-400">
                Recent security-related activities and blocks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        event.severity === 'high' ? 'bg-red-500' :
                        event.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div>
                        <h4 className="text-white font-medium">{event.event}</h4>
                        <p className="text-sm text-slate-400">{event.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={
                          event.severity === 'high' ? 'bg-red-600' :
                          event.severity === 'medium' ? 'bg-yellow-600' : 'bg-blue-600'
                        }
                      >
                        {event.severity}
                      </Badge>
                      <p className="text-sm text-slate-400 mt-1">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ActivityReports;
