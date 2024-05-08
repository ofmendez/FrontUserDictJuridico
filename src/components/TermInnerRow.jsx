import { Link } from 'react-router-dom';

const TermInnerRow = ({ descriptor, idTerm, idDesc }) => {
	return (
		<tr>
			<Link className='descriptor_row' to={`/terms/${idTerm}#${idDesc}`}>
				<td>
					•&nbsp; {descriptor}
				</td>
			</Link>
		</tr>
	);
};

export default TermInnerRow;
