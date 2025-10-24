import { getDictionary } from "@/lib/get-dictionary";
import {
  AnimatedTestimonials,
  Testimonial,
} from "../../components/ui/animated-testimonials";
import React = require("react");
const Testimonials = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["testimonials"];
}) => {
  return <AnimatedTestimonials testimonials={dictionary.testimonials} />;
};

export default Testimonials;
