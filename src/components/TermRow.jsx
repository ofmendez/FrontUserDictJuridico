import { Link } from 'react-router-dom';

import { IconoEditar, IconoVer } from '@components/icons.js';
import TermInnerRow from '@components/TermInnerRow.jsx';

const TermRow = ({ term, showBy, isExpanded, onExpand, onCollapse, home }) => {
	const clicled = (e) => {
		if (e.target.hasAttribute('open'))
			onExpand();
		else
			onCollapse();
	};
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
							<details onToggle={clicled} {...(isExpanded ? { open: true } : {})}>
								<summary>
									<span className='dj-link'>{term.term}</span>
								</summary>
							</details>
						</td>
					)}
				<td>{new Date(term.created_at).toLocaleDateString('en-US')}</td>
				<td>{new Date(term.updated_at).toLocaleDateString('en-US')}</td>
				{showBy && <td>{term.created_by}</td>}
				{showBy && <td>{term.updated_by}</td>}
				<td className='TablaTextoCentrado'>
					<Link to={`/terms/${term._id}`}>
						<img className='IconosTabla' src={IconoVer} />
					</Link>
					<Link to={`/terms/edit/${term._id}`}>
						<img className='IconosTabla' src={IconoEditar} />
					</Link>
				</td>
			</tr>
			{isExpanded && printSortedDescriptors(term.meanings)}
		</>
	);
};

export default TermRow;
