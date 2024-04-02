import { Link } from 'react-router-dom';

import {  IconoAbrir } from '@components/icons.js';
import TermInnerRow from '@components/TermInnerRow.jsx';

const TermRow = ({ term, isExpanded,  home }) => {
	const printSortedDescriptors = (meanings) => {
		const sortedMean = meanings.sort((a, b) => a.descriptor.localeCompare(b.descriptor));
		return sortedMean.map((m, i) =>
			<TermInnerRow key={i} descriptor={m.descriptor} />
		);
	};
	return (
		<>
			<Link to={`/terms/${term._id}`}><tr>
				{home
					? (<td>{term.term}</td>)
					: (
						<td>
							<summary>
								<span className='dj-link'>{term.term}</span>
							</summary>
						</td>
					)}
				<td className='TablaTextoCentrado'>
					
						<img className='IconoAbrir' src={IconoAbrir} />
					
				</td>
			</tr>
			</Link>
			{isExpanded && printSortedDescriptors(term.meanings)}
		</>
	);
};

export default TermRow;
