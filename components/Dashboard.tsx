"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { File, Globe, Users, Monitor } from "lucide-react";

type StatCard = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    label: string;
    direction: "up" | "down" | "flat";
  };
};

interface DashboardProps {
  className?: string;
  user?: {
    given_name?: string | null;
    family_name?: string | null;
    email?: string | null;
    picture?: string | null;
  } | null;
}

export default function Dashboard({ className, user }: DashboardProps) {
  const stats: StatCard[] = [
    { title: "Projects", value: 12, icon: <File className="h-5 w-5" /> },
    { title: "Active Users", value: 284, icon: <Users className="h-5 w-5" /> },
    { title: "Sessions", value: "1.4k", icon: <Monitor className="h-5 w-5" /> },
    { title: "Reach", value: "73%", icon: <Globe className="h-5 w-5" /> },
  ];

  return (
    <div className={cn("w-full space-y-6", className)}>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Welcome{user?.given_name ? `, ${user.given_name}` : ""}. Here’s what’s
            happening today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Export</Button>
          <Button>New</Button>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{s.title}</span>
              <span className="text-gray-400">{s.icon}</span>
            </div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
            {s.trend ? (
              <div className="mt-1 text-xs text-gray-500">{s.trend.label}</div>
            ) : null}
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-700">Recent Activity</h2>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between">
              <span className="text-gray-600">Deployed version 1.2.4</span>
              <span className="text-gray-400">2h ago</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600">Invited 3 new members</span>
              <span className="text-gray-400">5h ago</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600">Resolved 8 issues</span>
              <span className="text-gray-400">1d ago</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-700">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline">Create Project</Button>
            <Button variant="outline">Invite User</Button>
            <Button variant="outline">Generate Report</Button>
            <Button variant="outline">Settings</Button>
          </div>
        </div>
      </section>
    </div>
  );
}




