"use client";

type Props = {
    id: string;
    label: string;
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    error?: string;
  };

const TextAreaField = ({
    label,
    id,
    value,
    onChange,
    error,
    placeholder,
  }: Props) => (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white font-semibold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white/10 text-white placeholder:text-white/50 p-4 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none transition-all duration-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );

  export default TextAreaField;