import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";
import PartnerHero from "@/components/Hero/PartnerHero";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownTrayIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FileIcon from "@/components/FileType";
import FileDropzone from "@/helpers/FileDropzone";
import MyModal from "@/components/Modal";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Vendor() {
  // const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const closeMessage = () => {
    setShow(false);
    setSuccess("");
    setError("");
  };

  const initialValues = {
    companyName: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    webAddress: "",
    files: [],
  };

  const handleSubmit = async (values, { resetForm }) => {
    setError("");
    setSuccess("");
    setIsLoading(true);
    const formData = new FormData();
    const { files, ...textFields } = values;

    // Append other form data to the FormData object
    for (const [key, value] of Object.entries(textFields)) {
      formData.append(key, value);
    }

    // Append files to the FormData object with bracketed indexing
    files.forEach((file, index) => {
      formData.append(`attachments`, file);
    });

    try {
      const response = await fetch("/api/vendor-form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(
          "Your files have been submitted successfully. We will shortly get back to you through your email."
        );
        setShow(true);
        resetForm();
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError("Something went wrong. Please Try Again.");
        console.error("Failed to submit form.");
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
        <PartnerHero />
        <div className="constrained-padded flex">
          <div className="py-10">
            <h3 className="font-display lg:text-xl text-sm max-w-3xl">
              To become a vendor with us, please download the provided files.
              Read it carefully before submitting your application:
            </h3>
          </div>
        </div>
        <div className="constrained-padded">
          <div className="my-4 space-y-2 max-w-sm">
            <Link
              target="_blank"
              download
              href="/files/guide-for-vendors.pdf"
              className="flex items-center gap-x-2 font-medium p-4 text-sm rounded-lg hover:shadow bg-gray-100"
            >
              <Image
                src={"/icons/pdf-icon.svg"}
                height={200}
                width={200}
                className="w-10 h-10"
                alt="word-icon"
              />
              <span>Guide For Vendors.pdf</span>
              <span className="ml-auto pl-10">
                <ArrowDownTrayIcon className="w-5 h-5 stroke-primary" />
              </span>
            </Link>
            <Link
              target="_blank"
              download
              href="/files/non-bankruptcy-declaration.docx"
              className="flex items-center gap-x-2 font-medium p-4 text-sm rounded-lg hover:shadow bg-gray-100"
            >
              <Image
                src={"/icons/word-icon.svg"}
                height={200}
                width={200}
                className="w-10 h-10"
                alt="word-icon"
              />
              <span>NON Bankrubtcy Declaration.docx</span>
              <span className="ml-auto pl-10">
                <ArrowDownTrayIcon className="w-5 h-5 stroke-primary" />
              </span>
            </Link>
            <Link
              target="_blank"
              download
              href="/files/VRF-ALS2298582R34.xlsx"
              className="flex items-center gap-x-2 font-medium p-4 text-sm rounded-lg hover:shadow bg-gray-100"
            >
              <Image
                src={"/icons/excel-icon.svg"}
                height={200}
                width={200}
                className="w-10 h-10"
                alt="word-icon"
              />
              <span>VRF - ALS2298582R34.xlsx</span>
              <span className="ml-auto pl-10">
                <ArrowDownTrayIcon className="w-5 h-5 stroke-primary" />
              </span>
            </Link>
          </div>
        </div>
        <div className="constrained-padded my-10">
          <div className="py-6 border rounded-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                companyName: Yup.string().required("Company Name is required"),
                address: Yup.string().required("Address is required"),
                zipcode: Yup.number().required("ZIP Code is required"),
                city: Yup.string().required("City is required"),
                country: Yup.string().required("Country is required"),
                webAddress: Yup.string()
                  .url("Not a valid URL")
                  .required("Website URL is required"),
                files: Yup.array()
                  .min(3, "Submit all three files")
                  .required("Upload above files first"),
              })}
              onSubmit={handleSubmit}
            >
              {({ values, errors, setFieldValue }) => (
                <Form className="flex lg:flex-row flex-col">
                  <div className="basis-1/2 lg:px-8 px-4 space-y-4">
                    <h1 className="font-display lg:text-3xl text-2xl capitalize">
                      Join us as a Vendor
                    </h1>
                    <div>
                      <Field
                        type="text"
                        name="companyName"
                        id="companyName"
                        placeholder="Company Name"
                        required
                        className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                      />
                      <ErrorMessage
                        component={"p"}
                        name="companyName"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        required
                        className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                      />
                      <ErrorMessage
                        component={"p"}
                        name="address"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="basis-3/5">
                        <Field
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                          required
                          className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                        />
                        <ErrorMessage
                          component={"p"}
                          name="city"
                          className="text-sm text-red-600"
                        />
                      </div>
                      <div className="basis-2/5">
                        <Field
                          type="number"
                          name="zipcode"
                          id="zipcode"
                          placeholder="ZIP Code"
                          required
                          className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                        />
                        <ErrorMessage
                          component={"p"}
                          name="zipcode"
                          className="text-sm text-red-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Country"
                        required
                        className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                      />
                      <ErrorMessage
                        component={"p"}
                        name="country"
                        className="text-sm text-red-600"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="webAddress"
                        id="webAddress"
                        placeholder="Web Address"
                        required
                        className="w-full rounded-full py-3 px-6 outline-primary-light  border border-gray-200 bg-white"
                      />
                      <ErrorMessage
                        component={"p"}
                        name="webAddress"
                        className="text-sm text-red-600"
                      />
                    </div>
                  </div>
                  <div className="basis-1/2 pt-12">
                    <div className="px-5">
                      {values.files.length < 3 && (
                        <FileDropzone
                          files={values.files}
                          setFiles={(files) => {
                            // setFiles(files);

                            setFieldValue("files", files);
                          }}
                        />
                      )}
                    </div>
                    <div className="space-y-2 m-5">
                      {values.files.length > 0 &&
                        values.files.map((file, index) => (
                          <div
                            key={index}
                            className="px-5 w-full justify-between flex gap-4 bg-gray-100  rounded-md"
                          >
                            <div className="flex gap-4 p-4">
                              <FileIcon fileType={file.type} />
                              <p className="font-medium">{file.name}</p>
                            </div>
                            <button
                              onClick={() => {
                                const updatedFiles = [...values.files];
                                updatedFiles.splice(index, 1);
                                setFieldValue("files", updatedFiles);
                              }}
                              type="button"
                            >
                              <XCircleIcon className="w-6 h-6" />
                            </button>
                          </div>
                        ))}
                      <ErrorMessage
                        component={"p"}
                        name="files"
                        className="text-sm text-red-600"
                      />
                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="px-8 py-3 w-full rounded-full hover:bg-primary bg-primary-light text-white font-medium"
                        >
                          {isLoading
                            ? "Submitting..."
                            : success
                            ? "Submitted"
                            : "Submit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <Footer />
      </motion.section>
      {success && (
        <MyModal
          key={"success"}
          open={show}
          setOpen={closeMessage}
          heading={"success"}
          message={success}
        />
      )}
      {error && (
        <MyModal
          key={"error"}
          open={show}
          setOpen={closeMessage}
          heading={"error"}
          message={error}
        />
      )}
    </AnimatePresence>
  );
}
