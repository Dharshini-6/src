import {Document, Page, pdfjs} from 'react-pdf';
import samplePDF from './resumess.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Cv() {

  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
      <Page pageNumber={2} />
    </Document>
  );
}