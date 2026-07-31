import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import awardsImg from '../img/ABOUT_awards.png';
import bookCovers from '../img/Book_Covers.png';

const services = [
  'Research',
  'Planning',
  'Branding',
  'Presentations',
  'Campaigns',
  'Documentation',
  'Translation',
  'Production',
  'Printing',
  'Fulfillment',
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero banner */}
        <div
          className="py-20"
          style={{
            background: 'linear-gradient(135deg, #A8C837 0%, #CBDB2A 50%, #8FB62E 100%)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="font-sans text-5xl lg:text-6xl font-bold text-[#5F5644]">
              About Studio QED
            </h1>
            <p className="mt-4 text-xl text-[#5F5644]/80 max-w-2xl">
              An award-winning creative and marketing agency dedicated to making your business more successful.
            </p>
          </div>
        </div>

        {/* Main about section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-sans text-3xl lg:text-4xl font-bold text-[#5F5644] mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-[#5F5644]/80 leading-relaxed mb-8">
                  Studio QED, Inc. is an award-winning creative and marketing agency. Our job is to
                  provide any service to make your job easier — from initial concept all the way
                  through production and fulfillment.
                </p>
                <p className="text-lg text-[#5F5644]/80 leading-relaxed">
                  We combine creative vision with technical expertise, delivering work that stands
                  out on shelves and screens alike. Whether you need a single piece or a complete
                  product launch, Studio QED has the skills and experience to bring it to life.
                </p>
              </div>

              <div className="relative">
                <img
                  src={awardsImg}
                  alt="Awards and Recognition"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-24 bg-[#CBDB2A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-sans text-3xl lg:text-4xl font-bold text-[#5F5644] mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-[#5F5644]/80 mb-12 max-w-2xl">
              From strategy to execution, we cover every aspect of the creative process.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/60 border border-[#5F5644]/20 px-6 py-5 text-center hover:bg-white transition-colors duration-200"
                >
                  <span className="font-sans font-semibold text-[#5F5644] text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio teaser */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src={bookCovers}
                  alt="Studio QED book covers"
                  className="w-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-sans text-3xl lg:text-4xl font-bold text-[#5F5644] mb-6">
                  Award-Winning Work
                </h2>
                <p className="text-lg text-[#5F5644]/80 leading-relaxed mb-8">
                  Our portfolio spans gaming, entertainment, retail, and corporate clients — each
                  project crafted with the same attention to detail and creative ambition that has
                  made Studio QED an industry leader.
                </p>
                <a
                  href="/case-studies"
                  className="inline-block px-8 py-4 border-2 border-[#5F5644] font-semibold text-[#5F5644]
                             hover:bg-[#CBDB2A] transition-all duration-300"
                >
                  See Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
