import SingleService from "./singleservice";
const services = [
  {
    name: "סטודיו בוטיק​",
    description:
      "אימונים פונקציונלים, אימונים לגיל השלישי, פילאטיס מזרן, קבוצות קטנות ואישיים",
    image: "/studio-clean2.jpg",
  },
  {
    name: "כושר קרבי והכנה לצבא​",
    description:
      "אימוני כושר יחודיים, ריצות, אלונקות, משימות שטח והכנה מנטלית לצבא",
    image: "/mil.jpg",
  },
  {
    name: "קבוצת מסטרס​",
    description: "עבודה על סיבולת, טכניקה וזרימה בסינגלים",
    image: "/masters.jpg",
  },
  {
    name: "אימוני טריאתלון​",
    description: "בניית תוכנית אימון אישית על פי יעדים ומטרות",
    image: "/ironman.jpg",
  },
];
const Services = () => {
  return (
    <div className="flex flex-col p-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-10">
      {services.map(({ name, description, image }) => (
        <SingleService key={Math.random()} name={name} description={description} image={image} />
      ))}
    </div>
  );
};

export default Services;
