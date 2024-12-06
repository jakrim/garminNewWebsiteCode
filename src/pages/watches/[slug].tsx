import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface WatchDetails {
  name: string
  image: string
  price: string
  description: string
  specs: {
    label: string
    value: string
  }[]
  features: string[]
}

export default function WatchDetailPage() {
  const router = useRouter()
  const { slug } = router.query

  // This would typically come from an API or database
  const watchDetails: WatchDetails = {
    name: "Fenix 7 Pro",
    image: "https://static.garmin.com/en/products/010-02540-00/g/cf-lg-8cc80c6b-6161-4d2b-8a84-07c7c44c21d5.jpg",
    price: "$799.99",
    description: "Advanced multisport GPS watch with premium features and extended battery life.",
    specs: [
      { label: "Battery Life", value: "Up to 28 days in smartwatch mode" },
      { label: "Display", value: "1.3\" transflective MIP" },
      { label: "Weight", value: "79g" },
      { label: "Water Rating", value: "10 ATM" }
    ],
    features: [
      "Multi-band GPS",
      "Advanced training metrics",
      "Built-in flashlight",
      "Touch screen and button controls",
      "Topographical maps"
    ]
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square">
            <Image
              src={watchDetails.image}
              alt={watchDetails.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{watchDetails.name}</h1>
            <p className="text-2xl text-blue-600 font-bold mb-6">{watchDetails.price}</p>
            <p className="text-gray-600 mb-8">{watchDetails.description}</p>

            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            <dl className="grid grid-cols-2 gap-4 mb-8">
              {watchDetails.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="font-medium text-gray-900">{spec.label}</dt>
                  <dd className="text-gray-600">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {watchDetails.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
