import { useState } from "react";
import { askGemini } from "../services/gemini";
import { updateProgress } from "../services/progress";
import { saveHistory } from "../services/history";
import { exportToPDF } from "../utils/pdfExport";

import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function PdfSummarizer() {

  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const extractText = async () => {

    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    setLoading(true);
    setSummary("");

    const reader = new FileReader();

    reader.onload = async () => {

      try {

        const typedArray = new Uint8Array(reader.result);

        const pdf = await pdfjsLib.getDocument({
          data: typedArray,
        }).promise;

        let fullText = "";

        for (let i = 1; i <= pdf.numPages; i++) {

          const page = await pdf.getPage(i);

          const content = await page.getTextContent();

          const pageText = content.items
            .map((item) => item.str)
            .join(" ");

          fullText += pageText + "\n";

        }

        const prompt = `
You are an AI Exam Preparation Assistant.

Summarize these notes for university students.

Include:
• Main Concepts
• Important Definitions
• Key Exam Points
• Quick Revision Notes

Study Notes:

${fullText}
`;

        const result = await askGemini(prompt);

        await updateProgress("Summaries");

        await saveHistory(
          "📄 PDF Summary",
          `Summarized "${file.name}"`
        );

        setSummary(result);

      } catch (error) {

        console.error(error);

        setSummary("Failed to summarize PDF.");

      }

      setLoading(false);

    };

    reader.readAsArrayBuffer(file);

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          📄 AI PDF Summarizer
        </h1>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-3 rounded-xl w-full"
        />

        <button
          onClick={extractText}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Generate Summary"}
        </button>

        {summary && (

          <div className="mt-8 bg-gray-100 rounded-xl p-6 whitespace-pre-wrap">

            <h2 className="text-xl font-bold mb-4">
              🤖 AI Summary
            </h2>

            {summary}

            <button
              onClick={() => exportToPDF("PDF Summary", summary)}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
            >
              📥 Download Summary as PDF
            </button>

          </div>

        )}

      </div>

    </div>

  );

}