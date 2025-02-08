import SingleService from "./singleservice";
const services = [
  {
    name: "סטודיו בוטיק​",
    description:
      "אימונים אישיים וקבוצות קטנות. " + "אימונים פונקציונליים ופילאטיס מזרן",
    image: "/studio-clean2.jpg",
    video: "/studio.mp4",
  },
  {
    name: "כושר קרבי והכנה לצבא​",
    description: "אימוני כושר יחודיים והכנה מנטלית לשירות משמעותי",
    image: "/mil.jpg",
    video: "/mil.mp4",
  },
  {
    name: "קבוצות מאסטרס בשטח",
    description: "עבודה על סיבולת, טכניקה וזרימה בסינגלים",
    image: "/masters.jpg",
    video: "/masters.mp4",
  },
  {
    name: "אימוני טריאתלון​",
    description:
      "בניית תוכנית אימון אישית על פי יעדים ומטרות, כולל ליווי תזונתי",
    image: "/ironman.jpg",
  },
];
const Services = () => {
  return (
    <div className="flex flex-col pb-20 p-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-10">
      {services.map(({ name, description, image, video }) => (
        <SingleService
          key={Math.random()}
          name={name}
          description={description}
          image={image}
          video={video}
        />
      ))}
    </div>
  );
};

export default Services;
