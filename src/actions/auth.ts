import { headers } from "next/headers";

export function getServerSession() {
  return fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/user", {
    headers: headers(),
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
      return {};
    });
}
