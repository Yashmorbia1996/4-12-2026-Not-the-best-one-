import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const milestones = [
  { number: "01", title: "Coming to US" },
  { number: "02", title: "MS in Mechanical Engineering" },
  { number: "03", title: "Mechanical Engineering Co-op" },
  { number: "04", title: "Lead Mechanical Engineer" },
  { number: "05", title: "What's Next?", future: true, tag: "FUTURE-05" },
] as const;

const futureHorizons = [
  "Transitioning to Siemens NX Advanced Assembly Mgmt",
  "Developing System-Level Thermal Architectures.",
] as const;

export function CareerTimeline() {
  const [showFuture, setShowFuture] = useState(false);

  return (
    <section className="scroll-reveal py-24 md:py-32">
      <div className="site-container">
        <div className="rounded-[1.75rem] border border-gray-200 bg-[#F8F8F8] px-5 py-7 shadow-sm md:px-8">
          <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            How I Got Here
          </p>
          <p className="mt-3 text-center text-base leading-relaxed text-gray-700">
            Not exactly a straight line, but it ended where I belong.
          </p>

          <div className="mt-10 overflow-x-auto pb-3">
            <div className="relative mx-auto min-w-[58rem]">
              <div className="absolute left-8 right-8 top-4 h-px bg-[#6366F1]/35" aria-hidden />

              <div className="grid grid-cols-5 gap-8">
                {milestones.map((milestone) => (
                  <div key={milestone.number} className="relative flex flex-col items-center text-center">
                    <div
                      className={[
                        "relative z-10 h-4 w-4 rounded-full bg-[#6366F1]",
                        milestone.future ? "ring-4 ring-[#6366F1]/15" : "",
                      ].join(" ")}
                    />
                    <div className="h-5 w-px bg-[#6366F1]/40" aria-hidden />

                    {milestone.future ? (
                      <button
                        type="button"
                        aria-expanded={showFuture}
                        onClick={() => setShowFuture((value) => !value)}
                        onMouseEnter={() => setShowFuture(true)}
                        onMouseLeave={() => setShowFuture(false)}
                        className="flex min-h-[7rem] w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm leading-tight text-gray-900 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                            {milestone.tag}
                          </span>
                          <span>{milestone.title}</span>
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600">
                            {showFuture ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </span>
                        </div>
                      </button>
                    ) : (
                      <div className="flex min-h-[7rem] w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm leading-tight text-gray-900 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
                        <span>{milestone.title}</span>
                      </div>
                    )}

                    <p className="mt-3 font-mono text-[11px] text-[#9CA3AF]">{milestone.number}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {showFuture && (
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                Future Horizons
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {futureHorizons.map((item) => (
                  <div key={item} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
