import SingleService from "./singleservice";
const services = [
  // {
  //   name: "studio",
  //   description:
  //     "אימונים אישיים וקבוצות קטנות. " + "אימונים פונקציונליים ופילאטיס מזרן",
  //   image: "/studio-clean2.jpg",
  //   video: "/studio.mp4",
  // },
  {
    name: "mtb",
    image: "/masters.jpg",
    video: "/masters.mp4",
  },
  {
    name: "triathlon",
    image: "/ironman.jpg",
  },
];
const Services = () => {
  return (
    <div className="grid p-5 lg:grid-cols-2 lg:grid-rows-1 gap-10">
      {services.map(({ name, image, video }) => (
        <SingleService
          key={Math.random()}
          name={name}
          image={image}
          video={video}
        />
      ))}
    </div>
  );
};

export default Services;
