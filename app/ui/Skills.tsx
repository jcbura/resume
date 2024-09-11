const Skills = () => {
  const frontend: string =
    "Frontend: React, Next.js, React Native, Expo, Tailwind CSS, NativeWind, Storybook";
  const backend: string = "Backend: NestJS, SQL";
  const languages: string =
    "Languages: Java, JavaScript, TypeScript, Python, Swift";
  const toolsAndPlatforms: string =
    "Tools and Platforms: Amazon EC2, GitHub, Linux";

  return (
    <div className="w-full pb-2 flex flex-col gap-2 justify-center items-start border-black/20 border-t-0 border-b-2 border-l-0 border-r-0">
      <div className="w-full pb-2 text-4xl font-semibold border-black border-t-0 border-b-2 border-l-0 border-r-0">
        Skills
      </div>
      <div className="w-full flex flex-col gap-4 justify-center items-start text-lg">
        <div>{frontend}</div>
        <div>{backend}</div>
        <div>{languages}</div>
        <div>{toolsAndPlatforms}</div>
      </div>
    </div>
  );
};

export default Skills;
