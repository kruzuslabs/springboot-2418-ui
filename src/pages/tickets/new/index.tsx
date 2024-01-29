"use client";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, setDate } from "date-fns";

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
import { Calendar } from "@/components/ui/calendar";

import { toast as TOSTER } from "sonner";

import { useToast } from "@/components/ui/use-toast";

const truncate = (input: string) =>
  input?.length > 11 ? `${input.substring(0, 12)}...` : input;

export default function PostTicket() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [severity, setSeverity] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(new Date());

  const { toast } = useToast();

  const DATA = { title, content, severity, dueDate };

  const TicketPostHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length < 3 || content.length < 3) {
      toast({
        title: "Uh oh! Something went wrong.",

        description: "Title and content are too short.",
        variant: "destructive",
      });
    } else {
      console.table({
        title,
        content,
        severity,
        dueDate: format(dueDate as unknown as string, "PPP"),
      });

      TOSTER("Ticket has been created", {
        description: `${truncate(title.toUpperCase())} due on ${
          format(dueDate as unknown as string, "PPP") ===
              format(new Date(), "PPP")
            ? "Today"
            : format(dueDate as unknown as string, "PPP")
        }`,
      });
    }
  };

  const handleSeverityChange = (selectedSeverity: string) => {
    setSeverity(selectedSeverity);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Post a Ticket</h1>
      <form onSubmit={TicketPostHandle}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            placeholder="'Printer Not Working' or 'Login Error'"
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
            placeholder="Describe the issue in detail, including any error messages or steps to reproduce."
            id="content"
            className="mt-1 p-2 w-full border rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-evenly mb-5">
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
                className={`w-[240px] justify-start text-left font-normal ${
                  !dueDate && "text-muted-foreground"
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dueDate}
                onSelect={setDueDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button variant="destructive">
            Create
          </Button>
        </div>
      </form>
      {/*test REMOVE LATER*/}
      {DATA.title.length < 3 || DATA.content.length < 3
        ? (
          <div className="text-red-500 font-bold">
            TEST: Write something in these forms.
          </div>
        )
        : JSON.stringify(DATA)}
      {/*test REMOVE LATER*/}
    </div>
  );
}
