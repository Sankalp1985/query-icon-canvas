
import { ArrowLeft, Heart, MessageCircle, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";

const PostView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, fetch based on ID
  const post = {
    id: 1,
    author: "Sankalp Saxena",
    question: "The tale of Lord Ganesha's wisdom.",
    content: `Once, Sage Narada gave a magical mango to Lord Shiva and Parvati, saying it should not be split and must be given to only one person. Shiva and Parvati decided to give it to the wiser of their two sons—Ganesha or Kartikeya.

To decide, they asked both sons to circle the world three times. Kartikeya instantly flew off on his peacock to travel the world. But Ganesha simply walked around his parents three times and said, "You are my world."

Impressed by his wisdom and love, Shiva and Parvati gave the mango to Ganesha.

Moral: True wisdom lies in understanding the essence, not just the action.`,
    category: "Tales",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
    likes: 45,
    comments: 12
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-blue-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Post Card */}
        <Card className={`${post.bgColor} border-0 shadow-xl`}>
          <CardContent className="p-6">
            {/* Author Info */}
            <div className="flex items-center gap-3 mb-6">
              <Avatar className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500">
                <AvatarFallback className="text-white font-semibold">
                  {post.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">{post.author}</p>
                <Badge variant="secondary" className="bg-white/60 text-slate-600 text-xs">
                  {post.category}
                </Badge>
              </div>
            </div>
            
            {/* Question Title */}
            <h1 className="text-xl font-bold text-slate-800 mb-4 leading-relaxed">
              {post.question}
            </h1>
            
            {/* Content */}
            <div className="prose prose-slate max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Follow Up Button */}
            <div className="mt-6 flex justify-end">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-6"
                onClick={() => navigate("/chat")}
              >
                Follow Up
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Interaction Bar */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-slate-600 hover:text-blue-500 transition-colors"
            onClick={() => navigate("/chat")}
          >
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments}</span>
          </Button>
          
          <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-green-500 transition-colors">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostView;
