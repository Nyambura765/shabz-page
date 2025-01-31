import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Create Your Token",
    description: "Design and launch your custom token with just a few clicks.",
    forCreators: true,
  },
  {
    title: "Set Up Rewards",
    description: "Define exclusive benefits for your token holders.",
    forCreators: true,
  },
  {
    title: "Purchase Tokens",
    description: "Support your favorite creators by buying their tokens.",
    forCreators: false,
  },
  {
    title: "Access Benefits",
    description: "Enjoy exclusive content and experiences as a token holder.",
    forCreators: false,
  },
];

export const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How SHABz Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple steps to start your tokenized creator journey
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-shabz-purple">For Creators</h3>
              {steps
                .filter((step) => step.forCreators)
                .map((step, index) => (
                  <Card key={step.title} className="mb-4">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-shabz-purple text-white">
                          {index + 1}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold">{step.title}</h4>
                          <p className="mt-1 text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-shabz-teal">For Fans</h3>
              {steps
                .filter((step) => !step.forCreators)
                .map((step, index) => (
                  <Card key={step.title} className="mb-4">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-shabz-teal text-white">
                          {index + 1}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold">{step.title}</h4>
                          <p className="mt-1 text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};