import { Button } from "../ui/button";

export const Page404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
      <h2 className="text-2xl font-semibold mb-2">אופס! הדף לא נמצא</h2>
      <p className="text-lg mb-6">
        נראה שהדף שחיפשת לא קיים או הועבר למקום אחר.
      </p>
      <Button asChild>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600  rounded-xl hover:bg-blue-700 transition-colors"
        >
          חזרה לדף הבית
        </a>
      </Button>
    </div>
  );
};
