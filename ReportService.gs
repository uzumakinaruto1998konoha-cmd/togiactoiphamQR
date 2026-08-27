function submitCitizenReport(data) {

  validateCitizenSubmission_(data);


  const report =
    createReport(
      {
        RECEIVED_CHANNEL: 'QR',

        QR_SOURCE_ID:
          data.QR_SOURCE_ID || '',

        SOURCE_TYPE:
          data.SOURCE_TYPE,

        CITIZEN_NAME:
          data.CITIZEN_NAME,

        CITIZEN_PHONE:
          data.CITIZEN_PHONE,

        CITIZEN_EMAIL:
          data.CITIZEN_EMAIL,

        CITIZEN_ADDRESS:
          data.CITIZEN_ADDRESS,

        CONFIDENTIALITY_REQUEST:
          data.CONFIDENTIALITY_REQUEST === true,

        INCIDENT_DATE:
          data.INCIDENT_DATE,

        INCIDENT_TIME:
          data.INCIDENT_TIME,

        INCIDENT_LOCATION:
          data.INCIDENT_LOCATION,

        DESCRIPTION:
          data.DESCRIPTION,

        INITIAL_CATEGORY_ID:
          '',

        PRIORITY:
          'P3_NORMAL'

      },

      'PUBLIC'
    );


  /*
   * Chỉ lưu file sau khi REPORT
   * được tạo thành công.
   */

  if (
    data.ATTACHMENTS &&
    data.ATTACHMENTS.length
  ) {

    data.ATTACHMENTS.forEach(
      function(file) {

        saveReportFile_(
          report.REPORT_ID,
          report.CASE_CODE,
          file,
          'PUBLIC'
        );

      }
    );

  }


  return {

    REPORT_ID:
      report.REPORT_ID,

    CASE_CODE:
      report.CASE_CODE,

    RECEIVED_AT:
      report.RECEIVED_AT,

    STATUS:
      'NEW'

  };

}
