export async function mp3DurationString(
  durationInSeconds: number | undefined = 0
) {
  let ceiled = Math.ceil(durationInSeconds);
  const minutes = Math.floor(ceiled / 60);
  ceiled -= minutes / 60;
  const seconds = ceiled % 60;

  return `${minutes}:${seconds}`;
}
