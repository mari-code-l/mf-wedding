// Utility functions extracted from countdown.js for testing

/**
 * Formats a Date object into padded date and time components
 * @param {Date} dateTime - The date to format
 * @returns {Object} Object containing formatted date/time components
 */
function formatDateComponents(dateTime) {
  const yyyy = dateTime.getFullYear();
  const mm = String(dateTime.getMonth() + 1).padStart(2, "0");
  const dd = String(dateTime.getDate()).padStart(2, "0");
  const hour = String(dateTime.getHours()).padStart(2, "0");
  const min = String(dateTime.getMinutes()).padStart(2, "0");
  const sec = String(dateTime.getSeconds()).padStart(2, "0");

  return {
    year: yyyy,
    month: mm,
    day: dd,
    hour: hour,
    minute: min,
    second: sec,
    endDate: yyyy + "-" + mm + "-" + dd,
    endTime: hour + ":" + min + ":" + sec
  };
}

module.exports = { formatDateComponents };