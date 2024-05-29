import { Link } from 'react-router-dom';
import { IconoAbrir } from '@components/icons.js';
import TermInnerRow from '@components/TermInnerRow.jsx';
import React from 'react';

const TermRow = ({ term, isExpanded, onExpand, onCollapse, home, avSubjects }) => {
	const clicled = (e) => {
		if (e.target.hasAttribute('open'))
			onExpand();
		else
			onCollapse();
	};
	const printSortedDescriptors = (meanings, idTerm) => {
		let result = [];
		const subjectOrder = ['Norma', 'Jurisprudencia', 'Doctrina'];
		for (let i = 0; i < subjectOrder.length; i++) {
			const sortedMean = meanings.filter((m) => m.subject === subjectOrder[i]).sort((a, b) => {
				if (a.year === b.year)
					return a.descriptor.localeCompare(b.descriptor, undefined, { numeric: true, sensitivity: 'base' });
				return b.year - a.year;
			});
			result = result.concat(printMeanings(sortedMean, i, idTerm));
		}
		return result;
	};
	function printMeanings (sortedMean, index, idTerm) {
		return sortedMean.map((m, _) => {
			if (!m._id)
				console.warn('DAÑADO!!!!!!');
			if (avSubjects && avSubjects[m.subject])
				return (
					<TermInnerRow
						key={`${m._id}`}
						idTerm={idTerm}
						meaning={m}
					/>
				);
			else
				return <React.Fragment key={`${m._id}`} />;
		});
	}
	return (
		<>
			<tr>
				{home
					? (<td>{term.term}</td>)
					: (
						<td>
							<details onToggle={clicled} {...(isExpanded ? { open: true } : {})}>
								<summary>
									<span className='dj-link'>{term.term}</span>
								</summary>
							</details>
						</td>
					)}
				<td className='TablaTextoCentrado'>
					<div className='TablaContenidoAcciones'>
						<Link to={`/terms/${term._id}`}>
							<img className='IconosTabla' src={IconoAbrir} />
						</Link>
					</div>
				</td>
			</tr>
			{isExpanded && printSortedDescriptors(term.meanings, term._id)}
		</>
	);
};

export default TermRow;
