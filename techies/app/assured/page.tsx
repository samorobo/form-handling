"use client"

import {useForm} from "react-hook-form"


type FormValues = {
    title: string,
    name:{
        surname: string,
        firstname: string,
        middlename: string,
    }
    dob: Date,
    age:number,
    place: string,
}

const Page = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            title: '',
            name: {
                surname: '',
                firstname: '',
                middlename: '',
            },
            dob: new Date(),
            age: 0,
            place: '', // Add a comma here to separate from the previous line
    }
        

    })

    return (
        <div >
            <div className="ml-24 b">ASSURED</div>
            <form action="">

            </form>
        </div>
    )
}

export default Page