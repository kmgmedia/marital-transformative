"use client";

import { useState } from "react";

export default function FaqAccordion({ groups }) {
  const [openKey, setOpenKey] = useState(null);

  return (
    <>
      {groups.map((group, groupIdx) => (
        <div className="faq-group" data-animate="" key={group.title}>
          <div className="faq-group-title">{group.title}</div>
          {group.items.map((item, itemIdx) => {
            const key = `${groupIdx}-${itemIdx}`;
            const isOpen = openKey === key;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={key}>
                <button
                  type="button"
                  className="faq-btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpenKey(isOpen ? null : key)}
                >
                  <span className="faq-btn__q">{item.q}</span>
                  <span className="faq-btn__icon">+</span>
                </button>
                <div className="faq-answer">
                  {item.html ? (
                    <div className="faq-answer__inner" dangerouslySetInnerHTML={{ __html: item.a }} />
                  ) : (
                    <div className="faq-answer__inner">{item.a}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
