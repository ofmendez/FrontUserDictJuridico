import { useEffect, useRef, useState } from 'react';
import { searchTerm } from '@src/hooks/SearchTerm';

const useSearchTerm = ({ q, subject, content, setLoadingTerm }) => {
	const [results, setResults] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);
	const previousQ = useRef({ q, subject, content });

	if (previousQ.current.q !== q || previousQ.current.subject !== subject || previousQ.current.content !== content) {
		setHasSearched(false);
		previousQ.current = { q, subject, content };
	}

	const handleDonePost = (d) => setResults(d.result);

	useEffect(() => {
		if (!hasSearched) {
			searchTerm({ loadingTerm: 'loading', setLoadingTerm, body: { q, subject, content }, handleDonePost });
			setHasSearched(true);
		}
	}, [q, hasSearched]);

	return results;
};

export default useSearchTerm;
