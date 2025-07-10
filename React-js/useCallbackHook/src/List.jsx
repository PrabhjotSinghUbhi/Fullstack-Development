import { React, useEffect } from "react";
import { memo } from "react";

function List({ getValues }) {
  useEffect(() => {
    getValues();
  }, [getValues]);

  return (
    <div>
      <div>
        {getValues().map((element) => (
          <div key={element}>{element}</div>
        ))}
      </div>
    </div>
  );
}

export default memo(List);
