/*
 * Title: sample Handler
 * Description: sample Handler
 * Author: Md. Iqram khan
 */
// module scraffholding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
