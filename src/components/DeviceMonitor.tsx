
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { 
  Smartphone, 
  Battery, 
  Wifi, 
  Signal, 
  Camera, 
  Mic, 
  Lock, 
  Unlock,
  RefreshCw,
  Power,
  Volume2,
  Bluetooth
} from 'lucide-react';

interface DeviceMonitorProps {
  device: any;
}

const DeviceMonitor: React.FC<DeviceMonitorProps> = ({ device }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [cameraBlocked, setCameraBlocked] = useState(true);
  const [micBlocked, setMicBlocked] = useState(true);

  const handleLockDevice = () => {
    setIsLocked(!isLocked);
  };

  const handleRestart = () => {
    // Restart device logic
    console.log('Restarting device...');
  };

  return (
    <div className="space-y-6">
      {/* Device Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-blue-400" />
              Device Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Device Name</span>
              <span className="text-white font-medium">{device?.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Status</span>
              <Badge className={device?.status === 'online' ? 'bg-green-600' : 'bg-red-600'}>
                {device?.status}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Battery Level</span>
              <div className="flex items-center gap-2">
                <Battery className="h-4 w-4 text-green-400" />
                <span className="text-white">{device?.batteryLevel}%</span>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-slate-300">Battery Status</span>
              <Progress value={device?.batteryLevel} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Signal className="h-5 w-5 text-blue-400" />
              Network Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 flex items-center gap-2">
                <Wifi className="h-4 w-4" />
                WiFi
              </span>
              <Badge className="bg-green-600">Connected</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300 flex items-center gap-2">
                <Signal className="h-4 w-4" />
                Cellular
              </span>
              <Badge className="bg-green-600">Strong Signal</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300 flex items-center gap-2">
                <Bluetooth className="h-4 w-4" />
                Bluetooth
              </span>
              <Badge variant="outline" className="border-slate-600">Disabled</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Remote Controls */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Remote Controls</CardTitle>
          <CardDescription className="text-slate-400">
            Control device functions remotely
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              onClick={handleLockDevice}
              className={`h-20 flex flex-col gap-2 ${
                isLocked ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isLocked ? <Lock className="h-6 w-6" /> : <Unlock className="h-6 w-6" />}
              {isLocked ? 'Unlock Device' : 'Lock Device'}
            </Button>

            <Button 
              onClick={handleRestart}
              variant="outline" 
              className="h-20 flex flex-col gap-2 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <RefreshCw className="h-6 w-6" />
              Restart Device
            </Button>

            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Volume2 className="h-6 w-6" />
              Ring Device
            </Button>

            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2 border-red-600 text-red-400 hover:bg-red-900/20"
            >
              <Power className="h-6 w-6" />
              Emergency Lock
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Controls */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Privacy Controls</CardTitle>
          <CardDescription className="text-slate-400">
            Manage device privacy and security features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Camera className="h-5 w-5 text-blue-400" />
              <div>
                <h4 className="text-white font-medium">Block Camera</h4>
                <p className="text-sm text-slate-400">Prevent camera access</p>
              </div>
            </div>
            <Switch 
              checked={cameraBlocked} 
              onCheckedChange={setCameraBlocked}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-blue-400" />
              <div>
                <h4 className="text-white font-medium">Block Microphone</h4>
                <p className="text-sm text-slate-400">Prevent microphone access</p>
              </div>
            </div>
            <Switch 
              checked={micBlocked} 
              onCheckedChange={setMicBlocked}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceMonitor;
