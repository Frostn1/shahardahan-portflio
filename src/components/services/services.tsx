import SingleService from "./singleservice";
const services = [
  {
    name: "סטודיו בוטיק​",
    description: "",
    image: "",
  },
  {
    name: "כושר קרבי והכנה לצבא​",
    description: "",
    image: "",
  },
  {
    name: "קבוצת מסטרס​",
    description: "",
    image: "",
  },
  {
    name: "אימוני טריאתלון​",
    description: "",
    image: "",
  },
];
const Services = () => {
  return (
    <div>
      {services.map(({ name, description, image }) => (
        <SingleService name={name} description={description} image={image} />
      ))}
    </div>
  );
};

export default Services;
