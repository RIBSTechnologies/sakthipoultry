"use client";

import { useMemo, useState } from "react";
import { jobs } from "@/lib/data";
import { Modal } from "@/components/ui/Modal";
import { CareerForm } from "@/components/forms/CareerForm";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const teams = ["All", ...Array.from(new Set(jobs.map((j) => j.team)))];

export function JobBoard() {
  const [team, setTeam] = useState("All");
  const [apply, setApply] = useState<string>("");
  const list = useMemo(
    () => (team === "All" ? jobs : jobs.filter((j) => j.team === team)),
    [team],
  );

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {teams.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTeam(t)}
            className={cn(
              "rounded-sm border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
              team === t
                ? "border-forest bg-forest text-white"
                : "border-line bg-white text-forest",
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4">
        {list.map((job) => (
          <li
            key={job.id}
            className="flex flex-col gap-4 border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-forest">{job.title}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gold">
                {job.team} · {job.type} · {job.location}
              </p>
              <p className="mt-3 max-w-2xl text-sm text-muted">{job.summary}</p>
            </div>
            <Button type="button" variant="gold" onClick={() => setApply(job.title)}>
              Apply online
            </Button>
          </li>
        ))}
      </ul>
      <Modal
        open={Boolean(apply)}
        onClose={() => setApply("")}
        title={apply ? `Apply — ${apply}` : "Apply"}
      >
        <CareerForm key={apply} defaultRole={apply} />
      </Modal>
    </>
  );
}
