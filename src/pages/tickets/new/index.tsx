"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function PostTask() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [severity, setSeverity] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleDateSelect = () => {
    setDate(new Date());
  };

  const handlePostTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length < 3 || content.length < 3) {
      console.log("Error");
    } else {
      console.log({ title, content, severity, date: date });
    }
  };

  const handleSeverityChange = (selectedSeverity: string) => {
    setSeverity(selectedSeverity);
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
          />
        </div>

        <div className="mb-5">
          <Select onValueChange={handleSeverityChange} required>
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

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-[240px] justify-start text-left font-normal ${!date && "text-muted-foreground"
                  }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "MM/dd/yyyy") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
