import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter, // <-- Added CardFooter here
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { BarChart, LineChart, ResponsiveContainer, Line, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { DollarSign, Users, CreditCard, Activity, Send, Plus, Minus } from 'lucide-react';

// Mock data for charts
const revenueData = [
  { name: 'Jan', total: Math.floor(Math.random() * 1000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 1000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 1000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 1000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 1000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 1000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 1000) + 500 },
];

const subscriptionData = [
  { name: 'Jan', total: Math.floor(Math.random() * 50) + 10 },
  { name: 'Feb', total: Math.floor(Math.random() * 50) + 10 },
  { name: 'Mar', total: Math.floor(Math.random() * 50) + 10 },
  { name: 'Apr', total: Math.floor(Math.random() * 50) + 10 },
  { name: 'May', total: Math.floor(Math.random() * 50) + 10 },
  { name: 'Jun', total: Math.floor(Math.random() * 50) + 10 },
  { name: 'Jul', total: Math.floor(Math.random() * 50) + 10 },
  { name: 'Aug', total: Math.floor(Math.random() * 50) + 10 },
];

const exerciseData = [
  { name: 'Week 1', minutes: Math.floor(Math.random() * 300) + 50, avg: 150 },
  { name: 'Week 2', minutes: Math.floor(Math.random() * 300) + 50, avg: 150 },
  { name: 'Week 3', minutes: Math.floor(Math.random() * 300) + 50, avg: 150 },
  { name: 'Week 4', minutes: Math.floor(Math.random() * 300) + 50, avg: 150 },
  { name: 'Week 5', minutes: Math.floor(Math.random() * 300) + 50, avg: 150 },
  { name: 'Week 6', minutes: Math.floor(Math.random() * 300) + 50, avg: 150 },
];

const goalData = Array.from({ length: 12 }, () => ({ value: Math.floor(Math.random() * 100) }));


export function Dashboard() {
  const [date, setDate] = React.useState(new Date());
  const [goal, setGoal] = React.useState(350);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Revenue Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            <div className="h-[80px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                  <Line type="monotone" dataKey="total" stroke="#ffffff" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Subscriptions Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
             <div className="h-[80px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subscriptionData}>
                   <Bar dataKey="total" fill="#ffffff" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

         {/* Calendar Card */}
         <Card className="col-span-1 row-span-2">
           <CardContent className="p-0">
             <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-0 shadow-none p-3"
                classNames={{
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    day_today: "bg-accent text-accent-foreground rounded-md", // Ensure today is rounded
                }}
              />
           </CardContent>
         </Card>

         {/* Move Goal Card */}
         <Card className="col-span-1 row-span-2">
           <CardHeader className="pb-2">
             <CardTitle className="text-lg font-semibold">Move Goal</CardTitle>
             <CardDescription>Set your daily activity goal.</CardDescription>
           </CardHeader>
           <CardContent className="flex flex-col items-center justify-center space-y-4 pb-6">
              <div className="flex items-center justify-center space-x-2">
                 <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => setGoal(g => Math.max(0, g - 10))} disabled={goal <= 0}>
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-5xl font-bold tracking-tighter">{goal}</div>
                    <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                  </div>
                  <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => setGoal(g => g + 10)}>
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
              </div>
               <div className="h-[80px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={goalData} barGap={2}>
                     <Bar dataKey="value" fill="#ffffff" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <Button size="sm" className="w-full">Set Goal</Button>
           </CardContent>
         </Card>

        {/* Team Members Card */}
        <Card className="col-span-1 row-span-2">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Invite your team members to collaborate.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Sofia Davis" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Sofia Davis</p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
                </div>
              </div>
              {/* Replace with Select or DropdownMenu */}
              <Button variant="outline" size="sm">Owner</Button>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                   <AvatarImage src="/placeholder-avatar.jpg" alt="Jackson Lee" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Jackson Lee</p>
                  <p className="text-sm text-muted-foreground">p@example.com</p>
                </div>
              </div>
               <Button variant="outline" size="sm">Member</Button>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                   <AvatarImage src="/placeholder-avatar.jpg" alt="Isabella Nguyen" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                  <p className="text-sm text-muted-foreground">i@example.com</p>
                </div>
              </div>
               <Button variant="outline" size="sm">Member</Button>
            </div>
          </CardContent>
        </Card>

        {/* Chat Card */}
        <Card className="col-span-1 row-span-2 flex flex-col">
          <CardHeader className="flex flex-row items-center">
             <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Sofia Davis Support" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Sofia Davis</p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto rounded-full">
                <Plus className="h-4 w-4" />
                <span className="sr-only">New message</span>
              </Button>
          </CardHeader>
          <CardContent className="flex-grow space-y-4 overflow-y-auto p-6">
             {/* Chat messages */}
             <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                Hi, how can I help you today?
             </div>
             <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                Hey, I'm having trouble with my account.
             </div>
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                What seems to be the problem?
             </div>
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                I can't log in.
             </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
             <div className="flex w-full items-center space-x-2">
                <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
          </CardFooter>
        </Card>

        {/* Exercise Minutes Card */}
        <Card className="col-span-2 row-span-1">
          <CardHeader>
            <CardTitle>Exercise Minutes</CardTitle>
            <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={exerciseData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Minutes
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {payload[0].value}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Average
                                </span>
                                <span className="font-bold">
                                  {payload[1].value}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Line type="monotone" dataKey="minutes" stroke="#ffffff" strokeWidth={2} dot={{ r: 4, fill: '#ffffff' }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="avg" stroke="#888888" strokeWidth={2} strokeDasharray="3 3" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

         {/* Cookie Settings Card - Placeholder */}
         <Card className="col-span-1 row-span-1">
           <CardHeader>
             <CardTitle>Cookie Settings</CardTitle>
             <CardDescription>Manage your cookie settings here.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                   <p className="text-sm font-medium">Strictly Necessary</p>
                   <p className="text-xs text-muted-foreground">These cookies are essential.</p>
                </div>
                <Switch disabled checked />
              </div>
               <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                   <p className="text-sm font-medium">Functional Cookies</p>
                   <p className="text-xs text-muted-foreground">Used for enhanced functionality.</p>
                </div>
                <Switch />
              </div>
               <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                   <p className="text-sm font-medium">Performance Cookies</p>
                   <p className="text-xs text-muted-foreground">Help improve performance.</p>
                </div>
                <Switch />
              </div>
           </CardContent>
           {/* Removed the erroneous CardFooter call from here */}
         </Card>

      </div>
    </div>
  );
}
