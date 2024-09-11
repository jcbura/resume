const Summary = () => {
  const summary: string =
    "Graduated Summa Cum Laude from Auburn University with a major in Computer Science. I have experience in frontend, backend, and mobile development, with a particular focus on full-stack web and mobile apps using JavaScript frameworks.";

  return (
    <div className="w-full pb-2 flex flex-col gap-2 justify-center items-start border-black/20 border-t-0 border-b-2 border-l-0 border-r-0">
      <div className="w-full pb-2 text-4xl font-semibold border-black border-t-0 border-b-2 border-l-0 border-r-0">
        Summary
      </div>
      <div className="text-lg">{summary}</div>
    </div>
  );
};

export default Summary;
