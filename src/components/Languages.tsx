import { Languages as LanguagesIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Languages() {
  const { isDark } = useTheme();
  const languages = [
    { name: 'Sinhala', level: 100, flag: '🇱🇰', color: 'from-yellow-500 to-red-500' },
    { name: 'Tamil', level: 100, flag: '🇱🇰', color: 'from-red-500 to-orange-500' },
    { name: 'English', level: 90, flag: '🇬🇧', color: 'from-blue-500 to-red-500' },
  ];

  return (
    <section id="languages" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4">
            <LanguagesIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Languages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Multilingual communication abilities</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {lang.flag}
                </div>
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>{lang.name}</h3>
              </div>

              <div className="relative">
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - lang.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" className="text-emerald-500" stopColor="currentColor" />
                          <stop offset="100%" className="text-teal-500" stopColor="currentColor" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-3xl font-bold text-gray-800">{lang.level}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                  <div className={`flex justify-between text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <span>Proficiency</span>
                    <span className={`font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{lang.level === 100 ? 'Native' : 'Advanced'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
