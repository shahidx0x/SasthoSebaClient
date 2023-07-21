import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
 import html2pdf from "html2pdf.js";

const EmedicPrescription = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
    const [fIlteredData, setFIlteredData] = useState([]);
   
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/pres-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(morder.filter((mor) => mor.pmail === user.email));
      });
  }, [morder, user.email]);
  return (
      <div>
          <h2 className="mt-36 text-6xl text-center">Emedic-Prescription List</h2>
      <div className="mt-44 flex flex-wrap justify-center">
        {fIlteredData.map((data) => (
          <EMP key={data._id} data={data}></EMP>
        ))}
      </div>
    </div>
  );
};

export default EmedicPrescription;

const EMP = (props) => {
    console.log(props.data);
    const pdfRef = useRef();
      const downloadPDF = () => {
        const input = pdfRef.current;
        html2pdf(input, {
          margin: 1,
          filename: "prescription.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { dpi: 100, letterRendering: true },
          jsPDF: { unit: "pt", format: "", orientation: "" },
          pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        });
      };

  return (
    <>
      <div className="ml-10 mb-10">
        <div ref={pdfRef} className="w-full">
          <div>
            <div className="border border-primary rounded">
              <div className="flex gap-8 p-5">
                <div>
                  <img
                    src="https://svgshare.com/i/djy.svg"
                    alt=""
                    width="80%"
                  />
                </div>
                <div style={{ marginTop: "5rem", width: "100%" }}>
                  <h1 className="font-bold text-5xl">
                    Doctor Name : {props.data.doctor}
                  </h1>
                  <p className="font-mono font-bold mt-2 text-2xl">
                    BMDC : {props.data.bmdc}
                  </p>
                  <p className="font-mono font-bold text-xl">
                    Patient Name : {props.data.patient}
                  </p>
                  <p className="font-mono font-bold text-xl">
                    Patient Contact : {props.data.pmail}{" "}
                  </p>
                  <p className="font-bold text-xl">
                    Date : {props.data.date || "2023-03-25"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="border border-primary rounded h-screen"
              style={{ backgroundColor: "white" }}
            >
              <div>
                <div className="ml-8">
                  <img
                    className="ms-2 mt-5"
                    src="https://svgshare.com/i/dmR.svg"
                    alt=""
                    width="10%"
                  />
                </div>
                <div className="">
                  <div className="ml-56">
                    <p className="font-bold text-2xl p-10">
                      Medication :{" "}
                      <span className="font-mono text-md p-5">
                        {props.data.Prescriptions}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={downloadPDF} className="btn mb-5 -mt-5 ml-auto bg-indigo-600">Download</button>
      <br />
    </>
  );
};
