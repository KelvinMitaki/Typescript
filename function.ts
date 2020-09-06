const add = (a: number, b: number): number => {
  return a + b;
};

function multiply(a: number, b: number): number {
  return a * b;
}

const divide = function (a: number, b: number): number {
  return a / b;
};

const message = (msg: string): void => {
  console.log(msg);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log({ date });
  console.log({ weather });
};
logWeather(todaysWeather);
