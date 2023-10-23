import React, { useRef } from "react";

const MyComponent = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleKeyPress = (event, ref) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (ref.current) {
        ref.current.focus();
      }
    }
  };

  const handleThirdInputKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Hello world");
    }
  };

  return (
    <div>
      <input
        ref={input1Ref}
        onKeyPress={(e) => handleKeyPress(e, input2Ref)}
      />
      <input
        ref={input2Ref}
        onKeyPress={(e) => handleKeyPress(e, input3Ref)}
      />
      <input
      placeholder="'asdfasfas"
        ref={input3Ref}
        onKeyPress={handleThirdInputKeyPress}
      />
    </div>
  );
};

export default MyComponent;