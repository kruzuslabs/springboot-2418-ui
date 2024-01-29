"use client";
/*
TODO: Implement Get ALL Tickets for now, then refactor this for ADMINS with more info and
for Users with regular info.

Admins get more options, to delete, and set the status of the Ticket itself.

Open
InProgress
Pending
Resolved
Closed
Finished?
Solved
Fulfied?

*/

import { format } from "date-fns";

interface Ticketz {
  title: string;
  content: string;
  severity: string;
  dueDate: Date;
}

const AllTickets: Ticketz[] = [
  {
    title: "Set up",
    content: "Not working",
    severity: "3",
    dueDate: new Date(),
  },
  {
    title: "Network Connectivity Issue",
    content: "Unable to connect to the network",
    severity: "2",
    dueDate: new Date(),
  },
  {
    title: "Software Installation",
    content: "Need assistance installing software",
    severity: "1",
    dueDate: new Date(),
  },
  {
    title: "Printer Not Responding",
    content: "Unable to print documents",
    severity: "3",
    dueDate: new Date(),
  },
  {
    title: "Email Configuration",
    content: "Issues with email setup",
    severity: "2",
    dueDate: new Date(),
  },
  {
    title: "Password Reset",
    content: "Forgot password, need reset",
    severity: "1",
    dueDate: new Date(),
  },
  {
    title: "Server Downtime",
    content: "Server is not responding",
    severity: "4",
    dueDate: new Date(),
  },
  {
    title: "Security Patch Installation",
    content: "Apply latest security patches",
    severity: "2",
    dueDate: new Date(),
  },
  {
    title: "Database Connection Error",
    content: "Unable to connect to the database",
    severity: "3",
    dueDate: new Date(),
  },
  {
    title: "Hardware Replacement",
    content: "Request for a new laptop",
    severity: "1",
    dueDate: new Date(),
  },
  {
    title: "Software Bug",
    content: "Reported bug in application",
    severity: "3",
    dueDate: new Date(),
  },
  {
    title: "Meeting Room Reservation",
    content: "Need to reserve a meeting room",
    severity: "1",
    dueDate: new Date(),
  },
  {
    title: "VPN Access Issue",
    content: "Unable to connect to VPN",
    severity: "2",
    dueDate: new Date(),
  },
  {
    title: "Software License Renewal",
    content: "Renewal of software licenses required",
    severity: "1",
    dueDate: new Date(),
  },
  {
    title: "Data Backup Request",
    content: "Request for data backup",
    severity: "2",
    dueDate: new Date(),
  },
  {
    title: "Application Training",
    content: "Request for training on a specific application",
    severity: "1",
    dueDate: new Date(),
  },
  {
    title: "Server Upgrade",
    content: "Upgrade server hardware and software",
    severity: "4",
    dueDate: new Date(),
  },
  {
    title: "Mobile Device Setup",
    content: "Assistance needed in setting up a mobile device",
    severity: "2",
    dueDate: new Date(),
  },
  {
    title: "Website Maintenance",
    content: "Scheduled maintenance for the company website",
    severity: "1",
    dueDate: new Date(),
  },
  {
    title: "IT Policy Inquiry",
    content: "Seeking information on IT policies",
    severity: "1",
    dueDate: new Date(),
  },
];

export default function Tickets() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "1":
        return "bg-green-200 text-green-800";
      case "2":
        return "bg-blue-200 text-blue-800";
      case "3":
        return "bg-yellow-200 text-yellow-800";
      case "4":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <>
      <div className="flex justify-center p-6 mt-2 ">
        <div className="max-w-screen-xl w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-center">
            {AllTickets.map((ticket, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-md ${getSeverityColor(ticket.severity)
                  }`}
              >
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{ticket.title}</h4>
                  <p className="text-sm text-gray-700 mb-2">{ticket.content}</p>
                  <div className="flex items-center mb-2">
                    <span
                      className={`px-2 py-1 text-xs rounded ${getSeverityColor(ticket.severity)
                        }`}
                    >
                      Severity: {ticket.severity}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Due Date: {format(ticket.dueDate, "PPP")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
