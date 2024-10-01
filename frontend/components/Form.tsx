import React, { ChangeEvent, FormEvent } from "react";
// import { PhotoIcon } from "@heroicons/react/24/solid";

export interface FormField {
  id: string;
  label: string;
  type: string;
  value?: string;
  placeholder?: string;
  options?: string[]; // For select dropdowns
  rows?: number; // For textarea
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

interface FormProps {
  title: string;
  description?: string;
  fields: FormField[];
  onSubmit: (e: FormEvent) => void;
  onCancel?: () => void;
  submitText?: string;
}

const Form: React.FC<FormProps> = ({
  title,
  description,
  fields,
  onSubmit,
  onCancel,
  submitText = "Save",
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            {title}
          </h2>
          {description && (
            <p className="mt-1 text-sm leading-6 text-gray-400">
              {description}
            </p>
          )}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {fields.map((field) => (
              <div
                key={field.id}
                className={`sm:col-span-${
                  field.type === "textarea" ? "full" : "4"
                }`}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium leading-6 text-white"
                >
                  {field.label}
                </label>
                <div className="mt-2">
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={field.rows || 3}
                      value={field.value}
                      onChange={field.onChange}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.id}
                      name={field.id}
                      value={field.value}
                      onChange={field.onChange}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                    >
                      {field.options?.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={field.value}
                      placeholder={field.placeholder}
                      onChange={field.onChange}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-sm font-semibold leading-6 text-white"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default Form;
