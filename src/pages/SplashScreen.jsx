import React from "react";
import TextType from "../components/TextType";

const SplashScreen = ({ onComplete }) => {
  const handleComplete = () => {
    setTimeout(onComplete, 500);
  };

  return (
    <div className="fixed inset-0 bg-[#0D0D0D] flex items-center justify-center z-[10000]">
      <TextType
        text="Ashish Kumar..."
        as="div"
        className="text-center font-mrs-saint-delafield text-[#7EB1E3] text-5xl sm:6xl md:text-8xl"
        typingSpeed={200}
        initialDelay={300}
        loop={false}
        showCursor={true}
        onSentenceComplete={handleComplete}
      />
    </div>
  );
};

export default SplashScreen;
