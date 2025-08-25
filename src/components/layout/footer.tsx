import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-3 text-(--subtext)">
      <Button variant={"link"} asChild>
        <a href="accessibility">הצהרת נגישות</a>
      </Button>
      &copy; 2025 שחר דהן | אימון לתוצאות
    </div>
  );
}

export default Footer;
