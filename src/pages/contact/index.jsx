import { motion, AnimatePresence } from "framer-motion";
import * as Yup from "yup";
import Footer from "@/components/Footer";
import ContactusHero from "@/components/Hero/ContactusHero";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MyModal from "@/components/Modal";
import { useState } from "react";
export default function Contactus() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

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
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        className="bg-white"
      >
        <ContactusHero />

        <section className="constrained-padded my-10">
          <div className="flex lg:flex-row flex-col gap-5 ">
            <div className="basis-1/2 p-4">
              <h1 className="lg:text-3xl text-2xl font-display text-primary-light">
                alsadara
              </h1>

              <p className="text-justify">
                At alsadara, your goals are our mission. We&apos;re here to
                provide you with premier Energy & Facilities Management
                solutions, tailored to your unique needs. Our team is ready and
                eager to assist you in reaching your financial, operational, and
                environmental objectives. Don&apos;t hesitate to reach out to
                us. We&apos;re just a message away. Let&apos;s embark on this
                journey towards a sustainable future together.
              </p>
              <p className="font-medium mt-4">
                Contact us today - we’re here to assist you!
              </p>
              <div className="flex flex-wrap gap-y-5 my-5">
                <div className="basis-1/2">
                  <h4 className="text-gray-800 font-bold">Safety & Quality</h4>
                  <p className="">hse@alsadaraco.com</p>
                </div>
                <div className="basis-1/2">
                  <h4 className="text-gray-800 font-bold">Queries</h4>
                  <p className="">sales@alsadaraco.com</p>
                </div>
                <div className="basis-1/2">
                  <h4 className="text-gray-800 font-bold">Jobs</h4>
                  <p className="">careers@alsadaraco.com</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg basis-1/2 py-6">
              <h1 className="lg:px-8 px-4 font-bold lg:text-3xl text-2xl text-primary-light capitalize">
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
                        rows={5}
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
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
