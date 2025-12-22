import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000 bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className={`inline-block p-3 backdrop-blur-sm rounded-2xl mb-4 ${
            isDark ? 'bg-gray-700/50' : 'bg-white/20'
          }`}>
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${isDark ? 'bg-emerald-500/50' : 'bg-white/50'}`}></div>
          <p className={`text-lg mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-white/90'}`}>
            I'm always open to discussing new opportunities, collaborations, or projects in biomedical technology and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 animate-fade-in-up ${
            isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/10 hover:bg-white/20'
          }`}>
            <div className={`inline-block p-4 rounded-full mb-4 ${isDark ? 'bg-gray-700/50' : 'bg-white/20'}`}>
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className={isDark ? 'text-gray-300' : 'text-white/90'}>34, Mahadangahawatta</p>
            <p className={isDark ? 'text-gray-300' : 'text-white/90'}>Uluvitike, Galle</p>
            <p className={isDark ? 'text-gray-300' : 'text-white/90'}>Sri Lanka</p>
          </div>

          <div className={`backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200 ${
            isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/10 hover:bg-white/20'
          }`}>
            <div className={`inline-block p-4 rounded-full mb-4 ${isDark ? 'bg-gray-700/50' : 'bg-white/20'}`}>
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <a href="tel:0764345662" className={`transition-colors duration-300 text-lg ${isDark ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'}`}>
              076 434 5662
            </a>
          </div>

          <div className={`backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-300 ${
            isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/10 hover:bg-white/20'
          }`}>
            <div className={`inline-block p-4 rounded-full mb-4 ${isDark ? 'bg-gray-700/50' : 'bg-white/20'}`}>
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-white/90'}`}>Available for:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Internships</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Projects</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Collaborations</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className={`backdrop-blur-md rounded-2xl p-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 ${
            isDark ? 'bg-gray-800/50' : 'bg-white/10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Connect?</h3>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-white/90'}`}>
              Whether it's a biomedical project, web development opportunity, or a collaborative venture, I'd love to hear from you!
            </p>
            <a
              href="tel:0764345662"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
