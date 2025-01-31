export const Footer = () => {
  return (
    <footer className="bg-shabz-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">SHABz</h2>
            <p className="text-gray-400 max-w-md">
              Revolutionizing creator-fan relationships through blockchain technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-shabz-purple">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-shabz-purple">Marketplace</a></li>
                <li><a href="#" className="text-gray-400 hover:text-shabz-purple">Token Economics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-shabz-purple">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-shabz-purple">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-shabz-purple">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            © 2024 SHABz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};