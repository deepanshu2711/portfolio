import { Button } from '@/components/ui/button';
import {
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  FileText,
  Laugh,
  Layers,
  UserRoundSearch,
} from 'lucide-react';
import { useState } from 'react';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
  hasReachedLimit?: boolean;
}

const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Resume: 'Can I see your resume? Tell me about your experience, education, and career journey.',
  Contact: 'How can I contact you?',
};

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Resume', color: '#B95F9D', icon: FileText },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
];

export default function HelperBoost({
  submitQuery,
  setInput,
  hasReachedLimit = false,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleQuestionClick = (questionKey: string) => {
    if (submitQuery) {
      submitQuery(questions[questionKey as keyof typeof questions]);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full">
      {/* Toggle Button */}
      <div
        className={
          isVisible
            ? 'mb-2 flex justify-center'
            : 'mb-0 flex justify-center'
        }
      >
        <button
          onClick={toggleVisibility}
          className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 transition-colors hover:text-gray-700"
        >
          {isVisible ? (
            <>
              <ChevronDown size={14} />
              Hide quick questions
            </>
          ) : (
            <>
              <ChevronUp size={14} />
              Show quick questions
            </>
          )}
        </button>
      </div>

      {/* HelperBoost Content */}
      {isVisible && (
        <div className="w-full">
          <div
            className="flex w-full flex-wrap gap-1 md:gap-3"
            style={{ justifyContent: 'safe center' }}
          >
            {questionConfig.map(({ key, color, icon: Icon }) => (
              <Button
                key={key}
                onClick={() => !hasReachedLimit && handleQuestionClick(key)}
                variant="outline"
                className={`h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none ${
                  hasReachedLimit
                    ? 'cursor-not-allowed border-gray-200 bg-gray-100 opacity-50 dark:border-neutral-800 dark:bg-neutral-900'
                    : 'border-border hover:bg-border/30 cursor-pointer bg-white/80 active:scale-95 dark:bg-neutral-900/80'
                }`}
                disabled={hasReachedLimit}
              >
                <div className="flex items-center gap-3 text-gray-700 dark:text-neutral-300">
                  <Icon size={18} strokeWidth={2} color={color} />
                  <span className="text-sm font-medium">{key}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
