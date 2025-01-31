import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-shabz-purple to-shabz-teal">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Connect with Fans Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
              {" "}
              Tokenized Engagement
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Create your own tokens, build your community, and monetize your creativity
            in a whole new way with SHABz.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              className="bg-white text-shabz-purple hover:bg-gray-100 text-lg px-8 py-6"
              size="lg"
            >
              Launch App
            </Button>
            <Button
              variant="link"
              className="text-white hover:text-gray-300 text-lg"
            >
              Learn more →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};