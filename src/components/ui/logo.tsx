const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">CO</span>
      </div>
      <span className="text-xl font-bold text-foreground">ComfortOrder</span>
    </div>
  );
};

export default Logo;