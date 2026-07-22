"use client";

import { useState } from "react";

const SLOTS = [
  { label: "9:00 AM", time: "9:00 AM – 10:00 AM" },
  { label: "10:00 AM", time: "10:00 AM – 11:00 AM" },
  { label: "11:00 AM", time: "11:00 AM – 12:00 PM" },
  { label: "12:00 PM", time: "12:00 PM – 1:00 PM" },
  { label: "2:00 PM", time: "2:00 PM – 3:00 PM" },
  { label: "3:00 PM", time: "3:00 PM – 4:00 PM" },
  { label: "4:00 PM", time: "4:00 PM – 5:00 PM" }
];

export default function TimeSlotPicker({ onSelectTime }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="time-slot-grid" id="timeSlotGrid">
      {SLOTS.map((slot) => (
        <button
          type="button"
          key={slot.time}
          className={`time-slot${selected === slot.time ? " selected" : ""}`}
          onClick={() => {
            setSelected(slot.time);
            onSelectTime?.(slot.time);
          }}
        >
          {slot.label}
        </button>
      ))}
    </div>
  );
}
