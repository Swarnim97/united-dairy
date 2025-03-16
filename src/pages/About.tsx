import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pb-16 md:pb-24 mt-20">
        {/* Hero */}
        <div className="bg-[#2a6db6]/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 animate-fade-in">
                About United Dairy and Grocers
              </h1>
              <p className="text-lg text-muted-foreground animate-slide-in-up">
                Building relationships with top brands for over 40 years
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="animate-slide-in-left">
              <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMGRlc2lnbiUyMHN0dWRpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Our design studio"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  At United Dairy and Grocers, we have spent the last 40 years building relationships with the top brands in order to provide our customers with exceptional service, and quality products at the best prices.
                </p>
                <p>
                  We service all types of customers within Canada, and across the Greater Toronto Area, such as independent grocery & large grocery chains, manufacturers, restaurants, banquet halls, hotels, bakeries, and more!
                </p>
                <p>
                  At United, we build National and international Brands with an emphasis on the Natural, and the ethnic Market. Our commitment to quality and service has made us a trusted partner for businesses throughout the region.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="bg-gray-100 mt-24 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl">Our Values</h2>
              <p className="mt-4 text-muted-foreground">The principles that guide everything we do</p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Quality', description: 'We partner with top brands to deliver exceptional products.' },
                { title: 'Service', description: 'We provide responsive, reliable service to all our customers.' },
                { title: 'Value', description: 'We offer competitive prices without compromising on quality.' },
                { title: 'Relationships', description: 'We build lasting partnerships with brands and customers alike.' }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-elegant animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-[#2a6db6]">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        

        {/* CTA Section */}
        <div className="bg-[#2a6db6] mt-24 py-16 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold sm:text-3xl mb-4">Partner With United</h2>
              <p className="mb-8">
                Looking for a reliable distributor for your grocery and dairy needs in the Greater Toronto Area?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2a6db6] hover:bg-white/90 shadow-button button-transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;