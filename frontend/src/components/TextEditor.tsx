import DotSvg from "../assets/93w1LP01.svg";
import BellSvg from "../assets/bellicon.svg";
import { useRef, useEffect, useState } from "react";
import { useCreateBlog } from "../hooks";
import { useNavigate } from "react-router-dom";

export const TextEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { createBlog, loading } = useCreateBlog();
  const navigate = useNavigate();

  const handlePublish = async () => {
    if (!title || !content) {
      alert("Please fill in both title and content");
      return;
    }
    try {
      await createBlog(title, content);
      navigate("/blogs");
    } catch (error) {
      console.error("Failed to create blog:", error);
      alert("Failed to create blog. Please try again.");
    }
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="w-full  flex justify-start items-center space-x-5">
          <p className="text-base font-semibold text-black">Draft in Kirags</p>
          <p className="text-base font-medium text-gray-500 hover:text-black hover:underline hover:cursor-pointer">
            Saved
          </p>
        </div>

        <div className="flex justify-end items-center space-x-5">
          <p 
            onClick={handlePublish}
            className="text-sm font-medium text-white bg-green-700 px-4 py-2 rounded-full hover:cursor-pointer hover:bg-green-800"
          >
            {loading ? "Publishing..." : "Publish"}
          </p>
          <img src={DotSvg} alt="" className="w-10 h-10" />
          <img src={BellSvg} alt="" className="w-10 h-10" />
          <Avatar authorName="Jalpa Vyas" />
        </div>
      </div>

      <div className="ml-30 mt-15">
        <AutoResizingTitle value={title} setValue={setTitle} />
        <AutoResizingContent value={content} setValue={setContent} />
      </div>
    </div>
  );
};

function Avatar({ authorName }: { authorName: string }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 mr-10 text-white font-medium shrink-0">
      {authorName[0]}
    </div>
  );
}

function AutoResizingTitle({ value, setValue }: { value: string; setValue: (value: string) => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      placeholder="Title"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      rows={1}
      className="w-2xl text-4xl text-gray-800 font-serif outline-none border-l-2 border-gray-300 pl-5 py-2 resize-none leading-snug break-words placeholder:text-gray-400"
    />
  );
}

function AutoResizingContent({ value, setValue }: { value: string; setValue: (value: string) => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      placeholder="Tell your story..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      rows={4}
      className="w-2xl text-xl text-gray-700 font-serif outline-none border-l-2 border-gray-200 pl-5 py-2 resize-none leading-relaxed break-words placeholder:text-gray-400 mt-4"
    />
  );
}
