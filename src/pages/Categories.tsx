
import { useState } from "react";
import { 
  Clock, Target, Mic, Edit, Languages, Puzzle, 
  Code, BookOpen, Feather, Music, Palette, Globe,
  FileText, MessageCircle, Lightbulb, Network, Dumbbell, 
  Heart, Utensils, Heart as Mental, Tv, Gamepad2, 
  PenTool, Users, ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const categories = [
    { id: "time", name: "Time", icon: Clock, color: "from-blue-400 to-blue-600" },
    { id: "goals", name: "Goals", icon: Target, color: "from-green-400 to-green-600" },
    { id: "speak", name: "Speak", icon: Mic, color: "from-red-400 to-red-600" },
    { id: "write", name: "Write", icon: Edit, color: "from-purple-400 to-purple-600" },
    { id: "language", name: "Language", icon: Languages, color: "from-indigo-400 to-indigo-600" },
    { id: "logic", name: "Logic", icon: Puzzle, color: "from-orange-400 to-orange-600" },
    { id: "code", name: "Code", icon: Code, color: "from-gray-600 to-gray-800" },
    { id: "books", name: "Books", icon: BookOpen, color: "from-yellow-400 to-yellow-600" },
    { id: "story", name: "Story", icon: Feather, color: "from-pink-400 to-pink-600" },
    { id: "music", name: "Music", icon: Music, color: "from-violet-400 to-violet-600" },
    { id: "art", name: "Art", icon: Palette, color: "from-teal-400 to-teal-600" },
    { id: "critique", name: "Critique", icon: Globe, color: "from-cyan-400 to-cyan-600" },
    { id: "resume", name: "Resume", icon: FileText, color: "from-slate-400 to-slate-600" },
    { id: "mock", name: "Mock", icon: MessageCircle, color: "from-emerald-400 to-emerald-600" },
    { id: "ideas", name: "Ideas", icon: Lightbulb, color: "from-amber-400 to-amber-600" },
    { id: "startup", name: "Startup", icon: Network, color: "from-rose-400 to-rose-600" },
    { id: "workout", name: "Workout", icon: Dumbbell, color: "from-red-500 to-red-700" },
    { id: "meditate", name: "Meditate", icon: Heart, color: "from-blue-500 to-blue-700" },
    { id: "recipes", name: "Recipes", icon: Utensils, color: "from-green-500 to-green-700" },
    { id: "mental", name: "Mental", icon: Mental, color: "from-purple-500 to-purple-700" },
    { id: "shows", name: "Shows", icon: Tv, color: "from-indigo-500 to-indigo-700" },
    { id: "trivia", name: "Trivia", icon: Gamepad2, color: "from-orange-500 to-orange-700" },
    { id: "fiction", name: "Fiction", icon: PenTool, color: "from-pink-500 to-pink-700" },
    { id: "debates", name: "Debates", icon: Users, color: "from-gray-500 to-gray-700" }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Navigate to create post with category pre-selected
    setTimeout(() => {
      navigate("/create", { state: { category: categoryId } });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-blue-100 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose a Category
          </h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Categories Grid */}
        <div className="grid grid-cols-3 gap-4 pb-20">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 border-0 ${
                  isSelected 
                    ? "scale-95 shadow-2xl ring-2 ring-blue-400" 
                    : "hover:scale-105 hover:shadow-xl"
                }`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-slate-700 text-sm">{category.name}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
