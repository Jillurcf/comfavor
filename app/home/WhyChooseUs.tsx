export default function WhyChooseUs() {
  const points = ['Agile Development', 'Secure Solutions', 'Fast Delivery', 'Dedicated Support'];

  return (
    <section
      id="section-whychooseus"
      className="flex min-h-[70vh] w-full items-center justify-center bg-gray-800 py-10 md:py-12"
    >
      <div className="w-full px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">Why Choose Us</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {points.map((p, i) => (
            <div key={i} className="w-64 rounded bg-white p-6 text-center shadow">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
