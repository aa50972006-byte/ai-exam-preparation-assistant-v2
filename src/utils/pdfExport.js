import jsPDF from "jspdf";

export function exportToPDF(title, content) {

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(title, 10, 20);

  doc.setFontSize(12);

  const lines = doc.splitTextToSize(content, 180);

  doc.text(lines, 10, 35);

  doc.save(`${title}.pdf`);

}