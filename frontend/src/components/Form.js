import makeRequest from '@/lib/request'
import {useState} from "react";
import Button from "@/components/Button";

function Form ({ action, method, children, name, title }) {

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <>
            <p className={"text-center text-xl"}>{title}</p>
            <form onSubmit={async (event) => handleSubmit(event, action, method, setIsSubmitting, name)} className={"flex flex-col space-y-4"}>
                <p id={name + '_errors'} className={"text-red-400"}></p>
                <p id={name + '_message'}></p>
                {children}
                <Button type={"submit"} id={name + '_submit'} disabled={isSubmitting}>Submit</Button>
            </form>
        </>
    )
}

async function handleSubmit(event, action, method, setIsSubmitting, name) {

    // Prevent the form from submitting
    setIsSubmitting(true)

    // Prevent the form from submitting
    event.preventDefault()

    const form = event.currentTarget
    const errorElement = document.getElementById(name + '_errors')
    const messageElement = document.getElementById(name + '_message')

    // Clear errors from the form
    errorElement.innerHTML = ''

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    makeRequest(action, method, data).then((response) => {

        setIsSubmitting(false)

        if(response.errors) {
            for (const error in response.errors) {
                errorElement.innerHTML += response.errors[error] + '<br>'
            }
        }

        if(response.message) {
            messageElement.innerHTML = response.message
        }
    })
}

export default Form
