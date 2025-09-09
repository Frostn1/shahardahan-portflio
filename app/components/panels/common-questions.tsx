import { getDictionary } from "@/lib/get-dictionary";
import Box from "../ui/box";

import React = require("react");
interface CommonQuestion {
  question: string;
  answer: string;
}

const CommonQuestions = ({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["main"]["common-questions"];
}) => {
  const questions = dictionary.questions;
  return (
    <div className="text-md lg:text-lg font-semibold flex flex-col gap-2 md:gap-5">
      {dictionary.title}
      <div className="h-full flex flex-col md:grid grid-rows-1 grid-cols-3 gap-10">
        {questions.map((offer: CommonQuestion) => (
          <Box
            key={Math.random()}
            title={offer.question}
            description={offer.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;
