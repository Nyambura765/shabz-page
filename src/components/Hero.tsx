import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-shabz-dark via-[#1d2137] to-[#0F111A] pt-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative container mx-auto px-4 pt-32 sm:pt-40 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Connect with Creators
            <span className="block">Like Never Before</span>
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-gray-300 mb-12">
            The ultimate platform where creators and fans unite through exclusive
            NFTs, tokens, and memorable experiences.
          </p>
          
          <div className="flex items-center justify-center gap-x-6 mb-24">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e8] hover:to-[#7c4deb] text-white text-lg px-8 py-6 shadow-lg shadow-purple-500/30"
            >
              Get Started →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-shabz-purple text-shabz-purple hover:bg-shabz-purple/10 hover:text-shabz-purple"
            >
              Watch Demo <Play className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "100K+", label: "Active Users" },
              { value: "1M+", label: "NFTs Created" },
              { value: "5K+", label: "Verified Creators" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center"
              >
                <dt className="text-4xl font-bold text-shabz-purple mb-2">
                  {stat.value}
                </dt>
                <dd className="text-lg text-gray-300">{stat.label}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};