import React from "react";
import NewsletterSection from "./newsletter";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact: React.FC = () => {
  return (
    <section className="scroll-mt-24 py-16 " id="contact">
      <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-primary text-2xl font-medium uppercase tracking-wider">
            Get in touch
          </h2>
        </div>
        <NewsletterSection />
        <p className="text-balance mt-8 mx-auto max-w-4xl px-6 dark:text-white text-slate-700 md:text-lg">
          Still have questions? Send us a message.
        </p>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-8 items-start justify-between md:px-24 px-4 py-12 md:py-20">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="w-8 h-8" />
                <p className="font-medium">+234 123 456 789</p>
              </div>
              <div className="flex items-center gap-4">
                <MdEmail className="w-8 h-8" />
                <p className="font-medium">example@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <IoLocationOutline className="w-8 h-8" />
                <p className="font-medium">Nigeria</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <form className="grid grid-cols-1 gap-y-6 text-left sm:grid-cols-2 sm:gap-x-8 px-4 rounded-2xl py-12 md:py-20 mx-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className=" w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className=" w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm w-full"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <div className="mt-1 ">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm "
                      required
                    />
                  </div>
                </div>
                <div className=" w-full flex flex-col items-center justify-center text-center sm:col-span-2">
                  <button
                    type="submit"
                    className=" block w-full transition-color relative inline-flex items-center justify-center  bg-green-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
