'use client'

import { useState } from "react"
import axios from "axios";
const Form = () => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const submit = async (e: any) => {
        e.preventDefault()
        const response = await axios.post("/api/book/", { from, to });
        console.log("Signup success", response.data);
        // router.push("/login");

    }
    return (
        <div className="container">
            <form className="m-5 flex flex-col" onSubmit={submit}>
                <input value={from} onChange={(e) => setFrom((e.target.value))} className="mt-1 p-3 w-full border border-slate-300 rounded-md" type="text" placeholder="enter from" />
                <input value={to} onChange={(e) => setTo((e.target.value))} className="mt-1 p-3 w-full border border-slate-300 rounded-md" type="text" placeholder="enter to" />
                <button className="rounded-full p-3 bg-blue-600 m-5" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form