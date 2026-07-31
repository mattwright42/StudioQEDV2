import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {ReactNode} from "react";
import granblue from '../img/GRANBLUE.png';
import tmntPackage from '../img/TMNT_PACKAGE.png';
import rf3sJournal from '../img/RF3S_journal.png';
import netAppRobot from '../img/NetAppRobot2.png';
import ldcPackage from '../img/LDC_package.png';
import skevCardset from '../img/SKEV_cardset.png';
import fateDiorama from '../img/FATE_DIORAMA.png';
import shantaeBook from '../img/Shantae_kickstarter_book.png';
import videos from '../img/Videos.png';
import jjPackage from '../img/JJ_PACKAGE2.png';
import hlSumoset from '../img/HL_Sumoset.png';
import qedLastStory from '../img/QED_LASTSTORY.png';
import retailShippers from '../img/Retail_shippers.png';

interface CaseStudyData {
  title: string;
  background: string;
  results: string | { image: string; alt?: string };
}

const caseStudies: CaseStudyData[] = [
  {
    title: 'Making a Box Big Enough for a Dragon',
    background:
      `I was sitting in my client’s office going over our regular project updates when they said "We
have something to show you." I could tell they were a little They pulled out this beautiful figure
from a larger box and I was amazed at the level of detail on this 6-inch resin collectible. The
wings were so intricate – scales and talons – that it looked ready to fly off its pedestal. Then I
was told this was to be one of the components for the highly anticipated GranBlue Fantasy:
Relink Collector’s Edition. We needed to design a custom box to fit this dragon (and the other
components) to show off this unique figure.
We designed and produced the collectible library case, outer box, artbook, soundtrack,
postcard set, and trays to securely hold the metal keychain and resin figure. Coordinating
several components and production schedules with various vendors nationwide to all deliver at
the same time can be complex. We worked through the design and approval processes to
ensure each element was printed, delivered, assembled, and ready before release day.
Receiving the final, assembled box reminded me that containing a mythical creature may not be
easy – but bringing all the parts together is magical.`,
    results: { image: granblue, alt: 'Results' },
  },
  {
    title: 'Working with a Maker of Mutants',
    background:
      `I thought I was working on a regular package when my client said we had call with Kevin
Eastman – creator of the Teenage Mutant Ninja Turtles! I will never forget I was on a video call
– not once, but twice – with my client and Kevin Eastman, watching him show his initial sketches
for two exclusive illustrations. I couldn’t believe it – I was watching a living legend in action (on
Zoom) and I knew my brothers would be jealous. By the 2 nd video call, we saw the final pieces –
watching the sketches go from pencil to ink to full color was an amazing process to watch.

These two new illustrations would be used exclusively for the upcoming Teenage Mutant Ninja
Turtles Cowabunga Collection Limited Edition.
It’s not just about the game – it’s the premium package packed with exclusive items: An outer
box and cloth poster featuring stunning original illustrations, 180-page artbook filled with
decades of carefully-selected game developer drawings, 3-D acrylic diorama, metal pin set, and
translucent plastic character cards. We managed a multi-platform simultaneous release with
exacting approvals by all IP holders.
Seeing the completed TMNT Limited Edition boxes recalls this colorful creative process –
watching original comic art brought to life was a truly unforgettable experience.`,
    results: { image: tmntPackage, alt: 'Results' },
  },
  {
    title: 'Planting Seeds for a Perfectly-Planned Product',
    background:
      'This hardcover planner includes an exclusive in-game calendar filled with critical info like game event dates, planting schedules, character birthdays, gift preferences, and gameplay tips. ',
    results: { image: rf3sJournal, alt: 'Results' },
  },
  {
    title: 'Building a Cybernetic Superhero',
    background:
      'Introducing a new company initiative required some promotional personality. Studio QED made the character drawings, 2D illustrations, and 3D models that became a fully animated transforming robot video.',
    results: { image: netAppRobot, alt: 'Results' },
  },
  {
    title: 'Starting from Scratch',
    background:
      'WWe directed and designed every element for this limited-edition release. Studio QED provided all the art direction to produce multiple original illustrations, custom window-box packaging, soundtrack and character cards, and even a custom-crafted nine-inch plush baby dragon!',
    results: { image: ldcPackage, alt: 'Results' },
  },
  {
    title: 'Oooh, So Shiny!',
    background:
      'We designed this stunning set of 60 holographic foil trading cards, divided into six color-coded competing ninja factions and randomly packed along with game software.',
    results: { image: skevCardset, alt: 'Results' },
  },
  {
    title: 'Fantastic Plastics',
    background:
      'Studio QED designed and produced this unique screen-printed 3D acrylic diorama. Pop out, assemble, and display this eye-catching collectible.',
    results: { image: fateDiorama, alt: 'Results' },
  },
  {
    title: 'Your Wish is Our Command',
    background:
      'We created this premium hardbound volume as a special reward for KickStarter donors. Our previous book layout was expanded with extra characters, costumes, levels, and enemy artwork.',
    results: { image: shantaeBook, alt: 'Results' },
  },
  {
    title: 'Moving Pictures',
    background:
      'Sometimes a photo or diagram isn\u2019t enough to clearly convey a complex subject. Studio QED has staff dedicated to animating and editing videos. We create commercials, show intros, game trailers, and anything else you can imagine.',
    results: { image: videos, alt: 'Results' },
  },
  {
    title: 'The Complete Package',
    background:
      'Studio QED produced this show-stopping limited-edition box with an oversized hardcover visual book, a set of metal pins, a custom-printed bandana, and a 3D acrylic character diorama. ',
    results: { image: jjPackage, alt: 'Results' },
  },
  {
    title: 'A Game Within a Game',
    background:
      "Studio QED adds value to packaging by including pack-in items to increase value and sales. We created this fun 'Tap Tap' Paper Sumo game with punch-out characters, an arena to compete in, and complete game instructions!",
    results: { image: hlSumoset, alt: 'Results' },
  },
  {
    title: 'Tell Your Best Story',
    background:
      'Studio QED created this custom box that simulated a hardback book, complete with detailed, hand-tooled embossing on the front illustration and logo. This unforgettable box contained the game, an exclusive artbook, and a soundtrack CD.',
    results: { image: qedLastStory, alt: 'Results' },
  },
  {
    title: 'Go Big',
    background:
      'Studio QED\u2019s award-winning, eye-catching displays increase impact and sales. We can handle every aspect of product launches from design, production, shipping, and retail setup.',
    results: { image: retailShippers, alt: 'Results' },
  },
];

export const CaseStudies = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="case-studies"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-[#CBDB2A] fade-slide-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-[#5F5644] mb-6">
            Case Studies
          </h2>
          <p className="text-lg text-[#5F5644] leading-relaxed">
            A closer look at how we approach challenges — and the results we deliver.
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div key={index} className={`border-t-2 border-divider pt-12${index === caseStudies.length - 1 ? ' pb-12 border-b-2' : ''}`}>
              <h3 className="font-sans text-3xl lg:text-4xl font-bold text-[#5F5644] mb-8">
                {study.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-sans text-lg font-bold text-[#5F5644] mb-3">
                    Background
                  </h4>
                  <p className="text-[#5F5644] leading-relaxed">{study.background}</p>
                </div>

                <div>
                  <h4 className="font-sans text-lg font-bold text-[#5F5644] mb-3">
                    Results
                  </h4>
                  {typeof study.results === 'string' ? (
                    <p className="text-[#5F5644] leading-relaxed">{study.results}</p>
                  ) : (
                    <img
                      src={study.results.image}
                      alt={study.results.alt ?? 'Results'}
                      className="w-full rounded-lg object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
