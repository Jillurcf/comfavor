import { Card } from "@/components/ui/card"


const services = [
  { title: "Web Development", desc: "Scalable web apps using React & Next.js" },
  { title: "Mobile Apps", desc: "Cross-platform apps with React Native" },
  { title: "UI/UX Design", desc: "Clean & user-friendly design" },
  { title: "Backend", desc: "Secure APIs with Node.js" },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {services.map((s, i) => (
          <Card key={i}>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
