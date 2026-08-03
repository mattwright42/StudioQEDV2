import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import granblue from "../img/GRANBLUE.png";
import tmntPackage from "../img/TMNT_PACKAGE.png";
import rf3sJournal from "../img/RF3S_journal.png";
import netAppRobot from "../img/NetAppRobot2.png";
import ldcPackage from "../img/LDC_package.png";
// import skevCardset from "../img/SKEV_cardset.png";
// import fateDiorama from "../img/FATE_DIORAMA.png";
// import shantaeBook from "../img/Shantae_kickstarter_book.png";
// import videos from "../img/Videos.png";
// import jjPackage from "../img/JJ_PACKAGE2.png";
// import hlSumoset from "../img/HL_Sumoset.png";
// import qedLastStory from "../img/QED_LASTSTORY.png";
// import retailShippers from "../img/Retail_shippers.png";

import { ReactNode } from "react";

interface CaseStudyData {
  title: string;
  background: ReactNode;
  results: string | { image: string; alt?: string };
}

const caseStudies: CaseStudyData[] = [
  {
    title: "Making a Box Big Enough for a Dragon",
    background: (
      <>
        <p>
          <em>
            I was sitting in my client’s office going over our regular project
            updates when they said “We have something to show you”. I could tell
            they were a little They pulled out this beautiful figure from a
            larger box and I was amazed at the level of detail on this 6-inch
            resin collectible. The wings were so intricate – scales and talons –
            that it looked ready to fly off its pedestal. Then I was told this
            was to be one of the components for the highly anticipated GranBlue
            Fantasy: Relink Collector’s Edition. We needed to design a custom
            box to fit this dragon (and the other components) to show off this
            unique figure.
          </em>
        </p>
        <p>
          We designed and produced the collectible library case, outer box,
          artbook, soundtrack, postcard set, and trays to securely hold the
          metal keychain and resin figure. Coordinating several components and
          production schedules with various vendors nationwide to all deliver at
          the same time can be complex. We worked through the design and
          approval processes to ensure each element was printed, delivered,
          assembled, and ready before release day.
        </p>
        <p>
          <em>
            Receiving the final, assembled box reminded me that containing a
            mythical creature may not be easy – but bringing all the parts
            together is magical.
          </em>
        </p>
        <p>A complex project with several steps? We can handle it.</p>
        <ul className="list-disc pl-6">
          <li>Custom box creation</li>
          <li>
            Specialty printing with eye-catching foil and spot varnish effects
          </li>
          <li>Book production at any size or quantity</li>
          <li>Assembly and shipping to your distributors or retailers</li>
        </ul>
        <p>Studio QED. On time. On target.</p>
        <p>All oproducts are trademarks of their respective holders.</p>
      </>
    ),
    results: { image: granblue, alt: "Results" },
  },
  {
    title: "Working with a Maker of Mutants",
    background: (
      <>
        <p>
          <em>
            I thought I was working on a regular package when my client said we
            had call with Kevin Eastman – creator of the Teenage Mutant Ninja
            Turtles! I will never forget I was on a video call – not once, but
            twice – with my client and Kevin Eastman, watching him show his
            initial sketches for two exclusive illustrations. I couldn’t believe
            it – I was watching a living legend in action (on Zoom) and I knew
            my brothers would be jealous. By the 2 nd video call, we saw the
            final pieces – watching the sketches go from pencil to ink to full
            color was an amazing process to watch. These two new illustrations
            would be used exclusively for the upcoming Teenage Mutant Ninja
            Turtles Cowabunga Collection Limited Edition.
          </em>
        </p>
        <p>
          It’s not just about the game – it’s the premium package packed with
          exclusive items: An outer box and cloth poster featuring stunning
          original illustrations, 180-page artbook filled with decades of
          carefully-selected game developer drawings, 3-D acrylic diorama, metal
          pin set, and translucent plastic character cards. We managed a
          multi-platform simultaneous release with exacting approvals by all IP
          holders.
        </p>
        <p>
          <em>
            Seeing the completed TMNT Limited Edition boxes recalls this
            colorful creative process – watching original comic art brought to
            life was a truly unforgettable experience.
          </em>
        </p>
        <p>Let us make your next product release a superhero blockbuster.</p>
        <ul className="list-disc pl-6">
          <li>
            Multi-platform packaging with slipcases for maximum savings and
            customizability
          </li>
          <li>
            Careful attention to licensed product guidelines and approvals
          </li>
          <li>
            Specialty materials including plastics, metals, and cloth for
            variety
          </li>
          <li>Book design with content creation and curation</li>
        </ul>
        <p>Studio QED. On time. On target.</p>
        <p>All oproducts are trademarks of their respective holders.</p>
      </>
    ),
    results: { image: tmntPackage, alt: "Results" },
  },
  {
    title: "Planting Seeds for a Perfectly-Planned Product",
    background: (
      <>
        <p>
          <em>
            My client wanted to create a custom journal/planner as a bonus item
            for a limited-edition box set. I was attending a trade show in Las
            Vegas, looking for standout journal/planner options. I happened upon
            a vendor that was using a new paper they had developed – Appeel –
            made from actual peels of apples. As unique as this paper is - would
            it be affordable and work for the project? When the vendor came back
            with a quote, because we had built the relationship at the show,
            they were able to deliver the finished book for a budget that worked
            with the art and project. This natural, eco-friendly and sustainable
            paper was a great match for the planner for this farming simulation
            game – and the final books even smell like fresh apples! Not only
            can we create it, but when we find something unique we bring it.
          </em>
        </p>
        <p>
          Studio QED, Inc. created this custom hardcover planner as part of the{" "}
          <em>Rune Factory 3 SPECIAL Golden Memories Edition.</em> This helpful
          book not only has a full-year perpetual calendar, but also includes an
          exclusive in-game calendar, stuffed with useful info like game event
          dates, planting schedules, character birthdays, gift preferences, and
          gameplay tips. A perfect source for everything a gamer needs to
          nurture maximum enjoyment from this sim game.
        </p>
        <p>
          <em>
            Opening one of these final planners always greets me with the warm
            scent of apples – and the sweet smell of a successful promotion.
          </em>
        </p>
        <p>
          Let us dream up something magical and memorable to increase your
          sales.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Unique designs to drive sales with useful, must-have pack-in
            products
          </li>
          <li>Specialty printers produce premium items no one else has</li>
          <li>
            Attention to the smallest details, so you never miss a character’s
            birthday again
          </li>
        </ul>
        <p>Studio QED. On time. On target.</p>
        <p>All oproducts are trademarks of their respective holders.</p>
      </>
    ),
    results: { image: rf3sJournal, alt: "Results" },
  },
  {
    title: "Building a Cybernetic Superhero",
    background: (
      <>
        <p>
          Somteimes what you really need a little character. Geico has a gecko,
          Frosted Flakes has Tony the Tiger. When I was in high school, my
          friend Michael
        </p>
        <p>
          <em>
            Our client asked us to create a character to introduce their
            company’s Data Protection Genius program. We crafted sketches and
            brought to life the NetApp Defender robot, an original mascot built
            from recognizable elements of their data server hardware.
          </em>
        </p>
        <p>
          Introducing this company initiative required some promotional
          personality. Studio QED, Inc. made the drawings, 2D illustrations, and
          3D models that became a fully animated transforming robot video to
          make an unforgettable introduction for this character.
        </p>
        <p>
          <em>
            As we delivered our artwork, printed items, and award statues – I
            knew our client’s rollout was in safe metal hands.
          </em>
        </p>
        <p>Let us make you the hero in your next corporate program.</p>
        <ul className="list-disc pl-6">
          <li>
            Original character/mascot deisgn, illustration, and 3D modeling
          </li>
          <li>
            Custom promotional items of all kinds: T-shirts, labels, even
            sculptures and awards
          </li>
          <li>
            Fulfilling all your branding, product, and video needs in one stop
          </li>
          <li>
            Make it personal with attentive application of unique details from
            your product
          </li>
        </ul>
        <p>
          Not all characters need to dance around on the football field, but
        </p>
        <p>Studio QED. On time. On target.</p>
        <p>All oproducts are trademarks of their respective holders.</p>
      </>
    ),
    results: { image: netAppRobot, alt: "Results" },
  },
  {
    title: "Starting from Scratch",
    background: (
      <>
        <p>
          <em>
            I had just started working with a new client and they had a unique
            game coming up – Little Dragons Café. I will always remember the day
            I saw the initial game footage. This little baby dragon following
            the main character around the world totally captured my heart. I
            learned that there weren’t any promotional illustrations or any
            other marketing materials created for the game – and we needed to
            direct the dev team on how to create them. What they would look
            like, what characters to use and how large was just the tip of the
            iceberg.
            <br />
            I’ll admit – I was a little out of my element – how was I going to
            direct an illustrator on how to create these illustrations without
            any direction
          </em>
        </p>
        <p>
          Studio QED, Inc. sketched, directed, and designed each element for
          Aksys Games’ <em>Little Dragons Café</em> limited edition release.
          Needing to promote this adorable original game for Nintendo Switch, we
          provided all the art direction to produce multiple original
          illustrations, custom window-box packaging, collectible soundtrack and
          character card pack-in items, and even a custom-crafted nine-inch
          plush baby dragon!
        </p>
        <p>
          <em>
            This little stuffed dragon watches me from my shelf each day – a
            reminder that, even from humble beginnings, anything is possible.
          </em>
        </p>
        <p>
          Let us provide everything you need to turn your next product into a
          must-have purchase.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Original asset direction and production: logos, illustrations,
            packaging - even plushies
          </li>
          <li>
            A single source for all your needs for maximum care and consistency
          </li>
          <li>Vendor variety to produce and assemble every item you need</li>
          <li>
            Marketing experience to make unknown original properties into
            consumer success stories
          </li>
        </ul>
        <p>Studio QED. On time. On target.</p>
        <p>All oproducts are trademarks of their respective holders.</p>
      </>
    ),
    results: { image: ldcPackage, alt: "Results" },
  },
  // {
  //   title: "Oooh, So Shiny!",
  //   background:
  //     "We designed this stunning set of 60 holographic foil trading cards, divided into six color-coded competing ninja factions and randomly packed along with game software.",
  //   results: { image: skevCardset, alt: "Results" },
  // },
  // {
  //   title: "Fantastic Plastics",
  //   background:
  //     "Studio QED designed and produced this unique screen-printed 3D acrylic diorama. Pop out, assemble, and display this eye-catching collectible.",
  //   results: { image: fateDiorama, alt: "Results" },
  // },
  // {
  //   title: "Your Wish is Our Command",
  //   background:
  //     "We created this premium hardbound volume as a special reward for KickStarter donors. Our previous book layout was expanded with extra characters, costumes, levels, and enemy artwork.",
  //   results: { image: shantaeBook, alt: "Results" },
  // },
  // {
  //   title: "Moving Pictures",
  //   background:
  //     "Sometimes a photo or diagram isn\u2019t enough to clearly convey a complex subject. Studio QED has staff dedicated to animating and editing videos. We create commercials, show intros, game trailers, and anything else you can imagine.",
  //   results: { image: videos, alt: "Results" },
  // },
  // {
  //   title: "The Complete Package",
  //   background:
  //     "Studio QED produced this show-stopping limited-edition box with an oversized hardcover visual book, a set of metal pins, a custom-printed bandana, and a 3D acrylic character diorama.",
  //   results: { image: jjPackage, alt: "Results" },
  // },
  // {
  //   title: "A Game Within a Game",
  //   background:
  //     "Studio QED adds value to packaging by including pack-in items to increase value and sales. We created this fun 'Tap Tap' Paper Sumo game with punch-out characters, an arena to compete in, and complete game instructions!",
  //   results: { image: hlSumoset, alt: "Results" },
  // },
  // {
  //   title: "Tell Your Best Story",
  //   background:
  //     "Studio QED created this custom box that simulated a hardback book, complete with detailed, hand-tooled embossing on the front illustration and logo. This unforgettable box contained the game, an exclusive artbook, and a soundtrack CD.",
  //   results: { image: qedLastStory, alt: "Results" },
  // },
  // {
  //   title: "Go Big",
  //   background:
  //     "Studio QED\u2019s award-winning, eye-catching displays increase impact and sales. We can handle every aspect of product launches from design, production, shipping, and retail setup.",
  //   results: { image: retailShippers, alt: "Results" },
  // },
];

