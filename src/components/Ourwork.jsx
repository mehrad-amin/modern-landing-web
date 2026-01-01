import assets from "../assets/assets";
import Title from "./Title";

const Ourwork = () => {
  const workData = [
    {
      title: "Mobile app Marketing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti.",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <div
      id="our-work"
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40
        gap-7 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest work"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all
              cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourwork;
