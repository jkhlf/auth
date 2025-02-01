import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Register = async () => {
    return (
        <div className="mt-10 max-w-md wfull mx-auto">
            <h2> Boring Register </h2>
            <form action="
            ">
                <div>
                    <Label>
                        First Name
                    </Label>
                    <Input id="firstname" placeholder="Boring Name" type="text" name="firstname"/> 
                    <Label>
                        First Name
                    </Label>
                    <Input id="lastname" placeholder="Boring Last Name" type="text" name="lastname"/> 
                </div>

                <Label> Email Adress</Label>
                <Input  id="email" placeholder="boring@email" type="email" name="email"/> 

                <Label> Password</Label>
                <Input  id="password" placeholder="*******" type="password" name="password"/> 

                <button> Sign up</button>
            </form>
        </div>
    )
}

export default Register