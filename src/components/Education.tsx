import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Education() {
  const { isDark } = useTheme();
  const education = [
    {
      degree: 'BHSc (Hons) Biomedical Technology',
      institution: 'Gampaha Wickramarachchi University of Indigenous Medicine',
      status: 'Currently Reading',
      icon: '🎓',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'ICBT',
      status: 'Completed',
      icon: '💻',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      degree: 'Diploma in English',
      institution: 'Non Formal Resource Center',
      status: 'Completed',
      icon: '📚',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const schools = [
    {
      name: 'G/Navinna Muslim Maha Vidyalaya',
      period: 'Grade 1-11',
      icon: '🏫'
    },
    {
      name: 'Malharus Sulhiya National School',
      period: 'Grade 12-13',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border hover:border-transparent hover:scale-[1.02] ${
                isDark
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600'
                  : 'bg-gradient-to-br from-gray-50 to-white border-gray-100'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative flex items-start gap-6">
                <div className={`text-5xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-lg mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.institution}</p>
                    </div>
                    <span className={`px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-semibold shadow-md`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-br rounded-2xl p-8 shadow-lg transition-colors duration-300 ${
          isDark ? 'from-gray-700 to-gray-800' : 'from-emerald-50 to-teal-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            <Award className="w-7 h-7 text-emerald-600" />
            School Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{school.icon}</div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>{school.name}</h4>
                    <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{school.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
