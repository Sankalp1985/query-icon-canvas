
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
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100"
    },
    {
      id: 2,
      author: "AI", 
      question: "What was the significance of the Magna Carta in the development of English law and governance?",
      preview: "The Magna Carta, signed in 1215 by King John of England, is a landmark document in the development of English law",
      category: "History",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      id: 3,
      author: "Sankalp Saxena",
      question: "Compare the performance of ₹100 each invested in Nifty 50, Nifty Midcap, Nifty Bank, Nifty Small Cap, Gold, and Silver since 2000",
      preview: "Since 2000, an initial ₹100 investment in Nifty Small Cap would have yielded the highest returns, growing to over",
      category: "Finance",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100"
    },
    {
      id: 4,
      author: "Hemant",
      question: "The Clockmaker's Secret",
      preview: "In a small, forgotten village nestled between misty hills, there lived an old clockmaker named Elior. His shop, tucked",
      category: "Story",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Home
          </h1>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/search")}
              className="hover:bg-blue-100 transition-colors"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/profile")}
              className="hover:bg-blue-100 transition-colors"
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
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105" 
                  : "hover:bg-blue-50 text-slate-600"
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
              className={`${post.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500">
                    <AvatarFallback className="text-white text-sm font-semibold">
                      {post.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-slate-700">{post.author}</span>
                  <Badge variant="secondary" className="ml-auto bg-white/60 text-slate-600">
                    {post.category}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-slate-800 mb-3 leading-relaxed">
                  {post.question}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
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
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <Plus className="w-6 h-6" />
      </Button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-around">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
            className="text-blue-500"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/categories")}
          >
            <Sparkles className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/create")}
          >
            <Plus className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/profile")}
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
