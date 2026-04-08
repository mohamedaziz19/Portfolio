
import contactImg from '../assets/contactImg.png'

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24  overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold
          mb-2 sm:mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm-text-lg md:text-xl"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            Let's discuss your project
          </p>
        </div>

        <div
          className="grid gird-cols-1 lg:grid-cols-2 gap-6 
          sm-gap-8 md:gap-10 items-center "
        >
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>
          <form
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border 
          shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base
                focus:border-orange-500 focus:ring-2
                focus:ring-orange-500/20 transition-all"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
              />
              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base
                focus:border-orange-500 focus:ring-2
                focus:ring-orange-500/20 transition-all"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
              />
            </div>

            {/* Email Address */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base mb-3 sm:mb-4
                focus:border-orange-500 focus:ring-2 
                focus:ring-orange-500/20 transition-all"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
            />

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base  mb-3 sm:mb-4
                focus:border-orange-500 focus:ring-2
                focus:ring-orange-500/20 transition-all"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base mb-3 sm:mb-4
                focus:border-orange-500 focus:ring-2 
                focus:ring-orange-500/20 transition-all
                resize-none"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
            />

            {/* Button */}
            <button  type="submit"
            className='w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base 
            hover:shadow-lg hover:shadow-orange-500/25
            hover:scale-[1.02] transition-all'
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact