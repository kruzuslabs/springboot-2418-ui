"use client";

import { Button } from '@/components/ui/button';
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


import * as React from "react"


import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


type Status = {
    value: string
    label: string
}


const statuses: Status[] = [
    {
        value: "backlog",
        label: "Backlog",
    },
    {
        value: "backlog",
        label: "Backlog",
    },
    {
        value: "backlog",
        label: "Backlog",
    },

]

// pages/postTask.js
import { useState } from 'react';

export default function PostTask() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [severity, setSeverity] = useState(0);

    const handlePostTask = () => {
        // Implement logic to post the task to your database
        console.log('Posting task:', { title, content, severity });
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-4">
            <h1 className="text-2xl font-bold mb-4">Post a Task</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-600">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">

                </div>
                <Button>Submit</Button>
            </form>
        </div>
    );
}

