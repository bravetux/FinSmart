"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to home for now
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <Button 
        variant="ghost" 
        className="absolute top-8 left-8 gap-2" 
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Button>

      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-primary p-2 rounded-xl">
            <Wallet className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome to FinSmart</h1>
          <p className="text-slate-500 text-center">Start your journey to financial freedom</p>
        </div>

        <Card className="border-slate-200 shadow-xl">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your learning dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 border-t pt-6 mt-2">
            <div className="text-sm text-center text-slate-500">
              Don't have an account?{" "}
              <button className="text-primary font-semibold hover:underline">
                Sign up for free
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;