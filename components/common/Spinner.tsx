import {RingLoader} from "react-spinners";
import {CSSProperties} from "react";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "darkviolet",
};

export default function Spinner({size = 150}) {
  return (
    <div role='status'>
      <RingLoader
        color='#690064'
        loading={true}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}