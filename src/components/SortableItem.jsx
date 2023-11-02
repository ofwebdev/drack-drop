import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
  const [checkboxData, setCheckboxData] = useState([]);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.id,
    });

  const baseStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getItemStyles = props.getItemStyles || {}; // Custom item styles
  const getWrapperStyles = props.getWrapperStyles || {}; // Custom wrapper styles

  useEffect(() => {
    localStorage.setItem("checkboxData", JSON.stringify(checkboxData));
    // if (checkboxData) {
    //   setCheckboxData(checkboxData);
    // }
  }, [checkboxData]);

  const toggleCheck = () => {
    console.log(setCheckboxData(props.id));
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...baseStyle,
        ...getItemStyles, // Apply item-specific styles
        ...getWrapperStyles, // Apply wrapper-specific styles
      }}
      {...attributes}
      {...listeners}
    >
      <div>
        <p>{props.content}</p>
        <label>
          <input type="checkbox" onClick={toggleCheck} />
        </label>
      </div>
    </div>
  );
}
