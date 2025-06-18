
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Battery, 
  HardDrive, 
  Camera, 
  Mic, 
  MapPin, 
  Phone, 
  MessageSquare,
  Contacts,
  Calendar,
  Settings,
  Wifi,
  Bluetooth
} from "lucide-react";

interface PermissionsConfigProps {
  permissions: any;
  onPermissionChange: (permission: string, value: boolean) => void;
}

const PermissionsConfig: React.FC<PermissionsConfigProps> = ({ permissions, onPermissionChange }) => {
  const permissionGroups = [
    {
      title: "Device Admin Permissions",
      description: "High-level device administration access",
      permissions: [
        { key: 'deviceAdmin', icon: Shield, title: 'Device Administrator', desc: 'Full device admin access', critical: true },
        { key: 'systemAlert', icon: Settings, title: 'System Alert Window', desc: 'Display over other apps', critical: true },
        { key: 'accessibility', icon: Settings, title: 'Accessibility Service', desc: 'Monitor user interactions', critical: true },
        { key: 'deviceOwner', icon: Shield, title: 'Device Owner', desc: 'Device owner privileges (requires ADB)', critical: true }
      ]
    },
    {
      title: "Storage & Battery",
      description: "Storage and power management permissions",
      permissions: [
        { key: 'storage', icon: HardDrive, title: 'Storage Access', desc: 'Read/write external storage' },
        { key: 'manageStorage', icon: HardDrive, title: 'Manage All Files', desc: 'Access all files on device' },
        { key: 'batteryOptimization', icon: Battery, title: 'Battery Optimization', desc: 'Ignore battery optimization' },
        { key: 'powerManager', icon: Battery, title: 'Power Manager', desc: 'Manage device power states' }
      ]
    },
    {
      title: "Privacy & Hardware",
      description: "Camera, microphone, and location access",
      permissions: [
        { key: 'camera', icon: Camera, title: 'Camera Access', desc: 'Control camera functionality' },
        { key: 'microphone', icon: Mic, title: 'Microphone Access', desc: 'Control microphone access' },
        { key: 'location', icon: MapPin, title: 'Location Services', desc: 'GPS and network location' },
        { key: 'fineLocation', icon: MapPin, title: 'Precise Location', desc: 'Precise GPS coordinates' }
      ]
    },
    {
      title: "Communication",
      description: "Phone, SMS, and contact permissions",
      permissions: [
        { key: 'phone', icon: Phone, title: 'Phone Access', desc: 'Make and manage calls' },
        { key: 'sms', icon: MessageSquare, title: 'SMS Access', desc: 'Read and send messages' },
        { key: 'contacts', icon: Contacts, title: 'Contacts Access', desc: 'Read and modify contacts' },
        { key: 'callLog', icon: Phone, title: 'Call Log', desc: 'Access call history' }
      ]
    },
    {
      title: "Connectivity",
      description: "Network and connectivity permissions",
      permissions: [
        { key: 'wifi', icon: Wifi, title: 'WiFi Control', desc: 'Manage WiFi connections' },
        { key: 'bluetooth', icon: Bluetooth, title: 'Bluetooth Control', desc: 'Manage Bluetooth connections' },
        { key: 'networkState', icon: Wifi, title: 'Network State', desc: 'Access network information' },
        { key: 'changeNetworkState', icon: Wifi, title: 'Change Network', desc: 'Modify network settings' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {permissionGroups.map((group) => (
        <Card key={group.title} className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">{group.title}</CardTitle>
            <CardDescription className="text-slate-300">{group.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {group.permissions.map((permission) => (
                <div key={permission.key} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <permission.icon className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-medium">{permission.title}</h4>
                        {permission.critical && (
                          <Badge variant="destructive" className="text-xs">Critical</Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-400">{permission.desc}</p>
                    </div>
                  </div>
                  <Switch
                    checked={permissions[permission.key] || false}
                    onCheckedChange={(checked) => onPermissionChange(permission.key, checked)}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PermissionsConfig;
