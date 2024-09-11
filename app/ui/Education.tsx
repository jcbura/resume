const Education = () => {
  return (
    <div className="w-full pb-2 flex flex-col gap-2 justify-center items-start border-black/20 border-t-0 border-b-2 border-l-0 border-r-0">
      <div className="w-full pb-2 text-4xl font-semibold border-black border-t-0 border-b-2 border-l-0 border-r-0">
        Education
      </div>
      <div className="w-full flex flex-col gap-2 justify-center items-start">
        <div className="text-2xl font-semibold">
          Bachelor of Science in Computer Science
        </div>
        <div className="text-lg">
          Auburn University • Auburn, AL • 2024 • 3.9 GPA
        </div>
        <div className="flex flex-row gap-2 justify-center items-start text-lg">
          <div>•</div>
          <div>Summa Cum Laude</div>
        </div>
        <div className="flex flex-row gap-2 justify-center items-start text-lg">
          <div>•</div>
          <div>Dean's List 6x</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
