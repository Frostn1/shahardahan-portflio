import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="z-20 bottom-0 w-full flex flex-col items-center gap-3 text-(--subtext)">
      <Button variant={"link"} asChild>
        <a href="accessibility">הצהרת נגישות</a>
      </Button>
      &copy; 2025 שחר דהן | אימון לתוצאות
    </div>
  );
};

export default Footer;
