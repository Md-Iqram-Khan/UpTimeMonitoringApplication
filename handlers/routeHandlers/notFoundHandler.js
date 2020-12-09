/*
 * Title: notFound Handler
 * Description:  404 notFound Handler
 * Author: Md. Iqram khan
 */
// module scraffholding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested url is not found",
  });
};

module.exports = handler;
