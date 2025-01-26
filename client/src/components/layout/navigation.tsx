import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-lg">Nine-D Model</h1>
          <Separator orientation="vertical" className="h-6" />
          <div className="hidden md:flex space-x-4">
            <a href="#introduction" className="hover:text-primary">Introduction</a>
            <a href="#framework" className="hover:text-primary">Framework</a>
            <a href="#mathematics" className="hover:text-primary">Mathematics</a>
            <a href="#implications" className="hover:text-primary">Implications</a>
          </div>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
