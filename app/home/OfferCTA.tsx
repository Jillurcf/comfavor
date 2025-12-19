import { Button } from "@/components/ui/button";


export default function OfferCTA() {
  return (
    <section className="bg-green-600 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Free 30-Minute Consultation
      </h2>
      <p className="mb-6">
        Discuss your idea, timeline & budget — no commitment.
      </p>
      <Button className="bg-white text-green-600 hover:bg-gray-100">
        Book Free Call
      </Button>
    </section>
  )
}
