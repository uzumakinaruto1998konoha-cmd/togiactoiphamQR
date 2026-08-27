function doGet(e) {

  const page =
    e &&
    e.parameter &&
    e.parameter.page
      ? e.parameter.page
      : 'index';

  const allowedPages = [
    'index',
    'citizen',
    'tracking',
    'officer',
    'dashboard'
  ];

  if (
    allowedPages.indexOf(page) === -1
  ) {
    return HtmlService
      .createHtmlOutput(
        '<h2>Trang không tồn tại</h2>'
      );
  }

  return HtmlService
    .createTemplateFromFile(page)
    .evaluate()
    .setTitle(
      'Hòm thư tố giác tội phạm số - Công an xã Đức Hợp'
    )
    .setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );

}


function include(filename) {

  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();

}
