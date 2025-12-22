import { Code, Database, Activity, Cpu, FlaskConical, Search, Users, FileText, Monitor, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();
  const itSkills = [
    { name: 'MS Word', level: 100, icon: '📝' },
    { name: 'MS Excel', level: 100, icon: '📊' },
    { name: 'MS PowerPoint', level: 100, icon: '📽️' },
    { name: 'Medical Data Documentation', level: 90, icon: '📋' },
    { name: 'Internet & Academic Research', level: 95, icon: '🔍' },
  ];

  const webSkills = [
    { name: 'HTML', level: 100, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-500' },
  ];

  const biomedicalSkills = [
    { icon: Activity, name: 'ECG Sensors', color: 'text-red-600' },
    { icon: Activity, name: 'EMG Sensors', color: 'text-emerald-600' },
    { icon: Activity, name: 'Temperature Sensors', color: 'text-orange-600' },
    { icon: Activity, name: 'Pressure Sensors', color: 'text-blue-600' },
    { icon: Cpu, name: 'Arduino Projects', color: 'text-teal-600' },
    { icon: Activity, name: 'Signal Acquisition', color: 'text-cyan-600' },
  ];

  const programmingTools = [
    { name: 'Python', desc: 'Biomedical data analysis & plotting', icon: '🐍' },
    { name: 'Arduino IDE', desc: 'Embedded systems programming', icon: '⚡' },
    { name: 'MATLAB', desc: 'Signal processing & analysis', icon: '📈' },
  ];

  const instrumentationSkills = [
    'Basic Electronics & Circuit Analysis',
    'Medical Instrumentation Fundamentals',
    'Device Troubleshooting',
    'Sensor Calibration & Testing',
    'Signal Conditioning',
  ];

  const professionalSkills = [
    { name: 'Technical Report Writing', icon: FileText },
    { name: 'Teamwork & Communication', icon: Users },
    { name: 'Problem-solving', icon: FlaskConical },
    { name: 'Time Management', icon: Monitor },
  ];

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-emerald-50'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          <div className={`rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <Monitor className="w-7 h-7 text-emerald-600" />
              <h3 className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Computer & Software Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {itSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                    </div>
                    <span className={`font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{skill.level}%</span>
                  </div>
                  <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-200 ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-7 h-7 text-teal-600" />
              <h3 className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Web Development</h3>
              <span className="px-4 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-semibold">
                Frontend Developer
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {webSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                    <span className={`font-bold ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>{skill.level}%</span>
                  </div>
                  <div className={`h-4 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-300 ${
            isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-emerald-50'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <Activity className="w-7 h-7 text-red-600" />
              <h3 className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Biomedical & Technical Skills</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {biomedicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                    <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-3 mb-8">
                <Database className="w-7 h-7 text-cyan-600" />
                <h3 className="text-2xl font-bold text-gray-800">Programming & Tools</h3>
              </div>
              <div className="space-y-4">
                {programmingTools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
                      <h4 className="font-bold text-gray-800 text-lg">{tool.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-12">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-500">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="w-7 h-7 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Instrumentation & Hardware</h3>
              </div>
              <div className="space-y-3">
                {instrumentationSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-600 text-white">
            <div className="flex items-center gap-3 mb-8">
              <Search className="w-7 h-7" />
              <h3 className="text-3xl font-bold">Research & Digital Tools</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold text-xl mb-2">Literature Review</h4>
                <p className="text-emerald-50">Google Scholar & PubMed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold text-xl mb-2">Reference Management</h4>
                <p className="text-emerald-50">Citation & bibliography tools</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-700">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-7 h-7 text-emerald-600" />
              <h3 className="text-3xl font-bold text-gray-800">Professional Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {professionalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4 group-hover:shadow-xl transition-all duration-300">
                      <Icon className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="font-semibold text-gray-800">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-800">
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-7 h-7 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-800">Data Analysis & Handling</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-bold text-gray-800 mb-2">Excel Mastery</h4>
                <p className="text-gray-600 text-sm">Formulas, charts, statistical analysis</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">🧬</div>
                <h4 className="font-bold text-gray-800 mb-2">Biomedical Data</h4>
                <p className="text-gray-600 text-sm">Entry & interpretation</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">📡</div>
                <h4 className="font-bold text-gray-800 mb-2">Signal Data</h4>
                <p className="text-gray-600 text-sm">Organization & processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
