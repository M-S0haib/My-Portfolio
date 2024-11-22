export default function HorizontalTimeline() {
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
      <section className="w-full bg-slate-900 hidden md:block">
        <div className="container ">
          <h2 className="mb-12 text-3xl font-semibold text-white">About me</h2>
          <div className="relative">
            <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-16">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative flex-1">
                  {/* Year */}
                  <span className="block text-2xl font-semibold text-white">{event.year}</span>
                  
                  <div className="relative mt-8">
                    {/* Gradient sphere */}
                    <div className="absolute left-0 top-1/2 z-10 h-6 w-6 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    
                    {/* Timeline line */}
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute left-5 top-1/2 h-[5px] w-[135%] lg:w-[125%] -translate-y-1/2 bg-[#FFFFFF]" />
                    )}
                  </div>
                  
                  {/* Description */}
                  <div className="mt-16 max-w-[300px] ">
                    <p className="text-base leading-relaxed text-[#929EB0]">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }