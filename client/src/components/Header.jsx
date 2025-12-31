const Header = () => {
  return (
    <header className="max-w-7xl mx-auto py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="/Logo.svg" alt="EduTrack Logo" />
          </div>
          <h1 className="text-2xl">
            <span className="text-purple-900 font-bold">Edu</span>
            <span className="text-gray-400">Track</span>
          </h1>
        </a>
      </div>
    </header>
  );
};
export default Header;
