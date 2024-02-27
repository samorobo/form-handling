"use client"

import { Select } from "@/components/ui/select";
import { Dropdown } from "./shadcn/Dropdown";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
//import {DevTool} from "@hookform/devtools"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect } from "react";


type FormValues = {
    username: string,
    dob: Date
}
const First = () => {
    const router = useRouter()
    const form = useForm<FormValues>({
        defaultValues: {
            username: 'Samuel',
            dob: new Date(),
        
        },
        mode: "onSubmit"
    })

    const onSubmit = ( data: FormValues) => {
        console.log("form sumitted", data)
    }
    useEffect(() => {
        // Ensure NextRouter is mounted before using it
        if (!router) return;
        // Your logic that depends on router...
    }, [router]); // Add router as dependency to useEffect



    const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
        try{
            await handleSubmit(onSubmit)()
            router.push("/assured");
            
            console.log(data);
        } catch (error){
            console.error("Form submission error:", error)
        }
    }
        const {register, control, handleSubmit, formState } = form;
        const {isValid, isSubmitting, isDirty, isSubmitSuccessful} = formState
        
    return(
        // <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
        <div className="flex flex-col space-y-6 ml-72 bg-red-400">

            <div className="flex flex-row space-x-64  ml-32 w-32 mt-32">
                <div>
                <label htmlFor="">Agent code</label>
         <input className="border-2 border-red-500 w-24" type="text" id="username" {...register("username", {
                required: {
                    value: true,
                    message: "Username is required"
                }
            })
         } />
         </div>
         <div>
            <label htmlFor="">Name</label>
         <input className="border-2 border-red-500 w-64" type="text" id="username" />
         </div>
            </div>


            <div className="flex flex-row space-x-40  ml-32 w-96 mt-32">
                <div>
                <label htmlFor="">Branch</label>
            <Dropdown  />
            </div>
            <div>
            <label htmlFor="">Unit</label>
            <Dropdown  />
            </div>
            </div>

            <div className="flex flex-row space-x-40  ml-32 w-96 mt-32">
                <div>
                <label htmlFor="">Address</label>
            <Dropdown  />
            </div>
            
            <div>
                <label htmlFor="">Effective Dates</label>
                <input className="bg-red-500" type="date" id="dob" {...register("dob", { 
                required: {
                    value: true,
                    message: "Date of birth is required"
                }
                })} />
            </div>
            <div>
            <label htmlFor="">Company</label>
            <Dropdown  />
            </div>
            </div>
         
            <button onClick={handleFormSubmit} className="border-red-500 hover:opacity-75 rounded-lg py-3 w-32 border  bg-emerald-500" disabled={!isDirty || !isValid || isSubmitting}>Submit</button>
          
            <button onClick={() => router.push('/assured')}>nav</button>
        </div>
        </form>
    )

}

export default First;