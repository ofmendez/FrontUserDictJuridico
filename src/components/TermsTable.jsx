import TermRow from '@components/TermRow.jsx';
import '@styles/Loading.css';

const TermsTable = ({ tableClass, terms, showBy, rowsState, home, order, avSubjects }) => {
	const aviableOrders = {
		asc: (a, b) => a.term.localeCompare(b.term, undefined, { numeric: true, sensitivity: 'base' }),
		desc: (a, b) => b.term.localeCompare(a.term, undefined, { numeric: true, sensitivity: 'base' })
	};
	const printSortedTerms = (terms, showBy, rowsState) => {
		const sortedTerms = terms.sort(aviableOrders[order]);
		const isExpanded = (id) => rowsState?.expandedRows.includes(id);
		return sortedTerms.map((term) =>
			<TermRow
				key={term._id} showBy={showBy} term={term} home={home}
				isExpanded={isExpanded(term._id)}
				onExpand={() => rowsState?.setExpandedRows([...rowsState.expandedRows, term._id])}
				onCollapse={() => rowsState?.setExpandedRows(rowsState?.expandedRows.filter((id) => id !== term._id))}
				avSubjects={avSubjects}
			/>
		);
	};
	return (
		<table className={tableClass}>
			<thead />
			<tbody>
				{printSortedTerms(terms, showBy, rowsState)}
			</tbody>
		</table>
	);
};

export default TermsTable;
