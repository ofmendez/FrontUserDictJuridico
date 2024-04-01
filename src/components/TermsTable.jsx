import TermRow from '@components/TermRow.jsx';
import '@styles/Loading.css';

const TermsTable = ({ tableClass, terms, showBy, rowsState, home, order }) => {
	const aviableOrders = {
		asc: (a, b) => a.term.localeCompare(b.term),
		desc: (a, b) => b.term.localeCompare(a.term)
	};
	const printSortedTerms = (terms, showBy, rowsState) => {
		const sortedTerms = terms.sort(aviableOrders[order]);

		const isExpanded = (id) => rowsState?.expandedRows.includes(id);
		return sortedTerms.map((term) =>
			<TermRow
				key={term._id} showBy={showBy} term={term} home={home}
				isExpanded={isExpanded(term._id)}
			/>
		);
	};
	return (
		<table className={tableClass}>
			<thead></thead>
			<tbody>
				{printSortedTerms(terms, showBy, rowsState)}
			</tbody>
		</table>
	);
};

export default TermsTable;
