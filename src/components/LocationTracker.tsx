import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Home, 
  School,
  AlertTriangle,
  Clock,
  Navigation,
  Plus,
  Trash2,
  Shield
} from 'lucide-react';

interface LocationTrackerProps {
  device: any;
}

const LocationTracker: React.FC<LocationTrackerProps> = ({ device }) => {
  const [trackingEnabled, setTrackingEnabled] = useState(true);
  const [newSafeZoneName, setNewSafeZoneName] = useState('');

  const currentLocation = {
    address: "123 Main Street, Springfield",
    coordinates: "40.7128° N, 74.0060° W",
    accuracy: "5 meters",
    lastUpdate: "2 minutes ago",
    safeZone: "Home"
  };

  const safeZones = [
    { id: 1, name: "Home", address: "123 Main Street", radius: 100, notifications: true, icon: <Home className="h-4 w-4" /> },
    { id: 2, name: "School", address: "456 Education Ave", radius: 50, notifications: true, icon: <School className="h-4 w-4" /> },
    { id: 3, name: "Grandma's House", address: "789 Family Lane", radius: 75, notifications: false, icon: <Home className="h-4 w-4" /> },
  ];

  const locationHistory = [
    { time: "14:30", location: "Home", duration: "2h 15m", status: "safe" },
    { time: "12:15", location: "School", duration: "6h 45m", status: "safe" },
    { time: "08:30", location: "Bus Stop", duration: "15m", status: "transit" },
    { time: "08:00", location: "Home", duration: "8h 30m", status: "safe" },
  ];

  const alerts = [
    { id: 1, time: "10:45 AM", message: "Left safe zone: School", type: "warning" },
    { id: 2, time: "08:15 AM", message: "Arrived at: School", type: "success" },
    { id: 3, time: "07:45 AM", message: "Left safe zone: Home", type: "info" },
  ];

  return (
    <div className="space-y-6">
      {/* Current Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              Current Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-300">Address</span>
                <span className="text-white text-right">{currentLocation.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Coordinates</span>
                <span className="text-white">{currentLocation.coordinates}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Accuracy</span>
                <span className="text-green-400">{currentLocation.accuracy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Last Update</span>
                <span className="text-slate-400">{currentLocation.lastUpdate}</span>
              </div>
            </div>
            <div className="pt-2">
              <Badge className="bg-green-600">
                <Shield className="w-3 h-3 mr-1" />
                In Safe Zone: {currentLocation.safeZone}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Location Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Location Tracking</h4>
                <p className="text-sm text-slate-400">Enable real-time location monitoring</p>
              </div>
              <Switch 
                checked={trackingEnabled} 
                onCheckedChange={setTrackingEnabled}
              />
            </div>
            
            <div className="space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions to Device
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Refresh Location
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Live Map</CardTitle>
          <CardDescription className="text-slate-400">
            Real-time location tracking with safe zones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-2" />
              <p className="text-slate-300">Interactive Map View</p>
              <p className="text-sm text-slate-400">Live location tracking with safe zones overlay</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Tabs */}
      <Tabs defaultValue="zones" className="space-y-4">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="zones" className="data-[state=active]:bg-blue-600">Safe Zones</TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-blue-600">Location History</TabsTrigger>
          <TabsTrigger value="alerts" className="data-[state=active]:bg-blue-600">Alerts</TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="zones">
          <div className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Add New Safe Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input 
                    placeholder="Safe zone name (e.g., Grandma's House)"
                    value={newSafeZoneName}
                    onChange={(e) => setNewSafeZoneName(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Zone
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {safeZones.map((zone) => (
                <Card key={zone.id} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-600/20 rounded-lg">
                          {zone.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{zone.name}</h3>
                          <p className="text-sm text-slate-400">{zone.address}</p>
                          <p className="text-xs text-slate-500">Radius: {zone.radius}m</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm text-slate-300">Notifications</p>
                          <Switch 
                            checked={zone.notifications} 
                            onCheckedChange={() => {}}
                          />
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700"
                        >
                          Edit
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
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Today's Location History</CardTitle>
              <CardDescription className="text-slate-400">
                Track movement patterns and time spent at locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {locationHistory.map((entry, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-blue-400" />
                      <span className="text-white font-medium">{entry.time}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white">{entry.location}</span>
                        <Badge 
                          className={
                            entry.status === 'safe' ? 'bg-green-600' :
                            entry.status === 'warning' ? 'bg-yellow-600' : 'bg-blue-600'
                          }
                        >
                          {entry.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">Duration: {entry.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Location Alerts</CardTitle>
              <CardDescription className="text-slate-400">
                Recent notifications about location changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-4 p-3 bg-slate-700/30 rounded-lg">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                      alert.type === 'warning' ? 'text-yellow-400' :
                      alert.type === 'success' ? 'text-green-400' : 'text-blue-400'
                    }`} />
                    <div className="flex-1">
                      <p className="text-white">{alert.message}</p>
                      <p className="text-sm text-slate-400">{alert.time}</p>
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
              <CardTitle className="text-white">Location Settings</CardTitle>
              <CardDescription className="text-slate-400">
                Configure location tracking preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">High Accuracy Mode</h4>
                    <p className="text-sm text-slate-400">Use GPS, Wi-Fi, and mobile networks</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Background Tracking</h4>
                    <p className="text-sm text-slate-400">Continue tracking when app is closed</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Safe Zone Notifications</h4>
                    <p className="text-sm text-slate-400">Alert when entering/leaving safe zones</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="update-frequency" className="text-white">Update Frequency</Label>
                  <select 
                    id="update-frequency"
                    className="w-full p-2 bg-slate-700/50 border border-slate-600 rounded-md text-white"
                  >
                    <option value="1">Every minute</option>
                    <option value="5">Every 5 minutes</option>
                    <option value="15">Every 15 minutes</option>
                    <option value="30">Every 30 minutes</option>
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

export default LocationTracker;
