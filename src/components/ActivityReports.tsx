
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
  TrendingUp,
  TrendingDown,
  Clock,
  Smartphone,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface ActivityReportsProps {
  device: any;
}

const ActivityReports: React.FC<ActivityReportsProps> = ({ device }) => {
  const [timeRange, setTimeRange] = useState('week');

  const weeklyStats = {
    screenTime: { current: 28.5, previous: 31.2, change: -8.7 },
    appsUsed: { current: 45, previous: 52, change: -13.5 },
    blockedAttempts: { current: 89, previous: 76, change: 17.1 },
    safeZoneTime: { current: 85, previous: 82, change: 3.7 }
  };

  const dailyBreakdown = [
    { day: 'Monday', screenTime: 3.2, productivity: 68, blocked: 12 },
    { day: 'Tuesday', screenTime: 4.1, productivity: 45, blocked: 18 },
    { day: 'Wednesday', screenTime: 2.8, productivity: 78, blocked: 8 },
    { day: 'Thursday', screenTime: 4.8, productivity: 32, blocked: 25 },
    { day: 'Friday', screenTime: 5.2, productivity: 28, blocked: 19 },
    { day: 'Saturday', screenTime: 6.4, productivity: 15, blocked: 31 },
    { day: 'Sunday', screenTime: 4.1, productivity: 42, blocked: 16 }
  ];

  const topApps = [
    { name: 'YouTube', time: 8.5, category: 'Entertainment', trend: 'up' },
    { name: 'Instagram', time: 6.2, category: 'Social', trend: 'down' },
    { name: 'WhatsApp', time: 4.8, category: 'Communication', trend: 'up' },
    { name: 'Khan Academy', time: 3.2, category: 'Education', trend: 'up' },
    { name: 'Games', time: 2.9, category: 'Entertainment', trend: 'down' }
  ];

  const insights = [
    {
      type: 'positive',
      title: 'Improved Study Time',
      description: 'Educational app usage increased by 23% this week',
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      type: 'warning',
      title: 'High Social Media Usage',
      description: 'Social media time exceeded daily limits on 4 days',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      type: 'positive',
      title: 'Better Sleep Schedule',
      description: 'Device usage after bedtime decreased by 15%',
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Screen Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{weeklyStats.screenTime.current}h</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3 text-green-400" />
              <span className="text-sm text-green-400">
                {Math.abs(weeklyStats.screenTime.change)}% less
              </span>
              <span className="text-xs text-slate-400">vs last week</span>
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
            <div className="flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3 text-green-400" />
              <span className="text-sm text-green-400">
                {Math.abs(weeklyStats.appsUsed.change)}% less
              </span>
              <span className="text-xs text-slate-400">vs last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Blocked Attempts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{weeklyStats.blockedAttempts.current}</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-red-400" />
              <span className="text-sm text-red-400">
                {Math.abs(weeklyStats.blockedAttempts.change)}% more
              </span>
              <span className="text-xs text-slate-400">vs last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Safe Zone Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{weeklyStats.safeZoneTime.current}%</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-sm text-green-400">
                {Math.abs(weeklyStats.safeZoneTime.change)}% more
              </span>
              <span className="text-xs text-slate-400">vs last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time Range Selection */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Detailed Analytics</h2>
        <div className="flex gap-2">
          {['day', 'week', 'month'].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeRange(range)}
              className={timeRange === range ? 'bg-blue-600' : 'border-slate-600 text-slate-300 hover:bg-slate-700'}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Detailed Reports */}
      <Tabs defaultValue="usage" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="usage" className="data-[state=active]:bg-blue-600">Usage Patterns</TabsTrigger>
          <TabsTrigger value="apps" className="data-[state=active]:bg-blue-600">App Analytics</TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-blue-600">AI Insights</TabsTrigger>
          <TabsTrigger value="violations" className="data-[state=active]:bg-blue-600">Rule Violations</TabsTrigger>
        </TabsList>

        <TabsContent value="usage">
          <div className="space-y-6">
            {/* Daily Breakdown Chart */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-400" />
                  Daily Usage Breakdown
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Screen time and productivity metrics for each day
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dailyBreakdown.map((day, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{day.day}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-slate-300">{day.screenTime}h screen time</span>
                          <span className="text-slate-300">{day.blocked} blocked</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-400">Screen Time</span>
                            <span className="text-white">{day.screenTime}h</span>
                          </div>
                          <Progress value={(day.screenTime / 8) * 100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-400">Productivity</span>
                            <span className="text-white">{day.productivity}%</span>
                          </div>
                          <Progress value={day.productivity} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-400">Blocked</span>
                            <span className="text-white">{day.blocked}</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-red-500"
                              style={{ width: `${Math.min((day.blocked / 40) * 100, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Usage Patterns */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Usage Patterns</CardTitle>
                <CardDescription className="text-slate-400">
                  Peak usage times and behavior analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">2:30 PM</div>
                    <div className="text-sm text-slate-400">Peak Usage Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">67%</div>
                    <div className="text-sm text-slate-400">Educational Content</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">4.2h</div>
                    <div className="text-sm text-slate-400">Average Daily Use</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="apps">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Top Applications</CardTitle>
              <CardDescription className="text-slate-400">
                Most used applications and time spent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topApps.map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{app.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            {app.category}
                          </Badge>
                          <span className="text-sm text-slate-400">{app.time} hours this week</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {app.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-400" />
                      )}
                      <span className={`text-sm ${app.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {app.trend === 'up' ? '+' : '-'}12%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <Card key={index} className={`bg-slate-800/50 border-slate-700 border-l-4 ${
                insight.type === 'positive' ? 'border-l-green-500' : 
                insight.type === 'warning' ? 'border-l-yellow-500' : 'border-l-red-500'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      insight.type === 'positive' ? 'bg-green-600/20 text-green-400' : 
                      insight.type === 'warning' ? 'bg-yellow-600/20 text-yellow-400' : 'bg-red-600/20 text-red-400'
                    }`}>
                      {insight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{insight.title}</h3>
                      <p className="text-slate-400 mt-1">{insight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="violations">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Rule Violations</CardTitle>
              <CardDescription className="text-slate-400">
                Recent attempts to bypass restrictions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: '2:30 PM', type: 'Screen Time Limit', app: 'Instagram', action: 'Blocked' },
                  { time: '1:45 PM', type: 'Blocked Website', app: 'facebook.com', action: 'Blocked' },
                  { time: '12:20 PM', type: 'App Time Limit', app: 'TikTok', action: 'Blocked' },
                  { time: '11:30 AM', type: 'Bedtime Violation', app: 'YouTube', action: 'Warning' },
                ].map((violation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                      <div>
                        <h3 className="font-semibold text-white">{violation.type}</h3>
                        <p className="text-sm text-slate-400">{violation.app} • {violation.time}</p>
                      </div>
                    </div>
                    <Badge className={violation.action === 'Blocked' ? 'bg-red-600' : 'bg-yellow-600'}>
                      {violation.action}
                    </Badge>
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
