"use client";

import { RevalidateURL } from "@/actions/RevalidateTag";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function DeleteBtn({ id }: { id: number | string }) {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function remove() {
    setPending(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/address/" + id, {
        method: "DELETE",
        credentials: "include",
      }).catch((err) => console.log(err.message));

      console.log("Address deleted successfully");
      router.refresh();
      toast.success("Address removed");
    } catch (error: any) {
      console.error("Error deleting address:", error.message);
      toast.error("Error deleting address");
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      disabled={pending}
      className="text-red-600 disabled:opacity-40"
      onClick={remove}
    >
      Delete
    </button>
  );
}
