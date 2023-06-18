import * as React from "react";
import { useForm } from "@beekai/react";

export function ContactForm() {
  const {
    register,
    onSubmit,
    handleSubmit,
    control,
    submissionId,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm({
    formId: "1d8464ed-9d3a-4a09-bc5e-cadc6b177858",
    defaultValues: {
      "what-s-your-name": "",
      "could-you-let-us-know-your-email-address": "",
      "what-would-you-like-to-say": ""
    }
  });

  if (submissionId) {
    return <p>You have successfully contacted us</p>;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto">
        <h1 className="h1">Contact Us Form</h1>

        {errors.root?.serverError && <p className="text-red-500">Oops! Let's try it again.</p>}

        <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">
            <span>What's your name?</span>
            </label>
            <input
            {...register("what-s-your-name", {
                required: "Please fill in this field.",
            })}
            id="name"
            className={`form-input w-full text-gray-800 ${errors["what-s-your-name"] ? "border-red-500" : ""}`}
            aria-invalid={errors["what-s-your-name"] ? "true" : "false"}
            type="text"
            />
            {errors["what-s-your-name"] && <p className="text-red-500" role="alert">{errors["what-s-your-name"]?.message}</p>}
        </div>

        <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
            <span>Could you let us know your email address?</span>
            </label>
            <input
            {...register("could-you-let-us-know-your-email-address", {
                required: "Please fill in this field.",
            })}
            id="email"
            className={`form-input w-full text-gray-800 ${errors["could-you-let-us-know-your-email-address"] ? "border-red-500" : ""}`}
            aria-invalid={errors["could-you-let-us-know-your-email-address"] ? "true" : "false"}
            type="email"
            />
            {errors["could-you-let-us-know-your-email-address"] && (
            <p className="text-red-500" role="alert">{errors["could-you-let-us-know-your-email-address"]?.message}</p>
            )}
        </div>

        <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">
            <span>What would you like to say?</span>
            </label>
            <textarea
            {...register("what-would-you-like-to-say")}
            id="message"
            className="form-input w-full text-gray-800"
            rows="4"
            />
        </div>

        <button disabled={isSubmitting} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
            Submit
        </button>
    </form>

  );
}
