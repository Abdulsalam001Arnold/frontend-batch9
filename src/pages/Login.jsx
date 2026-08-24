
import { useState } from "react"

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return(
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <form onSubmit={handleSubmit} action="" method="POST" className="w-full h-full flex flex-col items-center gap-6 p-4 border border-gray-300 rounded-md">
    <div className="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} autoComplete="email" onChange={handleChange} className="w-full h-full border border-gray-300 rounded-md p-2" />
    </div>

    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} autoComplete="current-password" onChange={handleChange} className="w-full h-full border border-gray-300 rounded-md p-2" />
    </div>

    <button type="submit">
        Login
    </button>
  </form>
</div>
    )
}