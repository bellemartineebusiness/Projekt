import {
  FaCheckCircle,
  FaPercentage,
  FaHardHat,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const reasons = [
  {
    icon: FaCheckCircle,
    title: 'Kvalitetsgaranti',
    description:
      'Vi står för vårt arbete med garanti. Är du inte nöjd, åtgärdar vi det.',
  },
  {
    icon: FaPercentage,
    title: 'ROT-avdrag',
    description:
      'Vi hjälper dig med ROT-avdrag och hjälper dig spara upp till 50% på arbetskostnaden.',
  },
  {
    icon: FaHardHat,
    title: 'Erfarna hantverkare',
    description:
      'Över 10 års erfarenhet i branschen ger dig trygghet i varje projekt.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Lokalt i Stockholm',
    description:
      'Vi finns i Stockholmsområdet och är snabbt på plats när du behöver oss.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Varför välja oss?
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto mb-6" />

          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Vi sätter kunden i centrum och levererar resultat som överträffar förväntningarna.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {reason.title}
                </h3>

                <p className="text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}