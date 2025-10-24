import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";
const Testimonials = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["testimonials"];
}) => {
  return <AnimatedTestimonials testimonials={dictionary.testimonials} />;
};

export default Testimonials;
