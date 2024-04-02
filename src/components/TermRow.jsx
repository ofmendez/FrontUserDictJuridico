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
			<tr>
				{home
					? (<td>{term.term}</td>)
					: (
						<td>
							<summary>
								<Link to={`/terms/${term._id}`}>
									<span className='dj-link EnlaceTerminosTabla'>{term.term}</span>
								</Link>
							</summary>
						</td>
					)}
				<td className='TablaTextoCentrado'>
					<Link to={`/terms/${term._id}`}>
						<img className='IconoAbrir' src={IconoAbrir} />
					</Link>
				</td>
			</tr>
			{isExpanded && printSortedDescriptors(term.meanings)}
		</>
	);
};

export default TermRow;
