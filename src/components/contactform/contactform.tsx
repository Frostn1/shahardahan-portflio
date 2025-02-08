import { useState } from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  return (
    <DialogContent className="sm:max-w-[300px] md:max-w-[425px] font-[Varela]">
      <DialogHeader>
        <DialogTitle className="text-right">? מוכנים להתאמן</DialogTitle>
        <DialogDescription className="text-right">
          מוזמנים לשלוח לי אימייל
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Label htmlFor="name" className="text-right">
            שם
          </Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            dir="rtl"
            placeholder="ישראל ישראלי"
            value={name}
            className="col-span-3"
            required
          />
        </div>
        <div className="flex flex-col gap-5">
          <Label htmlFor="username" className="text-right">
            תיאור
          </Label>
          <Textarea
            required
            dir="rtl"
            id="idea-text"
            onChange={(e) => setBody(e.target.value)}
            placeholder="איפה תרצה שנתחיל ?"
          />
        </div>
      </div>
      <Button variant={"default"} className="justify-self-end w-fit">
        <a href={`mailto:hello@shahardahan.com?subject=${name}&body=${body}`}>
          שלח אימייל
        </a>
      </Button>
    </DialogContent>
  );
};

export default ContactForm;
