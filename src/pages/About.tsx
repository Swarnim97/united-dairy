
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pb-24">
        {/* Hero */}
        <div className="bg-secondary py-16 md:py-24">
          <div className="layout-grid">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 animate-fade-in">
                About Us
              </h1>
              <p className="text-lg text-muted-foreground animate-slide-in-up">
                We design and curate products with a focus on simplicity, elegance, and functionality.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="layout-grid mt-16">
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
                  Founded in 2010, our brand began with a simple mission: to create beautifully designed products that enhance everyday life. We believe that good design should be accessible, functional, and timeless.
                </p>
                <p>
                  Our team of designers and craftspeople work together to create pieces that strike the perfect balance between form and function. Every product in our collection is thoughtfully considered, from the materials we use to the smallest details of the design.
                </p>
                <p>
                  What started as a small studio with just three designers has grown into a global brand with a presence in over 20 countries. Despite our growth, we remain committed to our founding principles of quality, sustainability, and thoughtful design.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="bg-secondary mt-24 py-16">
          <div className="layout-grid">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl">Our Values</h2>
              <p className="mt-4 text-muted-foreground">The principles that guide everything we do</p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Quality', description: 'We never compromise on materials or craftsmanship.' },
                { title: 'Simplicity', description: 'We believe in clean design that stands the test of time.' },
                { title: 'Functionality', description: 'Our products are designed to solve real problems beautifully.' },
                { title: 'Sustainability', description: 'We strive to minimize our environmental impact at every step.' }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-elegant animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="layout-grid mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Our Team</h2>
            <p className="mt-4 text-muted-foreground">Meet the talented people behind our products</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Alex Morgan',
                role: 'Founder & Creative Director',
                image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              },
              {
                name: 'Sam Taylor',
                role: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              },
              {
                name: 'Jordan Lee',
                role: 'Product Development Lead',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              }
            ].map((person, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
