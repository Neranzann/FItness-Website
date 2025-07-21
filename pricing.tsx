import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "DISCOVER",
    price: "99",
    features: [
      "5 classes per month",
      "4 group class monthly",
      "Online class access",
      "E-book fitness guide",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "299",
    features: [
      "10 classes per month",
      "8 group class monthly",
      "Online class access",
      "E-book fitness guide",
      "7 Extra fitness training",
      "Buildiong materials"
    ],
    popular: true,
  },
  {
    name: "PROFESSIONAL",
    price: "199",
    features: [
      "7 classes per month",
      "6 group class monthly",
      "Online class access",
      "E-book fitness guide",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Choose The Best Plan</h2>
          <p className="mb-8 text-zinc-400">
            Choose a plan that's right for your growing team. Simple pricing & No hidden charges.
          </p>
          <div className="mb-12 inline-flex rounded-lg bg-zinc-800 p-1">
            <button className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white">Monthly</button>
            <button className="px-4 py-2 text-sm font-medium text-zinc-400">Annual</button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden ${
                plan.popular ? "border-red-500 bg-red-500" : "border-zinc-800 bg-zinc-800/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-8 rotate-45 bg-white px-12 py-1 text-sm font-medium text-red-500">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className={plan.popular ? "text-white" : "text-zinc-100"}>{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold tracking-tight text-white">${plan.price}</span>
                  <span className={`ml-1 text-sm ${plan.popular ? "text-white/90" : "text-zinc-400"}`}>/ Per Month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 ${plan.popular ? "text-white" : "text-red-500"}`} />
                      <span className={plan.popular ? "text-white" : "text-zinc-400"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-white text-red-500 hover:bg-white/90"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

