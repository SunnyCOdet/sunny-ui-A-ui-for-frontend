import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Github, Sun } from 'lucide-react'; // Assuming Sun for theme toggle

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            {/* Placeholder for logo */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
            <span className="hidden font-bold sm:inline-block">
              shadcn/ui
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Docs</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Components</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Blocks</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Charts</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Themes</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Colors</a>
          </nav>
        </div>
        {/* Mobile Nav Placeholder */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <Input type="search" placeholder="Search documentation..." className="h-8 w-[150px] lg:w-[250px]" />
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
             <Button variant="ghost" size="icon" className="h-8 w-8">
              <Sun className="h-4 w-4" /> {/* Or Moon */}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
       {/* Sub Navigation */}
       <div className="container flex h-14 items-center">
         <Tabs defaultValue="examples" className="w-full">
            <TabsList className="bg-transparent p-0 border-b-0 rounded-none">
              <TabsTrigger value="examples" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Examples</TabsTrigger>
              <TabsTrigger value="mail" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Mail</TabsTrigger>
              <TabsTrigger value="dashboard" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Dashboard</TabsTrigger>
              <TabsTrigger value="tasks" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Tasks</TabsTrigger>
              <TabsTrigger value="playground" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Playground</TabsTrigger>
              <TabsTrigger value="forms" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Forms</TabsTrigger>
              <TabsTrigger value="music" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Music</TabsTrigger>
              <TabsTrigger value="authentication" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 py-1.5 data-[state=active]:bg-transparent">Authentication</TabsTrigger>
            </TabsList>
          </Tabs>
       </div>
    </header>
  );
}
