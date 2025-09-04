import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar,
  FileText,
  Activity,
  Users,
  DollarSign,
  TrendingUp,
  Bell,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Dashboard Preview
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real-Time Healthcare Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant insights into patient care, financial performance, and operational efficiency.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Key Metrics */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Activity className="w-5 h-5 text-primary mr-2" />
                  Patient Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Today's Appointments</span>
                    <span className="font-semibold text-primary">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Completed</span>
                    <span className="font-semibold text-success">18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pending</span>
                    <span className="font-semibold text-warning">6</span>
                  </div>
                  <Progress value={75} className="mt-4" />
                  <p className="text-xs text-muted-foreground">75% completion rate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <DollarSign className="w-5 h-5 text-secondary mr-2" />
                  Revenue Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-foreground">$42,580</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </div>
                  <div className="flex items-center text-sm text-success">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12.5% from last month
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Insurance Claims</span>
                      <span className="font-medium">$35,240</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Direct Payments</span>
                      <span className="font-medium">$7,340</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Recent Activity */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="w-5 h-5 text-warning mr-2" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-success/5 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Insurance Claim Approved</p>
                      <p className="text-xs text-muted-foreground">Patient ID: P-1024 • $2,450</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New Appointment Scheduled</p>
                      <p className="text-xs text-muted-foreground">Dr. Sarah Johnson • 3:30 PM</p>
                      <p className="text-xs text-muted-foreground">5 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-warning/5 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Document Verification Needed</p>
                      <p className="text-xs text-muted-foreground">Patient ID: P-1087 • Medical Bill</p>
                      <p className="text-xs text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 text-secondary mr-2" />
                  Active Doctors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Dr. Sarah Johnson", specialty: "Cardiology", status: "Available", patients: 8 },
                    { name: "Dr. Michael Chen", specialty: "Neurology", status: "In Surgery", patients: 12 },
                    { name: "Dr. Emily Davis", specialty: "Pediatrics", status: "Available", patients: 6 }
                  ].map((doctor, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-white text-xs">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{doctor.name}</p>
                        <p className="text-xs text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={doctor.status === 'Available' ? 'default' : 'secondary'}
                          className={doctor.status === 'Available' ? 'bg-success' : ''}
                        >
                          {doctor.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{doctor.patients} patients</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
                <CardDescription>Frequently used functions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="medical" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Create Prescription
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Patient Lookup
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Process Claim
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary border-0 text-white shadow-medical">
              <CardHeader>
                <CardTitle className="text-lg text-white">System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/90">Server Status</span>
                    <Badge className="bg-success text-white">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/90">Database</span>
                    <Badge className="bg-success text-white">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/90">Backup Status</span>
                    <Badge className="bg-success text-white">Complete</Badge>
                  </div>
                  <div className="pt-2">
                    <div className="text-sm text-white/90 mb-2">Uptime</div>
                    <div className="text-2xl font-bold text-white">99.98%</div>
                    <div className="text-xs text-white/70">Last 30 days</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;