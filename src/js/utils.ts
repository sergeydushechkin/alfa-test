interface ElapsedTime {
  daysElapsed: string;
  timeElapsed: string;
}

const makeTwo = (num: number): string => {
  let result: string;
  if (num < 10) {
    result = `0` + num;
  } else {
    result = num.toString();
  }
  return result;
};

const getTimeElapsed = (start: Date, current: Date): ElapsedTime => {
  const nd: Date = new Date(current.getTime() - start.getTime());
  const daysElapsed: string = Math.floor(nd.getTime() / 1000 / 60 / 60 / 24).toString();
  const hours: string = makeTwo(nd.getUTCHours());
  const minutes: string = makeTwo(nd.getMinutes());
  const seconds: string = makeTwo(nd.getSeconds());
  return {
    daysElapsed,
    timeElapsed: `${hours}:${minutes}:${seconds}`
  };
};

export {getTimeElapsed};
