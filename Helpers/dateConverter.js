export const dateConverter = (date) => {
  const appointmentDate = new Date(date);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = appointmentDate.toLocaleDateString("en-IN", options);
  return formattedDate;
};
