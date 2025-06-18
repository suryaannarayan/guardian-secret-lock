
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Shield, 
  Clock, 
  Ban,
  Play,
  Pause,
  Trash2,
  Download,
  Star
} from 'lucide-react';

interface AppControlProps {
  device: any;
}

const AppControl: React.FC<AppControlProps> = ({ device }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const installedApps = [
    { id: 1, name: 'Instagram', category: 'Social', blocked: true, timeLimit: '1h', icon: '📸' },
    { id: 2, name: 'TikTok', category: 'Social', blocked: true, timeLimit: '30m', icon: '🎵' },
    { id: 3, name: 'YouTube', category: 'Entertainment', blocked: false, timeLimit: '2h', icon: '📺' },
    { id: 4, name: 'WhatsApp', category: 'Communication', blocked: false, timeLimit: 'Unlimited', icon: '💬' },
    { id: 5, name: 'Fortnite', category: 'Games', blocked: true, timeLimit: '1h', icon: '🎮' },
    { id: 6, name: 'Khan Academy', category: 'Education', blocked: false, timeLimit: 'Unlimited', icon: '📚' },
    { id: 7, name: 'Snapchat', category: 'Social', blocked: true, timeLimit: '30m', icon: '👻' },
    { id: 8, name: 'Netflix', category: 'Entertainment', blocked: false, timeLimit: '2h', icon: '🎬' },
  ];

  const blockedApps = installedApps.filter(app => app.blocked);
  const allowedApps = installedApps.filter(app => !app.blocked);

  const filteredApps = installedApps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAppBlock = (appId: number) => {
    // Toggle app block logic
    console.log(`Toggling block for app ${appId}`);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">App Management</CardTitle>
          <CardDescription className="text-slate-400">
            Control which apps your child can access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input 
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Scan Device
            </Button>
          </div>

          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{installedApps.length}</div>
              <div className="text-sm text-slate-400">Total Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{blockedApps.length}</div>
              <div className="text-sm text-slate-400">Blocked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{allowedApps.length}</div>
              <div className="text-sm text-slate-400">Allowed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* App Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">All Apps</TabsTrigger>
          <TabsTrigger value="blocked" className="data-[state=active]:bg-blue-600">Blocked</TabsTrigger>
          <TabsTrigger value="allowed" className="data-[state=active]:bg-blue-600">Allowed</TabsTrigger>
          <TabsTrigger value="categories" className="data-[state=active]:bg-blue-600">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-4">
            {filteredApps.map((app) => (
              <Card key={app.id} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{app.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">{app.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            {app.category}
                          </Badge>
                          <span className="text-sm text-slate-400">
                            Time limit: {app.timeLimit}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {app.blocked ? (
                        <Badge className="bg-red-600">
                          <Ban className="w-3 h-3 mr-1" />
                          Blocked
                        </Badge>
                      ) : (
                        <Badge className="bg-green-600">
                          <Play className="w-3 h-3 mr-1" />
                          Allowed
                        </Badge>
                      )}
                      <Switch 
                        checked={!app.blocked} 
                        onCheckedChange={() => toggleAppBlock(app.id)}
                      />
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        <Clock className="w-4 h-4 mr-1" />
                        Set Limit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="blocked">
          <div className="grid gap-4">
            {blockedApps.map((app) => (
              <Card key={app.id} className="bg-slate-800/50 border-slate-700 border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl opacity-50">{app.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">{app.name}</h3>
                        <p className="text-sm text-red-400">Blocked - {app.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-green-600 text-green-400 hover:bg-green-900/20"
                        onClick={() => toggleAppBlock(app.id)}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Allow
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-red-600 text-red-400 hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="allowed">
          <div className="grid gap-4">
            {allowedApps.map((app) => (
              <Card key={app.id} className="bg-slate-800/50 border-slate-700 border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{app.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">{app.name}</h3>
                        <p className="text-sm text-green-400">Allowed - {app.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        <Clock className="w-4 h-4 mr-1" />
                        {app.timeLimit}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-red-600 text-red-400 hover:bg-red-900/20"
                        onClick={() => toggleAppBlock(app.id)}
                      >
                        <Ban className="w-4 h-4 mr-1" />
                        Block
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Social', 'Games', 'Entertainment', 'Education', 'Communication', 'Productivity'].map((category) => (
              <Card key={category} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-400" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Total Apps</span>
                      <span className="text-white">
                        {installedApps.filter(app => app.category === category).length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Blocked</span>
                      <span className="text-red-400">
                        {installedApps.filter(app => app.category === category && app.blocked).length}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-2 border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      Manage Category
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AppControl;
