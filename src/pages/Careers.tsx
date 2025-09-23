import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Award, Upload, Mail, Phone, User, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const jobs = [
    {
      id: 1,
      title: "Automation Engineer",
      department: "Engineering",
      location: "Hosur, Tamil Nadu",
      type: "Full-time",
      experience: "2-5 years",
      description: "Design and implement automation solutions using PLC, HMI, and SCADA systems. Work with industrial control systems and drive continuous improvement initiatives.",
      requirements: [
        "Bachelor's degree in Electrical/Electronics Engineering",
        "Experience with PLC programming (Siemens, Allen Bradley)",
        "Knowledge of HMI/SCADA development",
        "Understanding of industrial communication protocols",
        "Strong problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "Sales Engineer",
      department: "Sales",
      location: "Hosur, Tamil Nadu",
      type: "Full-time",
      experience: "1-3 years",
      description: "Drive sales of automation and energy solutions, build client relationships, and provide technical support to customers across various industries.",
      requirements: [
        "Bachelor's degree in Engineering",
        "Strong communication and presentation skills",
        "Technical understanding of automation systems",
        "Customer relationship management experience",
        "Willingness to travel"
      ]
    },
    {
      id: 3,
      title: "Service Technician",
      department: "Service",
      location: "Hosur, Tamil Nadu",
      type: "Full-time",
      experience: "1-4 years",
      description: "Provide on-site installation, maintenance, and repair services for industrial automation equipment and control systems.",
      requirements: [
        "Diploma/ITI in Electrical/Electronics",
        "Hands-on experience with industrial equipment",
        "Knowledge of motor drives and control panels",
        "Good troubleshooting skills",
        "Ability to work independently"
      ]
    },
    {
      id: 4,
      title: "Quality Control Engineer",
      department: "Quality",
      location: "Hosur, Tamil Nadu",
      type: "Full-time",
      experience: "2-4 years",
      description: "Ensure quality standards across all products and services, develop quality control processes, and maintain compliance with industry standards.",
      requirements: [
        "Bachelor's degree in Engineering",
        "Knowledge of quality management systems",
        "Experience with testing and inspection procedures",
        "Understanding of ISO standards",
        "Attention to detail"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
    setSelectedJob(null);
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Build Your Career With Us
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join our dynamic team and be part of India's leading automation and energy solutions provider. 
                Grow your career while making a real impact in the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Goodwill Automation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Great Team</h3>
                  <p className="text-muted-foreground">Work with experienced professionals in a collaborative environment</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">Advance your career with continuous learning and development</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Work-Life Balance</h3>
                  <p className="text-muted-foreground">Flexible working arrangements and supportive culture</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Great Location</h3>
                  <p className="text-muted-foreground">Modern facilities in the industrial hub of Hosur</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Current Openings</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-primary">{job.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{job.department}</CardDescription>
                      </div>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.experience}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Button 
                      onClick={() => setSelectedJob(job.id)}
                      className="w-full"
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Modal Overlay */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Apply for {jobs.find(j => j.id === selectedJob)?.title}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedJob(null)}
                  >
                    ×
                  </Button>
                </CardTitle>
                <CardDescription>
                  Fill out the form below to submit your application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium flex items-center gap-2 mb-2">
                        <User className="h-4 w-4" />
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium flex items-center gap-2 mb-2">
                        <Mail className="h-4 w-4" />
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium flex items-center gap-2 mb-2">
                        <Phone className="h-4 w-4" />
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4" />
                        Experience *
                      </label>
                      <Input
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., 3 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2">
                      <Upload className="h-4 w-4" />
                      Resume *
                    </label>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload your resume (PDF, DOC, DOCX - Max 5MB)
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4" />
                      Cover Letter
                    </label>
                    <Textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => setSelectedJob(null)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Careers;