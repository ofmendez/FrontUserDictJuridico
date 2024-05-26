import { Link } from 'react-router-dom';

const TermInnerRow = ({ idTerm, meaning }) => {
	return (
		<tr>
			<td>
				<Link className='descriptor_row' to={`/terms/${idTerm}#${meaning._id}`}>
					•&nbsp; {meaning.descriptor} - <span className='snippet'> {meaning.subject} {meaning.year}</span>
				</Link>
			</td>
		</tr>
	);
};

export default TermInnerRow;
