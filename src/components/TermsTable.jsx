import TermRow from '@components/TermRow.jsx';
import '@styles/Loading.css';

const TermsTable = ({ tableClass, terms, showBy, rowsState, home }) => {
	const printSortedTerms = (terms, showBy, rowsState) => {
		const sortedTerms = terms.sort((a, b) => a.term.localeCompare(b.term));
		const isExpanded = (id) => rowsState?.expandedRows.includes(id);
		return sortedTerms.map((term) =>
			<TermRow
				key={term._id} showBy={showBy} term={term} home={home}
				isExpanded={isExpanded(term._id)}
				// eslint-disable-next-line no-unsafe-optional-chaining
				onExpand={() => rowsState?.setExpandedRows([...rowsState?.expandedRows, term._id])}
				onCollapse={() => rowsState?.setExpandedRows(rowsState?.expandedRows.filter((id) => id !== term._id))}
			/>
		);
	};
	return (
		<table className={tableClass}>
			<thead>
				<tr className='TablaSeparadorTitulos'>
					<th>Término</th>
					<th>Publicación</th>
					<th>Modificación</th>
					{showBy && <th>Creado por</th>}
					{showBy && <th>Modificado por</th>}
					<th className='TablaTextoCentrado'>Acción</th>
				</tr>
			</thead>
			<tbody>
				{printSortedTerms(terms, showBy, rowsState)}
			</tbody>
		</table>
	);
};

export default TermsTable;
