import CircularProgressBar from "circular-progress-bar";

// const options = {
//   size: 200,
//   background: "transparent"
// };
// const progress = new CircularProgressBar(42, options);
// progress.appendTo(document.body);
const gauge = new CircularProgressBar();
gauge.value = 20; // Change value to 20%
// or
gauge.values = [10, 20, 30]; // Change values to 10%, 20% and 30% (multiple bars)

console.log(gauge.values);
function Timer() {
  return (
    <div>
      {gauge.values}
    </div>
  )
}

export default Timer