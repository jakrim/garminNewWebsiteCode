import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

interface SoftwareUpdate {
  version: string
  date: string
  device: string
  type: 'Beta' | 'Stable'
  changes: string[]
  slug: string
}

export default function SoftwarePage() {
  const updates: SoftwareUpdate[] = [
    {
      version: "19.38",
      date: "2024-01-15",
      device: "Fenix 7/Epix",
      type: "Beta",
      changes: [
        "Fixed issue with strength workouts",
        "Improved GPS accuracy",
        "Battery life optimizations"
      ],
      slug: "fenix-7-epix-beta-19-38"
    },
    {
      version: "21.19",
      date: "2024-01-10",
      device: "Forerunner 965",
      type: "Stable",
      changes: [
        "Added new training metrics",
        "Fixed sync issues",
        "Updated sleep tracking algorithm"
      ],
      slug: "forerunner-965-update-21-19"
    }
  ]

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Software Updates</h1>

        <div className="space-y-6">
          {updates.map((update) => (
            <Link
              href={`/software/${update.slug}`}
              key={update.slug}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    {update.device} - Version {update.version}
                  </h2>
                  <p className="text-gray-600 mb-4">{update.date}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {update.changes.map((change, index) => (
                      <li key={index}>{change}</li>
                    ))}
                  </ul>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  update.type === 'Beta'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {update.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
