import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useOrderSummery from "../../hooks/useOrderSummery";
import usePaymentHistory from "../../hooks/usePaymentHistory";
import html2pdf from "html2pdf.js";

const OrderSummery = () => {
  const { user } = useAuth();
  const [phistory] = usePaymentHistory();
  const [orderSummery] = useOrderSummery();
  const [totalPrice, setTotalPrice] = useState();
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2pdf(input, {
      margin: 0,
      filename: "myPDF.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    });
  };
  useEffect(() => {
    fetch(`https://api-sastho-seba.onrender.com/payment-history/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTotalPrice(data[0]));
  }, []);
 
  return (
    <>
      <div className="w-screen max-w-2xl px-4 mt-20 flex gap-10">
        <div ref={pdfRef} className=" rounded-lg border pb-6 border-gray-200">
          <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
            <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">
              Order Summery
            </p>
            <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">
              Total Paid : {totalPrice?.total || <span className="text-yellow-400">loading...</span> } Tk
            </p>
            <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
              <p className="text-xs leading-3 text-green-700">Shipped</p>
            </div>
          </div>

          <div className="px-6 pt-6 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                {phistory?.map((data) => (
                  <PaymentHistory key={data._id} props={data} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button onClick={downloadPDF} className="btn btn-primary">Download Pdf</button>
      </div>
    </>
  );
};

const PaymentHistory = ({ props }) => {
  return (
    <>
      <tr>
        <td className="mt-10">
          <div className="flex items-center">
            <div className="bg-gray-100 rounded-sm p-2.5"></div>
            <div className="pl-3">
              <div className="flex items-center text-sm leading-none">
                <p className="font-semibold text-gray-800">
                  Medicine Purched List
                </p>
                <p className="text-blue-500 ml-3">(ID {props._id})</p>
              </div>
              <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">
                {props.payload.med}
              </p>
            </div>
          </div>
        </td>
        <td className="pl-16">
          <div>
            <p className="text-sm font-semibold leading-none text-right text-gray-800">
              {props.payload.price} Tk
            </p>
            
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrderSummery;
