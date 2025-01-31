import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shabz-dark/80 backdrop-blur-sm border-b border-shabz-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              SHABz
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Marketplace
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                For Creators
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                For Fans
              </a>
            </div>
          </div>
          <Button className="bg-shabz-purple hover:bg-purple-600 text-white">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};