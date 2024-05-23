import { Link } from 'react-router-dom';

const TermInnerRow = ({ descriptor, idTerm, idDesc }) => {
	return (
		<tr>
			<td>
				<Link className='descriptor_row' to={`/terms/${idTerm}#${idDesc}`}>
					•&nbsp; {descriptor}
				</Link>
			</td>
		</tr>
	);
};

export default TermInnerRow;