export const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero banner */}
        <div
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, #A8C837 0%, #CBDB2A 50%, #8FB62E 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="font-sans text-5xl lg:text-6xl font-bold text-[#5F5644]">
              Case Studies
            </h1>
            <p className="mt-4 text-xl text-[#5F5644]/80 max-w-2xl">
              A closer look at how we approach challenges — and the results we
              deliver.
            </p>
          </div>
        </div>

        {/* Case studies list */}
        <section className="py-16 bg-[#CBDB2A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-0">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="border-t-2 border-[#5F5644]/20 pt-14 pb-14 last:border-b-2"
                >
                  <h3 className="font-sans text-3xl lg:text-4xl font-bold text-[#5F5644] mb-8">
                    {study.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-sans text-sm font-bold text-[#5F5644]/60 uppercase tracking-widest mb-3">
                        Background
                      </h4>
                      <p className="text-[#5F5644] leading-relaxed text-lg">
                        {study.background}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-sans text-sm font-bold text-[#5F5644]/60 uppercase tracking-widest mb-3">
                        Results
                      </h4>
                      {typeof study.results === "string" ? (
                        <p className="text-[#5F5644] leading-relaxed text-lg">
                          {study.results}
                        </p>
                      ) : (
                        <img
                          src={study.results.image}
                          alt={study.results.alt ?? "Results"}
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
      </main>

      <Footer />
    </div>
  );
};
