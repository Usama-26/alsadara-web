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
export default function Partner() {
  const [files, setFiles] = useState([]);

  const deleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
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
          {files.length < 3 && (
            <FileDropzone files={files} setFiles={setFiles} />
          )}
          <div className="space-y-2 my-5">
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
            type="submit"
            className="px-8 py-2 rounded-full bg-primary hover:bg-primary-light text-white font-medium"
          >
            Submit
          </button>
        </div>
        <CTA />
        <Footer padding={"lg:pt-40 pt-20"} />
      </motion.section>
    </AnimatePresence>
  );
}
