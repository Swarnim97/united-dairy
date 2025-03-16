import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Layout from '@/components/Layout';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message Sent',
        description: 'We have received your message and will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="pb-16 md:pb-24 mt-20">
        {/* Hero */}
        <div className="bg-[#2a6db6]/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 animate-fade-in">
                Contact United Dairy and Grocers
              </h1>
              <p className="text-lg text-muted-foreground animate-slide-in-up">
                Have questions or need assistance? We're here to help with all your wholesale needs.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Information & Form */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a6db6] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      145 Sun Pac Blvd<br />
                      Brampton, Ontario L6S 5Z6<br />
                      Canada
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a6db6] text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <a
                      href="mailto:info@uniteddairy.com"
                      className="text-muted-foreground hover:text-[#2a6db6] button-transition"
                    >
                      info@uniteddairy.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24-48 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a6db6] text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <a
                      href="tel:9057932448"
                      className="text-muted-foreground hover:text-[#2a6db6] button-transition"
                    >
                      905-793-2448
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday-Friday, 9am-5pm EST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Monday-Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>By Appointment</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="rounded-2xl bg-white p-8 shadow-elegant">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-full border border-input bg-background p-3 text-sm outline-none focus:border-[#2a6db6] focus:ring-1 focus:ring-[#2a6db6]"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-full border border-input bg-background p-3 text-sm outline-none focus:border-[#2a6db6] focus:ring-1 focus:ring-[#2a6db6]"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-full border border-input bg-background p-3 text-sm outline-none focus:border-[#2a6db6] focus:ring-1 focus:ring-[#2a6db6]"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-input bg-background p-3 text-sm outline-none focus:border-[#2a6db6] focus:ring-1 focus:ring-[#2a6db6]"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2a6db6] p-3 text-sm font-medium text-white shadow-button hover:bg-[#2a6db6]/90 focus:outline-none focus:ring-2 focus:ring-[#2a6db6]/50 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="rounded-2xl overflow-hidden h-80 w-full animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.3079299449055!2d-79.72916512430638!3d43.7188985538572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d0de8ce7ebd%3A0x8dbab9ef43b36235!2s145%20Sun%20Pac%20Blvd%2C%20Brampton%2C%20ON%20L6S%205Z6%2C%20Canada!5e0!3m2!1sen!2sus!4v1710630297944!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="United Dairy and Grocers Location"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;