import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { asset, cn } from "@/lib/utils";

const facilities = [
  {
    title: "Breeder Farms",
    tagline: "A New Milestone in Indian Poultry",
    subtitle: "State-of-the-Art Broiler Breeder EC Infrastructure",
    image: asset("sakthi-poultry-breeder-farms.jpg"),
    alt: "Sakthi Poultry broiler breeder farm infrastructure",
    points: [
      {
        title: "State-of-the-Art EC Housing",
        text: "Advanced ventilation, cooling and environmental monitoring for optimal flock conditions.",
      },
      {
        title: "Advanced Biosecurity",
        text: "Comprehensive biosecurity and controlled access to minimize disease risks.",
      },
      {
        title: "All-In, All-Out System",
        text: "Strict flock management with complete cleaning, disinfection and downtime.",
      },
      {
        title: "Hatchery-to-Farm Biosecurity",
        text: "Integrated control of egg, equipment, personnel and vehicle movement.",
      },
      {
        title: "Sustainable Biogas Plant",
        text: "Responsible Poultry manure management through biogas utilization.",
      },
    ],
  },
  {
    title: "Modern Hatchery",
    tagline: "A New Milestone in Indian Poultry – Our Modern Hatchery",
    image: asset("sakthi-poultry-about-hatchery.jpg"),
    alt: "Sakthi Poultry modern hatchery complex",
    points: [
      {
        title: "State-of-the-Art Single-Stage Incubation",
        text: "Advanced single-stage incubation technology for better hatchability and chick quality.",
      },
      {
        title: "International-Standard Hygiene",
        text: "Strict hygiene protocols maintained in line with international standards.",
      },
      {
        title: "In-Ovo Vaccination – First in India",
        text: "Advanced In-Ovo vaccination technology, vaccinating the embryo before hatching.",
      },
      {
        title: "Biosecurity Excellence & Premium Chick Quality",
        text: "Robust biosecurity measures ensuring healthy, uniform and premium-quality chicks.",
      },
      {
        title: "Seamless Hatchery-to-Farm Transfer",
        text: "A well-integrated process ensuring chicks reach the farm quickly, safely and in optimal condition.",
      },
    ],
  },
  {
    title: "Modern Feed Mill",
    tagline: "A New Standard in Poultry Nutrition",
    subtitle: "State-of-the-Art Automated Pellet Feed Plant",
    image: asset("sakthi-poultry-modern-feed-mill.jpg"),
    alt: "Sakthi Poultry modern automated feed mill",
    points: [
      {
        title: "Fully Automated Andritz Pelletizing Technology",
        text: "Equipped with advanced Andritz pelletizing machinery and automated processing systems, ensuring precision, consistency and superior pellet quality.",
      },
      {
        title: "Advanced Quality Control Laboratory with HPLC Facility",
        text: "Our well-equipped laboratory includes an HPLC facility dedicated to the accurate analysis and quality verification of feed additives, ensuring consistency, purity and compliance with defined quality standards.",
      },
      {
        title: "Precision Feed Manufacturing",
        text: "Advanced automation and process control ensure accurate ingredient handling, consistent formulation and uniform feed quality from batch to batch.",
      },
      {
        title: "Stringent Quality & Safety Standards",
        text: "Comprehensive quality-control procedures are followed from raw-material inspection through processing, pelletizing and finished-feed dispatch.",
      },
      {
        title: "Integrated Feed-to-Farm Supply Chain",
        text: "A seamless production and distribution system ensures timely availability of quality feed across our integrated poultry operations.",
      },
    ],
  },
];

export function AboutInfrastructure() {
  return (
    <section
      aria-labelledby="about-infra-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-infra-heading"
            eyebrow="Infrastructure"
            title="Integrated Infrastructure Across the Broiler Poultry Value Chain"
          />
        </Reveal>

        <div className="mt-10 space-y-8">
          {facilities.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.04}>
              <article
                className={cn(
                  "overflow-hidden rounded-2xl border border-line",
                  index % 2 ? "bg-cream-2" : "bg-white",
                )}
              >
                <div className="grid items-stretch lg:grid-cols-12">
                  <div
                    className={cn(
                      "relative min-h-[260px] lg:col-span-5 lg:min-h-[420px]",
                      index % 2 ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <MediaImage
                      src={facility.image}
                      alt={facility.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                  </div>
                  <div
                    className={cn(
                      "p-6 sm:p-8 lg:col-span-7 lg:p-10",
                      index % 2 ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <p className="font-display text-lg text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                      {facility.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                      {facility.tagline}
                    </p>
                    {"subtitle" in facility && facility.subtitle ? (
                      <p className="mt-2 text-base font-medium text-ink">
                        {facility.subtitle}
                      </p>
                    ) : null}
                    <ol className="mt-6 space-y-4">
                      {facility.points.map((point, pointIndex) => (
                        <li key={point.title} className="flex gap-3">
                          <span className="mt-0.5 font-display text-sm text-gold">
                            {String(pointIndex + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p className="font-semibold text-ink">{point.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {point.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
