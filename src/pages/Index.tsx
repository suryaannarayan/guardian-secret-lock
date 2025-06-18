
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Smartphone, 
  Clock, 
  MapPin, 
  Filter, 
  BarChart3,
  Zap,
  Lock,
  Eye,
  Code,
  Wrench
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="p-6 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">ParentShield Pro</h1>
          </div>
          <div className="flex gap-4">
            <Link to="/builder">
              <Button variant="outline" className="text-white border-purple-400 hover:bg-purple-400/10">
                <Code className="h-4 w-4 mr-2" />
                App Builder
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Eye className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Advanced Parental Control
            <span className="text-purple-400"> Platform</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Create custom parental control applications with enterprise-grade monitoring, 
            device management, and security features. Build and deploy your own solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/builder">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                <Wrench className="h-5 w-5 mr-2" />
                Build Custom App
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="text-white border-purple-400 hover:bg-purple-400/10 text-lg px-8 py-3">
                <Eye className="h-5 w-5 mr-2" />
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Comprehensive Control Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Device Monitoring",
                description: "Real-time device status, battery, storage, and system information monitoring",
                features: ["Real-time status", "Battery monitoring", "Storage analysis", "System info"]
              },
              {
                icon: Shield,
                title: "App Control",
                description: "Block, allow, or time-restrict applications with granular permissions",
                features: ["App blocking", "Time restrictions", "Usage limits", "Permission control"]
              },
              {
                icon: Clock,
                title: "Screen Time Management",
                description: "Set daily limits, bedtime schedules, and break reminders",
                features: ["Daily limits", "Bedtime mode", "Break reminders", "Usage analytics"]
              },
              {
                icon: MapPin,
                title: "Location Tracking",
                description: "GPS tracking with geofences, location history, and alerts",
                features: ["Real-time GPS", "Geofences", "Location history", "Safe zone alerts"]
              },
              {
                icon: Filter,
                title: "Content Filtering",
                description: "Web filtering, keyword blocking, and safe search enforcement",
                features: ["Web filtering", "Keyword blocking", "Safe search", "Category blocking"]
              },
              {
                icon: BarChart3,
                title: "Activity Reports",
                description: "Detailed usage reports, trends, and behavioral analytics",
                features: ["Usage reports", "Trend analysis", "Behavioral insights", "Export data"]
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.features.map((feat, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feat}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Enterprise Security & Hidden Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Device Admin Lock",
                description: "Unremovable app protection with device administrator privileges"
              },
              {
                icon: Eye,
                title: "Hidden Access",
                description: "Secret dialer code access - invisible to children"
              },
              {
                icon: Zap,
                title: "Remote Control",
                description: "Instant device locking and emergency controls"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-red-900/20 to-purple-900/20 border-red-500/30">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <feature.icon className="h-6 w-6 text-red-400" />
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Builder CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Build Your Custom Solution
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Use our advanced app builder to create tailored parental control applications 
            with exactly the features you need.
          </p>
          <Link to="/builder">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-12 py-4">
              <Code className="h-5 w-5 mr-2" />
              Start Building Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            ParentShield Pro - Advanced Parental Control Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
