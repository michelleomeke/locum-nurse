import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AccountDelete = () => {
  const [email, setEmail] = useState("");

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    // Do nothing as requested
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Delete Account - LocumNurse</title>
        <meta 
          name="description" 
          content="Delete your LocumNurse account" 
        />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Delete Your Account</CardTitle>
            <CardDescription>
              We're sorry to see you go. Please read the information below before proceeding.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">What happens when you delete your account?</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>All your personal information and profile data will be permanently deleted</li>
                <li>Your account history, including shift records and payment information, will be removed</li>
                <li>You will no longer be able to access the platform or your previous data</li>
                <li>This action cannot be undone</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Before you proceed</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Make sure you have downloaded any important information or documents</li>
                <li>Cancel any active shifts or bookings</li>
                <li>Ensure all pending payments have been processed</li>
                <li>Contact support if you have any questions or concerns</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-semibold mb-2">⚠️ Warning</p>
                <p className="text-yellow-700">
                  Account deletion is permanent and irreversible. Once deleted, you will need to create a new account if you wish to use LocumNurse again in the future.
                </p>
              </div>
            </div>

            <form onSubmit={handleDelete} className="space-y-4 pt-6 border-t">
              <div className="space-y-2">
                <Label htmlFor="email">Enter your email address to confirm</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-sm text-gray-500">
                  Please enter the email address associated with your account to confirm deletion.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  variant="destructive"
                  className="flex-1"
                >
                  Delete My Account
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AccountDelete;
