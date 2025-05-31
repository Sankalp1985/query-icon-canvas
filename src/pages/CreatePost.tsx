
import { useState } from "react";
import { ArrowLeft, User, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [question, setQuestion] = useState("");
  const [hashtags, setHashtags] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle post submission
    console.log("Submitting post:", { question, hashtags });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-blue-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Create Post
            </h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-blue-100 transition-colors"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* User Info */}
        <div className="mb-6">
          <p className="text-slate-600 text-sm">Posting as: <span className="font-medium text-slate-800">user_xsq0YW</span></p>
        </div>

        {/* Main Form */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Question Input */}
              <div>
                <Textarea
                  placeholder="What's your question?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[300px] border-0 bg-slate-50/50 resize-none text-base placeholder:text-slate-400 focus:bg-white transition-colors"
                />
              </div>

              {/* Hashtags Input */}
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="hashtags (e.g. #wellness #kids)"
                  value={hashtags}
                  onChange={(e) => setHashtags(e.target.value)}
                  className="pl-10 border-0 bg-slate-50/50 focus:bg-white transition-colors"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            disabled={!question.trim()}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
