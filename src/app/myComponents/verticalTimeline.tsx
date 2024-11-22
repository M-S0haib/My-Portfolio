export default function VerticalTimeline() {
    const timelineEvents = [
      {
        year: "2011",
        description:
          "Graduated KTC (Krasnodar Technical College) and for about two years worked with high voltage (35, 110kV) substations as the specialty electrician of emergency mobile crew. Later qualified as a Crossfit trainer.",
      },
      {
        year: "2016",
        description:
          "Underwent a digital marketing course and started to work as a PPC and project manager in a local web studio. After 3 months started my own freelance practice.",
      },
      {
        year: "2021",
        description:
          "Became more interested in IT and decided to try programming. Underwent Java course and made a project.",
      },
      {
        year: "2022",
        description:
          "Worked out in which field I want to build a developer's career and started to learn Frontend Development.",
      },
    ]
  
    return (
      <section className="w-full bg-slate-900 md:hidden">
        <div className="container">
          <h2 className="mb-12 text-xl font-bold text-white">About me</h2>
          <div className="relative">
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative pl-8">
                  {/* Vertical line */}
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute left-[0.35rem] top-3 bottom-0 h-[129.5%] w-[2px] bg-white" />
                  )}
                  
                  {/* Gradient sphere */}
                  <div className="absolute left-0 top-1 z-10 h-3 w-3 rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  
                  {/* Year */}
                  <span className="block text-base font-semibold text-white">{event.year}</span>
                  
                  {/* Description */}
                  <div className="mt-2 max-w-[600px]">
                    <p className="text-sm leading-relaxed text-gray-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }