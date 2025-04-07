import { useState } from "react";
import { faqData } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState();

  function handleToggle(selectedIndex, event) {
    event.preventDefault();

    setOpenIndex((prevState) =>
      prevState === selectedIndex ? -5 : selectedIndex
    );
  }
  return (
    <>
      {faqData.map((faqItem, index) => {
        return (
          <details
            open={index === openIndex}
            key={index}
            onClick={(event) => handleToggle(index, event)}
          >
            <summary>{faqItem.question}</summary>
            <p>{faqItem.answer}</p>
          </details>
        );
      })}
    </>
  );
}
