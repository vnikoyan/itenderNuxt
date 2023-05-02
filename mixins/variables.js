export default {
    data() {
      return {
        init: {
            height: '100%',
            selector: 'textarea',
            nowrap : false,
            image_title: true,
            automatic_uploads: true,
            images_upload_url:
                'https://printel.am/admin/upload_content',
            file_picker_types: 'image',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste',
                'importcss',
            ],
            menubar: '',
            content_css : 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
            content_style: `
            body{
                padding-top: 8px!important;
                padding-left: 18px!important;
                padding-right: 18px!important;
            }
            ::-webkit-scrollbar {
                width: 18px;
            }
            ::-webkit-scrollbar-thumb {
                background: #006BE6;
                background-clip: content-box;
                border-right: 16px solid white;
                border-radius: 0;
                outline: none;
            }
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: none;
                background: #F0F7FF;
                border-right: 16px solid white;
                border-top: 20px solid white;
                border-bottom: 20px solid white;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .color{
                color: rgb(17, 85, 204) !important;
            }
            .table-1 {
                width: 100%;
                table-layout: fixed;
                border-collapse: collapse;
                page-break-inside: avoid;
            }
            li:before{
                content: none !important;
            }
            .big-table td{
                font-size: 8px !important;
                padding: 5px !important;
            }
            .big-table th{
                font-size: 10px !important;
                padding: 5px !important;
            }
            table{
                border: 1px solid  black !important;
                border-collapse: collapse !important;
                text-align: center !important;
            }
            table tr th{
                border: 1px solid  black;
                border-collapse: collapse !important;
                font-size: 12px;
            }
            table tr td{
                border: 1px solid  black;
                border-collapse: collapse !important;
                text-align: center !important;
                font-size: 10px;
            }
            ol {
                counter-reset: item
            }
            li {
                display: block
            }
            li:before {
                content: counters(item, ".") " ";
                counter-increment: item
            }
           .first-item{
                display: inline !important;
            }
            li{
                text-align: left;
            }
            ol{
                padding: 0;
            }
            li:before{
                font-weight: bolder;
                font-family: Roboto, sans-serif;
            }
            .full-row { page-break-inside:avoid; page-break-after:auto }
            .info-block{
                page-break-inside:avoid;
                page-break-after:auto;
                padding-top: 20px;
                box-sizing: border-box;
            }
            .info-block > tr {
                margin-top: 50px;
            }
            *{
                font-size: 12px !important;
                line-height: 1.6;
                font-family: Roboto, sans-serif;
                font-weight: 400;
                color: #303e67;
            }
            table td, table th{
              font-size: 16px;
            }
            .modal-footer {
              position: absolute;
              top: 100%;
            }
            .editor-input {
                text-align:center;
                border: none;
                border-bottom: 2px solid rgb(80, 110, 228);
                width: 50px;
                height: 20px;
                outline: none;
                margin: 0;
                -webkit-appearance: none;
                -moz-appearance: textfield;
            }
            @media only screen and (max-width: 550px) {
                table tbody tr th, table tbody tr td{
                  padding: 2px !important;
                  font-size: 8px !important;
                }
                td, th{
                    font-size: 8px !important;
                }
                table{
                    width:100% !important;
                    table-layout: fixed !important;
                    overflow-wrap: break-word !important;
                }
            }
            `,
            toolbar: '',
        }
        }
    },
  }
  