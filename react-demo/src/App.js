import { useState, useTransition, useMemo } from "react";

const numbers = [...new Array(2000).keys()];

export default function App() {
    const [query, setQuery] = useState("");
    const [isPending, startTransition] = useTransition();

    debugger
    const handleChange = (e) => {
      startTransition(() => {
          setQuery(e.target.value);
      });
    };

    const list = useMemo(() => (
        numbers.map((i, index) => (
            query
                ? i.toString().startsWith(query)
                && <p key={index}>{i}</p>
                : <p key={index}>{i}</p>
        ))
    ), [query]);

    return (
        <div>
            <input type="number" onChange={handleChange} />
            <div>
                {
                    isPending
                        ? "Loading..."
                        : list
                }
            </div>
        </div>
    );
}

