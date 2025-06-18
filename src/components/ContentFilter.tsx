
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Globe, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Trash2,
  Search,
  Filter
} from 'lucide-react';

interface ContentFilterProps {
  device: any;
}

const ContentFilter: React.FC<ContentFilterProps> = ({ device }) => {
  const [filterEnabled, setFilterEnabled] = useState(true);
  const [newBlockedSite, setNewBlockedSite] = useState('');
  const [filterLevel, setFilterLevel] = useState(2);

  const filterLevels = [
    { id: 0, name: "Off", description: "No filtering" },
    { id: 1, name: "Light", description: "Block adult content only" },
    { id: 2, name: "Moderate", description: "Block adult, violence, and mature content" },
    { id: 3, name: "Strict", description: "Allow only educational and pre-approved sites" },
  ];

  const blockedCategories = [
    { name: "Adult Content", blocked: 456, color: "bg-red-500", enabled: true },
    { name: "Violence", blocked: 123, color: "bg-orange-500", enabled: true },
    { name: "Gambling", blocked: 89, color: "bg-yellow-500", enabled: true },
    { name: "Social Media", blocked: 234, color: "bg-blue-500", enabled: false },
    { name: "Gaming", blocked: 167, color: "bg-purple-500", enabled: false },
    { name: "Shopping", blocked: 45, color: "bg-green-500", enabled: false },
  ];

  const blockedSites = [
    { id: 1, url: "facebook.com", category: "Social Media", attempts: 15 },
    { id: 2, url: "tiktok.com", category: "Social Media", attempts: 23 },
    { id: 3, url: "inappropriate-site.com", category: "Adult Content", attempts: 3 },
    { id: 4, url: "violent-games.com", category: "Violence", attempts: 8 },
  ];

  const allowedSites = [
    { id: 1, url: "khanacademy.org", category: "Education" },
    { id: 2, url: "nationalgeographic.com", category: "Education" },
    { id: 3, url: "wikipedia.org", category: "Reference" },
    { id: 4, url: "codecademy.com", category: "Education" },
  ];

  const recentActivity = [
    { time: "14:30", action: "Blocked", site: "facebook.com", category: "Social Media" },
    { time: "14:25", action: "Allowed", site: "khanacademy.org", category: "Education" },
    { time: "14:20", action: "Blocked", site: "tiktok.com", category: "Social Media" },
    { time: "14:15", action: "Allowed", site: "wikipedia.org", category: "Reference" },
  ];

  const totalBlocked = blockedCategories.reduce((sum, cat) => sum + cat.blocked, 0);

  return (
    <div className="space-y-6">
      {/* Filter Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              Filter Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Content Filter</span>
                <Switch 
                  checked={filterEnabled} 
                  onCheckedChange={setFilterEnabled}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300">Filter Level</span>
                  <Badge className="bg-blue-600">
                    {filterLevels[filterLevel].name}
                  </Badge>
                </div>
                <p className="text-sm text-slate-400">
                  {filterLevels[filterLevel].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Today's Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">{totalBlocked}</div>
                <div className="text-sm text-slate-400">Sites Blocked</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-green-400">87</div>
                  <div className="text-xs text-slate-400">Allowed</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-yellow-400">12</div>
                  <div className="text-xs text-slate-400">Warnings</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Shield className="mr-2 h-4 w-4" />
              Block All Social Media
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Study Mode
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-blue-600 text-blue-400 hover:bg-blue-900/20"
            >
              <Globe className="mr-2 h-4 w-4" />
              Safe Browsing Only
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Controls */}
      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="categories" className="data-[state=active]:bg-blue-600">Categories</TabsTrigger>
          <TabsTrigger value="websites" className="data-[state=active]:bg-blue-600">Websites</TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-blue-600">Activity Log</TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Content Categories</CardTitle>
              <CardDescription className="text-slate-400">
                Control access to different types of content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blockedCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${category.color}`} />
                      <div>
                        <h3 className="font-semibold text-white">{category.name}</h3>
                        <p className="text-sm text-slate-400">{category.blocked} sites blocked today</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={category.enabled ? 'bg-red-600' : 'bg-green-600'}>
                        {category.enabled ? 'Blocked' : 'Allowed'}
                      </Badge>
                      <Switch 
                        checked={!category.enabled} 
                        onCheckedChange={() => {}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="websites">
          <div className="space-y-6">
            {/* Add New Site */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Add Website</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input 
                    placeholder="Enter website URL (e.g., example.com)"
                    value={newBlockedSite}
                    onChange={(e) => setNewBlockedSite(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Block Site
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-400 hover:bg-green-900/20"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Allow Site
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Blocked Sites */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-400" />
                  Blocked Websites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {blockedSites.map((site) => (
                    <div key={site.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border-l-4 border-l-red-500">
                      <div>
                        <h3 className="font-semibold text-white">{site.url}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            {site.category}
                          </Badge>
                          <span className="text-sm text-slate-400">
                            {site.attempts} blocked attempts today
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-green-600 text-green-400 hover:bg-green-900/20"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
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
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Allowed Sites */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Allowed Websites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {allowedSites.map((site) => (
                    <div key={site.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border-l-4 border-l-green-500">
                      <div>
                        <h3 className="font-semibold text-white">{site.url}</h3>
                        <Badge variant="outline" className="border-slate-600 text-slate-300 mt-1">
                          {site.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-red-600 text-red-400 hover:bg-red-900/20"
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Block
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Content Filter Activity</CardTitle>
              <CardDescription className="text-slate-400">
                Recent filtering actions and blocked attempts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      {activity.action === 'Blocked' ? (
                        <XCircle className="h-5 w-5 text-red-400" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                      <span className="text-white font-medium">{activity.time}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${
                          activity.action === 'Blocked' ? 'text-red-400' : 'text-green-400'
                        }`}>
                          {activity.action}
                        </span>
                        <span className="text-white">{activity.site}</span>
                      </div>
                      <p className="text-sm text-slate-400">{activity.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Content Filter Settings</CardTitle>
              <CardDescription className="text-slate-400">
                Configure filtering behavior and restrictions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-3">Filter Intensity</h4>
                  <div className="space-y-3">
                    {filterLevels.map((level) => (
                      <div 
                        key={level.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          filterLevel === level.id 
                            ? 'border-blue-500 bg-blue-600/20' 
                            : 'border-slate-600 bg-slate-700/30 hover:bg-slate-700/50'
                        }`}
                        onClick={() => setFilterLevel(level.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-white font-medium">{level.name}</h5>
                            <p className="text-sm text-slate-400">{level.description}</p>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            filterLevel === level.id 
                              ? 'border-blue-500 bg-blue-500' 
                              : 'border-slate-400'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Safe Search</h4>
                      <p className="text-sm text-slate-400">Force safe search on search engines</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Block Downloads</h4>
                      <p className="text-sm text-slate-400">Prevent downloading files from websites</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">HTTPS Filtering</h4>
                      <p className="text-sm text-slate-400">Filter encrypted traffic (may affect performance)</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentFilter;
