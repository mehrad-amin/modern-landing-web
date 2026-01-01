import assets from "../assets/assets";
import ServiceCard from "./serviceCard";

import Title from "./Title";

const Services = () => {
  const ServicesData = [
    {
      title: "Advertising",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti.",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center px-4 sm:px-12 lg:px-24
        xl:px-40 gap-7 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Neque, odio dignissimos porro accusamus officiis"
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {ServicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
