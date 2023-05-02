import { saveAs } from 'file-saver'
export default {
  methods: {
    download_mixin(element, filename) {
      const content = document.getElementById(element).innerHTML
      const html = `<!DOCTYPE html>
      <html lang="en">
        <style>
        .text-right {
            text-align: right !important;
        }
        </style>
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
        <body>
        ${content}
        </body>
      </html>`
      const converted = new Blob(['\ufeff', html], {
          type: 'application/msword'
      });
      saveAs(converted, 'test.docx');

     
    // EU A4 use: size: 841.95pt 595.35pt;
    // US Letter use: size:11.0in 8.5in;
     
    //  css = (
    //    `<style>
    //     h6{
    //       font-size: 8px !important;
    //       }
    //     .info-block p:first-child{
    //         display: inline !important;
    //     }
    //     table { page-break-inside:auto }
    //     table{
    //         border: 1px solid  black !important;
    //         border-collapse: collapse !important;
    //         text-align: center !important;
    //     }
    //     table tr th{
    //         border: 1px solid  black !important;
    //         border-collapse: collapse !important;
    //         font-size: 12px !important;
    //     }
    //     table tr td{
    //         border: 1px solid  black !important;
    //         border-collapse: collapse !important;
    //         text-align: center !important;
    //         font-size: 10px !important;
    //     }
    //     .full-row { page-break-inside:avoid; page-break-after:auto }
    //     .info-block{
    //       page-break-inside:avoid;
    //       page-break-after:auto;
    //       padding-top: 20px;
    //       box-sizing: border-box;
    //     }
    //     .info-block > tr {
    //       margin-top: 50px;
    //     }
    //    </style>`
    //  );
     
    //  html = document.getElementById(element).innerHTML;
    //  blob = new Blob(['\ufeff', html], {
    //    type: 'application/msword'
    //  });
    //  url = URL.createObjectURL(blob);
    //  link = document.createElement('A');
    //  link.href = url;
    //  // Set default file name. 
    //  // Word will append file extension - do not add an extension here.
    //  link.download = `${filename}.doc`;   
    //  document.body.appendChild(link);
    //  if (navigator.msSaveOrOpenBlob ) navigator.msSaveOrOpenBlob( blob, 'Document.doc'); // IE10-11
    //      else link.click();  // other browsers
    //  document.body.removeChild(link);
    }
  }
}

