import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <main>
      <h1>Programs</h1>
      <section>
        {programs.map((program) => (
          <article key={program.id}>
            <img
              src={program.poster}
              alt={program.title}
              style={{ width: "150px" }}
            />
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <p>
              {program.country} - {program.year}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
