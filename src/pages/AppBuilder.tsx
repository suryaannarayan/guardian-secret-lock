
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Shield, 
  Clock, 
  MapPin, 
  Filter, 
  BarChart3, 
  Settings,
  Download,
  Play,
  Code,
  Palette
} from "lucide-react";

const AppBuilder = () => {
  const [appConfig, setAppConfig] = useState({
    name: "ParentShield App",
    version: "1.0.0",
    features: {
      deviceMonitoring: true,
      appControl: true,
      screenTime: true,
      locationTracking: true,
      contentFilter: true,
      activityReports: true
    },
    theme: "dark",
    secretCode: "123456"
  });

  const [buildStatus, setBuildStatus] = useState("");
  const [apkDownloadUrl, setApkDownloadUrl] = useState("");

  const toggleFeature = (feature: string) => {
    setAppConfig(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: !prev.features[feature as keyof typeof prev.features]
      }
    }));
  };

  const buildApp = () => {
    setBuildStatus("Building app...");
    setApkDownloadUrl("");
    
    // Simulate build process
    setTimeout(() => {
      setBuildStatus("App built successfully! APK ready for download.");
      // Simulate APK file generation
      setApkDownloadUrl(`/downloads/${appConfig.name.replace(/\s+/g, '_')}_v${appConfig.version}.apk`);
    }, 3000);
  };

  const downloadApk = () => {
    if (apkDownloadUrl) {
      // Simulate APK download
      const link = document.createElement('a');
      link.href = apkDownloadUrl;
      link.download = `${appConfig.name.replace(/\s+/g, '_')}_v${appConfig.version}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setBuildStatus("APK download started!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            ParentShield App Builder
          </h1>
          <p className="text-slate-300 text-lg">
            Create and build custom parental control applications
          </p>
        </div>

        <Tabs defaultValue="config" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            <TabsTrigger value="config" className="text-white">Configuration</TabsTrigger>
            <TabsTrigger value="features" className="text-white">Features</TabsTrigger>
            <TabsTrigger value="customize" className="text-white">Customize</TabsTrigger>
            <TabsTrigger value="build" className="text-white">Build & Download</TabsTrigger>
          </TabsList>

          <TabsContent value="config">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  App Configuration
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Configure basic app settings and security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">App Name</label>
                    <input
                      type="text"
                      value={appConfig.name}
                      onChange={(e) => setAppConfig(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Version</label>
                    <input
                      type="text"
                      value={appConfig.version}
                      onChange={(e) => setAppConfig(prev => ({ ...prev, version: e.target.value }))}
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Secret Dialer Code</label>
                    <input
                      type="text"
                      value={appConfig.secretCode}
                      onChange={(e) => setAppConfig(prev => ({ ...prev, secretCode: e.target.value }))}
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      placeholder="Enter secret code for app access"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Theme</label>
                    <select
                      value={appConfig.theme}
                      onChange={(e) => setAppConfig(prev => ({ ...prev, theme: e.target.value }))}
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    >
                      <option value="dark">Dark Theme</option>
                      <option value="light">Light Theme</option>
                      <option value="auto">Auto Theme</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Feature Selection
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Choose which features to include in your app
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { key: 'deviceMonitoring', icon: Smartphone, title: 'Device Monitoring', desc: 'Monitor device usage and status' },
                    { key: 'appControl', icon: Shield, title: 'App Control', desc: 'Block or allow specific applications' },
                    { key: 'screenTime', icon: Clock, title: 'Screen Time', desc: 'Set time limits and schedules' },
                    { key: 'locationTracking', icon: MapPin, title: 'Location Tracking', desc: 'Track device location and geofences' },
                    { key: 'contentFilter', icon: Filter, title: 'Content Filter', desc: 'Filter inappropriate content' },
                    { key: 'activityReports', icon: BarChart3, title: 'Activity Reports', desc: 'Generate usage reports' }
                  ].map((feature) => (
                    <div
                      key={feature.key}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        appConfig.features[feature.key as keyof typeof appConfig.features]
                          ? 'bg-purple-600/20 border-purple-500'
                          : 'bg-slate-700/30 border-slate-600'
                      }`}
                      onClick={() => toggleFeature(feature.key)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <feature.icon className="h-5 w-5 text-purple-400" />
                        <span className="text-white font-medium">{feature.title}</span>
                        {appConfig.features[feature.key as keyof typeof appConfig.features] && (
                          <Badge variant="secondary" className="ml-auto">Enabled</Badge>
                        )}
                      </div>
                      <p className="text-slate-300 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customize">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  App Customization
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Customize the appearance and behavior
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-medium mb-4">Color Scheme</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {['purple', 'blue', 'green', 'red'].map((color) => (
                        <div
                          key={color}
                          className={`h-12 rounded-lg cursor-pointer border-2 ${
                            color === 'purple' ? 'bg-purple-600 border-purple-400' :
                            color === 'blue' ? 'bg-blue-600 border-blue-400' :
                            color === 'green' ? 'bg-green-600 border-green-400' :
                            'bg-red-600 border-red-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-4">App Icon</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {['🛡️', '👨‍👩‍👧‍👦', '📱', '🔒'].map((icon) => (
                        <div
                          key={icon}
                          className="h-12 bg-slate-700 rounded-lg flex items-center justify-center text-2xl cursor-pointer hover:bg-slate-600"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="build">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Build Configuration
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Generate your parental control app as APK file
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Platform</h4>
                      <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                        <option>Android APK</option>
                        <option>Android AAB</option>
                      </select>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Build Type</h4>
                      <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                        <option>Release</option>
                        <option>Debug</option>
                      </select>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Signing</h4>
                      <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                        <option>Auto Sign</option>
                        <option>Custom Certificate</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button onClick={buildApp} className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <Play className="h-4 w-4 mr-2" />
                      Build APK
                    </Button>
                    {apkDownloadUrl && (
                      <Button onClick={downloadApk} className="flex-1 bg-green-600 hover:bg-green-700">
                        <Download className="h-4 w-4 mr-2" />
                        Download APK
                      </Button>
                    )}
                  </div>

                  {buildStatus && (
                    <div className={`p-4 border rounded-lg ${
                      buildStatus.includes("successfully") 
                        ? "bg-green-600/20 border-green-500 text-green-400"
                        : "bg-blue-600/20 border-blue-500 text-blue-400"
                    }`}>
                      <p>{buildStatus}</p>
                    </div>
                  )}

                  {apkDownloadUrl && (
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="text-white font-medium mb-2">APK Details</h4>
                      <div className="space-y-2 text-slate-300">
                        <p><span className="font-medium">File:</span> {appConfig.name.replace(/\s+/g, '_')}_v{appConfig.version}.apk</p>
                        <p><span className="font-medium">Size:</span> ~12.5 MB</p>
                        <p><span className="font-medium">Min Android:</span> 7.0 (API 24)</p>
                        <p><span className="font-medium">Target Android:</span> 14.0 (API 34)</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Installation Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-slate-300">
                    <div>
                      <h4 className="text-white font-medium mb-2">1. Enable Unknown Sources</h4>
                      <p>Go to Settings → Security → Enable "Install from Unknown Sources" or "Allow from this source"</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">2. Transfer APK File</h4>
                      <p>Download the APK file to your Android device via USB, email, or cloud storage</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">3. Install APK</h4>
                      <p>Open the APK file on your device and follow the installation prompts</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">4. Grant Permissions</h4>
                      <p>Enable Device Administrator and grant all requested permissions for full functionality</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">5. Access App</h4>
                      <p>Use the secret dialer code (*#{appConfig.secretCode}#) to access the hidden app</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AppBuilder;
