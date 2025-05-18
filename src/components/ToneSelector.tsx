"use client";

type Props = {
    selectedTones: string[];
    toggleTone: (tone: string) => void;
  };

const TONE_OPTIONS = ["Professional", "Impact-Oriented", "Friendly", "Enthusiastic"];


const ToneSelector = ({
  selectedTones,
  toggleTone,
}: Props) => (
  <fieldset>
    <legend className="text-white font-semibold mb-2">Select Tone(s):</legend>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {TONE_OPTIONS.map((tone) => (
        <label
          key={tone}
          className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full cursor-pointer transition border ${
            selectedTones.includes(tone)
              ? "bg-[#00FFAB]/10 border-[#00FFAB] text-[#00FFAB]"
              : "bg-white/5 border-white/10 text-white hover:border-[#00FFAB]/40"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={selectedTones.includes(tone)}
            onChange={() => toggleTone(tone)}
          />
          {tone}
        </label>
      ))}
    </div>
  </fieldset>
);

export default ToneSelector;