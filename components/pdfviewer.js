// PDFViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/pdfjs';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${process.env.NEXT_PUBLIC_PDFJS_VERSION}/build/pdf.worker.min.js`}>
      <Viewer fileUrl={pdfUrl} />
    </Worker>
  );
};

export default PDFViewer;
