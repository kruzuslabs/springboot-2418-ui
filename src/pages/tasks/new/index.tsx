"use client";

import { Button } from "@/components/ui/button";
// import * as React from "react";
// import { CalendarIcon } from "@radix-ui/react-icons";
// import { format } from "date-fns";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover";

// export default function DatePickerDemo() {
//     const [date, setDate] = React.useState<Date>();
//     console.log(date);

//     return (

//         <>

//             <div className={`flex min-h-screen flex-col items-center justify-between`}>

//                 <Popover>
//                     <PopoverTrigger asChild>
//                         <Button
//                             variant={"outline"}
//                             className={cn(
//                                 "w-[240px] justify-start text-left font-normal",
//                                 !date && "text-muted-foreground"
//                             )}
//                         >
//                             <CalendarIcon className="mr-2 h-4 w-4" />
//                             {date ? format(date, "MM/dd/yyyy") : <span>Pick a date</span>}
//                         </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                         <Calendar
//                             mode="single"
//                             selected={date}
//                             onSelect={setDate}
//                             initialFocus
//                         />
//                     </PopoverContent>
//                 </Popover>

//             </div>
//         </>
//     );
// }

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// pages/postTask.js
import { useState } from "react";

export default function PostTask() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [severity, setSeverity] = useState("");

  const data = { title, content, severity };

  const handlePostTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length < 3 || content.length < 3) {
      console.log("Error");
    } else {
      console.log({ title, content, severity });
    }
  };

  const d = (e: string) => {
    setSeverity(e);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Post a Task</h1>
      <form onSubmit={handlePostTask}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-600"
          >
            Content
          </label>
          <textarea
            id="content"
            className="mt-1 p-2 w-full border rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          >
          </textarea>
        </div>
        <div className="mb-4">
          <Select onValueChange={d} required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Low</SelectItem>
              <SelectItem value="2">Moderate</SelectItem>
              <SelectItem value="3">High</SelectItem>
              <SelectItem value="4">Critical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
