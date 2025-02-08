import SingleService from "./singleservice";
const services = [
  {
    name: "סטודיו בוטיק​",
    description:
      "אימונים פונקציונלים, אימונים לגיל השלישי, פילאטיס מזרן, קבוצות קטנות ואישיים",
    image: "",
  },
  {
    name: "כושר קרבי והכנה לצבא​",
    description:
      "אימוני כושר יחודיים, ריצות, אלונקות, משימות שטח והכנה מנטלית לצבא",
    image: "",
  },
  {
    name: "קבוצת מסטרס​",
    description: "עבודה על סיבולת, טכניקה וזרימה בסינגלים",
    image: "",
  },
  {
    name: "אימוני טריאתלון​",
    description: "בניית תוכנית אימון אישית על פי יעדים ומטרות",
    image: "",
  },
];
const Services = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-10 h-full">
      {services.map(({ name, description, image }) => (
        <SingleService name={name} description={description} image={image} />
      ))}
    </div>
  );
};

export default Services;
