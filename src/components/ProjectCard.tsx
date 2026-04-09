interface ProjectCardProps {
  title: string;
  problem: string;
  action: string;
  result: string;
  slug: string;
}

export function ProjectCard({ title, problem, action, result, slug }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
      <a href={`/projects/${slug}`} className="block">
        <div className="aspect-video rounded-t-xl border-b border-gray-200 bg-gray-100" />
      </a>

      <div className="p-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
          Case Study
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-gray-900">
          <a href={`/projects/${slug}`} className="transition-colors duration-200 group-hover:text-blue-600">
            {title}
          </a>
        </h3>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Problem</p>
            <p className="mt-1">{problem}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Action</p>
            <p className="mt-1">{action}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Result</p>
            <p className="mt-1">{result}</p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href={`/projects/${slug}`}
            className="text-sm text-blue-600 transition-colors duration-200 hover:text-blue-700"
          >
            Read case study →
          </a>
        </div>
      </div>
    </article>
  );
}
