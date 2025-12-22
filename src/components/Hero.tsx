import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

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
        <div className="absolute w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30 top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30 top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30 bottom-0 left-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-75"></div>

            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl ${
                isDark ? "border-gray-700" : "border-white"
              }`}
            >
              <img
                src="/profile.jpg"
                alt="I.F. Aayisha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left space-y-6">
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              I.F. Aayisha
            </h1>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold">
                Biomedical Technology Student
              </span>
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-semibold">
                Frontend Developer
              </span>
            </div>

            <p
              className={`text-lg max-w-2xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              BHSc (Hons) in Biomedical Technology | Passionate about merging
              healthcare with technology | Web development & biomedical
              instrumentation
            </p>

            {/* Contact */}
            <div className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="text-emerald-600" />
                <span>34, Mahadangahawatta, Uluvitike, Galle</span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start mt-2">
                <Phone className="text-teal-600" />
                <span>076 434 5662</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
