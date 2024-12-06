import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import Image from 'next/image'

interface WatchCategory {
  title: string
  models: WatchModel[]
}

interface WatchModel {
  name: string
  image: string
  price: string
  slug: string
  description: string
}

export default function WatchesPage() {
  const categories: WatchCategory[] = [
    {
      title: "Premium Multisport",
      models: [
        {
          name: "Fenix 7 Pro",
          image: "https://static.garmin.com/en/products/010-02540-00/g/cf-lg-8cc80c6b-6161-4d2b-8a84-07c7c44c21d5.jpg",
          price: "$799.99",
          slug: "fenix-7-pro",
          description: "Advanced multisport GPS watch with premium features"
        },
        {
          name: "Epix Pro",
          image: "https://static.garmin.com/en/products/010-02957-01/v/cf-lg-9c8b1459-9d80-43dd-973f-2e8b59df95f3.jpg",
          price: "$899.99",
          slug: "epix-pro",
          description: "Premium multisport watch with AMOLED display"
        }
      ]
    }
  ]

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Garmin Watches</h1>

        {categories.map((category) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.models.map((model) => (
                <Link
                  href={`/watches/${model.slug}`}
                  key={model.slug}
                  className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                    <p className="text-gray-600 mb-2">{model.description}</p>
                    <p className="text-blue-600 font-semibold">{model.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
