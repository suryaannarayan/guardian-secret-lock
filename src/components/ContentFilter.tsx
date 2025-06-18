
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Globe,
  Search,
  Ban,
  AlertTriangle,
  Eye,
  Lock,
  Filter,
  Plus,
  Trash2,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface ContentFilterProps {
  device: any;
}

const ContentFilter: React.FC<ContentFilterProps> = ({ device }) => {
  const [safeSearchEnabled, setSafeSearchEnabled] = useState(true);
  const [adBlockEnabled, setAdBlockEnabled] = useState(true);
  const [newBlockedSite, setNewBlockedSite] = useState('');

  const filterCategories = [
    { name: 'Adult Content', enabled: true, level: 'strict' },
    { name: 'Violence', enabled: true, level: 'moderate' },
    { name: 'Gambling', enabled: true, level: 'strict' },
    { name: 'Drugs & Alcohol', enabled: true, level: 'strict' },
    { name: 'Social Media', enabled: false, level: 'off' },
    { name: 'Gaming', enabled: false, level: 'off' },
    { name: 'Shopping', enabled: false, level: 'off' },
    { name: 'News', enabled: false, level: 'off' }
  ];

  const blockedSites = [
    { url: 'facebook.com', category: 'Social Media', blocked: true },
    { url: 'instagram.com', category: 'Social Media', blocked: true },
    { url: 'tiktok.com', category: 'Social Media', blocked: true },
    { url: 'pornhub.com', category: 'Adult Content', blocked: true },
    { url: 'bet365.com', category: 'Gambling', blocked: true }
  ];

  const allowedSites = [
    { url: 'khanacademy.org', category: 'Education', whitelisted: true },
    { url: 'wikipedia.org', category: 'Education', whitelisted: true },
    { url: 'google.com', category: 'Search', whitelisted: true },
    { url: 'youtube.com/education', category: 'Education', whitelisted: true }
  ];

  const recentActivity = [
    { time: '14:32', site: 'youtube.com', action: 'allowed', category: 'Entertainment' },
    { time: '14:25', site: 'facebook.com', action: 'blocked', category: 'Social Media' },
    { time: '14:20', site: 'khanacademy.org', action: 'allowed', category: 'Education' },
    { time: '14:15', site: 'inappropriate-site.com', action: 'blocked', category: 'Adult Content' }
  ];

  return (
    <div className="space-y-6">
      {/* Filter Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              Protection Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Web Filter</span>
                <Badge className="bg-green-600">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Safe Search</span>
                <Badge className="bg-green-600">Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Ad Blocker</span>
                <Badge className="bg-green-600">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Sites Blocked</span>
                <span className="text-white font-medium">{blockedSites.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Today's Blocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-400">24</div>
              <p className="text-sm text-slate-400">Inappropriate sites blocked</p>
              <div className="text-sm text-slate-300">
                ↑ 15% from yesterday
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Eye className="mr-2 h-4 w-4" />
              View Activity Log
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Lock className="mr-2 h-4 w-4" />
              Lock All Browsing
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Filtering */}
      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="categories" className="data-[state=active]:bg-blue-600">Categories</TabsTrigger>
          <TabsTrigger value="sites" className="data-[state=active]:bg-blue-600">Blocked Sites</TabsTrigger>
          <TabsTrigger value="allowed" className="data-[state=active]:bg-blue-600">Allowed Sites</TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-blue-600">Activity</TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Content Categories</CardTitle>
              <CardDescription className="text-slate-400">
                Choose which types of content to filter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {filterCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Filter className="h-5 w-5 text-blue-400" />
                      <div>
                        <h4 className="text-white font-medium">{category.name}</h4>
                        <p className="text-sm text-slate-400">
                          Level: {category.level}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <select 
                        className="bg-slate-700/50 border border-slate-600 rounded px-2 py-1 text-white text-sm"
                        defaultValue={category.level}
                      >
                        <option value="off">Off</option>
                        <option value="lenient">Lenient</option>
                        <option value="moderate">Moderate</option>
                        <option value="strict">Strict</option>
                      </select>
                      <Switch 
                        checked={category.enabled} 
                        onCheckedChange={() => {}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sites">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Blocked Websites</CardTitle>
              <CardDescription className="text-slate-400">
                Manually block specific websites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input 
                    placeholder="Enter website URL (e.g., facebook.com)"
                    value={newBlockedSite}
                    onChange={(e) => setNewBlockedSite(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Ban className="mr-2 h-4 w-4" />
                    Block Site
                  </Button>
                </div>

                <div className="space-y-3">
                  {blockedSites.map((site, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border-l-4 border-l-red-500">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-red-400" />
                        <div>
                          <h4 className="text-white font-medium">{site.url}</h4>
                          <p className="text-sm text-slate-400">{site.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-600">Blocked</Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-green-600 text-green-400 hover:bg-green-900/20"
                        >
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
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allowed">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Allowed Websites</CardTitle>
              <CardDescription className="text-slate-400">
                Whitelist specific websites that are always allowed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input 
                    placeholder="Enter website URL to whitelist"
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Allow Site
                  </Button>
                </div>

                <div className="space-y-3">
                  {allowedSites.map((site, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border-l-4 border-l-green-500">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-green-400" />
                        <div>
                          <h4 className="text-white font-medium">{site.url}</h4>
                          <p className="text-sm text-slate-400">{site.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-600">Whitelisted</Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-red-600 text-red-400 hover:bg-red-900/20"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Browsing Activity</CardTitle>
              <CardDescription className="text-slate-400">
                Recent web activity and filter actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      {activity.action === 'blocked' ? (
                        <XCircle className="h-5 w-5 text-red-400" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                      <div>
                        <h4 className="text-white font-medium">{activity.site}</h4>
                        <p className="text-sm text-slate-400">{activity.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={activity.action === 'blocked' ? 'bg-red-600' : 'bg-green-600'}
                      >
                        {activity.action}
                      </Badge>
                      <p className="text-sm text-slate-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                variant="outline" 
                className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                View Full Activity Log
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Filter Settings</CardTitle>
              <CardDescription className="text-slate-400">
                Configure content filtering behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Safe Search</h4>
                    <p className="text-sm text-slate-400">Force safe search on search engines</p>
                  </div>
                  <Switch checked={safeSearchEnabled} onCheckedChange={setSafeSearchEnabled} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Ad Blocking</h4>
                    <p className="text-sm text-slate-400">Block advertisements and pop-ups</p>
                  </div>
                  <Switch checked={adBlockEnabled} onCheckedChange={setAdBlockEnabled} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">HTTPS Filtering</h4>
                    <p className="text-sm text-slate-400">Filter encrypted HTTPS traffic</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">YouTube Restricted Mode</h4>
                    <p className="text-sm text-slate-400">Enable YouTube's restricted mode</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Filter Sensitivity</Label>
                  <select className="w-full p-2 bg-slate-700/50 border border-slate-600 rounded-md text-white">
                    <option value="low">Low - Basic filtering</option>
                    <option value="medium" selected>Medium - Balanced filtering</option>
                    <option value="high">High - Strict filtering</option>
                    <option value="maximum">Maximum - Very strict filtering</option>
                  </select>
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
