import { Briefcase, FileText, Map, Users } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Briefcase size={40} />,
    title: 'Project Management & Delivery',
    description:
      'End-to-end project management for complex, multi-stakeholder engagements. We establish clear milestones, manage risk proactively, and keep projects moving when others stall.',
  },
  {
    icon: <FileText size={40} />,
    title: 'Technical Advisory & Review',
    description:
      'Independent technical review and expert advisory services. We provide the second opinion that gives clients confidence before major decisions are made.',
  },
  {
    icon: <Map size={40} />,
    title: 'Feasibility & Site Analysis',
    description:
      'Rigorous feasibility studies and site assessments that separate viable projects from costly mistakes. We evaluate technical, regulatory, and commercial dimensions simultaneously.',
  },
  {
    icon: <Users size={40} />,
    title: 'Stakeholder & Regulatory Navigation',
    description:
      'Strategic guidance through complex approval processes, community engagement, and regulatory environments. We know how to build consensus and move projects forward.',
  },
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero banner */}
        <div
          className="py-20 flex items-end"
          style={{
            background: 'linear-gradient(135deg, #A8C837 0%, #CBDB2A 50%, #8FB62E 100%)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <h1 className="font-sans text-5xl lg:text-6xl font-bold text-[#5F5644]">
              What We Do
            </h1>
            <p className="mt-4 text-xl text-[#5F5644]/80 max-w-2xl">
              We bring deep creative expertise and strategic clarity to complex projects. From initial concept through final delivery, we work alongside our clients to solve problems that matter.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group border border-[#CBDB2A] bg-white p-10 hover:bg-[#CBDB2A]/10 transition-colors duration-300"
                >
                  <div className="mb-6 text-[#A8C837]">{service.icon}</div>
                  <h3 className="font-sans text-2xl font-bold text-[#5F5644] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#5F5644]/80 leading-relaxed text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#CBDB2A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-sans text-3xl lg:text-4xl font-bold text-[#5F5644] mb-6">
              Ready to work together?
            </h2>
            <p className="text-[#5F5644]/80 text-lg mb-8 max-w-xl mx-auto">
              Let us know about your project and we'll show you how Studio QED can bring it to life.
            </p>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 border-2 border-[#5F5644] font-semibold text-[#5F5644]
                         hover:bg-[#5F5644] hover:text-[#CBDB2A] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
