const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

function countHours(year, holidays) {
  return (
    holidays.filter((holiday) => {
      const day = new Date(`${year}/${holiday}Z`).getDay();
      if (day !== 0 && day !== 6) {
        return holiday;
      }
    }).length * 2
  );
}

console.log(countHours(year, holidays));
