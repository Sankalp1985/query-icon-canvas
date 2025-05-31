
import { useState } from "react";
import { Search, User, MessageCircle, TrendingUp, BookOpen, Sparkles, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Daily");
  const navigate = useNavigate();

  const tabs = [
    { name: "Editor's Picks", icon: Sparkles },
    { name: "Daily", icon: TrendingUp },
    { name: "Trending", icon: TrendingUp },
    { name: "Tales", icon: BookOpen }
  ];

  const posts = [
    {
      id: 1,
      author: "AI",
      question: "Beyond the political aspects, what were some of the key technological breakthroughs driven by the Space Race?",
      preview: "The Space Race spurred remarkable technological advancements far beyond just rockets and spacecraft. The",
      category: "Technology",
      bgColor: "bg-gradient-to-br from-amber-50/80 via-orange-50/80 to-amber-100/80 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-amber-800/20"
    },
    {
      id: 2,
      author: "AI", 
      question: "What was the significance of the Magna Carta in the development of English law and governance?",
      preview: "The Magna Carta, signed in 1215 by King John of England, is a landmark document in the development of English law",
      category: "History",
      bgColor: "bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-blue-100/80 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-blue-800/20"
    },
    {
      id: 3,
      author: "Sankalp Saxena",
      question: "Compare the performance of ₹100 each invested in Nifty 50, Nifty Midcap, Nifty Bank, Nifty Small Cap, Gold, and Silver since 2000",
      preview: "Since 2000, an initial ₹100 investment in Nifty Small Cap would have yielded the highest returns, growing to over",
      category: "Finance",
      bgColor: "bg-gradient-to-br from-emerald-50/80 via-green-50/80 to-emerald-100/80 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-emerald-800/20"
    },
    {
      id: 4,
      author: "Hemant",
      question: "The Clockmaker's Secret",
      preview: "In a small, forgotten village nestled between misty hills, there lived an old clockmaker named Elior. His shop, tucked",
      category: "Story",
      bgColor: "bg-gradient-to-br from-purple-50/80 via-violet-50/80 to-purple-100/80 dark:from-purple-900/20 dark:via-violet-900/20 dark:to-purple-800/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-glass border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Home
          </h1>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/search")}
              className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/profile")}
              className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Category Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              variant={activeTab === tab.name ? "default" : "ghost"}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.name 
                  ? "gradient-primary text-white shadow-lg transform scale-105" 
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </Button>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="space-y-4 mb-20">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className={`${post.bgColor} border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-glass`}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-8 h-8 gradient-primary">
                    <AvatarFallback className="text-white text-sm font-semibold bg-transparent">
                      {post.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{post.author}</span>
                  <Badge variant="secondary" className="ml-auto bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400">
                    {post.category}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 leading-relaxed">
                  {post.question}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {post.preview}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <Button
        onClick={() => navigate("/create")}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-primary hover:opacity-90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-glass border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-around">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
            className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/categories")}
            className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Sparkles className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/create")}
            className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Plus className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/profile")}
            className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
