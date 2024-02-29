import { useState, useEffect } from 'react';

const useMyCustomHook = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch or compute data here, then call setData.
    }, []);

    return data;
}

export default useMyCustomHook;