import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
      }`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-0 left-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          
          {/* Profile Image */}
          <div className="animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

              <div
                className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 ${
                  isDark ? "border-gray-700" : "border-white"
                }`}
              >
                <img
                  src={profileImg}
                  alt="I.F. Aayisha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in-up animation-delay-300">
            <div className="space-y-2">
              <h1
                className={`text-5xl md:text-6xl font-bold tracking-tight transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                I.F. Aayisha
              </h1>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold shadow-md hover:scale-105 transition">
                  Biomedical Technology Student
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-semibold shadow-md hover:scale-105 transition">
                  Frontend Developer
                </span>
              </div>
            </div>

            <p
              className={`text-xl max-w-2xl leading-relaxed transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              BHSc (Hons) in Biomedical Technology | Passionate about merging
              healthcare with technology | Skilled in web development,
              biomedical instrumentation & data analysis
            </p>

            {/* Contact Info */}
            <div
              className={`space-y-3 transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div
                  className={`p-2 rounded-lg shadow-md ${
                    isDark ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-lg">
                  34, Mahadangahawatta, Uluvitike, Galle
                </span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div
                  className={`p-2 rounded-lg shadow-md ${
                    isDark ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <Phone
                    className={`w-5 h-5 ${
                      isDark ? "text-emerald-400" : "text-teal-600"
                    }`}
                  />
                </div>
                <span className="text-lg">076 434 5662</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
