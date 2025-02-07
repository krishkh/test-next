"use client";
// import VantaBackground from "@/components/VantaBackground";
import { useEffect } from "react";

export default function Home() {
  const apiUrl = "flaskbackend-production.up.railway.app";
  useEffect(() => {
    fetch(`https://${apiUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* <VantaBackground /> */}
      <h1 className="text-white text-3xl font-bold z-10"></h1>
    </div>
  );
}
