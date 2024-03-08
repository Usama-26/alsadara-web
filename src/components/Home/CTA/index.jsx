import Image from "next/image";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import MyModal from "@/components/Modal";

export default function CTA({}) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const leftVariants = {
    hidden: { x: -100, y: 100, scale: 0.9, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  const rightVariants = {
    hidden: { x: 100, y: 100, scale: 0.9, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    subject: "select",
    message: "",
  };

  const closeMessage = () => {
    setShow(false);
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (values) => {
    setError("");
    setSuccess("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const data = await response.json();
        setSuccess(
          "You have successfully submitted your form. We will shortly get back to you through your email."
        );
        setShow(true);
        setIsLoading(false);
      } else {
        console.error("Failed to submit form. Please Try Again Later.");
      }
    } catch (error) {
      setError("Something went wrong. Please Try Again.");
      setIsLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <section className="lg:my-10 lg:translate-y-40 translate-y-20">
      <div className="constrained-padded flex ">
        <motion.div
          initial={"hidden"}
          variants={leftVariants}
          whileInView={"visible"}
          // viewport={{ once: true }}
          className="lg:block hidden lg:basis-1/2 shadow-lg rounded-l-3xl"
        >
          <Image
            src={"/images/contactus/contactus.jpg"}
            width={650}
            height={800}
            alt="Contact Us"
            className=" rounded-l-3xl"
          />
        </motion.div>
        <motion.div
          initial={"hidden"}
          variants={rightVariants}
          whileInView={"visible"}
          // viewport={{ once: true }}
          className="lg:basis-1/2 basis-full bg-gray-100 lg:rounded-r-3xl lg:rounded-none rounded-3xl shadow-lg"
        >
          <div className="py-6">
            <h1 className="font-display lg:text-3xl text-2xl text-center capitalize">
              Get in Touch
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is required"),
                email: Yup.string().email().required("Email is required"),
                phone: Yup.string().required("Phone No. is required"),
                subject: Yup.string().required("Subject is required"),
                message: Yup.string().required("Message is required"),
              })}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="lg:px-8 px-4 my-4 space-y-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                    />
                    <ErrorMessage
                      component={"p"}
                      name="name"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                    />
                    <ErrorMessage
                      component={"p"}
                      name="phone"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                    />
                    <ErrorMessage
                      component={"p"}
                      name="email"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div className="rounded-full bg-white py-3 px-6 border border-gray-200">
                    <Field
                      as="select"
                      name="subject"
                      id="subject"
                      className="w-full bg-white outline-none"
                    >
                      <option value="Select">Select</option>
                      <option value="Power System">Power System</option>
                      <option value="Electrical Installation">
                        Electrical Installation
                      </option>
                      <option value="Electrical Testing">
                        Electrical Testing & Commissioning
                      </option>
                      <option value="It Solutions">IT Solutions</option>
                      <option value="Bio Medical Maintenance">
                        Bio Medical Maintenance
                      </option>
                      <option value="Operation & Maintenance">
                        Operation & Maintenance
                      </option>
                      <option value="MEP Solutions">MEP Solutions</option>
                      <option value="Faculty Management">
                        Faculty Management
                      </option>
                    </Field>
                    <ErrorMessage
                      component={"p"}
                      name="subject"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      rows={10}
                      className="w-full rounded-2xl px-6 py-3 outline-primary-light border border-gray-200 bg-white resize-none"
                    />
                    <ErrorMessage
                      component={"p"}
                      name="message"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-2 w-full rounded-full hover:bg-primary bg-primary-light text-white font-medium"
                      disabled={isSubmitting}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      </div>
      {success && (
        <MyModal
          open={show}
          setOpen={closeMessage}
          heading={"success"}
          message={success}
        />
      )}
      {error && (
        <MyModal
          open={show}
          setOpen={closeMessage}
          heading={"error"}
          message={error}
        />
      )}
    </section>
  );
}
