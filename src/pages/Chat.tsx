
import { useState } from "react";
import { ArrowLeft, Send, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-glass border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-glass rounded-2xl p-8 shadow-xl max-w-md w-full text-center border border-slate-200/50 dark:border-slate-700/50">
          <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">What do you wanna ask?</p>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-glass border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border-0 focus:bg-white dark:focus:bg-slate-700 transition-colors"
          />
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-12 h-12 rounded-full gradient-primary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            size="icon"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
