import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
         <div className="w-full max-w-md p-8 rounded">
           <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>
           <SignUp />
         </div>
       </div>
  );
}