import { useState } from "react";

const addLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);

    return (
      <div>
        {loading ? <p>loading ...</p> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default addLoader;
