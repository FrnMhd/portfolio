import Snowfall from "react-snowfall";

function isDecSnow() {
  const now = new Date();
  return now.getMonth() === 11 && now.getDate() >= 10;
}

export default function SnowFall() {

  if (!isDecSnow()) return null;

  return <Snowfall snowflakeCount={150} color="white" style={{ zIndex: 9999 }} />;
}
