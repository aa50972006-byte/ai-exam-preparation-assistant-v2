import { useState } from "react";
import { askGemini } from "../services/gemini";
import { updateProgress } from "../services/progress";

import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
import { saveHistory } from "../services/history";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;


export default function PdfSummarizer() {

  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);


  const extractText = async () => {

    if (!file) {
      alert("Please select a PDF file");
      return;
    }


    setLoading(true);
    setSummary("");


    const reader = new FileReader();


    reader.onload = async () => {

      try {


        const typedArray = new Uint8Array(reader.result);


        const pdf = await pdfjsLib.getDocument({
          data: typedArray
        }).promise;



        let fullText = "";



        for (let i = 1; i <= pdf.numPages; i++) {


          const page = await pdf.getPage(i);


          const content = await page.getTextContent();


          const pageText = content.items
            .map(item => item.str)
            .join(" ");


          fullText += pageText + "\n";


        }



        if (!fullText.trim()) {

          setSummary("No readable text found in this PDF.");

          setLoading(false);

          return;

        }



        const prompt = `

You are an AI Exam Preparation Assistant.

Summarize these study notes for university students.

Include:

1. Main concepts
2. Important definitions
3. Key exam points
4. Short revision notes

Make it simple and easy to understand.

Study Notes:

${fullText}

`;



        const result = await askGemini(prompt);



        // Update Firebase Progress
        await updateProgress("summaries");
        await saveHistory(
  "📄 PDF",
  `Summarized "${file.name}"`
);



        setSummary(result);



      } catch (error) {


        console.error("PDF Error:", error);


        setSummary(
          "Error processing PDF: " + error.message
        );


      }



      setLoading(false);


    };



    reader.readAsArrayBuffer(file);


  };



  return (

    <div className="min-h-screen bg-gray-100 p-10">


      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">



        <h1 className="text-3xl font-bold mb-6 text-blue-600">

          📄 AI PDF Summarizer

        </h1>



        <input

          type="file"

          accept="application/pdf"

          onChange={(e)=>setFile(e.target.files[0])}

          className="border p-3 rounded-xl w-full"

        />



        <button

          onClick={extractText}

          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"

        >

          {loading ? "Processing PDF..." : "Generate Summary"}

        </button>




        {summary && (

          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">


            <h2 className="text-xl font-bold mb-4">

              🤖 AI Summary

            </h2>


            {summary}


          </div>

        )}



      </div>


    </div>

  );

}