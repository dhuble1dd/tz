import { Strings } from "../appTheme/strings";


export const fetchData = async () => {
  const url = Strings.url

  const res = await fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  if (res.ok) {
    return res.json();
  }
}
