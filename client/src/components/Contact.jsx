import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import contactData from "../assets/data/contacs.json";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

Contact.propTypes = {
  socials: PropTypes.object.isRequired,
};

export default function Contact({ socials }) {
  const LRef = useRef(null);
  const ERef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [addCopied, setAddCopied] = useState(false);

  const setCopiedFalse = () => {
    setTimeout(() => {
      setEmailCopied(false);
      setAddCopied(false);
    }, 1000);
  };

  const copyEmailToClipboard = () => {
    const textToCopy = ERef.current.textContent;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
        setEmailCopied(true);
        setCopiedFalse();
      })
      .catch((err) => {
        console.error("Unable to copy text: ", err);
      });
  };
  const copyAddToClipboard = () => {
    const textToCopy = LRef.current.textContent;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
        setAddCopied(true);
        setCopiedFalse();
      })
      .catch((err) => {
        console.error("Unable to copy text: ", err);
      });
  };
  return (
    <>
      <div id="contacts" className="w-full bg-black relative">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full text-white">
          <div className="flex flex-wrap justify-between items-center gap-10">
            <div className="max-w-lg grow">
              <h1 className="text-3xl font-sans font-semibold mb-3 capitalize">
                {contactData.contactLabel}
              </h1>
              <p className="text-gray-500">{contactData.body}</p>
            </div>
            {/*.................. Contacts ..................*/}
            <div className="">
              <div className="flex gap-7 flex-wrap justify-between">
                <div
                  className="flex items-center gap-4"
                  onClick={copyAddToClipboard}
                >
                  <div className="max-xxsm:text-base text-xl p-3 bg-orange-600/30 rounded-full">
                    <HiLocationMarker />
                  </div>
                  <div>
                    <p className="font-sans text-md tracking-widest font-light text-gray-400 mb-1 capitalize">
                      {contactData.addressLabel}{" "}
                      {addCopied && (
                        <span className="text-green-500 text-sm tracking-normal ml-1">
                          copied
                        </span>
                      )}
                    </p>
                    <h5
                      className="tracking-wide font-normal max-xxsm:text-sm"
                      ref={LRef}
                    >
                      {contactData.address}
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4"
                  onClick={copyEmailToClipboard}
                >
                  <div className="max-xxsm:text-base text-xl p-3 bg-green-600/30 rounded-full">
                    <SiGmail />
                  </div>
                  <div>
                    <p className="font-sans text-md tracking-widest font-light text-gray-400 mb-1 capitalize">
                      {contactData.emailLabel}{" "}
                      {emailCopied && (
                        <span className="text-green-500 text-sm tracking-normal ml-1">
                          copied
                        </span>
                      )}
                    </p>
                    <h5
                      className="tracking-wide font-normal max-xxsm:text-sm break-words"
                      ref={ERef}
                    >
                      {contactData.email}
                    </h5>
                  </div>
                </div>
              </div>

              {/* ........................ Socials ......................... */}

              <div className="socials flex flex-row mt-6 gap-3 pt-6 border-t border-gray-600/40">
                {socials.linkedin !== "" ? (
                  <a
                    href={socials.linkedin}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-slate-800/60 text-white hover:bg-blue-800 transition hover:ease-in delay-100"
                  >
                    <FaLinkedinIn />
                  </a>
                ) : (
                  ""
                )}

                {socials.twitter !== "" ? (
                  <a
                    href={socials.twitter}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-slate-800/60 text-white hover:bg-sky-500 transition hover:ease-in delay-100"
                  >
                    <FaTwitter />
                  </a>
                ) : (
                  ""
                )}

                {socials.instagram !== "" ? (
                  <a
                    href={socials.instagram}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-slate-800/60 text-white hover:bg-rose-600 transition hover:ease-in delay-100"
                  >
                    <FaInstagram />
                  </a>
                ) : (
                  ""
                )}

                {socials.github !== "" ? (
                  <a
                    href={socials.github}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-slate-800/60 text-white hover:bg-slate-600 transition hover:ease-in delay-100"
                  >
                    <FaGithub />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
