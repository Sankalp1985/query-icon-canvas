
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-blue-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-blue-100 transition-colors"
          >
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md w-full text-center">
          <p className="text-slate-600 text-lg font-medium">What do you wanna ask?</p>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white/80 backdrop-blur-md border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-full bg-slate-100 border-0 focus:bg-white transition-colors"
          />
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
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
