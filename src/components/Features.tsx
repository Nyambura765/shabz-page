import { Coins, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    name: "Create Custom Tokens",
    description: "Launch your own tokens that represent unique value for your community.",
    icon: Coins,
  },
  {
    name: "Engage Your Community",
    description: "Build deeper connections with fans through token-gated content and experiences.",
    icon: Users,
  },
  {
    name: "Secure Platform",
    description: "Built on blockchain technology ensuring transparent and secure transactions.",
    icon: Shield,
  },
  {
    name: "Instant Rewards",
    description: "Automated distribution of rewards and benefits to token holders.",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-shabz-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Empower your creative journey with tools designed for the future of creator-fan relationships.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-shabz-purple/10">
                  <feature.icon className="h-8 w-8 text-shabz-purple" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-white">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};