export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Discord
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            GitHub
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2024 SHABz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};