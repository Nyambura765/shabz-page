import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-shabz-dark min-h-screen">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Your Path to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shabz-purple to-purple-300">
              {" "}
              Creator Success
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are your Trusted Solution to Creator-Fan Engagement, Connecting You
            to the Best Token Economy - At No Cost to You.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              className="bg-shabz-purple text-white hover:bg-purple-600 text-lg px-8 py-6"
              size="lg"
            >
              Launch App
            </Button>
            <Button
              variant="link"
              className="text-white hover:text-shabz-purple text-lg"
            >
              Learn more →
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "100K+", label: "Active Users" },
              { value: "1M+", label: "NFTs Created" },
              { value: "50K+", label: "Creators" },
              { value: "2M+", label: "Transactions" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-6 bg-shabz-gray/50 rounded-lg backdrop-blur-sm"
              >
                <dt className="text-3xl font-bold text-shabz-purple mb-2">
                  {stat.value}
                </dt>
                <dd className="text-sm text-gray-400">{stat.label}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};