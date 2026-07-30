export default function WhyChooseUs() {
  const points = ['Agile Development', 'Secure Solutions', 'Fast Delivery', 'Dedicated Support'];

  return (
    <section id="section-whychooseus" className="py-22 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {points.map((p, i) => (
          <div key={i} className="bg-white shadow p-6 rounded w-64 text-center">
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}
