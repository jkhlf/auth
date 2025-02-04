import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
           <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>
           <SignUp />
         </div>
       </div>
  );
}