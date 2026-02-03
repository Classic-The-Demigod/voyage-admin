"use client";
import React, { useState } from "react";
import {
  Search,
  SquarePen,
  MoreHorizontal,
  Smile,
  SendHorizontal,
  Circle,
} from "lucide-react";

// --- Types ---
interface Message {
  id: string;
  sender: "You" | "Support" | string;
  avatar?: string;
  text: string;
  time: string;
}

interface Chat {
  id: string;
  name: string;
  lastMessageTime: string;
  isOnline: boolean;
  messages: {
    yesterday: Message[];
    today: Message[];
  };
}

// --- Mock Data ---
const CHATS: Chat[] = Array(11)
  .fill(null)
  .map((_, i) => ({
    id: `chat-${i}`,
    name: "OG Auto's Dispute",
    lastMessageTime: "5min ago",
    isOnline: true,
    messages: {
      yesterday: [
        {
          id: "1",
          sender: "James Wilson",
          text: "We made payment to Mr.David but it has been saying processing",
          time: "10:16am",
        },
        {
          id: "2",
          sender: "David Doe",
          text: "On my earning dashboard it has been saying pending",
          time: "11:40am",
        },
        {
          id: "3",
          sender: "You",
          text: "Trust me our team is working on it",
          time: "11:41am",
        },
        {
          id: "4",
          sender: "David Doe",
          text: "I was told the same things yesterday via mail",
          time: "11:41am",
        },
      ],
      today: [
        {
          id: "5",
          sender: "David Doe",
          text: "I just got credited into my earnings wallet",
          time: "02:20pm",
        },
        {
          id: "6",
          sender: "You",
          text: "Great! Glad you got credited. Thank you for your patience",
          time: "Just now",
        },
        { id: "7", sender: "David Doe", text: "...", time: "" },
      ],
    },
  }));

export const DisputeMessagesInterface: React.FC = () => {
  const [activeChatId, setActiveChatId] = useState(CHATS[0].id);
  const activeChat = CHATS.find((c) => c.id === activeChatId) || CHATS[0];

  return (
    <div className="flex h-screen bg-secondary border border-[#EAECF0] rounded-xl text-gray-300 font-outfit overflow-hidden">
      {/* --- SIDEBAR: CHAT LIST --- */}
      <div className="w-[320px] border-r border-gray-800 flex flex-col">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-white font-bold text-lg">Dispute Message</h1>
            <span className=" text-white text-[10px] px-1.5 py-0.5 rounded-full border">
              20
            </span>
          </div>
          <button className="p-2 bg-white rounded-lg text-black hover:bg-gray-200 transition-colors">
            <SquarePen className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full  border border-white/40 placeholder:text-primary rounded py-2 pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 flex gap-2 mb-4">
          <button className="bg-primary text-white text-[10px] px-3 py-1.5 rounded font-medium">
            All messages
          </button>
          <button className="bg-gray-light text-white text-[10px] px-3 py-1.5 rounded-md font-bold">
            Disputes
          </button>
          <button className="bg-gray-light text-white text-[10px] px-3 py-1.5 rounded-md font-bold">
            Complaints
          </button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {CHATS.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`p-4 flex justify-between items-center cursor-pointer border-b border-gray-800 hover:bg-white/[0.02] transition-colors ${activeChatId === chat.id ? "bg-white/[0.05]" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-[#D4A757]/20 rounded-full flex items-center justify-center text-[#D4A757] font-bold text-xs">
                    OG
                  </div>
                  <Circle className="absolute bottom-0 right-0 w-3 h-3 text-green-500 fill-green-500 border-2 border-[#020617] rounded-full" />
                </div>
                <span className="text-sm font-medium text-gray-100">
                  {chat.name}
                </span>
              </div>
              <span className="text-[10px] text-gray-500">
                {chat.lastMessageTime}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN CHAT AREA --- */}
      <div className="flex-1 flex flex-col bg-secondary">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-white font-bold text-base">{activeChat.name}</h2>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* Yesterday Header */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <span className="relative bg-[#0B0E14] px-4 text-[11px] text-gray-500 font-medium">
              Yesterday
            </span>
          </div>

          {activeChat.messages.yesterday.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}

          {/* Today Header */}
          <div className="relative flex justify-center items-center mt-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <span className="relative bg-[#0B0E14] px-4 text-[11px] text-gray-500 font-medium">
              Today
            </span>
          </div>

          {activeChat.messages.today.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>

        {/* Message Input Area */}
        <div className="p-4 ">
          <div className=" border border-gray-800 rounded-xl p-4">
            <textarea
              placeholder="Send a message"
              className="w-full bg-transparent border-none text-sm text-gray-300 focus:outline-none resize-none h-20"
            />
            <div className="flex justify-end gap-4 items-center mt-2 border-t border-gray-800 pt-3">
              <div className="flex items-center gap-4 text-gray-500">
                <Smile className="w-5 h-5 cursor-pointer hover:text-white" />
                <MoreHorizontal className="w-5 h-5 cursor-pointer hover:text-white" />
              </div>
              <button className="bg-[#D4A757] text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-[#b88f46] transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MessageBubble = ({ message }: { message: Message }) => {
  const isMe = message.sender === "You";

  return (
    <div className={`flex flex-col ${isMe ? "items-end" : "items-start"} mb-4`}>
      <div
        className={`flex items-start gap-3 max-w-[80%] ${isMe ? "flex-row-reverse" : ""}`}
      >
        {!isMe && (
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gray-light overflow-hidden border border-gray-600">
              <img
                src={`https://i.pravatar.cc/150?u=${message.sender}`}
                alt="avatar"
              />
            </div>
            <Circle className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 text-green-500 fill-green-500 border border-[#0B0E14] rounded-full" />
          </div>
        )}

        <div className="flex flex-col">
          <div
            className={`flex items-center gap-3 mb-1 ${isMe ? "flex-row-reverse" : ""}`}
          >
            <span className="text-[11px] font-bold text-gray-400">
              {message.sender}
            </span>
            <span className="text-[10px] text-gray-500">{message.time}</span>
          </div>
          <div
            className={`p-3 rounded-lg text-sm leading-relaxed ${
              isMe
                ? "bg-primary text-white rounded-tr-none"
                : "bg-gray-light text-white rounded-tl-none"
            }`}
          >
            {message.text}
          </div>
        </div>
      </div>
    </div>
  );
};
