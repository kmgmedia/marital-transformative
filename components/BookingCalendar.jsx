"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function BookingCalendar({ onSelectDate }) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    function onPointerDown(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();

  function goPrev() {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }
  function goNext() {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }

  function selectDay(day) {
    const date = new Date(viewYear, viewMonth, day);
    setSelectedDate(date);
    onSelectDate?.(date.toISOString().split("T")[0], date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" }));
    setOpen(false);
  }

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const label = selectedDate
    ? selectedDate.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" })
    : "Select a date";

  return (
    <div className="date-picker" ref={wrapperRef}>
      <button
        type="button"
        className={`date-picker__trigger${selectedDate ? " has-value" : ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg className="date-picker__icon" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 9h18M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="date-picker__label">{label}</span>
        <svg className={`date-picker__chevron${open ? " open" : ""}`} viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="date-picker__popover" role="dialog" aria-label="Choose a date">
          <div className="cal-picker__header">
            <button type="button" className="cal-picker__nav" aria-label="Previous month" onClick={goPrev} disabled={isCurrentMonth}>
              &#8249;
            </button>
            <span className="cal-picker__month-label">{MONTHS[viewMonth]} {viewYear}</span>
            <button type="button" className="cal-picker__nav" aria-label="Next month" onClick={goNext}>
              &#8250;
            </button>
          </div>
          <div className="cal-picker__days-header">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          <div className="cal-picker__grid">
            {cells.map((day, i) => {
              if (day === null) return <div className="cal-day empty" key={`empty-${i}`}></div>;
              const date = new Date(viewYear, viewMonth, day);
              const isPast = date < today;
              const isToday = date.getTime() === today.getTime();
              const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
              return (
                <button
                  type="button"
                  key={day}
                  className={`cal-day${isToday ? " today" : ""}${isSelected ? " selected" : ""}`}
                  disabled={isPast}
                  onClick={() => selectDay(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
