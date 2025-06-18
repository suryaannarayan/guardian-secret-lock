
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Monitor, 
  Play, 
  Pause, 
  Square,
  RotateCw,
  Maximize,
  Volume2,
  VolumeX,
  Camera,
  Video,
  Download,
  Settings,
  Smartphone,
  Wifi,
  Battery
} from 'lucide-react';

interface ScreenMirrorProps {
  device: any;
}

const ScreenMirror: React.FC<ScreenMirrorProps> = ({ device }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [quality, setQuality] = useState([720]);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const connectionStats = {
    status: isConnected ? 'Connected' : 'Disconnected',
    latency: '45ms',
    bitrate: '2.5 Mbps',
    fps: '30 FPS',
    resolution: '1080x1920'
  };

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Monitor className="h-5 w-5 text-blue-400" />
              Mirror Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Connection</span>
                <Badge className={isConnected ? 'bg-green-600' : 'bg-red-600'}>
                  {connectionStats.status}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Device</span>
                <span className="text-white">{device?.name}</span>
              </div>
              <Button 
                onClick={handleConnect}
                className={`w-full ${isConnected ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {isConnected ? (
                  <>
                    <Square className="mr-2 h-4 w-4" />
                    Disconnect
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Connect & Mirror
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Connection Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-300">Latency</span>
                <span className="text-green-400">{connectionStats.latency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Bitrate</span>
                <span className="text-white">{connectionStats.bitrate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Frame Rate</span>
                <span className="text-white">{connectionStats.fps}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Resolution</span>
                <span className="text-white">{connectionStats.resolution}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recording Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleRecord}
              disabled={!isConnected}
              className={`w-full ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isRecording ? (
                <>
                  <Square className="mr-2 h-4 w-4" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Video className="mr-2 h-4 w-4" />
                  Start Recording
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
              disabled={!isConnected}
            >
              <Camera className="mr-2 h-4 w-4" />
              Take Screenshot
            </Button>
            {isRecording && (
              <div className="text-center">
                <div className="text-red-400 font-medium">● REC</div>
                <div className="text-sm text-slate-400">Recording: 00:34</div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Screen Mirror Display */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-blue-400" />
              Live Screen Mirror - {device?.name}
            </span>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
                disabled={!isConnected}
              >
                <RotateCw className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
                disabled={!isConnected}
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Mock phone screen */}
            <div className="mx-auto max-w-sm bg-slate-900 rounded-3xl p-4 border-4 border-slate-600">
              <div className="bg-slate-800 rounded-2xl aspect-[9/16] relative overflow-hidden">
                {isConnected ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-2 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <Wifi className="h-3 w-3" />
                        <Battery className="h-3 w-3" />
                        <span>{device?.batteryLevel}%</span>
                      </div>
                    </div>
                    
                    {/* Mock content */}
                    <div className="p-4 space-y-4">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="h-4 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 bg-white/15 rounded w-3/4"></div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="h-4 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 bg-white/15 rounded w-1/2"></div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="h-4 bg-white/20 rounded mb-2"></div>
                        <div className="h-3 bg-white/15 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    {/* Live indicator */}
                    <div className="absolute top-12 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                    <Monitor className="h-12 w-12 mb-4" />
                    <p className="text-center">Screen mirroring disconnected</p>
                    <p className="text-sm text-center mt-2">Click "Connect & Mirror" to start</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mirror Settings */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-400" />
            Mirror Settings
          </CardTitle>
          <CardDescription className="text-slate-400">
            Configure screen mirroring quality and options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-white font-medium">Video Quality</label>
                <select className="w-full p-2 bg-slate-700/50 border border-slate-600 rounded-md text-white">
                  <option value="480">480p (Low bandwidth)</option>
                  <option value="720" selected>720p (Recommended)</option>
                  <option value="1080">1080p (High quality)</option>
                  <option value="auto">Auto (Adaptive)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-white font-medium">Frame Rate</label>
                <select className="w-full p-2 bg-slate-700/50 border border-slate-600 rounded-md text-white">
                  <option value="15">15 FPS (Battery saving)</option>
                  <option value="30" selected>30 FPS (Smooth)</option>
                  <option value="60">60 FPS (Ultra smooth)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-white font-medium">Bitrate Limit</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[2500]}
                    onValueChange={() => {}}
                    max={10000}
                    min={500}
                    step={250}
                    className="flex-1"
                  />
                  <span className="text-white w-20">2.5 Mbps</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Audio Streaming</h4>
                  <p className="text-sm text-slate-400">Stream device audio along with video</p>
                </div>
                <Switch checked={audioEnabled} onCheckedChange={setAudioEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Show Touches</h4>
                  <p className="text-sm text-slate-400">Display touch interactions on screen</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Auto-rotate</h4>
                  <p className="text-sm text-slate-400">Follow device orientation changes</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Full Screen Mode</h4>
                  <p className="text-sm text-slate-400">Hide status bar and navigation</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-700">
            <Button 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Save Recording
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Reset to Defaults
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScreenMirror;
