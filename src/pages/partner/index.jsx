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

export default function Partner() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const deleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const closeMessage = () => {
    setShow(false);
    setSuccess("");
    setError("");
  };

  const submitFiles = async () => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    const formData = new FormData();

    files.forEach((file, index) => {
      formData.append(`attachments`, file);
    });

    try {
      const response = await fetch("/api/file-submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log(response);
        setSuccess("Files Submitted Successfully.");
        setShow(true);
        setIsLoading(false);
      } else {
        console.error("Failed to submit files.");
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
        className="bg-white w-screen h-screen"
      >
        <PartnerHero />
        <div className="constrained-padded flex">
          <div className="py-10">
            <h3 className="font-display lg:text-xl text-sm max-w-3xl">
              To become a partner with us, you need to download the given files
              read it carefully and then submit it here:
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
          <div className="max-w-sm flex items-center gap-x-4">
            <div className="rounded-full p-3 border border-gray-300">
              <Image
                src={"/icons/cloud-add.svg"}
                height={200}
                width={200}
                className="w-10 h-10"
                alt="word-icon"
              />
            </div>
            <div className="text-sm">
              <h4 className="font-semibold text-lg">Upload Files</h4>
              <h6>Select and upload the files oof your choice</h6>
            </div>
          </div>
        </div>
        <div className="constrained-padded border-b-2 max-w-6xl border-gray-400"></div>
        <div className="constrained-padded my-10">
          <div className="px-5">
            {files.length < 3 && (
              <FileDropzone files={files} setFiles={setFiles} />
            )}
          </div>
          <div className="space-y-2 m-5">
            {files.length > 0 &&
              files.map((file, index) => (
                <div
                  key={index}
                  className="px-5 w-full justify-between flex gap-4 bg-gray-100  rounded-md"
                >
                  <div className="flex gap-4 p-4">
                    <FileIcon fileType={file.type} />
                    <p className="font-medium">{file.name}</p>
                  </div>
                  <button onClick={() => deleteFile(index)} type="button">
                    <XCircleIcon className="w-6 h-6" />
                  </button>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={submitFiles}
            disabled={files.length === 0}
            className="px-8 py-2 rounded-full bg-primary hover:bg-primary-light text-white font-medium"
          >
            {isLoading ? "Sending..." : success ? "Submitted" : "Submit"}
          </button>
        </div>
        <CTA />
        <Footer padding={"lg:pt-40 pt-20"} />
      </motion.section>
      {success && (
        <MyModal
          open={show}
          setOpen={closeMessage}
          heading={"Success"}
          message={success}
        />
      )}
      {error && (
        <MyModal
          open={show}
          setOpen={closeMessage}
          heading={"Oops!"}
          message={error}
        />
      )}
    </AnimatePresence>
  );
}
