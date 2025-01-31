import { Button } from "@/components/ui/button";
import { Star, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-shabz-dark min-h-screen">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center animate-fade-up">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Star className="text-shabz-purple h-6 w-6" />
            <span className="px-3 py-1 text-sm text-shabz-purple bg-shabz-purple/10 rounded-full">
              Join the Creator Economy Revolution
            </span>
            <Star className="text-shabz-purple h-6 w-6" />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Your Path to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shabz-purple via-purple-400 to-purple-300">
              {" "}Creator Success
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            We are your Trusted Solution to Creator-Fan Engagement, Connecting You
            to the Best Token Economy - At No Cost to You.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              className="bg-shabz-purple hover:bg-purple-600 text-white text-lg px-8 py-6 rounded-xl"
              size="lg"
            >
              Launch App
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="link"
              className="text-white hover:text-shabz-purple text-lg"
            >
              Learn more →
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "100K+", label: "Active Users" },
              { value: "1M+", label: "NFTs Created" },
              { value: "50K+", label: "Creators" },
              { value: "2M+", label: "Transactions" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-6 bg-shabz-gray/30 backdrop-blur-sm rounded-xl border border-shabz-purple/20 hover:border-shabz-purple/40 transition-all duration-300"
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