import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@/fonts/Auro Rumpthut.otf";
import "@/fonts/Auro Rumpthut.ttf";
import "@/fonts/VarelaRound-Regular.ttf";
import { BrowserRouter, Route, Routes } from "react-router";
import { Accessibility } from 'accessibility';
import AccessibilityPage from "@/components/accessibility/accessibility";

const labels = {
    resetTitle: 'איפוס',
    closeTitle: 'סגירה',
    menuTitle: 'נגישות',
    increaseText: 'הגדל גודל גופן',
    decreaseText: 'הקטן גודל גופן',
    increaseTextSpacing: 'הגדל מרווח טקסט',
    decreaseTextSpacing: 'הקטן מרווח טקסט',
    increaseLineHeight: 'הגדל גובה שורה',
    decreaseLineHeight: 'הקטן גובה שורה',
    invertColors: 'להפוך צבעים',
    grayHues: 'גווני אפור',
    underlineLinks: 'קו תחתון לקישורים',
    bigCursor: 'סמן גדול',
    readingGuide: 'מדריך קריאה',
    textToSpeech: 'טקסט לקול',
    speechToText: 'קול לטקסט',
    disableAnimations: 'בטל אנימציות',
    hotkeyPrefix: 'לחצן מהיר',
};
const options = { labels: labels, textToSpeechLang: 'he-IL', speechToTextLang: 'he-IL' };

window.addEventListener('load', function () { new Accessibility(options); }, false);
createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<App />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
        </Routes>
    </BrowserRouter>
);
